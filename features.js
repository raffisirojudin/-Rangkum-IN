// RangkumIN — features.js
// Fitur: Statistik Pembaca + Sort & Filter

// ─── SORT STATE ───────────────────────────────────────────────────────────────
var currentSort = 'default';

function handleSort() {
  currentSort = document.getElementById('sortSelect').value;
  renderBooks();
}

function getSortedBooks() {
  var books = getFilteredBooks();
  var bm = getBookmarks();
  var sorted = books.slice();

  if (currentSort === 'shortest') {
    sorted.sort(function(a, b) { return a.readingTimeMinutes - b.readingTimeMinutes; });
  } else if (currentSort === 'longest') {
    sorted.sort(function(a, b) { return b.readingTimeMinutes - a.readingTimeMinutes; });
  } else if (currentSort === 'bookmarked') {
    sorted.sort(function(a, b) {
      return (bm.includes(a.bookId) ? 0 : 1) - (bm.includes(b.bookId) ? 0 : 1);
    });
  } else if (currentSort === 'az') {
    sorted.sort(function(a, b) { return a.title.localeCompare(b.title); });
  } else if (currentSort === 'za') {
    sorted.sort(function(a, b) { return b.title.localeCompare(a.title); });
  }
  return sorted;
}

// Override renderBooks untuk inject sort
function renderBooks() {
  var grid = document.getElementById('bookGrid');
  var empty = document.getElementById('emptyState');
  var info = document.getElementById('resultsInfo');
  var filtered = getFilteredBooks();
  var sorted = getSortedBooks();

  info.textContent = (searchQuery || currentCategory !== 'Semua')
    ? (filtered.length + ' buku ditemukan')
    : (BOOKS.length + ' buku tersedia');

  if (!sorted.length) { grid.innerHTML = ''; empty.style.display = ''; return; }
  empty.style.display = 'none';
  grid.innerHTML = sorted.map(function(b, i) { return buildCard(b, i); }).join('');
  updateBookmarkCount();
}

// ─── READ TRACKING ────────────────────────────────────────────────────────────
function getReadBooks() {
  return JSON.parse(localStorage.getItem('rangkumin_read') || '[]');
}

function markAsRead(bookId) {
  var read = getReadBooks();
  if (!read.includes(bookId)) {
    read.push(bookId);
    localStorage.setItem('rangkumin_read', JSON.stringify(read));
  }
}

// ─── STATS VIEW ───────────────────────────────────────────────────────────────
function showStats() {
  document.getElementById('homeView').style.display = 'none';
  document.getElementById('detailView').style.display = 'none';
  document.getElementById('bookmarkView').style.display = 'none';
  document.getElementById('statsView').style.display = '';
  document.getElementById('mainFooter').style.display = '';
  window.scrollTo({ top: 0 });
  renderStats();
}

function renderStats() {
  var bm = getBookmarks();
  var read = getReadBooks();

  var totalActions = 0;
  var totalPossible = 0;
  var actionsPerBook = {};

  BOOKS.forEach(function(book) {
    var state = getActionState(book.bookId);
    var done = book.actionableSteps.filter(function(s) { return state[s.stepId]; }).length;
    var total = book.actionableSteps.length;
    totalActions += done;
    totalPossible += total;
    actionsPerBook[book.bookId] = { done: done, total: total };
  });

  var totalMinutes = 0;
  read.forEach(function(id) {
    var book = BOOKS.find(function(b) { return b.bookId === id; });
    if (book) totalMinutes += book.readingTimeMinutes;
  });

  document.getElementById('statBooksRead').textContent = read.length;
  document.getElementById('statBooksReadSub').textContent = 'dari ' + BOOKS.length + ' buku tersedia';
  document.getElementById('statActionsTotal').textContent = totalActions;
  document.getElementById('statActionsSub').textContent = 'dari ' + totalPossible + ' total aksi';
  document.getElementById('statMinutes').textContent = totalMinutes;
  document.getElementById('statBookmarks').textContent = bm.length;

  renderCategoryBars(read);
  renderReadBooksGrid(read);
  renderActionsProgress(actionsPerBook);
}

function renderCategoryBars(readIds) {
  var container = document.getElementById('categoryBars');
  var catCount = {};
  var catTotal = {};

  BOOKS.forEach(function(book) {
    if (!catTotal[book.category]) catTotal[book.category] = 0;
    catTotal[book.category]++;
    if (readIds.includes(book.bookId)) {
      if (!catCount[book.category]) catCount[book.category] = 0;
      catCount[book.category]++;
    }
  });

  var cats = Object.keys(catTotal).sort(function(a, b) {
    return (catCount[b] || 0) - (catCount[a] || 0);
  });

  var catEmoji = {
    'Keuangan': '💰', 'Psikologi': '🧠', 'Produktivitas': '⚡',
    'Filsafat': '🔭', 'Bisnis': '📈', 'Sains': '🔬',
    'Sejarah': '📜', 'Kesehatan': '🧘'
  };

  if (!cats.length) {
    container.innerHTML = '<p style="color:var(--ink-muted);font-size:0.9rem;">Belum ada data.</p>';
    return;
  }

  container.innerHTML = cats.map(function(cat) {
    var done = catCount[cat] || 0;
    var total = catTotal[cat];
    var pct = Math.round((done / total) * 100);
    return '<div class="cat-bar-item">' +
      '<div class="cat-bar-header">' +
        '<span class="cat-bar-name">' + (catEmoji[cat] || '') + ' ' + cat + '</span>' +
        '<span class="cat-bar-count">' + done + ' / ' + total + ' buku</span>' +
      '</div>' +
      '<div class="cat-bar-track">' +
        '<div class="cat-bar-fill" style="width:' + pct + '%"></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderReadBooksGrid(readIds) {
  var grid = document.getElementById('readBooksGrid');
  var empty = document.getElementById('readBooksEmpty');

  if (!readIds.length) {
    grid.innerHTML = '';
    empty.style.display = '';
    return;
  }
  empty.style.display = 'none';
  var readBooks = BOOKS.filter(function(b) { return readIds.includes(b.bookId); });
  grid.innerHTML = readBooks.map(function(b, i) { return buildCard(b, i); }).join('');
}

function renderActionsProgress(actionsPerBook) {
  var container = document.getElementById('actionsProgressList');

  var booksWithProgress = BOOKS.filter(function(book) {
    return actionsPerBook[book.bookId] && actionsPerBook[book.bookId].done > 0;
  }).sort(function(a, b) {
    var pa = actionsPerBook[a.bookId].done / actionsPerBook[a.bookId].total;
    var pb = actionsPerBook[b.bookId].done / actionsPerBook[b.bookId].total;
    return pb - pa;
  });

  if (!booksWithProgress.length) {
    container.innerHTML = '<p style="color:var(--ink-muted);font-size:0.9rem;padding:20px 0;">Belum ada aksi yang diselesaikan. Buka buku dan centang aksi-aksinya!</p>';
    return;
  }

  container.innerHTML = booksWithProgress.map(function(book) {
    var ap = actionsPerBook[book.bookId];
    var pct = Math.round((ap.done / ap.total) * 100);
    var isComplete = ap.done === ap.total;
    return '<div class="action-progress-item" onclick="showDetail(\'' + book.bookId + '\')">' +
      '<div class="action-progress-cover" style="' + book.coverStyle + 'position:relative;overflow:hidden;">' +
        book.coverHTML +
      '</div>' +
      '<div class="action-progress-info">' +
        '<div class="action-progress-title">' + book.title + '</div>' +
        '<div class="action-progress-author">' + book.author + '</div>' +
        '<div class="action-progress-bar-wrap">' +
          '<div class="action-progress-bar-track">' +
            '<div class="action-progress-bar-fill ' + (isComplete ? 'complete' : '') + '" style="width:' + pct + '%"></div>' +
          '</div>' +
          '<span class="action-progress-pct">' + ap.done + '/' + ap.total + (isComplete ? ' 🏆' : '') + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

// ─── SEMUA PATCH DALAM SATU DOMContentLoaded ─────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {

  // Patch showHome: sembunyikan statsView, lalu jalankan logika asli
  var _baseShowHome = window.showHome;
  window.showHome = function() {
    var sv = document.getElementById('statsView');
    if (sv) sv.style.display = 'none';
    if (_baseShowHome) _baseShowHome();
  };

  // Patch showDetail: catat buku yang dibuka
  var _baseShowDetail = window.showDetail;
  window.showDetail = function(bookId) {
    markAsRead(bookId);
    if (_baseShowDetail) _baseShowDetail(bookId);
  };

  // Init sort select
  var sel = document.getElementById('sortSelect');
  if (sel) sel.value = currentSort;

});
