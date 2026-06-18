// RangkumIN — app.js

const BOOKS = [
  {
    bookId: "B001",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Keuangan",
    readingTimeMinutes: 18,
    coverStyle:
      "background:linear-gradient(160deg,#1a1a2e 0%,#16213e 40%,#0f3460 70%,#533483 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">💰</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#f0c040;line-height:1.3;">The Psychology of Money</div><div style="width:36px;height:2px;background:#f0c040;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Morgan Housel</div></div>',
    tags: ["investasi", "mindset", "kekayaan", "perilaku"],
    bigIdea:
      "Mengelola uang dengan baik tidak selalu tentang apa yang Anda ketahui, tetapi tentang bagaimana Anda berperilaku saat menghadapi tekanan, ketidakpastian, dan godaan.",
    analogy: {
      title: "Mengelola Uang adalah Mengemudi di Jalan Berkabut",
      content:
        "Bayangkan keuangan seperti perjalanan mengemudi di malam hari dengan kabut tebal. Anda tahu tujuan Anda—pensiun tenang—tapi visibilitas Anda hanya sejauh 20 meter ke depan. Banyak orang menunggu kabut hilang sebelum mulai berkendara.\n\nIni berbeda dari ujian matematika di ruangan ber-AC. Keuangan nyata penuh emosi: ketakutan saat pasar jatuh, euforia saat aset naik, iri saat tetangga membeli mobil baru.\n\nSolusinya: investasi otomatis, margin aman yang besar, dan definisi cukup yang personal.",
    },
    chapters: [
      {
        num: 1,
        title: "No One\'s Crazy",
        summary:
          "Setiap orang membuat keputusan keuangan berdasarkan pengalaman hidup yang unik. Seseorang yang lahir di era Depresi Besar memandang risiko sangat berbeda dari generasi yang tumbuh di era kemakmuran. Tidak ada yang benar-benar irasional—mereka hanya bermain dengan aturan yang berbeda.",
      },
      {
        num: 2,
        title: "Luck and Risk",
        summary:
          "Keberuntungan dan risiko adalah dua sisi koin yang sama. Bill Gates beruntung bisa bersekolah di salah satu dari segelintir SMA di AS yang punya komputer tahun 1968. Sahabatnya Kent Evans meninggal dalam kecelakaan mendaki gunung sebelum sempat ikut membangun Microsoft. Nasib baik dan buruk bisa terjadi pada siapa pun.",
      },
      {
        num: 3,
        title: "Never Enough",
        summary:
          "Salah satu penyakit keuangan paling berbahaya adalah tidak pernah merasa cukup. Rakus mendorong orang mengambil risiko yang tidak perlu. Rajat Gupta dan Bernie Madoff—dua orang dengan kekayaan luar biasa—hancur karena tidak bisa mendefinisikan cukup. Titik referensi kita selalu bergerak ke atas, dan itu adalah jebakan mental yang perlu disadari.",
      },
      {
        num: 4,
        title: "Confounding Compounding",
        summary:
          "Warren Buffett memiliki sekitar 84,5 miliar dolar kekayaan, dan hampir semuanya terakumulasi setelah usianya 50 tahun. Rahasia terbesarnya bukan kecerdasan investasinya, melainkan fakta bahwa ia sudah berinvestasi sejak usia 10 tahun dan tidak pernah berhenti. Waktu adalah variabel paling kritis.",
      },
      {
        num: 5,
        title: "Getting Wealthy vs. Staying Wealthy",
        summary:
          "Mendapatkan kekayaan dan mempertahankan kekayaan membutuhkan keterampilan yang sangat berbeda. Mendapatkan kekayaan butuh optimisme dan risiko. Mempertahankan kekayaan butuh kerendahan hati dan kesadaran bahwa sebagian kekayaan adalah hasil keberuntungan yang bisa berubah kapan saja.",
      },
      {
        num: 6,
        title: "Tails, You Win",
        summary:
          "Di dunia investasi, kemenangan besar sangat terkonsentrasi di satu atau dua kejadian besar. Satu atau dua keputusan investasi dari ratusan yang dilakukan Warren Buffett menghasilkan sebagian besar kekayaannya. Anda tidak perlu benar setiap saat—Anda perlu tidak salah fatal dan tetap bertahan.",
      },
      {
        num: 7,
        title: "Freedom",
        summary:
          "Nilai tertinggi dari uang bukanlah barang mewah, melainkan kendali atas waktu Anda sendiri. Kemampuan untuk bangun di pagi hari dan memutuskan sendiri apa yang akan Anda lakukan adalah salah satu kebahagiaan yang paling konsisten dikaitkan dengan kesejahteraan manusia.",
      },
      {
        num: 8,
        title: "Man in the Car Paradox",
        summary:
          "Ketika Anda melihat seseorang mengendarai Lamborghini, Anda tidak berpikir tentang betapa kerennya orang itu—Anda membayangkan diri Anda sendiri di balik kemudi. Kita membeli barang mahal untuk mendapat rasa hormat orang lain, padahal orang lain tidak terlalu memperhatikan kita.",
      },
      {
        num: 9,
        title: "Wealth is What You Don\'t See",
        summary:
          "Kekayaan sejati adalah aset finansial yang belum dikonversi menjadi barang. Mobil mewah dan jam tangan mahal bukanlah kekayaan—itu adalah bukti bahwa kekayaan telah dihabiskan. Orang yang tampak kaya mungkin jauh lebih banyak berhutang dari yang terlihat.",
      },
      {
        num: 10,
        title: "Save Money",
        summary:
          "Menabung tidak memerlukan alasan spesifik. Nilai utama tabungan adalah fleksibilitas—kemampuan untuk merespons peluang atau krisis yang tidak terduga. Tabungan memberikan pilihan dan kebebasan yang jauh melampaui objek fisik apapun yang bisa dibeli.",
      },
      {
        num: 11,
        title: "Reasonable Over Rational",
        summary:
          "Strategi keuangan yang masuk akal lebih baik dari yang sepenuhnya rasional jika yang rasional terlalu sulit dijalankan secara konsisten jangka panjang. Jika strategi membuat Anda tetap berinvestasi tanpa panik saat pasar jatuh, manfaatnya sangat nyata dalam praktik.",
      },
      {
        num: 12,
        title: "Surprise!",
        summary:
          "Kesalahan terbesar dalam perencanaan keuangan adalah menggunakan masa lalu sebagai peta untuk masa depan. Sejarah ekonomi penuh dengan kejutan yang tidak bisa diprediksi. Pandemi, krisis finansial 2008, kejatuhan Soviet—semua ini adalah tail events yang merombak segalanya.",
      },
      {
        num: 13,
        title: "Room for Error",
        summary:
          "Perbedaan antara investor yang bertahan dan yang tidak bukanlah kecerdasan, melainkan margin of safety—ruang untuk salah. Rencanakan dengan asumsi bahwa Anda pasti akan salah di suatu titik, dan pastikan kesalahan itu tidak menghancurkan Anda secara permanen.",
      },
      {
        num: 14,
        title: "You\'ll Change",
        summary:
          "Tujuan dan prioritas hidup Anda akan berubah secara signifikan seiring waktu. Ini adalah end of history illusion: kita mudah melihat betapa banyak kita berubah di masa lalu, namun gagal mengantisipasi perubahan di masa depan. Rencanakan keuangan dengan mempertimbangkan fleksibilitas ini.",
      },
      {
        num: 15,
        title: "Nothing\'s Free",
        summary:
          "Setiap return investasi yang baik memiliki harganya dalam bentuk volatilitas dan kecemasan. Investor yang mencoba menghindari volatilitas pasar sama seperti pengunjung theme park yang ingin menikmati semua wahana tanpa mengantri—tidak ada cara untuk mendapatkannya gratis.",
      },
      {
        num: 16,
        title: "You and Me",
        summary:
          "Pasar saham dihuni oleh berbagai tipe investor dengan horison waktu yang sangat berbeda. Harga saham pada suatu hari mencerminkan konsensus semua kelompok ini sekaligus. Saat Anda mengikuti saran seorang day-trader, Anda mungkin mengadopsi pandangan yang tidak relevan untuk tujuan jangka panjang Anda.",
      },
      {
        num: 17,
        title: "The Seduction of Pessimism",
        summary:
          "Pesimisme terdengar lebih cerdas dari optimisme, meskipun optimisme adalah posisi yang secara historis jauh lebih akurat. Progres terjadi terlalu lambat untuk diperhatikan hari per hari, sementara kemunduran terjadi secara tiba-tiba dan dramatis.",
      },
      {
        num: 18,
        title: "When You\'ll Believe Anything",
        summary:
          "Di saat krisis dan ketidakpastian ekstrem, orang menjadi sangat rentan terhadap narasi yang sederhana dan meyakinkan. Keinginan akan cerita yang koheren bisa mendorong orang membuat keputusan investasi yang sangat buruk berdasarkan narasi yang terlalu menyederhanakan realitas.",
      },
      {
        num: 19,
        title: "All Together Now",
        summary:
          "Sintesis dari semua prinsip buku ini: tabung sebanyak mungkin, tingkatkan toleransi terhadap risiko, panjangkan horison waktu, hindari satu titik kegagalan, dan gunakan uang sebagai alat untuk kendali atas waktu Anda. Temukan sistem yang bisa Anda jalankan secara konsisten.",
      },
      {
        num: 20,
        title: "Confessions",
        summary:
          "Housel berbagi strategi keuangan pribadinya: berinvestasi di index fund yang murah, memegang sejumlah besar uang tunai untuk ketenangan pikiran meskipun tidak optimal secara matematis, dan tidak memiliki hutang sama sekali kecuali KPR. Pilihan ini sesuai dengan kepribadian dan prioritas hidupnya.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B001-S1",
        task: "Tuliskan 3 pembelian impulsif bulan lalu dan analisis emosi apa yang mendorongnya.",
      },
      {
        stepId: "B001-S2",
        task: "Tentukan angka cukup Anda: berapa pendapatan bulanan yang membuat Anda benar-benar puas?",
      },
      {
        stepId: "B001-S3",
        task: "Aktifkan auto-debit tabungan minimal 10% dari gaji sebelum Anda sempat menyentuhnya.",
      },
      {
        stepId: "B001-S4",
        task: "Baca portofolio investasi Anda maksimal sekali sebulan—hindari overreaction terhadap fluktuasi harian.",
      },
      {
        stepId: "B001-S5",
        task: "Hitung margin of safety Anda: berapa bulan Anda bisa bertahan jika pendapatan berhenti total?",
      },
    ],
  },
  {
    bookId: "B002",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Produktivitas",
    readingTimeMinutes: 15,
    coverStyle:
      "background:linear-gradient(160deg,#0d1b2a 0%,#1b4332 50%,#2d6a4f 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">⚛️</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#74c69d;line-height:1.3;">Atomic Habits</div><div style="width:36px;height:2px;background:#74c69d;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">James Clear</div></div>',
    tags: ["kebiasaan", "disiplin", "sistem", "identitas"],
    bigIdea:
      "Perbaikan 1% setiap hari tidak terasa signifikan, namun dalam setahun Anda akan 37 kali lebih baik. Kebiasaan bukan tentang tujuan—melainkan tentang sistem dan identitas.",
    analogy: {
      title: "Kebiasaan adalah Jalur Air di Pegunungan",
      content:
        "Bayangkan sebuah pegunungan setelah hujan lebat. Air tidak langsung menemukan sungai—ia mengalir bebas, mencoba banyak jalan, dan perlahan menggali alur kecil di tanah. Setiap hujan berikutnya, air semakin mudah mengikuti alur yang sudah ada.\n\nItulah cara kerja kebiasaan di otak Anda. Setiap kali Anda melakukan sesuatu, neuron membuat koneksi baru. Ulangi cukup sering, dan jalur itu menjadi sungai saraf yang mengalir secara otomatis.\n\nMasalahnya: air tidak peduli apakah sungai menuju lautan indah atau kubangan lumpur. Yang menentukan adalah Anda—lewat lingkungan, sistem, dan identitas yang Anda bangun secara sengaja.",
    },
    chapters: [
      {
        num: 1,
        title: "The Surprising Power of Atomic Habits",
        summary:
          "Perubahan besar adalah hasil akumulasi dari ribuan keputusan kecil yang konsisten. Perbaikan 1% setiap hari selama setahun menghasilkan peningkatan 37 kali lipat. Tim sepeda Inggris yang menang Tour de France menerapkan prinsip ini: mencari perbaikan marginal di setiap aspek kecil, dari posisi kursi hingga kualitas tidur. Kekuatan kebiasaan kecil terletak pada compounding yang terus menumpuk.",
      },
      {
        num: 2,
        title: "How Your Habits Shape Your Identity",
        summary:
          "Ada dua cara mengubah perilaku: dari luar ke dalam (tujuan ke tindakan) atau dari dalam ke luar (identitas ke tindakan). Cara kedua jauh lebih kuat. Alih-alih Saya ingin berhenti merokok, tanyakan Apakah seorang non-perokok akan melakukan ini? Setiap tindakan kecil adalah suara untuk identitas yang ingin Anda bangun.",
      },
      {
        num: 3,
        title: "How to Build Better Habits in 4 Steps",
        summary:
          "Semua kebiasaan mengikuti loop empat langkah: Cue (isyarat), Craving (keinginan), Response (tindakan), dan Reward (imbalan). Untuk membangun kebiasaan baik: buat cue obvious, craving attractive, response easy, reward satisfying. Untuk menghancurkan kebiasaan buruk: balik semua itu.",
      },
      {
        num: 4,
        title: "The 1st Law: Make It Obvious",
        summary:
          "Hukum Pertama: buat kebiasaan baik terlihat jelas. Strategi implementation intention—tentukan waktu dan tempat spesifik—meningkatkan peluang keberhasilan secara dramatis. Pointing-and-calling yang digunakan operator kereta Jepang mengurangi kesalahan operasional hingga 85% karena membuat hal yang tidak disadari menjadi eksplisit.",
      },
      {
        num: 5,
        title: "The Best Way to Start a New Habit",
        summary:
          "Habit stacking: Setelah KEBIASAAN LAMA, saya akan KEBIASAAN BARU. Formula ini menggunakan momentum kebiasaan yang sudah ada sebagai peluncur untuk kebiasaan yang ingin dibangun. Kunci keberhasilan: kebiasaan yang di-stack harus memiliki frekuensi dan konteks yang sama.",
      },
      {
        num: 6,
        title: "Motivation is Overrated; Environment Matters More",
        summary:
          "Lingkungan lebih kuat dari motivasi. Anne Thorndike merancang ulang kafetaria rumah sakit—hanya dengan menaruh air putih di sebelah kasir dan minuman soda lebih jauh—konsumsi air meningkat 25% tanpa ada yang diberitahu. Desain lingkungan Anda sehingga pilihan yang baik menjadi pilihan yang termudah.",
      },
      {
        num: 7,
        title: "The Secret to Self-Control",
        summary:
          "Orang dengan self-control yang baik berarti mereka jarang menggunakan self-control sama sekali. Mereka menstrukturisasi hidup sehingga jarang berada dalam situasi yang menguji kedisiplinan. Solusi terbaik untuk kebiasaan buruk bukan kemauan yang lebih kuat, melainkan menghilangkan cue dari lingkungan.",
      },
      {
        num: 8,
        title: "The 2nd Law: Make It Attractive",
        summary:
          "Hukum Kedua: buat kebiasaan baik semenarik mungkin. Dopamin dilepaskan bukan hanya saat mendapat reward, melainkan saat mengantisipasi reward. Temptation bundling—menggabungkan kebiasaan yang perlu dilakukan dengan sesuatu yang Anda inginkan—adalah teknik yang sangat efektif.",
      },
      {
        num: 9,
        title: "The Role of Family and Friends in Shaping Habits",
        summary:
          "Manusia secara alami meniru tiga kelompok: yang dekat (keluarga, teman), yang banyak (norma sosial), dan yang berstatus tinggi (idola, panutan). Salah satu cara paling efektif mengubah kebiasaan adalah bergabung dengan komunitas yang mana perilaku yang Anda inginkan sudah menjadi norma kelompok.",
      },
      {
        num: 10,
        title: "How to Find and Fix the Causes of Bad Habits",
        summary:
          "Setiap kebiasaan buruk adalah solusi modern untuk keinginan purba: rasa aman, cinta, status sosial. Rokok menjawab kebutuhan akan reduksi stres. Scrolling media sosial menjawab kebutuhan akan validasi. Memahami mengapa di balik kebiasaan buruk adalah langkah pertama untuk menggantinya.",
      },
      {
        num: 11,
        title: "The 3rd Law: Make It Easy",
        summary:
          "Hukum Ketiga: buat kebiasaan yang baik semudah mungkin. Kita sering terjebak dalam motion (merencanakan) dan tidak pernah benar-benar melakukan action. Fokus pada frekuensi pengulangan, bukan pada kualitas awal. Otak memperkuat jalur saraf melalui repetisi.",
      },
      {
        num: 12,
        title: "The Law of Least Effort",
        summary:
          "Manusia secara biologis cenderung memilih jalur yang paling mudah. Rancang lingkungan sehingga kebiasaan baik menjadi jalur termudah. Addition by subtraction: hilangkan hambatan sekecil apapun. Letakkan sepatu olahraga di depan pintu. Siapkan buku di atas bantal.",
      },
      {
        num: 13,
        title: "How to Stop Procrastinating by the Two-Minute Rule",
        summary:
          "Ketika Anda memulai kebiasaan baru, ia seharusnya membutuhkan waktu kurang dari dua menit untuk dimulai. Baca sebelum tidur tiap malam menjadi Baca satu halaman. Yoga 30 menit menjadi Keluarkan matras yoga. Aturan ini tentang menguasai seni memulai tanpa hambatan.",
      },
      {
        num: 14,
        title: "How to Make Good Habits Inevitable and Bad Habits Impossible",
        summary:
          "Commitment device adalah pilihan yang Anda buat di masa kini untuk mengontrol perilaku Anda di masa depan. Versi modern: blokir media sosial di laptop kerja, titipkan kartu kredit ke pasangan, bayar gym setahun penuh di muka. Buat pilihan buruk menjadi tidak mungkin, bukan sekadar tidak mudah.",
      },
      {
        num: 15,
        title: "The 4th Law: Make It Satisfying",
        summary:
          "Hukum Keempat: buat kebiasaan yang baik terasa memuaskan secara instan. Otak memprioritaskan reward jangka pendek di atas reward jangka panjang. Kebiasaan yang memberikan rasa puas segera akan jauh lebih mudah dipertahankan. Tambahkan reward instan kecil di akhir setiap sesi kebiasaan baik Anda.",
      },
      {
        num: 16,
        title: "How to Stick with Good Habits Every Day",
        summary:
          "Habit tracker menciptakan kepuasan visual dari kemajuan. Fokus pada konsistensi, bukan kesempurnaan. Prinsip never miss twice: jika Anda melewatkan satu hari, pastikan Anda tidak melewatkan hari berikutnya—satu hari terlewat adalah kecelakaan, dua hari berturut-turut adalah awal kebiasaan buruk baru.",
      },
      {
        num: 17,
        title: "How an Accountability Partner Can Change Everything",
        summary:
          "Konsekuensi sosial adalah salah satu motivator paling kuat karena kita tidak ingin mengecewakan orang yang kita peduli. Habit contract dengan konsekuensi nyata memanfaatkan keinginan alami manusia untuk menjaga komitmen di depan orang yang peduli.",
      },
      {
        num: 18,
        title: "The Truth About Talent",
        summary:
          "Kebiasaan lebih mudah dibangun ketika selaras dengan kecenderungan alami Anda. Pilih arena di mana kekuatan alami Anda menguntungkan. Pertanyaan kunci: Apakah ini terasa mudah bagi saya tapi sulit bagi orang lain? Jika ya, itulah sinyal bahwa Anda berada di arena yang tepat.",
      },
      {
        num: 19,
        title: "The Goldilocks Rule",
        summary:
          "Motivasi tertinggi terjadi saat tugas berada di batas kemampuan Anda—tidak terlalu mudah dan tidak terlalu sulit. Zona Goldilocks ini adalah tempat di mana flow state bisa tercapai. Para profesional terbaik bisa menoleransi kebosanan dari latihan rutin yang konsisten—sesuatu yang kebanyakan orang tidak bisa lakukan.",
      },
      {
        num: 20,
        title: "The Downside of Creating Good Habits",
        summary:
          "Saat kebiasaan menjadi otomatis, Anda berhenti memperhatikan detail dan berhenti berkembang. Solusinya adalah refleksi dan review berkala—bukan hanya melakukan, tapi secara aktif mengevaluasi apakah kebiasaan Anda masih efektif dan relevan dengan siapa yang ingin Anda jadikan dirinya.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B002-S1",
        task: "Tulis implementation intention: Saya akan [PERILAKU] pada [WAKTU] di [LOKASI].",
      },
      {
        stepId: "B002-S2",
        task: "Terapkan habit stacking: Setelah [KEBIASAAN LAMA], saya akan [KEBIASAAN BARU].",
      },
      {
        stepId: "B002-S3",
        task: "Redesain lingkungan: taruh objek yang mendukung kebiasaan baik di tempat yang paling terlihat.",
      },
      {
        stepId: "B002-S4",
        task: "Buat habit tracker: cetak kalender sebulan, tandai setiap hari berhasil. Jangan putus rantai.",
      },
      {
        stepId: "B002-S5",
        task: "Identifikasi satu kebiasaan buruk, temukan cue-nya, lalu hilangkan cue itu dari lingkungan Anda.",
      },
    ],
  },
  {
    bookId: "B003",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Psikologi",
    readingTimeMinutes: 20,
    coverStyle:
      "background:linear-gradient(160deg,#1a0533 0%,#3d0066 50%,#6600cc 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🧠</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#bb86fc;line-height:1.3;">Thinking, Fast and Slow</div><div style="width:36px;height:2px;background:#bb86fc;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Daniel Kahneman</div></div>',
    tags: ["kognitif", "bias", "keputusan", "psikologi"],
    bigIdea:
      "Pikiran kita beroperasi dalam dua sistem: Sistem 1 yang cepat dan penuh bias; serta Sistem 2 yang lambat namun analitis. Mengenal keduanya adalah kunci keputusan yang lebih baik.",
    analogy: {
      title: "Otak Anda adalah Dua Penumpang di Satu Kendaraan",
      content:
        "Bayangkan Anda sedang berkendara. Ada dua penumpang. Penumpang pertama (Sistem 1) adalah asisten AI yang hafal semua jalan—langsung tahu rute tanpa berpikir. Ia sangat cepat, tapi sering percaya diri berlebihan.\n\nPenumpang kedua (Sistem 2) adalah navigator dengan GPS dan peta—ia lambat, perlu waktu berpikir, tapi akurat untuk rute yang rumit. Masalahnya: ia mudah lelah dan sering tidur di jalan.\n\nSebagian besar kesalahan besar dalam hidup terjadi ketika Sistem 1 mengendarai tanpa sepengetahuan Sistem 2.",
    },
    chapters: [
      {
        num: 1,
        title: "The Characters of the Story",
        summary:
          "Kahneman memperkenalkan dua karakter utama: Sistem 1 (cepat, otomatis, emosional, tidak sadar) dan Sistem 2 (lambat, disengaja, logis, membutuhkan usaha). Sistem 1 beroperasi secara otomatis menghasilkan kesan dan intuisi. Sistem 2 mengalokasikan perhatian untuk tugas yang memerlukan konsentrasi tinggi. Memahami kapan masing-masing berperan adalah kunci pengambilan keputusan yang lebih baik.",
      },
      {
        num: 2,
        title: "Attention and Effort",
        summary:
          "Sistem 2 memiliki kapasitas terbatas dan membutuhkan usaha nyata yang bisa habis. Saat Anda sedang melakukan tugas kognitif berat—mengerjakan soal matematika atau mengemudi di kota asing—Anda benar-benar tidak mampu memproses informasi tambahan. Fenomena gorilla invisibility membuktikan ini: orang tidak melihat gorilla yang melewati layar karena perhatian Sistem 2 mereka sudah habis.",
      },
      {
        num: 3,
        title: "The Lazy Controller",
        summary:
          "Sistem 2 adalah pengontrol yang malas—ia tidak mau mengeluarkan usaha lebih dari yang diperlukan. Ini menyebabkan cognitive ease: kita lebih percaya pada hal-hal yang mudah diproses dan cenderung menerima pernyataan yang terdengar lancar tanpa memverifikasinya. Kebohongan yang diulang cukup sering mulai terasa seperti kebenaran karena otak menginterpretasikan kemudahan pemrosesan sebagai tanda keakuratan.",
      },
      {
        num: 4,
        title: "The Associative Machine",
        summary:
          "Sistem 1 bekerja melalui asosiasi—satu konsep memicu jaringan konsep terkait secara otomatis. Priming adalah efek di mana paparan satu kata atau gambar secara tidak sadar memengaruhi pikiran dan perilaku berikutnya. Peserta yang membaca kata-kata terkait usia tua secara nyata berjalan lebih lambat meninggalkan laboratorium. Lingkungan kita terus-menerus mempriming pikiran kita tanpa kita sadari.",
      },
      {
        num: 5,
        title: "Cognitive Ease",
        summary:
          "Cognitive ease—kemudahan berpikir—menciptakan perasaan familiar, nyaman, dan benar, meskipun tidak ada hubungannya dengan akurasi faktual. Pernyataan yang dicetak dengan font mudah dibaca atau disebutkan berulang-ulang terasa lebih benar. Implikasinya: iklan yang menggunakan repetisi bekerja bukan dengan argumen yang meyakinkan, melainkan dengan menciptakan familiar yang otak interpretasikan sebagai kebenaran.",
      },
      {
        num: 6,
        title: "Norms, Surprises, and Causes",
        summary:
          "Sistem 1 terus-menerus membangun model normal dunia dan mendeteksi penyimpangan darinya. Saat sesuatu mengejutkan, Sistem 2 diaktifkan untuk mencari penjelasan kausal. Otak kita secara otomatis mencari kausalitas bahkan dalam kejadian yang sebenarnya acak. Kita melihat sebab-akibat di mana hanya ada korelasi kebetulan.",
      },
      {
        num: 7,
        title: "A Machine for Jumping to Conclusions",
        summary:
          "WYSIATI—What You See Is All There Is. Sistem 1 membangun narasi koheren dari data yang tersedia tanpa mempertimbangkan apa yang tidak diketahui. Semakin koheren narasi yang bisa dibangun, semakin yakin kita—meskipun data yang ada sangat terbatas. Ini menjelaskan kenapa kesan pertama begitu kuat dan keputusan besar sering dibuat dengan informasi yang sangat sedikit.",
      },
      {
        num: 8,
        title: "How Judgments Happen",
        summary:
          "Sistem 1 secara konstan menghasilkan penilaian tentang segala hal tanpa diminta. Halo effect—kecenderungan untuk menyukai atau tidak menyukai semua aspek seseorang berdasarkan kesan keseluruhan—adalah contoh bagaimana satu penilaian mewarnai semua penilaian lainnya. Seseorang yang tampan otomatis dinilai lebih cerdas meskipun tidak ada korelasi faktual.",
      },
      {
        num: 9,
        title: "Answering an Easier Question",
        summary:
          "Ketika Sistem 2 dihadapkan pada pertanyaan sulit, ia sering diam-diam mensubstitusinya dengan pertanyaan yang lebih mudah dijawab. Ketika ditanya Seberapa bahagia Anda dengan hidup Anda, banyak orang sebenarnya menjawab Seberapa baik mood saya tepat sekarang. Ini disebut attribute substitution dan menjadi akar dari banyak kesalahan penilaian yang sistematis.",
      },
      {
        num: 10,
        title: "The Law of Small Numbers",
        summary:
          "Intuisi kita tentang statistik sangat buruk. Kita terlalu cepat menarik kesimpulan dari sampel yang sangat kecil. Kabupaten dengan tingkat kanker ginjal tertinggi DAN terendah di AS ternyata keduanya adalah kabupaten pedesaan kecil—bukan karena ada sesuatu yang khusus tentang gaya hidup rural, melainkan karena sampel kecil cenderung menghasilkan hasil yang ekstrem di kedua arah.",
      },
      {
        num: 11,
        title: "Anchors",
        summary:
          "Angka pertama yang kita dengar dalam negosiasi menjadi jangkar yang sangat kuat memengaruhi semua penilaian berikutnya, bahkan jika jangkar itu jelas-jelas tidak relevan. Peserta yang memutar roda yang berhenti di angka 65 mengestimasi persentase negara Afrika di PBB jauh lebih tinggi dari mereka yang memutar roda berhenti di 10—meskipun mereka tahu angka itu acak.",
      },
      {
        num: 12,
        title: "The Science of Availability",
        summary:
          "Availability heuristic: kita menilai probabilitas suatu kejadian berdasarkan seberapa mudah contoh kejadian itu bisa kita ingat. Kejadian dramatis seperti kecelakaan pesawat terasa jauh lebih umum dari yang sebenarnya karena media meliputnya secara intensif. Kejadian yang lebih sering namun kurang dramatis seperti kecelakaan mobil diremehkan probabilitasnya.",
      },
      {
        num: 13,
        title: "Availability, Emotion, and Risk",
        summary:
          "Ketakutan dan kecemasan memperkuat availability heuristic secara dramatis. Setelah serangan teroris 9/11, banyak orang beralih dari pesawat ke mobil yang jauh lebih berbahaya secara statistik—sehingga tingkat kematian di jalan raya Amerika meningkat secara signifikan dan terukur. Emosi yang kuat mendistorsi persepsi risiko kita secara sistematis.",
      },
      {
        num: 14,
        title: "Tom W\'s Specialty",
        summary:
          "Kita sangat buruk dalam mempertimbangkan base rates (probabilitas dasar). Ketika diberikan deskripsi kepribadian yang cocok dengan stereotip profesi tertentu, kita mengabaikan informasi penting bahwa profesi tersebut sangat jarang dalam populasi. Representativeness heuristic membuat kita menilai kemungkinan berdasarkan seberapa mewakili sesuatu terlihat, bukan berdasarkan statistik.",
      },
      {
        num: 15,
        title: "Linda: Less is More",
        summary:
          "Conjunction fallacy: kita menilai probabilitas dua kejadian bersama lebih tinggi dari probabilitas satu kejadian saja. Linda adalah aktivis feminis yang bekerja di bank dinilai lebih mungkin dari Linda bekerja di bank, meskipun secara logika ini tidak mungkin. Sistem 1 mengorbankan logika dasar demi narasi yang lebih memuaskan.",
      },
      {
        num: 16,
        title: "Causes Trump Statistics",
        summary:
          "Statistik yang tidak memiliki cerita kausal tidak mempengaruhi kepercayaan dan perilaku kita secara signifikan. Tapi satu anekdot yang vivid dan emosional bisa mengubah perilaku sepenuhnya. Kita adalah makhluk yang berpikir dalam cerita, bukan dalam angka. Ini menjelaskan kenapa kampanye kesehatan publik berbasis data seringkali gagal mengubah perilaku masyarakat.",
      },
      {
        num: 17,
        title: "Regression to the Mean",
        summary:
          "Instruktur militer menemukan bahwa pujian setelah landing sempurna biasanya diikuti landing yang lebih buruk dan menyimpulkan hukuman lebih efektif. Mereka salah total—itu hanya regresi ke rata-rata: kinerja ekstrem selalu cenderung kembali ke rata-rata terlepas dari apapun yang Anda lakukan. Kesalahpahaman ini menyebabkan ribuan kesimpulan sebab-akibat yang keliru.",
      },
      {
        num: 18,
        title: "Taming Intuitive Predictions",
        summary:
          "Prediksi intuitif kita terlalu ekstrem, terlalu yakin, dan gagal mempertimbangkan regresi ke rata-rata. Kahneman merekomendasikan outside view: mulai dari distribusi historis kasus serupa, lalu sesuaikan secara moderat berdasarkan informasi spesifik kasus Anda. Ini berlawanan dengan intuisi alami tapi jauh lebih akurat.",
      },
      {
        num: 19,
        title: "The Illusion of Understanding",
        summary:
          "Narrative fallacy: kita secara retroaktif membangun narasi kausal yang koheren dari peristiwa masa lalu, menciptakan ilusi kuat bahwa sejarah mudah dipahami dan masa depan bisa diprediksi. Kita melebih-lebihkan peran individu dan meremehkan peran keberuntungan. Buku bisnis yang menganalisis rahasia kesuksesan hampir selalu menderita dari narrative fallacy yang parah.",
      },
      {
        num: 20,
        title: "The Illusion of Validity",
        summary:
          "Para analis saham dan konsultan sering memiliki keyakinan sangat tinggi pada prediksi mereka, meskipun rekam jejak aktual mereka tidak lebih baik dari tebakan acak. Illusion of validity adalah keyakinan tidak tergoyahkan pada kemampuan prediksi diri sendiri, didorong oleh konsistensi internal dari narasi yang dibangun—bukan oleh akurasi aktual.",
      },
      {
        num: 21,
        title: "Intuitions vs. Formulas",
        summary:
          "Secara konsisten, formula statistik sederhana mengalahkan penilaian para ahli berpengalaman dalam banyak domain: memprediksi keberhasilan akademik, kelayakan kredit, bahkan prognosis medis. Ini bukan karena para ahli bodoh, melainkan karena konsistensi matematis formula mengalahkan ketidakkonsistenan yang melekat dalam penilaian manusia yang dipengaruhi mood dan konteks.",
      },
      {
        num: 22,
        title: "Expert Intuition: When Can We Trust It?",
        summary:
          "Intuisi ahli yang dapat dipercaya hanya berkembang dalam kondisi sangat spesifik: lingkungan yang cukup teratur dan dapat diprediksi, serta ribuan jam pengalaman dengan feedback yang cepat dan jelas. Intuisi seorang master catur layak dipercaya. Intuisi seorang analis saham tidak dapat dipercaya karena pasar tidak memberikan feedback yang bersih tentang sumber keberhasilan prediksi.",
      },
      {
        num: 23,
        title: "The Outside View",
        summary:
          "Planning fallacy: kita secara sistematis meremehkan waktu, biaya, dan risiko proyek sambil melebih-lebihkan manfaatnya. Sydney Opera House direncanakan selesai 1963, selesai 1973, dengan biaya 14 kali lipat anggaran. Solusinya adalah reference class forecasting: tanyakan Berapa rata-rata proyek serupa membutuhkan waktu dan biaya, lalu sesuaikan dari baseline realistis itu.",
      },
      {
        num: 24,
        title: "The Engine of Capitalism",
        summary:
          "Optimisme adalah kekuatan pendorong kapitalisme sekaligus sumber dari banyak kegagalan bisnis. Rata-rata pengusaha kecil Amerika memperkirakan peluang sukses industri mereka 60%, padahal kenyataannya hanya sekitar 35%. Ini bukan sepenuhnya buruk: tanpa optimisme yang tidak realistis, banyak usaha yang akhirnya berhasil tidak akan pernah dimulai.",
      },
      {
        num: 25,
        title: "Bernoulli\'s Errors",
        summary:
          "Teori utilitas standar mengasumsikan manusia memaksimalkan nilai ekspektasi secara rasional berdasarkan nilai absolut. Namun Kahneman dan Tversky membuktikan bahwa manusia mengevaluasi outcomes tidak berdasarkan nilai absolut, melainkan berdasarkan perubahan dari titik referensi mereka saat ini. Ini adalah fondasi Prospect Theory yang merevolusi ekonomi perilaku.",
      },
      {
        num: 26,
        title: "Prospect Theory",
        summary:
          "Dua insight utama Prospect Theory: Pertama, orang mengevaluasi outcomes sebagai gains atau losses relatif terhadap titik referensi, bukan sebagai nilai absolut. Kedua, loss aversion: rasa sakit dari kehilangan secara psikologis sekitar dua kali lebih kuat dari kesenangan mendapatkan jumlah yang sama. Ini menjelaskan kenapa ancaman lebih memotivasi dari reward setara.",
      },
      {
        num: 27,
        title: "The Endowment Effect",
        summary:
          "Endowment effect: kita secara otomatis menilai hal yang kita miliki lebih tinggi dari hal yang tidak kita miliki, semata-mata karena kita memilikinya. Peserta yang diberikan mug meminta harga jual rata-rata dua kali lipat dari yang bersedia dibayar peserta lain untuk mug yang persis sama. Ini menjelaskan negosiasi yang sering mandek.",
      },
      {
        num: 28,
        title: "Bad Events",
        summary:
          "Evolusi telah menanamkan negativity bias yang kuat: bad is stronger than good dalam hampir semua domain psikologis. Satu pengalaman buruk jauh lebih sulit dilupakan dari banyak pengalaman baik yang setara. Satu komentar negatif dalam ulasan kerja yang positif akan mendominasi ingatan kita tentang seluruh ulasan itu.",
      },
      {
        num: 29,
        title: "The Fourfold Pattern",
        summary:
          "Manusia menunjukkan pola preferensi yang paradoks: risk averse untuk gains yang probable namun risk seeking untuk losses yang probable. Sebaliknya untuk peristiwa langka: risk seeking untuk gains kecil langka (membeli lotre) namun risk averse untuk losses langka (membeli asuransi). Pola ini menjelaskan banyak keputusan ekonomi yang tampak irasional.",
      },
      {
        num: 30,
        title: "Rare Events",
        summary:
          "Overweighting of rare events: kita memberikan bobot psikologis yang berlebihan pada probabilitas yang sangat rendah. Ini menjelaskan keberadaan industri lotre DAN industri asuransi secara bersamaan—keduanya mengeksploitasi distorsi probabilitas yang sama dari sudut yang berlawanan.",
      },
      {
        num: 31,
        title: "Risk Policies",
        summary:
          "Narrow framing adalah kecenderungan untuk mengevaluasi setiap keputusan satu per satu secara terisolasi, bukan sebagai bagian dari kebijakan jangka panjang yang konsisten. Solusi: terapkan risk policy yang konsisten untuk semua keputusan sejenis, bukan memutuskan setiap kasus berdasarkan emosi sesaat.",
      },
      {
        num: 32,
        title: "Keeping Score",
        summary:
          "Mental accounting adalah cara manusia mempartisi uang ke dalam kategori mental yang berbeda dan memperlakukannya secara berbeda. Kita tidak mau mengambil dari rekening dana pendidikan anak meskipun ada kebutuhan mendesak, sementara kita mudah menghabiskan uang bonus untuk hal yang tidak akan kita beli dengan gaji reguler.",
      },
      {
        num: 33,
        title: "Reversals",
        summary:
          "Preference reversals terjadi karena preferensi kita bergantung pada konteks dan cara pertanyaan diajukan. Evaluasi satu per satu versus evaluasi bersama menghasilkan pilihan yang berbeda dan kadang bertentangan. Cara survei dirancang dan cara pilihan dipresentasikan dapat mengubah keputusan publik secara dramatis.",
      },
      {
        num: 34,
        title: "Frames and Reality",
        summary:
          "Framing: cara informasi disampaikan secara dramatis mengubah keputusan kita, meskipun konten faktualnya identik. Operasi ini memiliki tingkat kelangsungan hidup 90% versus 1 dari 10 pasien meninggal menghasilkan respons yang sangat berbeda meskipun kedua pernyataan identik secara matematis. Banyak keputusan penting dipengaruhi oleh framing yang tidak kita sadari.",
      },
      {
        num: 35,
        title: "Two Selves",
        summary:
          "Ada perbedaan fundamental antara experiencing self (yang menjalani hidup momen per momen) dan remembering self (yang menyimpan narasi tentang hidup). Memori tidak merekam rata-rata pengalaman, melainkan puncak dan akhirnya (peak-end rule). Kolonoskopi yang lebih panjang namun diakhiri lebih nyaman diingat sebagai lebih tidak menyakitkan dari yang lebih singkat tapi diakhiri lebih menyakitkan.",
      },
      {
        num: 36,
        title: "Life as a Story",
        summary:
          "Remembering self mendominasi keputusan kita karena ia yang bernarasi tentang siapa kita. Kita rela mengorbankan kepuasan nyata saat ini demi kenangan yang lebih baik. Liburan yang berakhir buruk terasa seperti merusak seluruh liburan meskipun 13 hari sebelumnya luar biasa. Kita mengoptimalkan memori, bukan momen aktual.",
      },
      {
        num: 37,
        title: "Experienced Well-Being",
        summary:
          "Data pengalaman momen per momen menunjukkan bahwa income di atas ambang batas tertentu tidak meningkatkan kebahagiaan emosional sehari-hari secara signifikan. Faktor yang paling memengaruhi kebahagiaan harian adalah dengan siapa Anda menghabiskan waktu. Commute yang panjang adalah salah satu aktivitas yang paling konsisten menurunkan kebahagiaan harian.",
      },
      {
        num: 38,
        title: "Thinking About Life",
        summary:
          "Bab penutup merangkum perbedaan antara dua self dan implikasi kebijakan publiknya. Kebijakan yang bertujuan meningkatkan kesejahteraan harus mempertimbangkan baik experienced well-being (kebahagiaan momen per momen) maupun evaluative well-being (kepuasan hidup keseluruhan)—dan keduanya tidak selalu menunjuk ke arah yang sama.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B003-S1",
        task: "Sebelum keputusan besar, tanya: Apakah Sistem 1 atau Sistem 2 yang sedang memutuskan ini?",
      },
      {
        stepId: "B003-S2",
        task: "Lakukan pre-mortem sebelum proyek besar: bayangkan sudah gagal total, lalu tanyakan apa penyebabnya?",
      },
      {
        stepId: "B003-S3",
        task: "Saat bernegosiasi, tetapkan anchor awal Anda sendiri sebelum pihak lain menyebut angka pertama.",
      },
      {
        stepId: "B003-S4",
        task: "Buat jurnal keputusan: catat prediksi dan alasan Anda, review 3 bulan kemudian untuk menemukan bias Anda.",
      },
    ],
  },
  {
    bookId: "B004",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Filsafat",
    readingTimeMinutes: 20,
    coverStyle:
      "background:linear-gradient(160deg,#1a2a0a 0%,#2d4a0f 50%,#4a7020 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🌍</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#f5e642;line-height:1.3;">Sapiens</div><div style="width:36px;height:2px;background:#f5e642;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Yuval Noah Harari</div></div>',
    tags: ["sejarah", "manusia", "peradaban", "evolusi"],
    bigIdea:
      "Homo sapiens menguasai dunia bukan karena terkuat atau terpintar, tapi karena satu-satunya makhluk yang bisa percaya pada fiksi bersama—agama, negara, uang, dan perusahaan.",
    analogy: {
      title: "Manusia Adalah Spesies yang Membangun Dunia dari Cerita",
      content:
        "Seekor simpanse tidak akan pernah memberikan pisangnya dengan imbalan selembar kertas bertuliskan satu pisang. Namun setiap hari, miliaran manusia menukar hidup mereka demi lembaran kertas serupa yang kita sebut uang.\n\nApa yang membuat ini mungkin? Kemampuan unik manusia untuk percaya pada realitas yang hanya ada dalam imajinasi bersama. Pemerintahan tidak bisa Anda sentuh—ia hanya ada selama jutaan orang sepakat untuk percaya padanya. Begitu pula dengan uang, hak asasi, dan bangsa.\n\nHanya dengan cerita bersama, manusia bisa bekerja sama dalam kelompok yang jauh melampaui batas kenal-mengenal personal. Inilah yang membuat sapiens menjadi penguasa planet ini.",
    },
    chapters: [
      {
        num: 1,
        title: "An Animal of No Significance",
        summary:
          "Homo sapiens pertama kali muncul di Afrika Timur sekitar 2,5 juta tahun lalu sebagai salah satu dari beberapa spesies genus Homo yang tidak istimewa. Selama sebagian besar sejarahnya, manusia adalah makhluk di tengah-tengah rantai makanan—bukan di puncaknya. Kita memperoleh posisi puncak begitu cepat sehingga ekosistem belum sempat beradaptasi, dan kita pun belum beradaptasi secara psikologis. Ketidakstabilan inilah yang mungkin menjelaskan banyak perilaku destruktif kita sebagai spesies.",
      },
      {
        num: 2,
        title: "The Tree of Knowledge",
        summary:
          "Revolusi Kognitif sekitar 70.000 tahun lalu menghasilkan lompatan kemampuan yang masih belum bisa sepenuhnya dijelaskan oleh sains. Tiba-tiba sapiens bisa berbicara tentang hal-hal yang tidak ada secara fisik—dewa, roh, bangsa, keadilan. Kemampuan untuk menciptakan dan berbagi fiksi adalah superkekuatan yang membedakan sapiens dari semua makhluk lain dan memungkinkan kerja sama dalam kelompok besar yang tidak saling mengenal secara personal.",
      },
      {
        num: 3,
        title: "A Day in the Life of Adam and Eve",
        summary:
          "Kehidupan pemburu-pengumpul jauh lebih kaya dan beragam dari yang kita bayangkan. Mereka bekerja 30-35 jam seminggu, memiliki pengetahuan ekologis yang luar biasa tentang ratusan spesies, dan diet yang lebih bervariasi dan bergizi. Mereka mungkin lebih bahagia, lebih sehat, dan lebih cerdas secara praktis dari petani yang menggantikan mereka ribuan tahun kemudian melalui Revolusi Agrikultur.",
      },
      {
        num: 4,
        title: "The Flood",
        summary:
          "Saat sapiens menyebar ke seluruh dunia, mereka meninggalkan jejak kepunahan massal di mana-mana. Australia, Amerika, dan pulau-pulau lainnya kehilangan sebagian besar megafauna mereka segera setelah kedatangan manusia pertama. Sapiens bukanlah anak-anak alam yang hidup selaras dengan lingkungan—manusia prasejarah sudah menjadi pembunuh ekologis yang sangat efektif jauh sebelum era industri modern.",
      },
      {
        num: 5,
        title: "History's Biggest Fraud",
        summary:
          "Revolusi Agrikultur sekitar 10.000 SM mungkin adalah penipuan terbesar dalam sejarah manusia. Gandum dan padi memanipulasi sapiens untuk menyebarkan mereka ke seluruh dunia—dengan harga yang sangat mahal: petani bekerja jauh lebih keras, makan lebih monoton, lebih rentan kelaparan massal, lebih mudah terserang penyakit menular, dan hidup dalam hirarki sosial yang jauh lebih ketat dari nenek moyang pemburu-pengumpul mereka.",
      },
      {
        num: 6,
        title: "Building Pyramids",
        summary:
          "Pertanian memungkinkan surplus pangan yang mendukung keberadaan elit penguasa, tentara, imam, dan ahli tulis. Dengan munculnya elit ini, terbentuk kerajaan dan sistem kepercayaan yang membenarkan hierarki sosial. Hampir semua hierarki sosial yang kompleks—kasta, kelas sosial, ras—adalah konstruksi imajinatif yang dipertahankan bukan karena mencerminkan realitas biologis, melainkan karena mengkoordinasikan orang dalam jumlah sangat besar secara efektif.",
      },
      {
        num: 7,
        title: "Memory Overload",
        summary:
          "Pertanian menciptakan kebutuhan mendesak akan sistem pencatatan karena terlalu banyak data yang perlu dikelola. Sistem penulisan paling awal dikembangkan bukan untuk puisi atau sejarah—melainkan untuk akuntansi, mencatat berapa kantung gandum masuk dan keluar dari gudang kerajaan. Birokrasi, bukan sastra, adalah ibu sesungguhnya dari tulisan sebagai teknologi yang mengubah peradaban.",
      },
      {
        num: 8,
        title: "There is No Justice in History",
        summary:
          "Tidak ada hierarki sosial yang didasarkan pada fakta biologis yang sesungguhnya—semuanya adalah konstruksi yang dibayangkan. Perbedaan yang kita gunakan untuk membenarkan hierarki selalu terungkap sebagai rationalisasi post-hoc ketika diperiksa secara kritis. Namun ini tidak berarti hierarki ini mudah diubah—sekali established, ia cenderung mempertahankan diri melalui mekanisme yang saling memperkuat.",
      },
      {
        num: 9,
        title: "The Arrow of History",
        summary:
          "Trend terbesar dalam sejarah manusia adalah bergerak menuju kompleksitas yang lebih besar dan koneksi yang lebih luas—menuju unifikasi progresif. Dari ribuan budaya yang benar-benar terpisah menuju dunia tunggal dengan satu peradaban global yang semakin terintegrasi. Apakah ini kemajuan atau kehilangan keragaman yang berharga adalah pertanyaan yang tidak mudah dijawab.",
      },
      {
        num: 10,
        title: "The Scent of Money",
        summary:
          "Uang adalah sistem kepercayaan paling universal dan paling sukses yang pernah ada. Tidak seperti agama atau ideologi, uang melampaui semua batas—bahkan musuh bebuyutan pun bisa berdagang jika keduanya percaya pada nilai uang yang sama. Uang bekerja karena semua orang percaya padanya, dan semua orang percaya padanya karena semua orang lain percaya padanya—sebuah collective belief yang self-fulfilling.",
      },
      {
        num: 11,
        title: "Imperial Visions",
        summary:
          "Kekaisaran adalah pola organisasi politik paling umum dalam sejarah manusia, dan ia berperan sangat besar dalam menyatukan spesies kita secara budaya dan ekonomi. Tapi imperialisme juga mempunyai sisi gelap yang tidak bisa dihapus: penghancuran budaya lokal, eksploitasi sistematis, dan genosida. Warisan kultural yang kita nikmati hari ini sering kali adalah produk dari proses imperialisme yang brutal.",
      },
      {
        num: 12,
        title: "The Law of Religion",
        summary:
          "Agama bukan hanya tentang kepercayaan pada hal supernatural. Ia adalah sistem norma dan nilai yang mengklaim otoritas lebih tinggi dari sekadar preferensi manusia individual. Bahkan agama sekuler modern seperti humanisme, komunisme, dan kapitalisme beroperasi dengan logika yang serupa—mengklaim kebenaran universal tentang kondisi manusia dan apa yang seharusnya kita kejar dalam hidup.",
      },
      {
        num: 13,
        title: "The Secret of Success",
        summary:
          "Mengapa peradaban Barat mendominasi dunia sejak abad ke-15? Jawabannya bukan pada sumber daya alam atau geografi, melainkan pada worldview yang unik: Barat memiliki ignorance acknowledgment—kesediaan untuk mengakui ketidaktahuan secara terbuka dan aktif mencari pengetahuan baru melalui metode ilmiah. Kesediaan untuk mengakui saya tidak tahu adalah fondasi yang memungkinkan sains modern berkembang.",
      },
      {
        num: 14,
        title: "The Discovery of Ignorance",
        summary:
          "Revolusi Ilmiah berbeda dari tradisi pengetahuan sebelumnya bukan pada temuan spesifiknya, melainkan pada epistemologinya: untuk pertama kalinya, saya tidak tahu menjadi titik awal yang sah dan produktif. Sains modern dibangun di atas kesediaan untuk mengakui bahwa model kita tentang dunia mungkin salah dan perlu direvisi berdasarkan bukti empiris yang baru.",
      },
      {
        num: 15,
        title: "The Marriage of Science and Empire",
        summary:
          "Sains dan imperialisme berkembang bersama dalam simbiosis. Kapal-kapal Eropa membawa tidak hanya tentara tetapi juga ilmuwan dan kartografer. Ilmu botani, geografi, dan antropologi berkembang pesat justru karena kebutuhan imperialisme untuk memahami dan mengendalikan wilayah yang dikuasai. Peta dunia yang kita gunakan hari ini adalah produk dari eksplorasi imperialistik.",
      },
      {
        num: 16,
        title: "The Capitalist Creed",
        summary:
          "Kapitalisme bukan hanya sistem ekonomi—ia adalah sistem kepercayaan revolusioner yang berdasar pada keyakinan bahwa pertumbuhan ekonomi adalah hal yang baik dan bahwa profit masa depan harus mendanai keputusan masa kini. Kredit—pinjaman berdasarkan kepercayaan pada pertumbuhan masa depan yang belum ada—adalah mesin yang memungkinkan ekspansi kapitalis yang belum pernah ada sebelumnya.",
      },
      {
        num: 17,
        title: "The Wheels of Industry",
        summary:
          "Revolusi Industri mengubah bukan hanya cara kita memproduksi barang, melainkan cara kita memahami waktu, ruang, dan hubungan manusia dengan alam. Kereta api tidak hanya menghubungkan kota—ia menciptakan konsep waktu standar nasional yang sebelumnya tidak ada. Alam tidak lagi dipandang sebagai latar belakang tetap, melainkan sebagai sumber daya yang harus dieksploitasi untuk pertumbuhan.",
      },
      {
        num: 18,
        title: "A Permanent Revolution",
        summary:
          "Modernitas adalah era historis yang unik di mana perubahan menjadi norma yang diharapkan, bukan pengecualian yang ditakuti. Setiap generasi sekarang tumbuh dengan ekspektasi bahwa dunia di akhir hidup mereka akan sangat berbeda dari dunia di awal hidup mereka. Ini adalah pengalaman yang sangat baru—selama ribuan tahun sebelumnya, anak-anak hidup dalam dunia yang hampir identik dengan orang tua mereka.",
      },
      {
        num: 19,
        title: "And They Lived Happily Ever After",
        summary:
          "Apakah semua kemajuan material ini membuat manusia lebih bahagia? Data tidak memberikan jawaban yang sederhana. Standar hidup material meningkat dramatis. Tapi apakah ini berkorelasi dengan peningkatan kepuasan subjektif yang setara? Faktor-faktor seperti keluarga, komunitas lokal, dan makna hidup tampak jauh lebih penting bagi kebahagiaan nyata dari smartphone atau antibiotik.",
      },
      {
        num: 20,
        title: "The End of Homo Sapiens",
        summary:
          "Di ambang revolusi bioteknologi dan kecerdasan buatan, sapiens mungkin sedang di titik awal transformasi terbesar dalam sejarahnya—atau bahkan akhirnya sebagai spesies yang kita kenal. Harari menutup dengan pertanyaan yang tidak mudah namun mendesak: Apakah kita akan menjadi lebih bahagia? Lebih bijak? Atau kita hanya akan mengulangi pola lama yang destruktif dengan alat yang jauh lebih kuat dan berbahaya?",
      },
    ],
    actionableSteps: [
      {
        stepId: "B004-S1",
        task: "Pilih satu realitas yang Anda anggap pasti (negara, uang, hak asasi) dan tanyakan: cerita apa yang membuatnya nyata? Apa yang terjadi jika semua orang berhenti percaya?",
      },
      {
        stepId: "B004-S2",
        task: "Baca sejarah lokal daerah Anda dari perspektif kelompok yang paling sering terpinggirkan dalam narasi resmi.",
      },
      {
        stepId: "B004-S3",
        task: "Tanyakan pada diri sendiri: apakah keputusan karir atau hidup saya didasarkan pada fiksi bersama yang tidak saya sadari?",
      },
    ],
  },
  {
    bookId: "B005",
    title: "Deep Work",
    author: "Cal Newport",
    category: "Produktivitas",
    readingTimeMinutes: 13,
    coverStyle:
      "background:linear-gradient(160deg,#0a1628 0%,#0f2a4a 50%,#1a4070 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🎯</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#4fc3f7;line-height:1.3;">Deep Work</div><div style="width:36px;height:2px;background:#4fc3f7;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Cal Newport</div></div>',
    tags: ["fokus", "konsentrasi", "karir", "produktivitas"],
    bigIdea:
      "Kemampuan untuk fokus tanpa gangguan pada tugas kognitif yang menantang semakin langka dan semakin berharga. Deep work adalah superpower abad ke-21 yang bisa dipelajari dan dilatih.",
    analogy: {
      title: "Fokus Dalam adalah Otot yang Kebanyakan Orang Tak Pernah Latih",
      content:
        "Bayangkan seorang atlet maraton yang berlatih dengan cara aneh: setiap 5 menit ia berhenti dan mengecek ponselnya. Mustahil ia akan membangun stamina untuk menyelesaikan 42 kilometer.\n\nItulah yang kita lakukan dengan otot fokus kita setiap hari. Setiap kali Anda beralih ke notifikasi, Anda tidak sekadar membuang 30 detik—Anda merusak residue perhatian yang menumpuk selama beberapa menit setelah Anda kembali bekerja.\n\nDi dunia yang semakin terdistraksi, kemampuan deep work adalah diferensiator karir yang paling powerful. Dan sangat sedikit orang yang mau mengorbankan kenyamanan distraksi untuk mengembangkannya.",
    },
    chapters: [
      {
        num: 1,
        title: "Deep Work Is Valuable",
        summary:
          "Dua kemampuan yang akan mendominasi ekonomi pengetahuan baru: kemampuan untuk menguasai hal-hal yang sulit dengan cepat, dan kemampuan untuk menghasilkan output yang luar biasa dalam hal kualitas dan kecepatan. Keduanya hanya bisa dicapai melalui deep work yang konsisten. Paradoksnya: saat deep work semakin berharga secara ekonomi, ia juga semakin langka karena distraksi semakin mudah diakses dan semakin memuaskan secara psikologis jangka pendek.",
      },
      {
        num: 2,
        title: "Deep Work Is Rare",
        summary:
          "Tiga tren yang menghancurkan deep work di tempat kerja modern: open office plan yang mengorbankan konsentrasi demi kolaborasi, instant messaging yang menciptakan ekspektasi respons segera sepanjang hari, dan budaya presence broadcasting di mana terlihat sibuk dianggap sama dengan produktif. Bisnis mengadopsi semua tren ini bukan karena terbukti meningkatkan output—buktinya tidak ada—melainkan karena mudah diimplementasikan.",
      },
      {
        num: 3,
        title: "Deep Work Is Meaningful",
        summary:
          "Deep work bukan sekadar strategi produktivitas—ia adalah cara menjalani kehidupan yang bermakna dan memuaskan. Pengrajin terbaik menemukan makna dalam pekerjaan mereka bukan dari apa yang dibuat, melainkan dari pengalaman mendalam membuat itu sendiri—keadaan flow yang muncul dari menantang kemampuan diri di batas kompetensinya. Dari Aristotle hingga Csikszentmihalyi, tradisi filsafat dan psikologi sepakat: engagement mendalam menghasilkan eudaimonia.",
      },
      {
        num: 4,
        title: "Work Deeply",
        summary:
          "Aturan Pertama: bekerja dengan sangat mendalam dan rencanakan bagaimana caranya secara eksplisit. Empat filosofi deep work: Monastic (isolasi total seperti Donald Knuth yang tidak punya email), Bimodal (isolasi terjadwal dalam periode panjang), Rhythmic (jadwal harian yang konsisten setiap hari), dan Journalistic (memanfaatkan celah waktu apapun yang tersedia). Pilih berdasarkan kondisi pekerjaan dan hidup Anda—tidak ada satu filosofi yang cocok untuk semua orang.",
      },
      {
        num: 5,
        title: "Embrace Boredom",
        summary:
          "Aturan Kedua: rangkul kebosanan secara aktif dan sistematis sebagai latihan mental. Otak yang terbiasa distraksi akan tetap terdistraksi bahkan tanpa gangguan eksternal—ia akan menciptakan distraksi sendiri karena sudah dikondisikan untuk selalu terstimulasi. Latihan aktif: izinkan diri Anda bosan dengan penuh kesadaran. Antri tanpa melihat ponsel. Duduk diam saat transit. Ini bukan pemborosan waktu—ini adalah latihan otot fokus yang esensial.",
      },
      {
        num: 6,
        title: "Quit Social Media",
        summary:
          "Aturan Ketiga: pertimbangkan serius untuk meninggalkan media sosial atau membatasi penggunaannya secara dramatis. Bukan karena media sosial itu jahat secara inheren, tapi karena ia mengklaim perhatian Anda dengan cara yang tidak proporsional dengan manfaat aktual yang diberikannya. Gunakan craftsman approach: adopsi alat hanya jika manfaat substansialnya untuk tujuan yang benar-benar penting secara jelas melebihi biaya perhatian yang harus dibayar.",
      },
      {
        num: 7,
        title: "Drain the Shallows",
        summary:
          "Aturan Keempat: kurangi shallow work seminimal mungkin dan secara aktif. Time blocking—menjadwalkan setiap menit hari Anda dengan sengaja—bukan tentang kekakuan, melainkan tentang kesengajaan yang memberdayakan. Saat Anda tidak punya jadwal, otak Anda mengambil jalur termudah secara default: email, chat, browsing. Newport menunjukkan bahwa akademisi paling produktif menulis lebih sedikit email—ini bukan kebetulan sama sekali.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B005-S1",
        task: "Blok 90 menit besok untuk deep work: tutup email, matikan semua notifikasi, kerjakan satu tugas terpenting Anda.",
      },
      {
        stepId: "B005-S2",
        task: "Hitung berapa jam per hari Anda habiskan untuk deep work vs shallow work minggu ini. Hasilnya mungkin mengejutkan.",
      },
      {
        stepId: "B005-S3",
        task: "Coba 30 hari tanpa satu platform media sosial pilihan Anda. Catat apa yang berubah pada produktivitas dan kualitas berpikir Anda.",
      },
      {
        stepId: "B005-S4",
        task: "Buat shutdown ritual harian: sebelum menutup laptop, rencanakan blok deep work untuk besok dan ucapkan shutdown complete secara literal.",
      },
    ],
  },
  {
    bookId: "B006",
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Bisnis",
    readingTimeMinutes: 12,
    coverStyle:
      "background:linear-gradient(160deg,#0a0a0a 0%,#1a1a1a 50%,#2a2020 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🚀</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#e8a020;line-height:1.3;">Zero to One</div><div style="width:36px;height:2px;background:#e8a020;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Peter Thiel</div></div>',
    tags: ["startup", "inovasi", "monopoli", "teknologi"],
    bigIdea:
      "Setiap bisnis yang sukses dibangun di atas monopoli rahasia—pemahaman tentang dunia yang tidak diketahui atau tidak dipedulikan orang lain. Dari 0 ke 1, bukan dari 1 ke n.",
    analogy: {
      title: "Bisnis Besar adalah Peta Harta Karun yang Orang Lain Tidak Punya",
      content:
        "Bayangkan kompetisi bisnis seperti berburu harta karun di pulau yang sama. Semua orang membaca peta yang sama, berlomba ke lokasi yang sama. Hasilnya melelahkan dan marginnya tipis.\n\nSeorang pengusaha sejati tidak bermain di peta itu. Ia mencari—atau menggambar—peta yang sama sekali berbeda. Ia menemukan pulau yang belum ada di atlas. Ketika ia tiba di sana, tidak ada yang bersaing dengannya.\n\nPertanyaan yang tepat bukan bagaimana kita mengalahkan kompetitor, tapi bisnis penting apa yang belum ada? Kebenaran apa yang sangat sedikit orang setujui dengan Anda?",
    },
    chapters: [
      {
        num: 1,
        title: "The Challenge of the Future",
        summary:
          "Kemajuan bisa bersifat horizontal—menyalin hal yang berhasil dan melakukan lebih banyak (1 ke n, globalisasi)—atau vertikal—menciptakan sesuatu yang benar-benar baru (0 ke 1, teknologi). Dunia membutuhkan lebih banyak inovasi vertikal. Startup adalah kendaraan terbaik untuk menciptakan kemajuan vertikal karena mereka cukup kecil untuk bergerak cepat namun cukup terfokus untuk melakukan satu hal yang benar-benar baru dengan sangat baik.",
      },
      {
        num: 2,
        title: "Party Like It's 1999",
        summary:
          "Dot-com bubble meninggalkan luka psikologis mendalam pada Silicon Valley. Reaksi terhadap crash itu melahirkan empat prinsip yang Thiel percaya salah: lebih inkremental daripada ambisius, lebih lean daripada punya rencana yang jelas, bersaing daripada mencari monopoli, fokus pada produk daripada penjualan. Pelajaran-pelajaran ini benar sebagai reaksi terhadap kegilaan 1999, tapi salah sebagai prinsip universal.",
      },
      {
        num: 3,
        title: "All Happy Companies Are Different",
        summary:
          "Semua perusahaan yang gagal gagal dengan cara yang sama: mereka tidak berhasil melarikan diri dari kompetisi. Monopoli menghasilkan profit yang besar; kompetisi sempurna tidak menghasilkan profit sama sekali dalam jangka panjang. Perusahaan yang kompetitif sering berbohong kepada diri sendiri bahwa mereka unik—dan perusahaan monopoli sering berbohong bahwa mereka bukan monopoli untuk menghindari perhatian regulator.",
      },
      {
        num: 4,
        title: "The Ideology of Competition",
        summary:
          "Kompetisi adalah ideologi yang kita internalisasi dari sekolah dan sistem pendidikan yang ternyata menghancurkan nilai nyata. Kita diajarkan bahwa arena yang paling kompetitif adalah yang paling bergengsi. Namun dalam bisnis, kompetisi yang paling sengit sering kali ada di industri yang paling tidak menguntungkan. Restoran berkompetisi jauh lebih sengit dari Google, tapi Google jauh lebih profitable—ini bukan kebetulan.",
      },
      {
        num: 5,
        title: "Last Mover Advantage",
        summary:
          "Bukan first mover yang penting dalam jangka panjang, melainkan last mover—perusahaan yang membuat gerakan terakhir yang definitif dan sulit ditiru. Google bukan mesin pencari pertama, Facebook bukan jejaring sosial pertama. Yang terpenting adalah membangun karakteristik monopoli yang bertahan: teknologi proprietary yang 10x lebih baik, network effect yang semakin kuat, economies of scale, dan brand yang kuat.",
      },
      {
        num: 6,
        title: "You Are Not a Lottery Ticket",
        summary:
          "Thiel mengidentifikasi empat worldview: Indefinite pessimism, Definite pessimism, Indefinite optimism (semua akan baik tapi tidak tahu bagaimana), dan Definite optimism (membangun masa depan konkret dengan rencana spesifik). Yang keempat adalah yang paling langka dan yang membangun perusahaan besar. Startup yang paling sukses dipimpin oleh orang yang memiliki rencana spesifik tentang masa depan, bukan yang hanya mengikuti arus.",
      },
      {
        num: 7,
        title: "Follow the Money",
        summary:
          "Power law mendominasi dunia venture capital: satu atau dua investasi dari seluruh portofolio menghasilkan sebagian besar return total. Ini berarti diversifikasi luas adalah strategi yang salah bagi investor VC—dan juga bagi individu dalam karir mereka. Lebih baik terkonsentrasi pada satu atau dua peluang yang benar-benar luar biasa daripada menyebar tipis di banyak peluang rata-rata.",
      },
      {
        num: 8,
        title: "Secrets",
        summary:
          "Thiel percaya dunia masih penuh dengan rahasia—kebenaran penting yang tidak diketahui banyak orang. Perusahaan hebat dibangun di atas rahasia tentang dunia yang orang lain abaikan. Uber menemukan bahwa orang bersedia naik kendaraan orang asing jika ada sistem rating. Airbnb menemukan bahwa orang bersedia tidur di tempat orang asing. Pertanyaan kritis: apa yang kamu percayai sebagai kebenaran yang hampir tidak ada orang setujui dengan kamu?",
      },
      {
        num: 9,
        title: "Foundations",
        summary:
          "Thiel's Law: startup yang rusak secara fundamental di awal tidak bisa diperbaiki tanpa biaya yang sangat besar. Keputusan founding—siapa yang mendirikan, bagaimana pembagian equity, siapa yang mengontrol board—membentuk DNA perusahaan secara permanen. Co-founders harus memiliki hubungan yang sudah teruji sebelumnya. Banyak startup potensial gagal bukan karena produk yang buruk, melainkan karena konflik internal founding team.",
      },
      {
        num: 10,
        title: "The Mechanics of Mafia",
        summary:
          "PayPal Mafia—mantan karyawan PayPal yang kemudian mendirikan Tesla, LinkedIn, YouTube, Yelp, dan lainnya—adalah contoh terbaik dari budaya startup yang ideal. Kunci: mereka benar-benar percaya pada misi yang sama dan memiliki pandangan dunia yang kohesif. Thiel merekrut orang yang ingin bergabung dengan misi spesifik PayPal, bukan yang hanya mencari gaji tinggi atau prestise yang dangkal.",
      },
      {
        num: 11,
        title: "If You Build It, Will They Come?",
        summary:
          "Distribusi dan penjualan sama pentingnya dengan produk itu sendiri, namun sering diremehkan oleh founder berlatar belakang teknis. If you build it, they will come adalah mitos berbahaya yang menghancurkan banyak startup berbakat. Setiap bisnis membutuhkan strategi distribusi yang eksplisit dan terencana sejak awal. Superior sales and distribution tanpa produk terbaik seringkali lebih berhasil dari produk terbaik tanpa sales yang baik.",
      },
      {
        num: 12,
        title: "Man and Machine",
        summary:
          "Ketakutan bahwa AI akan menggantikan semua pekerjaan manusia adalah salah bingkai yang menyesatkan. Komputer adalah alat yang melengkapi kemampuan manusia, bukan pengganti yang menyeluruh. LinkedIn tidak mengambil alih pekerjaan recruiter—ia membuatnya jauh lebih efektif. Peluang bisnis terbesar ada di persimpangan yang sinergis antara manusia dan mesin, bukan dalam kompetisi langsung di antara keduanya.",
      },
      {
        num: 13,
        title: "Seeing Green",
        summary:
          "Studi kasus mendalam tentang kegagalan cleantech boom 2000-an. Ratusan startup gagal karena melakukan kesalahan mendasar yang sama: tidak punya teknologi yang genuine 10x lebih baik, tidak memahami timing pasar, tidak memiliki monopoli awal di niche yang jelas, salah pilih tim, dan salah strategi distribusi. Tesla berhasil karena menjawab semua pertanyaan ini dengan benar dan memiliki rencana yang jelas untuk setiap tantangan.",
      },
      {
        num: 14,
        title: "The Founder's Paradox",
        summary:
          "Founder terbaik sering kali adalah individu dengan karakteristik yang tampak kontradiktif: introvert sekaligus charismatic, visioner sekaligus pragmatis, idealis sekaligus manipulatif ketika diperlukan. Mereka bukan orang biasa dalam pengertian statistik. Masyarakat membutuhkan mereka untuk mendorong kemajuan yang berarti, namun juga perlu waspada terhadap kultus kepribadian yang sering terbentuk di sekitar mereka.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B006-S1",
        task: "Jawab pertanyaan Thiel: kebenaran penting apa yang sangat sedikit orang setuju dengan kamu? Tulis jawabannya—ini latihan menemukan monopoli rahasia Anda.",
      },
      {
        stepId: "B006-S2",
        task: "Evaluasi bisnis atau proyek Anda saat ini: apakah Anda bersaing di pasar yang sudah ada, atau menciptakan kategori baru yang minimal 10x lebih baik?",
      },
      {
        stepId: "B006-S3",
        task: "Riset satu perusahaan monopoli yang Anda kagumi (Google, Gojek, Apple) dan identifikasi rahasia apa yang mereka temukan yang orang lain lewatkan.",
      },
    ],
  },
  {
    bookId: "B007",
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    category: "Psikologi",
    readingTimeMinutes: 10,
    coverStyle:
      "background:linear-gradient(160deg,#1a0a2e 0%,#2d1060 50%,#4a1880 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🕊️</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#ce93d8;line-height:1.3;">Man\'s Search<br>for Meaning</div><div style="width:36px;height:2px;background:#ce93d8;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Viktor E. Frankl</div></div>',
    tags: ["eksistensial", "makna", "ketahanan", "logoterapi"],
    bigIdea:
      "Manusia dapat menanggung hampir semua penderitaan jika ia menemukan makna di dalamnya. Makna—bukan kesenangan atau kekuasaan—adalah motivasi utama manusia.",
    analogy: {
      title:
        "Manusia adalah Kapal yang Bertahan karena Memiliki Pelabuhan Tujuan",
      content:
        "Bayangkan dua kapal dalam badai yang sama: gelombang yang sama, angin yang sama, durasi yang sama. Kapal pertama tidak tahu ke mana ia pergi—ia hanya berlayar tanpa tujuan. Kapal kedua memiliki pelabuhan yang jelas di benaknya, orang-orang yang menunggunya, muatan yang harus diantarkan.\n\nFrankl menulis buku ini setelah selamat dari kamp konsentrasi Nazi, termasuk Auschwitz. Para tahanan yang paling kuat secara fisik tidak selalu yang bertahan. Yang bertahan adalah mereka yang memiliki mengapa—anak yang menunggu, manuskrip yang harus diselesaikan, cinta yang harus dibuktikan.\n\nSiapa yang memiliki alasan untuk hidup dapat menanggung hampir semua cara hidup.",
    },
    chapters: [
      {
        num: 1,
        title: "Experiences in a Concentration Camp: Phase One",
        summary:
          "Fase pertama: shock saat pertama kali tiba di kamp konsentrasi. Frankl menggambarkan proses dehumanisasi yang sistematis—penyitaan harta benda, pencukuran, penomoran, dan penghapusan identitas personal secara paksa. Namun ia mengamati sesuatu yang menarik: pikiran pertama para tahanan bukan tentang penyiksaan fisik yang mereka hadapi, melainkan tentang bagaimana mempertahankan sesuatu dari kehidupan sebelumnya—sebuah foto, nama yang masih diingat, kemanusiaan yang tersisa.",
      },
      {
        num: 2,
        title: "Experiences in a Concentration Camp: Phase Two",
        summary:
          "Fase kedua: apati dan mati rasa emosional sebagai mekanisme pertahanan diri yang terbentuk secara tidak sadar. Setelah shock awal, para tahanan masuk ke kondisi di mana bahkan penderitaan orang lain tidak lagi menggerakkan rasa iba. Rasa lapar yang terus-menerus, kelelahan fisik ekstrem, dan dehumanisasi rutin menciptakan kondisi psikologis yang ekstrem. Frankl mengamati semua ini bukan hanya sebagai korban, tapi juga sebagai psikiatris yang terus menganalisis fenomena yang ia saksikan langsung.",
      },
      {
        num: 3,
        title: "Experiences in a Concentration Camp: Phase Three",
        summary:
          "Sebagian tahanan yang selamat mengalami fase ketiga: depersonalisasi—rasa bahwa semua yang terjadi seperti mimpi buruk yang mereka saksikan dari luar tubuh mereka sendiri. Frankl mencatat bahwa imajinasi—terutama membayangkan orang yang dicintai dan kehidupan setelah kamp—adalah pelindung mental yang sangat kuat dan nyata. Mereka yang masih bisa membayangkan masa depan memiliki peluang bertahan yang jauh lebih besar.",
      },
      {
        num: 4,
        title: "The Last of Human Freedoms",
        summary:
          "Di kamp konsentrasi, segalanya bisa dirampas: harta, kesehatan, kebebasan bergerak, bahkan nyawa. Tapi ada satu hal yang tidak bisa dirampas siapapun: kebebasan untuk memilih sikap terhadap kondisi apapun yang diberikan. Ini adalah insight sentral logoterapi. Frankl menyaksikan para penjaga yang brutal dan para tahanan yang dengan tenang memberikan roti terakhir mereka kepada yang lebih lapar—keduanya membuktikan kapasitas manusia yang berlawanan untuk memilih respons mereka.",
      },
      {
        num: 5,
        title: "Meaning Through Suffering",
        summary:
          "Frankl membedakan antara penderitaan yang tak terelakkan dan penderitaan yang bisa dihindari. Yang pertama—seperti kondisi kamp yang tidak bisa ia ubah—bisa menjadi sumber makna jika dihadapi dengan sikap yang tepat. Yang kedua hanyalah masochisme yang tidak berguna. Kunci bukan mencari penderitaan, melainkan menemukan makna dalam penderitaan yang sudah ada dan tidak bisa dihindari. Ini bukan pasif—ini adalah bentuk keberanian yang paling aktif.",
      },
      {
        num: 6,
        title: "Meaning Through Love",
        summary:
          "Dalam salah satu scene paling powerful dalam buku: di tengah perjalanan paksa dalam cuaca beku, Frankl dibawa ke dalam dialog batin yang panjang dengan istrinya—ia tidak tahu apakah istrinya masih hidup. Ia merealisasikan bahwa cinta adalah cara manusia melampaui kondisi fisiknya. Wajah istrinya di benaknya memberikan makna dan kekuatan yang tidak bisa diberikan oleh kondisi fisik apapun. Ini adalah titik ketika logoterapi mulai terbentuk secara konkret.",
      },
      {
        num: 7,
        title: "Three Avenues to Meaning",
        summary:
          "Frankl mengidentifikasi tiga jalan utama menuju makna: melalui karya atau perbuatan (memberikan sesuatu kepada dunia), melalui pengalaman atau pertemuan dengan seseorang (menerima sesuatu dari dunia, termasuk cinta dan keindahan), dan melalui sikap yang kita ambil terhadap penderitaan yang tak terelakkan. Jalan ketiga ini adalah yang paling paradoks dan paling revolusioner—menemukan makna justru di dalam penderitaan yang tidak bisa dihindari.",
      },
      {
        num: 8,
        title: "Logotherapy in a Nutshell",
        summary:
          "Logoterapi berbeda dari psikoanalisis Freud yang mencari kesenangan dan berorientasi masa lalu, serta psikologi individual Adler yang mencari kekuasaan. Logoterapi berorientasi ke depan dan berfokus pada pencarian makna. Dua teknik utama: dereflection (mengalihkan perhatian dari diri sendiri ke makna yang perlu dipenuhi di dunia) dan paradoxical intention (menghadapi ketakutan secara langsung untuk meruntuhkan anxiety yang self-reinforcing melalui humor).",
      },
      {
        num: 9,
        title: "The Meaning of Suffering",
        summary:
          "Frankl menceritakan konsultasi dengan seorang dokter tua yang sangat berduka setelah kematian istrinya dua tahun lalu. Frankl bertanya: apa yang akan terjadi jika Anda yang meninggal lebih dulu, dan istri Anda yang harus hidup tanpa Anda? Dokter itu terdiam, lalu berkata: sungguh menderita untuk dia. Frankl menjawab: penderitaan Anda adalah harga dari cinta Anda. Sekarang ia terbebas dari penderitaan itu, dengan harga Anda yang membayarnya. Dokter itu berdiri dan meninggalkan ruangan dengan tenang.",
      },
      {
        num: 10,
        title: "The Super-Meaning and Self-Transcendence",
        summary:
          "Frankl berpendapat bahwa manusia memiliki kapasitas untuk melampaui dirinya sendiri—untuk mengacu pada nilai atau tujuan yang lebih besar dari kepentingan pribadi. Ia menyebut ini self-transcendence. Paradoks kebahagiaan: kepuasan dan makna paling mudah ditemukan bukan ketika kita mencarinya secara langsung, melainkan ketika kita melupakan diri sendiri dalam pelayanan kepada orang lain atau kepada sesuatu yang kita percayai lebih besar dari diri kita.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B007-S1",
        task: "Tulis jawaban untuk pertanyaan ini: apa tiga hal yang memberi makna—bukan sekadar kesenangan—pada hidupmu sekarang? Ada bedanya yang besar.",
      },
      {
        stepId: "B007-S2",
        task: "Identifikasi satu penderitaan yang sedang kamu hadapi saat ini. Tanyakan: apa yang bisa aku pelajari atau berikan kepada orang lain dari situasi ini?",
      },
      {
        stepId: "B007-S3",
        task: "Lakukan satu tindakan minggu ini yang semata-mata untuk orang lain atau sesuatu yang lebih besar dari dirimu sendiri. Catat bagaimana perasaanmu setelahnya.",
      },
    ],
  },
  {
    bookId: "B008",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Sains",
    readingTimeMinutes: 15,
    coverStyle:
      "background:linear-gradient(160deg,#000010 0%,#00001a 30%,#000530 60%,#001050 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🌌</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#64b5f6;line-height:1.3;">A Brief History<br>of Time</div><div style="width:36px;height:2px;background:#64b5f6;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Stephen Hawking</div></div>',
    tags: ["fisika", "alam semesta", "waktu", "kosmologi"],
    bigIdea:
      "Alam semesta memiliki awal, mungkin akan memiliki akhir, dan semua yang ada di antaranya—termasuk waktu itu sendiri—bisa dijelaskan dengan hukum-hukum yang belum sepenuhnya kita pahami.",
    analogy: {
      title: "Waktu Bukan Sungai—Ia adalah Kain yang Bisa Ditekuk",
      content:
        "Kita semua tumbuh dengan ide bahwa waktu mengalir seperti sungai—satu arah, konstan, sama untuk semua orang di mana pun. Namun Einstein membuktikan bahwa waktu adalah kain yang bisa ditekuk, diregangkan, dan dimampatkan oleh massa dan kecepatan.\n\nBayangkan meletakkan bola berat di atas kain elastis. Kain melengkung di sekitar bola. Itulah yang dilakukan massa terhadap kain ruang-waktu. Benda-benda bergerak mengikuti lekukan itu—bukan karena ada gaya gravitasi yang menarik, tapi karena mereka mengikuti jalur terpendek di kain yang melengkung.\n\nImplikasinya yang mengejutkan: tidak ada sekarang yang universal. Alam semesta jauh lebih aneh dan lebih indah dari yang bisa kita bayangkan dengan intuisi sehari-hari.",
    },
    chapters: [
      {
        num: 1,
        title: "Our Picture of the Universe",
        summary:
          "Hawking membuka dengan sejarah singkat kosmologi: dari model geosentris Aristoteles dan Ptolemy, revolusi Copernicus dan Galileo, hingga Newton yang merumuskan gravitasi sebagai kekuatan universal yang bisa dihitung. Poin utamanya: gambaran kita tentang alam semesta terus berkembang, dan ada alasan kuat untuk percaya bahwa gambaran kita hari ini pun masih jauh dari lengkap. Setiap generasi yakin mereka sudah hampir sampai pada kebenaran final—dan setiap generasi terbukti salah.",
      },
      {
        num: 2,
        title: "Space and Time",
        summary:
          "Teori relativitas khusus Einstein (1905) merevolusi pemahaman kita tentang ruang dan waktu. Dua postulat fundamentalnya: hukum fisika sama untuk semua pengamat yang bergerak seragam, dan kecepatan cahaya adalah konstanta universal. Konsekuensinya yang mengejutkan: tidak ada waktu absolut yang sama bagi semua orang. Dua pengamat yang bergerak relatif satu sama lain akan mengukur durasi waktu yang berbeda antara dua kejadian yang sama—bukan karena kesalahan pengukuran, melainkan karena itulah realitas fisika.",
      },
      {
        num: 3,
        title: "The Expanding Universe",
        summary:
          "Edwin Hubble menemukan pada 1929 bahwa galaksi-galaksi bergerak menjauh dari kita, dan yang lebih jauh bergerak lebih cepat. Kesimpulan revolusioner: alam semesta sedang mengembang. Jika film alam semesta diputar mundur, semua materi akan bertemu di satu titik singular di masa lalu yang kita sebut Big Bang, sekitar 13,8 miliar tahun lalu. Ini mengubah alam semesta dari sesuatu yang statis dan eternal menjadi objek dengan sejarah yang bisa dipelajari.",
      },
      {
        num: 4,
        title: "The Uncertainty Principle",
        summary:
          "Prinsip Ketidakpastian Heisenberg: tidak mungkin secara bersamaan mengetahui posisi dan kecepatan partikel secara presisi. Semakin tepat kita mengukur posisi, semakin tidak pasti kecepatannya, dan sebaliknya. Ini bukan keterbatasan alat ukur—ini adalah sifat fundamental alam semesta pada level kuantum. Prinsip ini merupakan dasar dari mekanika kuantum dan menyiratkan bahwa alam semesta pada level terkecil bersifat inherently probabilistik, bukan deterministik.",
      },
      {
        num: 5,
        title: "Elementary Particles and the Forces of Nature",
        summary:
          "Matter tersusun dari dua tipe partikel dasar: quark (penyusun proton dan neutron) dan lepton (termasuk elektron dan neutrino). Empat gaya fundamental: gravitasi (jangkauan tak terbatas, mendominasi skala kosmik), elektromagnetisme (mendominasi kimia dan kehidupan), gaya nuklir kuat (menjaga inti atom), dan gaya nuklir lemah (bertanggung jawab atas radioaktivitas). Fisikawan bermimpi tentang Theory of Everything yang bisa menyatukan keempatnya dalam satu framework matematis.",
      },
      {
        num: 6,
        title: "Black Holes",
        summary:
          "Lubang hitam terbentuk ketika massa yang sangat besar terkompresi ke dalam volume yang sangat kecil—densitas menjadi tak terbatas dan gravitasinya begitu kuat sehingga bahkan cahaya tidak bisa lolos dari event horizon (batas titik tanpa kembali). Karl Schwarzschild menghitung radius kritis ini menggunakan persamaan Einstein segera setelah publikasinya, saat ia bertugas di garis depan Perang Dunia I—sebuah pencapaian intelektual yang luar biasa dalam kondisi yang paling tidak mendukung.",
      },
      {
        num: 7,
        title: "Black Holes Ain't So Black",
        summary:
          "Penemuan terbesar Hawking: ketika fisika kuantum diterapkan pada event horizon lubang hitam, ternyata lubang hitam memancarkan radiasi—yang kini dikenal sebagai Hawking Radiation. Ini berarti lubang hitam perlahan menguap seiring waktu melalui emisi partikel. Penemuan ini memiliki implikasi mendalam untuk hubungan antara termodinamika, mekanika kuantum, dan relativitas umum—tiga pilar fisika modern yang belum berhasil disatukan dalam satu teori yang koheren.",
      },
      {
        num: 8,
        title: "The Origin and Fate of the Universe",
        summary:
          "Big Bang adalah awal dari ruang, waktu, dan semua energi yang ada di alam semesta. Pertanyaan apa yang ada sebelum Big Bang mungkin tidak bermakna secara fisika—tidak ada waktu sebelum Big Bang, sama seperti tidak ada tempat selatan dari kutub selatan. Nasib akhir alam semesta bergantung pada densitasnya: ekspansi yang terus dipercepat selamanya (yang tampaknya sedang terjadi berdasarkan pengamatan terkini), atau suatu hari akhirnya kolaps.",
      },
      {
        num: 9,
        title: "The Arrow of Time",
        summary:
          "Mengapa waktu mengalir ke depan dan bukan ke belakang? Hukum fisika hampir semua simetris terhadap waktu. Tapi ada anak panah waktu yang jelas dalam pengalaman kita. Hawking menghubungkan ini dengan peningkatan entropi—semua hal cenderung menjadi lebih tidak teratur seiring waktu (Hukum Termodinamika Kedua). Kita ingat masa lalu karena ia memiliki entropi yang lebih rendah dari masa kini, dan kita tidak bisa mengingat masa depan karena belum terjadi.",
      },
      {
        num: 10,
        title: "Wormholes and Time Travel",
        summary:
          "Relativitas umum secara matematis memungkinkan wormholes—terowongan singkat melalui ruang-waktu yang menghubungkan dua titik yang jauh. Apakah ini memungkinkan perjalanan waktu? Hawking sangat skeptis dan mengajukan Chronology Protection Conjecture: hukum fisika yang mungkin belum kita temukan akan selalu mencegah perjalanan balik ke masa lalu, sehingga mencegah paradoks logika seperti membunuh kakek sendiri sebelum orang tua Anda lahir.",
      },
      {
        num: 11,
        title: "The Forces of Nature and Unification",
        summary:
          "Grand Unified Theory berusaha menyatukan tiga dari empat gaya fundamental dalam satu framework matematis. String theory dan M-theory adalah kandidat terkini untuk Theory of Everything yang juga mengintegrasikan gravitasi. Implikasi menakjubkan dari string theory: mungkin ada 11 dimensi ruang-waktu, bukan empat yang kita alami. Dimensi-dimensi ekstra terlipat pada skala yang terlalu kecil untuk diobservasi dengan teknologi apapun yang ada saat ini.",
      },
      {
        num: 12,
        title: "Conclusion",
        summary:
          "Hawking menutup dengan merenungkan makna dari memahami alam semesta. Jika kita menemukan Theory of Everything, apakah kita benar-benar mengenal pikiran Tuhan seperti yang ia ekspresikan secara puitis? Ia berpendapat bahwa pemahaman ini, sekali tercapai, tidak boleh menjadi monopoli segelintir ilmuwan—ia harus bisa diakses oleh semua orang. Hanya dengan pemahaman yang luas, manusia sebagai spesies bisa berpartisipasi secara cerdas dalam keputusan tentang masa depannya sendiri.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B008-S1",
        task: "Unduh aplikasi Stellarium (gratis) dan habiskan 15 menit malam ini mengidentifikasi minimal 5 bintang atau konstelasi. Rasakan skala kosmos secara langsung.",
      },
      {
        stepId: "B008-S2",
        task: "Hitung perspektif ini: jika usia Bumi adalah 1 tahun kalender, manusia modern muncul pada 31 Desember pukul 23:30. Tulis refleksi Anda tentang apa artinya ini bagi prioritas hidup Anda.",
      },
      {
        stepId: "B008-S3",
        task: "Cari video simulasi lubang hitam atau Big Bang dari NASA atau ESA di YouTube. Visualisasi ilmiah jauh lebih powerful dari teks deskriptif apapun.",
      },
    ],
  },
  {
    bookId: "B009",
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Bisnis",
    readingTimeMinutes: 13,
    coverStyle:
      "background:linear-gradient(160deg,#1a0505 0%,#3d0a0a 50%,#7a1010 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">📊</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#ff6b6b;line-height:1.3;">The Lean<br>Startup</div><div style="width:36px;height:2px;background:#ff6b6b;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Eric Ries</div></div>',
    tags: ["startup", "agile", "validasi", "MVP"],
    bigIdea:
      "Startup yang sukses bukan yang paling kreatif atau bekerja paling keras, melainkan yang belajar paling cepat melalui siklus Build-Measure-Learn yang ketat dan terukur.",
    analogy: {
      title: "Startup adalah Eksperimen Ilmiah, Bukan Resep Masakan",
      content:
        "Banyak founder mendirikan startup seperti memasak resep: siapkan semua bahan dengan sempurna, masak dalam kegelapan selama 2 tahun, lalu buka pintu restoran. Tidak ada yang datang.\n\nPendekatan Lean Startup berbeda total. Ia memperlakukan startup seperti eksperimen ilmiah. Hipotesis Anda: ada orang yang mau membayar untuk solusi ini. Cara tercepat membuktikannya bukan dengan membangun produk lengkap, tapi dengan MVP—versi paling sederhana yang bisa menguji hipotesis.\n\nSemakin cepat Anda melakukan loop Build-Measure-Learn, semakin cepat Anda tahu apakah harus pivot atau persevere.",
    },
    chapters: [
      {
        num: 1,
        title: "Start",
        summary:
          "Entrepreneurship adalah jenis manajemen yang spesifik yang dirancang untuk kondisi ketidakpastian ekstrem. Definisi startup versi Ries: institusi manusia yang dirancang untuk menciptakan produk atau layanan baru dalam kondisi ketidakpastian yang sangat tinggi. Startup bukan hanya tentang teknologi atau industri tertentu—setiap orang yang membangun sesuatu baru dalam kondisi ketidakpastian adalah entrepreneur, termasuk mereka yang bekerja di dalam perusahaan besar.",
      },
      {
        num: 2,
        title: "Define",
        summary:
          "Validated learning adalah unit kemajuan yang sesungguhnya bagi startup—bukan produk yang diluncurkan, bukan baris kode yang ditulis, bukan pengguna yang mendaftar. Yang penting adalah apa yang Anda pelajari secara empiris tentang kondisi bisnis yang sesungguhnya. Ries menceritakan bagaimana IMVU, startup-nya sendiri, hampir gagal karena membangun fitur yang tidak diinginkan pengguna selama berbulan-bulan meskipun tim bekerja sangat keras.",
      },
      {
        num: 3,
        title: "Learn",
        summary:
          "Masalah: banyak startup belajar hal yang salah, terlalu lambat, atau tidak belajar sama sekali. Productive disagreement hanya mungkin jika ada hipotesis yang bisa diuji dan data yang bisa diverifikasi secara independen. Tanpa ini, setiap diskusi strategi hanyalah pertukaran opini yang tidak menghasilkan kemajuan nyata. Belajar yang tidak bisa divalidasi secara empiris sebenarnya adalah pemborosan terselubung yang sangat mahal.",
      },
      {
        num: 4,
        title: "Experiment",
        summary:
          "Anggap setiap inisiatif startup sebagai eksperimen yang harus menguji dua asumsi utama: value hypothesis (apakah produk ini memberikan nilai kepada pelanggan?) dan growth hypothesis (bagaimana pelanggan baru menemukan produk ini?). Dua asumsi ini harus diuji sesegera mungkin sebelum menghabiskan sumber daya besar-besaran untuk membangun sesuatu yang mungkin tidak diinginkan siapapun.",
      },
      {
        num: 5,
        title: "Leap",
        summary:
          "Leap of faith assumptions adalah asumsi-asumsi paling penting dan paling tidak terbuktikan yang mendasari strategi bisnis Anda. Zappos tidak mulai dengan gudang sepatu besar—Nick Swinmurn pertama-tama memfoto sepatu dari toko lokal dan memposting di web untuk melihat apakah ada yang mau membeli online. Ini menguji asumsi paling kritis dengan investasi minimal dan memberikan jawaban yang jauh lebih akurat dari analisis pasar apapun.",
      },
      {
        num: 6,
        title: "Test",
        summary:
          "MVP adalah versi produk yang memungkinkan pengumpulan validated learning maksimum dengan usaha minimum—bukan produk yang diturunkan kualitasnya, melainkan eksperimen terdesain dengan tujuan spesifik. Dropbox membuktikan demand dengan video demonstrasi sederhana sebelum menulis satu baris kode. Waiting list mereka langsung terisi 75.000 nama—bukti yang jauh lebih valuable dari survei atau analisis pasar manapun.",
      },
      {
        num: 7,
        title: "Measure",
        summary:
          "Vanity metrics vs actionable metrics. Jumlah total pengguna, total page views, dan total revenue adalah vanity metrics yang terasa baik tapi tidak menginformasikan keputusan konkret. Yang dibutuhkan adalah cohort analysis—bagaimana kelompok pengguna yang bergabung pada waktu yang sama berperilaku dari waktu ke waktu—dan split testing yang ketat untuk mengetahui versi mana yang secara terukur bekerja lebih baik.",
      },
      {
        num: 8,
        title: "Pivot or Persevere",
        summary:
          "Pivot bukan kegagalan—ia adalah perubahan strategi terstruktur yang dirancang untuk menguji hipotesis fundamental baru sambil mempertahankan visi yang sama. Ada banyak tipe pivot: zoom-in (satu fitur menjadi produk utama), zoom-out (produk menjadi satu fitur dari produk lebih besar), customer segment pivot, customer need pivot, platform pivot, channel pivot, dan business architecture pivot.",
      },
      {
        num: 9,
        title: "Batch",
        summary:
          "Ukuran batch kecil menghasilkan feedback lebih cepat dan memungkinkan deteksi masalah lebih dini. Toyota menemukan hal ini dalam produksi manufaktur: berhenti lini produksi saat ada masalah kecil jauh lebih efisien dari membiarkan masalah mengalir ke seluruh lini. Prinsip ini berlaku untuk software development, marketing, product design, dan hampir semua proses bisnis yang melibatkan iterasi dan feedback yang berkelanjutan.",
      },
      {
        num: 10,
        title: "Grow",
        summary:
          "Tiga engine of growth: Sticky (pertumbuhan dari customer retention dan pengurangan churn), Viral (pertumbuhan dari rekomendasi organik antar pengguna), dan Paid (pertumbuhan dari pembelian iklan yang dibayar dari margin setiap pelanggan). Setiap startup harus mengidentifikasi engine of growth utamanya dan mengoptimalkan metrik yang menggerakkan engine tersebut—bukan mencoba mengoptimalkan semuanya sekaligus.",
      },
      {
        num: 11,
        title: "Adapt",
        summary:
          "Startup yang berhasil bertahan perlu mengembangkan kemampuan untuk beradaptasi tanpa kehilangan disiplin. Five Whys adalah teknik untuk menemukan akar masalah sistemik: ajukan pertanyaan mengapa lima kali berturut-turut dan Anda akan hampir selalu menemukan bahwa masalah teknis yang tampak sepele sebenarnya berakar pada masalah manusia atau proses yang lebih mendasar yang perlu diperbaiki.",
      },
      {
        num: 12,
        title: "Innovate",
        summary:
          "Inovasi berkelanjutan di dalam perusahaan besar membutuhkan tiga kondisi: sumber daya yang terjaga (tim inovasi dilindungi dari tekanan core business), otoritas yang independen (bisa membuat keputusan tanpa persetujuan hierarki panjang), dan personal stake (tim punya insentif yang terkait dengan keberhasilan inovasi). Tanpa ketiganya, inovasi dalam perusahaan besar hampir selalu terhambat oleh birokrasi dan insentif yang tidak tepat.",
      },
      {
        num: 13,
        title: "Epilogue: Waste Not",
        summary:
          "Lean Startup adalah cara untuk menggunakan sumber daya manusia yang paling berharga—waktu, energi, dan kreativitas—tanpa membuangnya sia-sia pada produk yang tidak diinginkan dan strategi yang tidak tervalidasi. Di seluruh dunia setiap hari, entrepreneur membangun produk yang tidak diinginkan dan perusahaan menghabiskan miliaran untuk proyek yang gagal. Metodologi Lean adalah cara sistematis untuk mengurangi pemborosan tragis ini.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B009-S1",
        task: "Tulis hipotesis bisnis Anda dalam satu kalimat: Saya percaya [pelanggan X] memiliki masalah [Y] dan bersedia membayar [Z] untuk [solusi A].",
      },
      {
        stepId: "B009-S2",
        task: "Rancang MVP Anda dalam 30 menit: apa yang bisa dibuat dalam 1-2 minggu untuk menguji hipotesis utama Anda?",
      },
      {
        stepId: "B009-S3",
        task: "Hubungi 5 calon pelanggan minggu ini untuk mendengar masalah mereka—catat kata-kata persisnya, bukan interpretasi Anda.",
      },
      {
        stepId: "B009-S4",
        task: "Tentukan satu actionable metric untuk iterasi berikutnya sebelum mulai membangun apapun. Bukan vanity metric.",
      },
    ],
  },
  {
    bookId: "B010",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    category: "Produktivitas",
    readingTimeMinutes: 16,
    coverStyle:
      "background:linear-gradient(160deg,#1a0a00 0%,#3d1f00 50%,#7a3d00 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">⭐</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#ffb347;line-height:1.3;">The 7 Habits of<br>Highly Effective<br>People</div><div style="width:36px;height:2px;background:#ffb347;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Stephen R. Covey</div></div>',
    tags: ["efektivitas", "karakter", "kebiasaan", "kepemimpinan"],
    bigIdea:
      "Efektivitas sejati bukan tentang manajemen waktu atau teknik produktivitas—melainkan tentang membangun karakter yang kuat dari dalam ke luar, berdasarkan prinsip-prinsip universal yang tidak bisa ditawar.",
    analogy: {
      title: "Efektivitas adalah Kompas, Bukan Jam",
      content:
        "Banyak orang sibuk mengoptimalkan jam mereka—bagaimana menyelesaikan lebih banyak tugas dalam waktu lebih sedikit. Mereka sangat efisien. Tapi efisien bukan berarti efektif.\n\nBayangkan seseorang yang dengan sangat efisien memanjat tangga—cepat, terampil, tanpa satu langkah yang terbuang. Baru di puncak ia sadar: tangganya bersandar di dinding yang salah.\n\nCovey berpendapat bahwa yang kita butuhkan bukan jam yang lebih canggih, tapi kompas—pemahaman yang jelas tentang ke mana kita sebenarnya ingin pergi. Tujuh kebiasaan bukan tentang melakukan lebih banyak, tapi tentang menjadi orang yang tepat sehingga hal-hal yang tepat mengalir secara alami.",
    },
    chapters: [
      {
        num: 1,
        title: "Inside-Out",
        summary:
          "Covey memperkenalkan konsep paradigma—lensa melalui mana kita melihat dunia. Sebagian besar buku pengembangan diri berfokus pada Personality Ethic: teknik, keterampilan, dan perilaku permukaan. Covey berpendapat bahwa efektivitas sejati hanya bisa dibangun di atas Character Ethic—integritas, kejujuran, martabat manusia, pelayanan, dan kontribusi. Perubahan luar yang tahan lama hanya bisa datang dari perubahan dalam yang nyata.",
      },
      {
        num: 2,
        title: "The 7 Habits: An Overview",
        summary:
          "Tujuh kebiasaan diorganisir dalam tiga tingkatan: Kebiasaan 1-3 membawa kita dari ketergantungan (dependence) ke kemandirian (independence)—kemenangan pribadi. Kebiasaan 4-6 membawa kita dari kemandirian ke saling ketergantungan (interdependence)—kemenangan publik. Kebiasaan 7 adalah renewal—mengasah gergaji. Seluruh model dibangun di atas Continuum of Maturity: dari bergantung pada orang lain, menjadi mandiri, lalu menjadi efektif bersama orang lain.",
      },
      {
        num: 3,
        title: "Habit 1: Be Proactive",
        summary:
          "Kebiasaan Pertama: jadilah proaktif. Manusia memiliki kebebasan untuk memilih respons terhadap stimulus apapun—inilah yang membedakan kita dari hewan. Antara stimulus dan respons, ada ruang. Di ruang itulah kebebasan dan kekuatan kita berada. Orang proaktif berfokus pada Circle of Influence—hal-hal yang bisa mereka pengaruhi. Orang reaktif berfokus pada Circle of Concern—hal-hal yang mereka khawatirkan tapi tidak bisa kendalikan. Energi proaktif memperbesar lingkaran pengaruh; energi reaktif mempersempitnya.",
      },
      {
        num: 4,
        title: "Habit 2: Begin with the End in Mind",
        summary:
          "Kebiasaan Kedua: mulailah dengan tujuan akhir di benak. Semua hal diciptakan dua kali: pertama dalam pikiran, kemudian dalam realitas. Covey mengajak pembaca membayangkan pemakaman mereka sendiri—apa yang ingin orang-orang katakan tentang Anda? Dari sana, tulis Personal Mission Statement—pernyataan tentang siapa Anda dan apa yang benar-benar Anda inginkan dari hidup. Ini adalah kompas yang memandu setiap keputusan besar dan kecil.",
      },
      {
        num: 5,
        title: "Habit 3: Put First Things First",
        summary:
          "Kebiasaan Ketiga: dahulukan yang utama. Covey memperkenalkan Time Management Matrix dengan empat kuadran berdasarkan urgensi dan kepentingan. Kuadran II—penting tapi tidak mendesak (perencanaan, pengembangan hubungan, pencegahan masalah, pengembangan diri)—adalah tempat efektivitas sejati dibangun. Kebanyakan orang terjebak di Kuadran I (krisis) dan Kuadran III (gangguan yang terasa mendesak). Orang efektif mendisiplinkan diri untuk menghabiskan waktu di Kuadran II.",
      },
      {
        num: 6,
        title: "Habit 4: Think Win-Win",
        summary:
          "Kebiasaan Keempat: berpikirlah menang-menang. Ada enam paradigma interaksi manusia: Win-Win, Win-Lose, Lose-Win, Lose-Lose, Win, dan Win-Win or No Deal. Win-Win bukan kompromi—ia adalah solusi yang benar-benar menguntungkan semua pihak. Ini membutuhkan karakter (integritas, kematangan, mentalitas kelimpahan), hubungan (rekening bank emosional yang terisi penuh), dan perjanjian yang jelas tentang ekspektasi, sumber daya, akuntabilitas, dan konsekuensi.",
      },
      {
        num: 7,
        title: "Habit 5: Seek First to Understand, Then to Be Understood",
        summary:
          "Kebiasaan Kelima: pahami dulu, baru dipahami. Kebanyakan orang mendengarkan dengan niat untuk membalas, bukan untuk memahami. Covey memperkenalkan Empathic Listening—mendengarkan dengan mata, telinga, dan hati untuk memahami sudut pandang orang lain. Empat tingkatan mendengarkan: mengabaikan, berpura-pura mendengar, mendengar selektif, dan mendengar penuh. Hanya empathic listening yang membangun kepercayaan dan membuka pintu untuk benar-benar dipahami balik.",
      },
      {
        num: 8,
        title: "Habit 6: Synergize",
        summary:
          "Kebiasaan Keenam: bersinergi. Sinergi berarti keseluruhan lebih besar dari jumlah bagian-bagiannya. 1 + 1 bisa menghasilkan 3, 10, atau bahkan 100. Ini hanya mungkin ketika orang-orang menghargai perbedaan—bukan sekadar mentoleransinya. Jalan rendah adalah Win-Lose atau Lose-Win (defensif, protektif). Jalan menengah adalah kompromi. Jalan tinggi adalah sinergi kreatif yang menghasilkan solusi yang tidak terpikirkan oleh siapapun sebelumnya.",
      },
      {
        num: 9,
        title: "Habit 7: Sharpen the Saw",
        summary:
          "Kebiasaan Ketujuh: asahlah gergaji. Seorang penebang pohon yang terlalu sibuk menebang tidak punya waktu untuk mengasah gergajinya. Hasilnya: semakin lama semakin lambat. Renewal harus terjadi di empat dimensi: fisik (olahraga, nutrisi, istirahat), sosial-emosional (hubungan bermakna, empati, kontribusi), mental (membaca, menulis, belajar, perencanaan), dan spiritual (klarifikasi nilai, meditasi, berhubungan dengan alam). Mengabaikan satu dimensi melemahkan semua yang lain.",
      },
      {
        num: 10,
        title: "Inside-Out Again",
        summary:
          "Covey menutup dengan menegaskan kembali bahwa semua tujuh kebiasaan adalah ekspresi dari satu prinsip: Inside-Out. Perubahan sejati—dalam hubungan, organisasi, dan masyarakat—dimulai dari dalam diri individu. Ia mengutip Viktor Frankl: antara stimulus dan respons ada kebebasan untuk memilih. Mengembangkan kebebasan itu melalui tujuh kebiasaan adalah perjalanan seumur hidup yang tidak pernah benar-benar selesai, hanya semakin dalam.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B010-S1",
        task: "Tulis Personal Mission Statement Anda: dalam satu paragraf, siapa Anda dan apa yang benar-benar penting bagi Anda dalam hidup ini?",
      },
      {
        stepId: "B010-S2",
        task: "Gambar Time Management Matrix minggu ini: kategorikan 10 aktivitas utama Anda ke dalam 4 kuadran. Berapa persen waktu Anda ada di Kuadran II?",
      },
      {
        stepId: "B010-S3",
        task: "Pilih satu hubungan penting dalam hidup Anda. Dalam percakapan berikutnya, praktikkan empathic listening penuh—dengarkan untuk memahami, bukan untuk membalas.",
      },
      {
        stepId: "B010-S4",
        task: "Jadwalkan satu aktivitas Kuadran II yang selalu tertunda minggu ini: olahraga, membaca buku penting, atau percakapan mendalam dengan seseorang yang Anda sayangi.",
      },
    ],
  },
  {
    bookId: "B011",
    title: "Influence",
    author: "Robert B. Cialdini",
    category: "Psikologi",
    readingTimeMinutes: 14,
    coverStyle:
      "background:linear-gradient(160deg,#0a1a0a 0%,#0f3320 50%,#1a5c35 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🎭</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#69f0ae;line-height:1.3;">Influence</div><div style="width:36px;height:2px;background:#69f0ae;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Robert B. Cialdini</div></div>',
    tags: ["persuasi", "psikologi sosial", "pengaruh", "pemasaran"],
    bigIdea:
      "Manusia menggunakan jalan pintas mental (heuristic) untuk membuat keputusan cepat. Enam prinsip pengaruh mengeksploitasi jalan pintas ini—memahaminya melindungi Anda sekaligus membuat Anda lebih persuasif.",
    analogy: {
      title: "Pengaruh adalah Kunci yang Pas untuk Gembok Psikologi Manusia",
      content:
        "Seekor kalkun betina merawat anaknya berdasarkan satu sinyal sederhana: suara cip-cip. Jika boneka musang—musuh alami kalkun—diisi dengan alat yang mengeluarkan suara cip-cip, sang induk kalkun akan merawatnya dengan penuh kasih. Tanpa suara itu, ia akan menyerangnya.\n\nManusia tidak jauh berbeda. Kita menggunakan jalan pintas mental untuk membuat keputusan cepat dalam dunia yang terlalu kompleks untuk dianalisis sepenuhnya. Jalan pintas ini biasanya bekerja dengan baik—tapi bisa dieksploitasi.\n\nCialdini menghabiskan tiga tahun menyamar sebagai sales, fundraiser, dan marketer untuk menemukan enam prinsip yang menjadi kunci gembok psikologi manusia. Memahaminya adalah pertahanan terbaik sekaligus senjata paling powerful.",
    },
    chapters: [
      {
        num: 1,
        title: "Weapons of Influence",
        summary:
          "Cialdini membuka dengan menjelaskan mengapa makhluk hidup—termasuk manusia—menggunakan jalan pintas otomatis untuk membuat keputusan. Dunia terlalu kompleks untuk menganalisis setiap situasi dari nol. Jalan pintas ini biasanya akurat dan efisien, tapi menciptakan kerentanan yang bisa dieksploitasi. Eksperimen klasik: harga yang lebih mahal sering kali meningkatkan penjualan karena otak menggunakan heuristik mahal berarti bagus tanpa berpikir lebih jauh.",
      },
      {
        num: 2,
        title: "Reciprocation",
        summary:
          "Prinsip Pertama: Timbal Balik. Manusia merasa sangat tidak nyaman jika menerima sesuatu tanpa membalasnya. Aturan timbal balik ini ada di semua budaya manusia yang dikenal. Para anggota Hare Krishna memberikan bunga gratis di bandara sebelum meminta donasi—dan berhasil meningkatkan donasi secara dramatis. Supermarket memberikan sampel gratis—bukan dari kemurahan hati, melainkan karena rasa berkewajiban yang timbul mendorong pembelian. Bahkan hadiah yang tidak diminta pun memicu kewajiban.",
      },
      {
        num: 3,
        title: "Commitment and Consistency",
        summary:
          "Prinsip Kedua: Komitmen dan Konsistensi. Begitu kita membuat komitmen—terutama secara publik dan tertulis—kita secara kuat termotivasi untuk berperilaku konsisten dengannya. Teknik foot-in-the-door: minta hal kecil dulu, lalu ajukan permintaan yang lebih besar. Perusahaan mobil meminta calon pembeli menandatangani formulir penawaran—bahkan sebelum harga final ditentukan—untuk memanfaatkan komitmen ini. Identitas diri kita berkembang mengikuti komitmen yang kita buat.",
      },
      {
        num: 4,
        title: "Social Proof",
        summary:
          "Prinsip Ketiga: Bukti Sosial. Kita menentukan apa yang benar atau tepat dengan melihat apa yang dilakukan orang lain—terutama dalam situasi yang tidak pasti. Ini menjelaskan kenapa laugh track di sitkom bekerja (kita tertawa lebih banyak), kenapa antrian panjang di restoran justru menarik orang, dan kenapa kesaksian pelanggan begitu efektif. Prinsip ini paling kuat saat kita tidak yakin dan saat kita melihat orang yang mirip dengan kita melakukan sesuatu.",
      },
      {
        num: 5,
        title: "Liking",
        summary:
          "Prinsip Keempat: Rasa Suka. Kita lebih mudah dipengaruhi oleh orang yang kita sukai. Faktor yang meningkatkan rasa suka: kemiripan (kita menyukai orang yang mirip dengan kita), pujian tulus, kedekatan dan keakraban, asosiasi dengan hal-hal positif, dan daya tarik fisik. Pesta Tupperware bekerja bukan karena produknya luar biasa, melainkan karena kita membeli dari teman yang kita sukai—bukan dari sales asing. Joe Girard, sales mobil terlaris di dunia, mengirimkan 13.000 kartu ucapan personal setiap bulan kepada pelanggannya.",
      },
      {
        num: 6,
        title: "Authority",
        summary:
          "Prinsip Kelima: Otoritas. Kita cenderung mengikuti arahan figur otoritas—dokter, hakim, pilot, ekspert—bahkan ketika kita tidak seharusnya melakukannya secara buta. Eksperimen Milgram yang terkenal: 65% partisipan bersedia memberikan sengatan listrik yang berpotensi mematikan hanya karena diperintahkan oleh orang berjas lab. Simbol otoritas—gelar, seragam, aksesori mahal—sering kali lebih powerful dari otoritas itu sendiri. Iklan pasta gigi yang mengklaim direkomendasikan dokter gigi adalah contoh klasik.",
      },
      {
        num: 7,
        title: "Scarcity",
        summary:
          "Prinsip Keenam: Kelangkaan. Kita menginginkan sesuatu lebih banyak saat ketersediaannya terbatas atau terancam berkurang. Ini bukan sekadar tentang nilai ekonomi—barang langka terasa lebih berharga secara psikologis terlepas dari kualitas aktualnya. Teknik limited time offer, only 3 left in stock, dan exclusive membership mengeksploitasi prinsip ini. Penting: kelangkaan yang baru muncul (sesuatu yang tadinya tersedia lalu menjadi langka) lebih powerful dari kelangkaan yang sudah ada sejak awal.",
      },
      {
        num: 8,
        title: "Instant Influence: Primitive Consent for an Automatic Age",
        summary:
          "Bab penutup merangkum bagaimana keenam prinsip bekerja secara sinergis dalam dunia modern yang semakin kompleks dan cepat. Cialdini berpendapat bahwa jalan pintas mental kita semakin rentan dieksploitasi karena volume keputusan yang harus kita buat terus meningkat sementara waktu dan energi kognitif kita terbatas. Pertahanan terbaik: kenali kapan jalan pintas Anda sedang diaktifkan, dan tanyakan apakah respons otomatis Anda benar-benar sesuai dengan kepentingan Anda.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B011-S1",
        task: "Identifikasi satu situasi minggu ini di mana Anda merasa terdorong untuk membeli atau menyetujui sesuatu. Prinsip mana yang sedang digunakan? Timbal balik, bukti sosial, kelangkaan, atau lainnya?",
      },
      {
        stepId: "B011-S2",
        task: "Coba teknik foot-in-the-door: minta satu hal kecil yang mudah disetujui sebelum mengajukan permintaan yang lebih besar kepada seseorang yang perlu Anda pengaruhi.",
      },
      {
        stepId: "B011-S3",
        task: "Audit satu keputusan pembelian besar yang pernah Anda buat. Prinsip pengaruh apa yang mungkin memengaruhi keputusan tersebut tanpa Anda sadari?",
      },
      {
        stepId: "B011-S4",
        task: "Saat Anda merasa urgensi atau kelangkaan mendorong keputusan Anda, berhenti sejenak dan tanyakan: apakah saya menginginkan ini karena benar-benar berharga, atau karena takut kehilangan?",
      },
    ],
  },
  {
    bookId: "B012",
    title: "Good to Great",
    author: "Jim Collins",
    category: "Bisnis",
    readingTimeMinutes: 14,
    coverStyle:
      "background:linear-gradient(160deg,#0a0a1a 0%,#1a1a3d 50%,#2a2a6b 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🏆</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#7986cb;line-height:1.3;">Good to Great</div><div style="width:36px;height:2px;background:#7986cb;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Jim Collins</div></div>',
    tags: ["bisnis", "kepemimpinan", "strategi", "organisasi"],
    bigIdea:
      "Good adalah musuh terbesar dari great. Perusahaan yang bertransisi dari baik menjadi luar biasa bukan karena satu momen besar, melainkan karena akumulasi keputusan disiplin yang konsisten selama bertahun-tahun.",
    analogy: {
      title: "Roda Flywheel: Tidak Ada Satu Momen Ajaib",
      content:
        "Bayangkan sebuah roda flywheel raksasa yang sangat berat. Di awalnya, Anda mendorong dengan sekuat tenaga—roda hampir tidak bergerak. Anda terus mendorong, hari demi hari, minggu demi minggu. Perlahan roda mulai berputar. Satu putaran. Dua putaran. Lalu semakin cepat.\n\nTidak ada satu dorongan tunggal yang membuat roda itu berputar kencang. Tidak ada satu momen dramatis. Yang ada hanyalah konsistensi dan disiplin yang terakumulasi.\n\nItulah yang Collins temukan setelah meneliti 1.435 perusahaan selama 5 tahun: tidak ada perusahaan yang bertransisi dari good to great karena satu keputusan revolusioner, satu pemimpin karismatik, atau satu program transformasi besar. Yang ada adalah flywheel effect—dorongan konsisten yang akhirnya menciptakan momentum yang tidak terbendung.",
    },
    chapters: [
      {
        num: 1,
        title: "Good is the Enemy of Great",
        summary:
          "Collins dan timnya meneliti 1.435 perusahaan Fortune 500 selama lebih dari 40 tahun untuk menemukan 11 perusahaan yang berhasil bertransisi dari good to great—mendefinisikannya sebagai return saham minimal 3x rata-rata pasar selama 15 tahun. Temuan mengejutkan pertama: sebagian besar perusahaan yang baik tidak pernah menjadi luar biasa bukan karena mereka buruk, melainkan karena mereka sudah cukup baik. Good adalah musuh terbesar dari great.",
      },
      {
        num: 2,
        title: "Level 5 Leadership",
        summary:
          "Pemimpin yang membawa perusahaan dari good to great hampir selalu memiliki kombinasi yang paradoks: kerendahan hati yang luar biasa di luar, namun kemauan profesional yang sangat kuat di dalam. Mereka menyalurkan ambisi ke perusahaan, bukan ke diri sendiri. Saat sukses, mereka melihat ke luar jendela untuk memberikan kredit kepada orang lain. Saat gagal, mereka melihat ke cermin untuk mengambil tanggung jawab. Ini bertentangan dengan mitos CEO karismatik yang menjadi bintang media.",
      },
      {
        num: 3,
        title: "First Who, Then What",
        summary:
          "Pemimpin good-to-great tidak memulai dengan visi dan strategi lalu merekrut orang untuk menjalankannya. Mereka memulai dengan mendapatkan orang yang tepat di dalam bus, mengeluarkan orang yang salah, lalu baru memutuskan ke mana bus akan pergi. Alasannya: jika Anda memiliki orang yang tepat, masalah motivasi dan manajemen hampir menghilang sendiri. Mereka termotivasi dari dalam dan tidak perlu dikelola secara ketat.",
      },
      {
        num: 4,
        title: "Confront the Brutal Facts",
        summary:
          "Semua perusahaan good-to-great memiliki satu kesamaan: mereka menciptakan budaya di mana kebenaran bisa didengar—bahkan kebenaran yang pahit dan tidak menyenangkan. Paradoks Stockdale: pertahankan keyakinan absolut bahwa Anda akan menang pada akhirnya, sekaligus hadapi fakta-fakta brutal dari realitas saat ini dengan penuh kejujuran. Jangan membingungkan keyakinan bahwa Anda akan menang dengan keyakinan bahwa Anda akan menang segera atau dengan mudah.",
      },
      {
        num: 5,
        title: "The Hedgehog Concept",
        summary:
          "Rubah tahu banyak hal tapi kucing hutan tahu satu hal yang sangat penting. Perusahaan good-to-great beroperasi seperti landak—mereka menemukan satu konsep sederhana yang menjawab tiga pertanyaan sekaligus: apa yang bisa Anda menjadi terbaik di dunia (dan sama pentingnya, apa yang tidak bisa), apa yang menggerakkan mesin ekonomi Anda (satu metrik yang paling penting), dan apa yang membuat Anda sangat bersemangat. Strategi terbaik muncul dari persimpangan ketiga lingkaran ini.",
      },
      {
        num: 6,
        title: "A Culture of Discipline",
        summary:
          "Perusahaan good-to-great memiliki budaya disiplin yang unik—bukan disiplin dari hierarki dan kontrol, melainkan dari orang-orang yang disiplin dalam tindakan mereka. Ketika Anda memiliki orang yang disiplin, Anda tidak membutuhkan hierarki. Ketika Anda memiliki pemikiran yang disiplin, Anda tidak membutuhkan birokrasi. Ketika Anda memiliki tindakan yang disiplin, Anda tidak membutuhkan kontrol yang berlebihan. Kebebasan dalam kerangka yang jelas—bukan kebebasan tanpa batas.",
      },
      {
        num: 7,
        title: "Technology Accelerators",
        summary:
          "Perusahaan good-to-great memiliki hubungan yang berbeda dengan teknologi dibanding perusahaan biasa. Mereka tidak pernah menggunakan teknologi sebagai penggerak utama transformasi—teknologi adalah akselerator dari momentum yang sudah ada, bukan pencipta momentum. Mereka menghindari technology fads dan dengan penuh disiplin menolak teknologi yang tidak sesuai dengan Hedgehog Concept mereka. Tapi begitu teknologi yang tepat ditemukan, mereka mengadopsinya dengan penuh kecepatan.",
      },
      {
        num: 8,
        title: "The Flywheel and the Doom Loop",
        summary:
          "Tidak ada satu tindakan dramatis, program revolusioner, atau inovasi yang membuat perusahaan good-to-great menjadi great. Yang ada adalah flywheel effect: akumulasi dari ribuan keputusan kecil yang konsisten selama bertahun-tahun. Sebaliknya, perusahaan pembanding jatuh ke dalam doom loop: terus-menerus berganti strategi drastis, mencari peluru ajaib, dan melakukan perombakan besar yang menghancurkan momentum sebelum sempat terbentuk.",
      },
      {
        num: 9,
        title: "From Good to Great to Built to Last",
        summary:
          "Collins menghubungkan good-to-great dengan penelitian sebelumnya tentang perusahaan yang abadi (Built to Last). Good-to-great adalah tentang menciptakan breakthrough momentum. Built to last adalah tentang mempertahankan keunggulan selama generasi. Perusahaan yang benar-benar luar biasa melakukan keduanya: mereka membangun fondasi karakter (Built to Last) terlebih dahulu, lalu menggunakannya sebagai landasan untuk menciptakan kinerja luar biasa (Good to Great).",
      },
    ],
    actionableSteps: [
      {
        stepId: "B012-S1",
        task: "Jawab tiga pertanyaan Hedgehog Concept untuk karir atau bisnis Anda: apa yang bisa Anda menjadi terbaik, apa yang menggerakkan semangat Anda, dan apa yang menggerakkan mesin ekonomi Anda?",
      },
      {
        stepId: "B012-S2",
        task: "Identifikasi satu brutal fact dalam hidup atau pekerjaan Anda yang selama ini Anda hindari untuk dihadapi. Tuliskan dan tentukan satu langkah konkret untuk menghadapinya minggu ini.",
      },
      {
        stepId: "B012-S3",
        task: "Evaluasi tim atau lingkungan terdekat Anda: apakah orang yang tepat sudah ada di posisi yang tepat? Siapa yang perlu diajak maju bersama, dan apa yang perlu diubah?",
      },
      {
        stepId: "B012-S4",
        task: "Pilih satu kebiasaan kecil yang konsisten yang bisa Anda lakukan setiap hari selama 30 hari ke depan—bukan yang revolusioner, tapi yang membangun momentum flywheel secara perlahan.",
      },
    ],
  },
  {
    bookId: "B014",
    title: "Thinking in Bets",
    author: "Annie Duke",
    category: "Keuangan",
    readingTimeMinutes: 12,
    coverStyle:
      "background:linear-gradient(160deg,#0a1a2a 0%,#0f2d3d 50%,#1a4a5c 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🎲</div><div style="font-family:Playfair Display,serif;font-size:0.9rem;font-weight:700;color:#4dd0e1;line-height:1.3;">Thinking<br>in Bets</div><div style="width:36px;height:2px;background:#4dd0e1;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Annie Duke</div></div>',
    tags: ["keputusan", "probabilitas", "ketidakpastian", "investasi"],
    bigIdea:
      "Keputusan terbaik pun bisa menghasilkan hasil buruk—dan keputusan buruk bisa menghasilkan hasil baik. Berhentilah menilai kualitas keputusan dari hasilnya, dan mulailah berpikir dalam probabilitas seperti seorang pemain poker profesional.",
    analogy: {
      title: "Hidup adalah Poker, Bukan Catur",
      content:
        "Catur adalah permainan dengan informasi sempurna—semua bidak terlihat, semua kemungkinan bisa dikalkulasi. Jika Anda kalah di catur, itu murni karena keputusan Anda yang buruk.\n\nPoker berbeda. Anda tidak bisa melihat kartu lawan. Anda harus membuat keputusan terbaik berdasarkan informasi yang tidak lengkap, lalu menerima bahwa hasil akhirnya sebagian ditentukan oleh keberuntungan.\n\nHidup nyata jauh lebih mirip poker dari catur. Kita selalu membuat keputusan dengan informasi yang tidak lengkap, di bawah ketidakpastian, dengan waktu yang terbatas. Annie Duke—mantan juara poker dunia—berpendapat bahwa cara terbaik untuk membuat keputusan yang lebih baik adalah berhenti menuntut kepastian dan mulai berpikir dalam probabilitas.",
    },
    chapters: [
      {
        num: 1,
        title: "Life is Poker, Not Chess",
        summary:
          "Duke membuka dengan perbedaan fundamental antara permainan dengan informasi sempurna (catur) dan permainan dengan informasi tidak lengkap (poker). Kebanyakan keputusan penting dalam hidup—investasi, karir, hubungan—terjadi dalam kondisi ketidakpastian seperti poker, bukan kepastian seperti catur. Namun kita sering mengevaluasi keputusan seolah kita bermain catur: jika hasilnya baik, keputusannya pasti baik. Ini adalah kesalahan mendasar yang disebut resulting.",
      },
      {
        num: 2,
        title: "Wanna Bet?",
        summary:
          "Mengubah setiap keyakinan menjadi taruhan—bahkan secara mental—memaksa kita untuk berpikir lebih jujur tentang seberapa yakin kita sebenarnya. Ketika seseorang mengatakan saya yakin pasar akan naik, tanyakan: mau taruhan berapa? Jika mereka ragu untuk bertaruh, keyakinan mereka tidak sekuat yang diklaim. Framing keyakinan sebagai taruhan memisahkan apa yang benar-benar kita percaya dari apa yang nyaman untuk kita percaya.",
      },
      {
        num: 3,
        title: "Bet to Learn: Fielding Outcomes",
        summary:
          "Resulting adalah kesalahan kognitif di mana kita menilai kualitas keputusan berdasarkan hasilnya—padahal hasil dipengaruhi oleh keberuntungan. Seorang pengemudi mabuk yang sampai di rumah dengan selamat bukan berarti membuat keputusan yang baik. Seorang investor yang kehilangan uang meski sudah riset mendalam bukan berarti membuat keputusan yang buruk. Kita harus belajar mengevaluasi proses keputusan, bukan hanya hasilnya.",
      },
      {
        num: 4,
        title: "The Buddy System",
        summary:
          "Kita tidak bisa mengevaluasi keputusan kita sendiri secara objektif—kita terlalu mudah merasionalisasi kemenangan sebagai bukti keahlian dan kekalahan sebagai nasib buruk. Solusinya adalah truth-seeking pod: kelompok kecil orang yang saling berkomitmen untuk memberikan umpan balik jujur tanpa agenda. Ini membutuhkan norma yang eksplisit: kritik proses, bukan orangnya; fokus pada pembelajaran, bukan pembelaan diri.",
      },
      {
        num: 5,
        title: "Dissenting to Win",
        summary:
          "Konfirmasi bias membuat kita secara selektif mencari informasi yang mendukung keyakinan yang sudah ada dan mengabaikan yang bertentangan. Duke mengusulkan pendekatan Bayesian: mulai dengan probabilitas awal, lalu update secara konsisten saat ada bukti baru—baik yang mendukung maupun yang menentang. Seorang pemikir yang baik tidak bertanya bagaimana saya bisa membuktikan keyakinan saya, tapi bagaimana keyakinan saya mungkin salah.",
      },
      {
        num: 6,
        title: "Adventures in Mental Time Travel",
        summary:
          "Dua teknik untuk membuat keputusan yang lebih baik: 10-10-10 (bagaimana saya akan menilai keputusan ini dalam 10 menit, 10 bulan, dan 10 tahun?) dan premortem (bayangkan keputusan ini sudah gagal total—apa yang menyebabkannya?). Keduanya memaksa kita keluar dari kepentingan sesaat dan melihat keputusan dari perspektif yang lebih luas dan lebih sabar.",
      },
      {
        num: 7,
        title: "Tilt",
        summary:
          "Tilt adalah kondisi di mana emosi mengambil alih pengambilan keputusan—biasanya setelah mengalami kerugian atau keberuntungan yang tidak terduga. Dalam poker, tilt sering menyebabkan pemain membuang strategi rasional mereka. Dalam kehidupan nyata, tilt terjadi saat kita membuat keputusan impulsif setelah kehilangan pekerjaan, putus cinta, atau justru setelah mendapat windfall yang tidak terduga. Mengenali tilt sebelum ia mengambil alih adalah skill yang bisa dilatih.",
      },
      {
        num: 8,
        title: "The Universe Wants You to Be Honest",
        summary:
          "Duke menutup dengan menegaskan bahwa berpikir dalam probabilitas bukan berarti menyerah pada ketidakpastian—melainkan memeluknya. Ketidakpastian bukan musuh keputusan yang baik; denial terhadap ketidakpastian lah yang berbahaya. Pemikir probabilistik terbaik adalah mereka yang paling nyaman dengan ketidaktahuan, paling cepat mengupdate keyakinan mereka, dan paling jujur tentang peran keberuntungan dalam kesuksesan dan kegagalan mereka.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B014-S1",
        task: "Pilih satu keyakinan kuat yang Anda pegang saat ini. Tanyakan: seberapa persen saya yakin ini benar? Mau taruhan berapa untuk membuktikannya? Angka taruhan itu mencerminkan keyakinan sesungguhnya.",
      },
      {
        stepId: "B014-S2",
        task: "Evaluasi satu keputusan buruk yang pernah Anda buat. Apakah prosesnya memang buruk, atau hasilnya saja yang buruk meski prosesnya sudah benar? Ada bedanya yang sangat besar.",
      },
      {
        stepId: "B014-S3",
        task: "Cari satu orang yang bisa menjadi truth-seeking partner Anda—seseorang yang berani tidak setuju dan memberikan umpan balik jujur tanpa agenda untuk menyenangkan Anda.",
      },
      {
        stepId: "B014-S4",
        task: "Sebelum keputusan besar berikutnya, lakukan premortem: bayangkan sudah gagal total 1 tahun dari sekarang. Apa tiga penyebab paling mungkin kegagalannya? Lalu tangani penyebab itu sekarang.",
      },
    ],
  },
  {
    bookId: "B015",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "Filsafat",
    readingTimeMinutes: 11,
    coverStyle:
      "background:linear-gradient(160deg,#1a0500 0%,#3d0f00 50%,#7a1f00 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🔥</div><div style="font-family:Playfair Display,serif;font-size:0.78rem;font-weight:700;color:#ff7043;line-height:1.4;">The Subtle Art of<br>Not Giving a F*ck</div><div style="width:36px;height:2px;background:#ff7043;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Mark Manson</div></div>',
    tags: ["filsafat", "nilai", "penerimaan", "kebahagiaan"],
    bigIdea:
      "Kunci hidup yang baik bukan tentang peduli pada lebih banyak hal—melainkan tentang memilih dengan sangat hati-hati apa yang benar-benar layak dipedulikan, dan dengan berani berhenti peduli pada semua yang lain.",
    analogy: {
      title: "Hidup adalah Anggaran Kepedulian yang Terbatas",
      content:
        "Bayangkan Anda memiliki anggaran kepedulian yang sangat terbatas—katakanlah, hanya 10 token per hari. Setiap hal yang Anda pedulikan menghabiskan token itu: penilaian orang lain, kemacetan, postingan media sosial, karir, keluarga, kesehatan, nilai-nilai Anda.\n\nKebanyakan orang membuang token mereka pada hal-hal kecil yang tidak bermakna—komentar negatif di internet, penampilan fisik, ekspektasi orang lain—sehingga tidak tersisa cukup token untuk hal-hal yang benar-benar penting.\n\nManson berpendapat bahwa masalah modern bukan bahwa kita tidak peduli cukup, tapi bahwa kita peduli pada terlalu banyak hal yang salah. Seni tidak peduli bukan tentang menjadi apatis—melainkan tentang menjadi sangat selektif dan berani dalam memilih apa yang layak mendapat token kepedulian Anda.",
    },
    chapters: [
      {
        num: 1,
        title: "Don't Try",
        summary:
          "Manson membuka dengan paradoks: semakin keras Anda mengejar kebahagiaan, semakin jauh ia lari. Budaya modern terobsesi dengan positivitas—selalu tersenyum, selalu optimis, selalu berjuang untuk lebih. Tapi obsesi ini sendiri adalah sumber penderitaan. Charles Bukowski, penyair yang berantakan dan penuh cacat, justru menemukan makna dengan menerima dirinya apa adanya—bukan dengan berpura-pura menjadi sesuatu yang lain. Tidak mencoba terlalu keras adalah langkah pertama menuju kehidupan yang lebih baik.",
      },
      {
        num: 2,
        title: "Happiness is a Problem",
        summary:
          "Penderitaan adalah bagian yang tidak bisa dihindari dari kehidupan—bukan anomali yang harus diperbaiki. Pertanyaan yang tepat bukan bagaimana saya menghindari penderitaan, melainkan penderitaan apa yang layak saya tanggung? Setiap tujuan yang bernilai datang dengan perjuangan yang menyertainya. Orang yang menikmati proses perjuangan—bukan hanya hasil akhirnya—adalah yang benar-benar berhasil. Apa rasa sakitmu? Apa yang rela kamu derita demi sesuatu yang kamu inginkan?",
      },
      {
        num: 3,
        title: "You Are Not Special",
        summary:
          "Generasi saat ini tumbuh dengan terus-menerus diberitahu bahwa mereka istimewa, bahwa mereka bisa menjadi apapun, bahwa mereka luar biasa. Ini menciptakan ekspektasi yang tidak realistis dan rasa hak yang berlebihan. Ketika realitas tidak sesuai harapan, mereka menyimpulkan bahwa ada sesuatu yang salah dengan dunia—bukan dengan ekspektasi mereka. Menerima bahwa Anda biasa-biasa saja di sebagian besar hal adalah pembebasan, bukan kekalahan.",
      },
      {
        num: 4,
        title: "The Value of Suffering",
        summary:
          "Tidak semua penderitaan diciptakan sama. Penderitaan yang lahir dari nilai-nilai yang baik—kerja keras demi tujuan bermakna, kejujuran meski menyakitkan, disiplin demi pertumbuhan—menghasilkan pertumbuhan dan kepuasan. Penderitaan yang lahir dari nilai-nilai yang buruk—obsesi terhadap penilaian orang lain, mengejar kekayaan demi status, menghindari semua ketidaknyamanan—hanya menghasilkan lebih banyak penderitaan. Kunci: periksa nilai-nilai yang mendasari penderitaan Anda.",
      },
      {
        num: 5,
        title: "You Are Always Choosing",
        summary:
          "Kita selalu memilih—bahkan tidak memilih adalah sebuah pilihan. Manson berpendapat bahwa tanggung jawab dan kesalahan adalah dua hal yang berbeda. Anda mungkin tidak bersalah atas masalah yang terjadi pada Anda, tapi Anda selalu bertanggung jawab atas bagaimana Anda meresponsnya. Mengambil tanggung jawab penuh atas hidup Anda—bahkan untuk hal-hal yang bukan salah Anda—adalah satu-satunya cara untuk benar-benar berdaya.",
      },
      {
        num: 6,
        title: "You're Wrong About Everything",
        summary:
          "Otak kita adalah mesin pembuat cerita, bukan mesin pencari kebenaran. Hampir semua yang kita yakini tentang diri kita dan dunia adalah konstruksi yang tidak sempurna. Pertumbuhan sejati membutuhkan kesediaan untuk terus-menerus mempertanyakan dan merevisi keyakinan kita. Orang yang paling yakin bahwa mereka benar biasanya adalah yang paling sedikit belajar. Ketidakpastian bukan kelemahan—ia adalah prasyarat untuk pertumbuhan.",
      },
      {
        num: 7,
        title: "Failure is the Way Forward",
        summary:
          "Kegagalan adalah jalur yang tidak bisa dihindari menuju keahlian dan makna. VCR, bola lampu, dan hampir semua penemuan besar dalam sejarah adalah produk dari ratusan atau ribuan kegagalan. Namun budaya modern membenci kegagalan secara patologis. Manson berpendapat bahwa tindakan mendahului motivasi, bukan sebaliknya. Jangan tunggu motivasi untuk bertindak—bertindaklah, dan motivasi akan mengikuti. Do something principle: lakukan sesuatu, apapun itu.",
      },
      {
        num: 8,
        title: "The Importance of Saying No",
        summary:
          "Kedalaman hubungan dan komitmen lahir dari kemampuan untuk mengatakan tidak. Setiap ya kepada satu hal adalah tidak kepada semua hal lainnya. Orang yang tidak bisa mengatakan tidak—yang terus-menerus mengikuti apa yang orang lain inginkan dari mereka—tidak pernah benar-benar mengenal diri mereka sendiri. Kebebasan sejati bukan tentang memiliki semua pilihan terbuka, melainkan tentang dengan sengaja menutup banyak pintu sehingga Anda bisa benar-benar masuk ke satu pintu yang paling penting.",
      },
      {
        num: 9,
        title: "And Then You Die",
        summary:
          "Manson menutup dengan meditasi tentang kematian—bukan sebagai tema yang menakutkan, melainkan sebagai konteks yang membebaskan. Kesadaran bahwa kita akan mati adalah antidot paling kuat terhadap ketidakberanian dan kepedulian terhadap hal-hal yang tidak penting. Ketika Anda benar-benar menginternalisasi kefanaan Anda, prioritas hidup menjadi sangat jelas. Warisan bukan tentang apa yang Anda tinggalkan, melainkan tentang bagaimana Anda hidup sepenuhnya selagi ada.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B015-S1",
        task: "Buat daftar 10 hal yang paling sering Anda khawatirkan atau pedulikan minggu ini. Lalu tandai: mana yang benar-benar sesuai dengan nilai terdalam Anda, dan mana yang hanya noise dari ekspektasi orang lain?",
      },
      {
        stepId: "B015-S2",
        task: "Tanyakan untuk satu tujuan besar Anda: perjuangan seperti apa yang bersedia saya tanggung untuk ini? Jika jawabannya tidak ada, tujuan itu mungkin bukan benar-benar milik Anda.",
      },
      {
        stepId: "B015-S3",
        task: "Identifikasi satu hal yang sudah lama ingin Anda lakukan tapi selalu menunggu motivasi. Lakukan selama 5 menit sekarang—jangan tunggu motivasi datang dulu.",
      },
      {
        stepId: "B015-S4",
        task: "Pikirkan satu keyakinan tentang diri Anda yang mungkin salah. Apa yang akan berubah dalam hidup Anda jika keyakinan itu ternyata tidak benar?",
      },
    ],
  },
  {
    bookId: "B016",
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    category: "Psikologi",
    readingTimeMinutes: 17,
    coverStyle:
      "background:linear-gradient(160deg,#0a1a1a 0%,#0f2d2d 50%,#1a4a4a 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🧬</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#80cbc4;line-height:1.3;">The Body<br>Keeps the Score</div><div style="width:36px;height:2px;background:#80cbc4;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Bessel van der Kolk</div></div>',
    tags: ["trauma", "neurosains", "penyembuhan", "psikologi"],
    bigIdea:
      "Trauma bukan hanya luka psikologis yang tersimpan di pikiran—ia tercetak secara fisik di dalam tubuh dan otak. Penyembuhan sejati membutuhkan pendekatan yang melibatkan tubuh, bukan hanya percakapan.",
    analogy: {
      title: "Tubuh adalah Arsip yang Tidak Pernah Berbohong",
      content:
        "Bayangkan sebuah perpustakaan yang menyimpan semua pengalaman hidup Anda—bukan dalam buku yang bisa dibaca dan dianalisis, melainkan dalam bentuk sensasi fisik, respons otot, dan pola pernapasan yang tertanam jauh di bawah kesadaran.\n\nKetika sesuatu yang mengerikan terjadi dan otak tidak bisa memproses pengalaman itu sepenuhnya, ia menyimpannya di tubuh. Seorang veteran perang yang mendengar suara keras langsung meringkuk. Seorang korban kekerasan yang tubuhnya kaku saat disentuh. Mereka bukan lebay atau lemah—tubuh mereka sedang menjalankan program perlindungan yang tertanam sangat dalam.\n\nVan der Kolk menghabiskan lebih dari 30 tahun meneliti trauma dan menemukan bahwa berbicara saja tidak cukup. Penyembuhan sejati harus melibatkan tubuh—melalui gerakan, pernapasan, seni, dan pengalaman yang membangun rasa aman dari dalam.",
    },
    chapters: [
      {
        num: 1,
        title: "Lessons from Vietnam Veterans",
        summary:
          "Van der Kolk memulai karirnya bekerja dengan veteran Vietnam di VA Boston pada 1970-an. Ia menemukan bahwa trauma perang tidak hanya meninggalkan kenangan buruk—ia mengubah cara otak dan tubuh berfungsi secara fundamental. Para veteran tidak hanya mengingat perang; mereka secara fisik mengalaminya kembali melalui flashback, mimpi buruk, dan reaksi berlebihan terhadap stimulus yang tampak tidak berbahaya. Ini adalah titik awal yang mengubah pemahaman dunia tentang trauma.",
      },
      {
        num: 2,
        title: "Revolutions in Understanding Mind and Brain",
        summary:
          "Perkembangan teknologi neuroimaging memungkinkan para ilmuwan untuk pertama kalinya melihat apa yang terjadi di dalam otak saat seseorang mengalami flashback trauma. Hasilnya mengejutkan: area otak yang memproses bahasa hampir mati total, sementara area yang memproses ancaman dan emosi menjadi sangat aktif. Ini menjelaskan mengapa korban trauma sering tidak bisa menceritakan pengalaman mereka secara koheren—saat tertekan, otak mereka harfiah tidak bisa mengakses kemampuan berbahasa.",
      },
      {
        num: 3,
        title: "Looking into the Brain: The Neuroscience of Trauma",
        summary:
          "Van der Kolk menjelaskan tiga area otak yang paling terpengaruh trauma: amygdala (alarm system—terus-menerus menyala), hipokampus (pengarsip memori—tidak bisa mengorganisir kenangan dengan benar), dan korteks prefrontal (eksekutif rasional—tidak bisa menenangkan amygdala). Akibatnya, korban trauma hidup dalam kondisi siaga terus-menerus, tidak bisa membedakan ancaman masa lalu dari situasi aman masa kini.",
      },
      {
        num: 4,
        title: "Running for Your Life: The Anatomy of Survival",
        summary:
          "Respons fight-flight-freeze bukanlah pilihan sadar—ia adalah program bertahan hidup yang diwarisi dari evolusi jutaan tahun. Masalah muncul ketika program ini terus berjalan lama setelah bahaya berlalu. Trauma membuat sistem saraf terjebak dalam mode darurat. Tanpa intervensi yang tepat, tubuh terus memproduksi hormon stres seolah ancaman masih ada—merusak kesehatan fisik, sistem imun, dan kemampuan berpikir jernih.",
      },
      {
        num: 5,
        title: "Body-Brain Connections",
        summary:
          "Gut-brain connection—hubungan antara usus dan otak—jauh lebih kuat dari yang kita sadari. Vagus nerve menghubungkan otak dengan hampir semua organ dalam tubuh, dan 80% sinyal berjalan dari tubuh ke otak (bukan sebaliknya). Ini berarti kondisi fisik—postur, pernapasan, detak jantung—sangat mempengaruhi kondisi mental. Teknik yang bekerja pada tubuh (pernapasan dalam, yoga, gerakan ritmis) bisa secara langsung mengubah kondisi sistem saraf.",
      },
      {
        num: 6,
        title: "How Trauma Shapes Self-Concept",
        summary:
          "Trauma masa kecil secara khusus merusak perkembangan identitas diri. Anak-anak yang tumbuh dalam lingkungan tidak aman belajar bahwa dunia adalah tempat yang berbahaya dan mereka tidak layak dicintai. Keyakinan ini tertanam begitu dalam sehingga bahkan ketika lingkungan berubah menjadi aman, otak terus beroperasi seolah dalam bahaya. Shame—rasa malu yang mendalam tentang siapa mereka—bukan hanya perasaan; ia menjadi identitas.",
      },
      {
        num: 7,
        title: "Getting on the Same Wavelength: Attachment and Attunement",
        summary:
          "Manusia adalah makhluk sosial yang membutuhkan koneksi untuk berkembang. Attachment theory menjelaskan bagaimana hubungan awal dengan pengasuh membentuk template untuk semua hubungan selanjutnya. Trauma relasional—diabaikan, disakiti, atau dikhianati oleh orang yang seharusnya melindungi—merusak kemampuan untuk mempercayai dan terhubung dengan orang lain secara mendalam. Penyembuhan seringkali terjadi dalam konteks hubungan yang aman, bukan hanya dalam terapi individual.",
      },
      {
        num: 8,
        title: "Trapped in Trauma: The Neuroscience of Flashbacks",
        summary:
          "Flashback bukan sekadar kenangan yang kuat—ia adalah pengalaman di mana otak dan tubuh secara harfiah mengalami kembali trauma seolah sedang terjadi sekarang. Ini terjadi karena kenangan traumatis tidak diproses dan disimpan seperti kenangan normal—ia tersimpan sebagai fragmen sensori yang tidak terhubung dalam narasi yang koheren. Setiap stimulus yang menyerupai elemen trauma bisa memicu replay yang lengkap.",
      },
      {
        num: 9,
        title: "Healing from Trauma: Owning Your Self",
        summary:
          "Penyembuhan trauma melibatkan tiga komponen utama: membangun rasa aman (safety), mengolah kenangan traumatis (processing), dan membangun kembali koneksi dengan diri sendiri dan orang lain (reconnection). Berbicara tentang trauma—talk therapy konvensional—hanya efektif jika dilakukan setelah seseorang merasa cukup aman. Sebelum itu, berbicara saja tidak cukup dan bahkan bisa memperparah kondisi.",
      },
      {
        num: 10,
        title: "Developmental Trauma",
        summary:
          "Trauma yang terjadi berulang-ulang dalam masa perkembangan—terutama dalam konteks hubungan yang seharusnya aman—memiliki dampak yang jauh lebih dalam dari trauma tunggal di masa dewasa. Van der Kolk berjuang selama bertahun-tahun untuk memasukkan Developmental Trauma Disorder ke dalam DSM sebagai diagnosis resmi, karena PTSD konvensional tidak cukup untuk menggambarkan kompleksitas dampak trauma masa kecil yang kronis.",
      },
      {
        num: 11,
        title: "Healing the Body: Yoga, EMDR, and Neurofeedback",
        summary:
          "Van der Kolk mempresentasikan tiga pendekatan yang terbukti efektif di luar talk therapy: Yoga (membangun kembali koneksi dan kendali atas tubuh), EMDR atau Eye Movement Desensitization and Reprocessing (membantu otak memproses kenangan traumatis), dan Neurofeedback (melatih otak untuk mengatur dirinya sendiri melalui umpan balik real-time). Ketiga pendekatan ini bekerja langsung pada sistem saraf, bukan hanya pada pikiran sadar.",
      },
      {
        num: 12,
        title: "The Bonds That Heal: Being Known",
        summary:
          "Salah satu aspek paling menyembuhkan dari terapi adalah pengalaman merasa benar-benar dikenal dan diterima oleh orang lain tanpa penilaian. Hubungan terapeutik yang aman memberikan pengalaman relasional baru yang perlahan mengubah template attachment yang rusak. Van der Kolk juga menyoroti peran seni, teater, dan komunitas sebagai media penyembuhan yang sering diremehkan oleh pendekatan medis konvensional.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B016-S1",
        task: "Perhatikan respons tubuh Anda dalam situasi stres: di mana Anda merasakan ketegangan? Dada, bahu, perut? Coba tarik napas dalam selama 4 hitungan, tahan 4, dan embuskan 6. Lakukan 5 kali dan perhatikan perubahannya.",
      },
      {
        stepId: "B016-S2",
        task: "Identifikasi satu trigger yang sering memicu respons berlebihan dalam diri Anda. Tanyakan: apakah ini benar-benar tentang situasi sekarang, atau tubuh saya sedang merespons sesuatu dari masa lalu?",
      },
      {
        stepId: "B016-S3",
        task: "Jika Anda atau seseorang yang Anda kenal berjuang dengan trauma, pertimbangkan untuk mencari profesional yang menggunakan pendekatan body-based seperti somatic therapy, EMDR, atau yoga terapi—bukan hanya talk therapy konvensional.",
      },
      {
        stepId: "B016-S4",
        task: "Luangkan 10 menit hari ini untuk aktivitas yang membawa Anda ke dalam tubuh: berjalan tanpa ponsel, meregangkan otot dengan sadar, atau mendengarkan musik sambil memperhatikan sensasi fisik yang muncul.",
      },
    ],
  },
  {
    bookId: "B017",
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    category: "Keuangan",
    readingTimeMinutes: 10,
    coverStyle:
      "background:linear-gradient(160deg,#1a1000 0%,#3d2800 50%,#7a5000 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🏛️</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#ffd54f;line-height:1.3;">The Richest Man<br>in Babylon</div><div style="width:36px;height:2px;background:#ffd54f;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">George S. Clason</div></div>',
    tags: ["keuangan", "tabungan", "investasi", "kebijaksanaan"],
    bigIdea:
      "Prinsip-prinsip membangun kekayaan tidak berubah sejak 4.000 tahun lalu: bayar diri sendiri terlebih dahulu, buat uang bekerja untuk Anda, dan lindungi modal Anda dari kerugian.",
    analogy: {
      title: "Uang adalah Seperti Kawanan Ternak yang Harus Digembalakan",
      content:
        "Arkad, orang terkaya di Babylon, pernah mengatakan kepada murid-muridnya: uang adalah seperti kawanan ternak. Jika Anda merawatnya dengan baik—memberinya makan, melindunginya, dan membiarkannya berkembang biak—kawanan itu akan tumbuh dan memberi Anda lebih banyak dari yang Anda bayangkan. Tapi jika Anda mengabaikannya, menyerahkannya kepada orang yang tidak kompeten, atau membelanjakannya semua sebelum sempat berkembang, kawanan itu akan lenyap.\n\nPrinsip ini diajarkan di Babylon 4.000 tahun lalu—dan masih sama validnya hari ini. Bukan karena dunia tidak berubah, melainkan karena sifat dasar manusia dalam hubungannya dengan uang tidak berubah: kita cenderung menghabiskan semua yang kita miliki, mudah tergoda oleh janji keuntungan cepat, dan sulit untuk bersabar menunggu compounding bekerja.",
    },
    chapters: [
      {
        num: 1,
        title: "The Man Who Desired Gold",
        summary:
          "Bansir, seorang pembuat kereta kuda yang terampil di Babylon, duduk termenung di depan rumahnya yang sederhana. Meski ia bekerja keras seumur hidup, kantongnya selalu kosong. Sahabatnya Kobbi, seorang musisi, mengalami nasib yang sama. Keduanya memutuskan untuk mencari Arkad—teman masa kecil mereka yang kini menjadi orang terkaya di Babylon—untuk belajar rahasia kekayaannya. Pembukaan ini menetapkan tema utama buku: bekerja keras saja tidak cukup; Anda perlu sistem yang membuat uang bekerja untuk Anda.",
      },
      {
        num: 2,
        title: "The Richest Man in Babylon",
        summary:
          "Arkad menceritakan bagaimana ia menjadi kaya. Rahasianya sederhana namun tidak mudah: ia membayar dirinya sendiri terlebih dahulu—menyisihkan setidaknya sepersepuluh dari semua penghasilannya sebelum membayar apapun yang lain. Uang yang tersimpan itu kemudian ia investasikan dengan hati-hati. Sebagian besar orang, kata Arkad, bekerja untuk orang lain—majikan mereka, pedagang, dan kreditur. Orang kaya bekerja untuk diri sendiri dengan membuat uang mereka menghasilkan uang baru.",
      },
      {
        num: 3,
        title: "Seven Cures for a Lean Purse",
        summary:
          "Raja Babylon meminta Arkad untuk mengajarkan rahasianya kepada seluruh warga kota. Arkad memaparkan tujuh prinsip: (1) mulai mengisi kantong Anda—simpan 1/10 dari penghasilan, (2) kendalikan pengeluaran—jangan bingungkan keinginan dengan kebutuhan, (3) buat emas Anda berkembang biak—investasikan tabungan, (4) lindungi harta Anda dari kerugian—jangan ambil risiko yang tidak perlu, (5) jadikan rumah Anda investasi yang menguntungkan, (6) amankan penghasilan masa depan, dan (7) tingkatkan kemampuan untuk menghasilkan lebih.",
      },
      {
        num: 4,
        title: "Meet the Goddess of Good Luck",
        summary:
          "Para pria muda Babylon berkumpul untuk mendiskusikan keberuntungan. Arkad mengajarkan bahwa keberuntungan sering kali datang kepada mereka yang siap memanfaatkannya—bukan kepada mereka yang hanya menunggu. Opportunity adalah dewi yang pemalu: ia datang diam-diam dan pergi cepat jika tidak disambut dengan tindakan segera. Procrastination adalah musuh terbesar keberuntungan. Mereka yang mengambil tindakan saat peluang muncul—meski belum sempurna siap—jauh lebih sering berhasil dari mereka yang menunggu waktu yang tepat.",
      },
      {
        num: 5,
        title: "The Five Laws of Gold",
        summary:
          "Kalabab menceritakan kisah Nomasir, putra Arkad, yang dikirim ke dunia dengan hanya sekantong emas dan tablet berisi lima hukum emas. Lima hukum itu: (1) emas datang dengan senang hati kepada mereka yang menyisihkan setidaknya 1/10 penghasilannya, (2) emas bekerja keras untuk pemilik bijaksana yang membuatnya menghasilkan lebih banyak emas, (3) emas bertahan dalam perlindungan pemilik hemat yang tidak membelanjakannya lebih dari yang dihasilkan, (4) emas lenyap dari tangan yang menginvestasikannya dalam bisnis yang tidak mereka pahami, (5) emas lari dari mereka yang memaksanya menghasilkan keuntungan tidak mungkin.",
      },
      {
        num: 6,
        title: "The Gold Lender of Babylon",
        summary:
          "Dabasir, seorang money lender tua, mengajarkan prinsip peminjaman uang yang bijaksana. Ia menolak meminjamkan uang kepada mereka yang ingin berinvestasi di bidang yang tidak mereka pahami, atau kepada mereka yang menjanjikan keuntungan yang tidak realistis. Kebijaksanaan ini lahir dari pengalaman pahit: ia pernah kehilangan segalanya karena meminjamkan uang tanpa kehati-hatian. Pelajaran: selalu pinjamkan hanya kepada mereka yang bisa membayar kembali, dan pastikan ada jaminan yang memadai.",
      },
      {
        num: 7,
        title: "The Walls of Babylon",
        summary:
          "Dikisahkan bagaimana tembok Babylon yang kokoh melindungi warganya dari serangan musuh selama berabad-abad. Alegori ini mengajarkan pentingnya perlindungan finansial: asuransi, tabungan darurat, dan diversifikasi adalah tembok yang melindungi kekayaan Anda dari bencana tak terduga. Sama seperti warga Babylon tidak mengandalkan keberuntungan saja untuk keselamatan mereka, Anda tidak boleh mengandalkan keberuntungan untuk keamanan finansial Anda.",
      },
      {
        num: 8,
        title: "The Camel Trader of Babylon",
        summary:
          "Tarkad, seorang pemuda yang terjerat hutang dan kelaparan, bertemu dengan Dabasir—seorang pedagang unta yang kaya. Dabasir menceritakan bagaimana ia pernah menjadi budak karena hutang dan tidak bertanggung jawab, lalu bangkit kembali dengan satu prinsip sederhana: bayar semua hutang secara bertahap, hidup hanya dari 70% penghasilan, dan sisihkan 20% untuk melunasi hutang serta 10% untuk ditabung. Dalam dua tahun, ia bebas dari hutang dan mulai membangun kekayaan.",
      },
      {
        num: 9,
        title: "The Clay Tablets from Babylon",
        summary:
          "Seorang profesor arkeologi modern menemukan lima tablet tanah liat berusia 5.000 tahun yang ternyata berisi catatan keuangan Dabasir—rencana pelunasan hutangnya yang detail dan sistematis. Bagian ini menegaskan bahwa prinsip-prinsip keuangan dalam buku ini bukan fiksi semata, melainkan kebijaksanaan yang telah terbukti selama ribuan tahun. Tablet-tablet itu menunjukkan bahwa manusia modern menghadapi masalah keuangan yang persis sama dengan leluhur mereka ribuan tahun lalu.",
      },
      {
        num: 10,
        title: "The Luckiest Man in Babylon",
        summary:
          "Sharru Nada, seorang pedagang kaya, menceritakan kisah hidupnya kepada cucunya sebagai pelajaran. Ia pernah menjadi budak, namun melalui kerja keras, integritas, dan tabungan yang disiplin, ia berhasil membeli kebebasannya dan akhirnya menjadi kaya. Pesan utamanya: kebebasan finansial bukan hadiah—ia adalah buah dari kerja keras yang terarah, nilai-nilai yang kuat, dan kesabaran yang luar biasa. Orang yang mencari jalan pintas menuju kekayaan hampir selalu berakhir lebih miskin.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B017-S1",
        task: "Mulai hari ini, sisihkan tepat 10% dari setiap penghasilan yang Anda terima ke rekening terpisah sebelum membayar apapun yang lain. Ini adalah hukum pertama dan paling fundamental.",
      },
      {
        stepId: "B017-S2",
        task: "Buat daftar semua pengeluaran bulan lalu. Tandai mana yang benar-benar kebutuhan dan mana yang keinginan. Bisakah Anda hidup nyaman dengan 90% dari penghasilan Anda?",
      },
      {
        stepId: "B017-S3",
        task: "Jika Anda memiliki hutang, terapkan formula Dabasir: 70% untuk hidup, 20% untuk melunasi hutang secara bertahap, 10% untuk ditabung. Konsisten selama 12 bulan dan lihat hasilnya.",
      },
      {
        stepId: "B017-S4",
        task: "Sebelum investasi apapun, tanyakan kepada diri sendiri: apakah saya benar-benar memahami bisnis atau aset ini? Jika tidak, pelajari dulu atau hindari sama sekali.",
      },
    ],
  },
  {
    bookId: "B018",
    title: "Meditations",
    author: "Marcus Aurelius",
    category: "Filsafat",
    readingTimeMinutes: 13,
    coverStyle:
      "background:linear-gradient(160deg,#0f0f0f 0%,#1a1a2e 50%,#2a2a1a 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🏺</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#c9a96e;line-height:1.3;">Meditations</div><div style="width:36px;height:2px;background:#c9a96e;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Marcus Aurelius</div></div>',
    tags: ["stoikisme", "filsafat", "kebijaksanaan", "pengendalian diri"],
    bigIdea:
      "Ketenangan dan kebijaksanaan bukan hadiah dari nasib baik—melainkan buah dari disiplin mental yang terus-menerus melatih diri untuk hanya peduli pada hal-hal yang benar-benar dalam kendali kita.",
    analogy: {
      title: "Pikiran adalah Benteng yang Hanya Bisa Ditembus dari Dalam",
      content:
        "Marcus Aurelius adalah kaisar paling berkuasa di dunia pada zamannya—penguasa seluruh Kekaisaran Romawi. Ia memiliki kekuasaan untuk melakukan apapun yang ia inginkan. Namun buku yang ia tulis bukanlah tentang bagaimana menaklukkan musuh atau mengelola kekaisaran.\n\nBuku ini adalah catatan harian pribadi—percakapan seorang pria dengan dirinya sendiri, mengingatkan dirinya untuk tidak marah kepada orang yang menyebalkan, untuk tidak takut pada kematian, untuk tidak tergoda oleh pujian, dan untuk terus berbuat baik meski tidak ada yang melihat.\n\nPesan utamanya sederhana namun sangat dalam: satu-satunya hal yang benar-benar dalam kendali Anda adalah pikiran dan respons Anda sendiri. Segala yang lain—kekayaan, reputasi, kesehatan, bahkan hidup Anda—bisa diambil kapan saja. Benteng terkuat di dunia adalah pikiran yang terlatih.",
    },
    chapters: [
      {
        num: 1,
        title: "Book I: Debts and Lessons",
        summary:
          "Marcus membuka dengan mengucapkan terima kasih kepada setiap orang yang membentuknya—kakeknya yang mengajarkan kelembutan dan pengendalian diri, ayahnya yang mengajarkan kesederhanaan dan kerendahan hati, gurunya yang mengajarkan toleransi dan ketidakpedulian terhadap kemewahan, dan Epictetus yang mengajarkan bahwa kebebasan sejati ada dalam pikiran, bukan dalam kondisi eksternal. Bab pertama ini adalah pengingat bahwa karakter bukan sesuatu yang terbentuk sendiri—ia adalah akumulasi dari semua pengaruh baik yang kita terima dan pilih untuk internalisasi.",
      },
      {
        num: 2,
        title: "Book II: On the River Gran, Among the Quadi",
        summary:
          "Ditulis saat Marcus sedang memimpin kampanye militer di garis depan, bab ini berisi meditasi tentang fana dan kefanaan. Ia mengingatkan dirinya bahwa setiap hari bisa menjadi hari terakhir, dan bahwa kesadaran ini seharusnya mendorong kita untuk bertindak dengan integritas sekarang—bukan nanti. Ia juga mengajarkan tentang view from above: bayangkan melihat kehidupan manusia dari ketinggian yang sangat tinggi—semua konflik, ambisi, dan kesombongan manusia terlihat betapa kecil dan sementaranya.",
      },
      {
        num: 3,
        title: "Book III: In Carnuntum",
        summary:
          "Marcus merenungkan tentang alam dan tempat manusia di dalamnya. Ia mengamati bahwa bahkan hal-hal yang tampak buruk atau tidak sempurna memiliki keindahan tersendiri jika dilihat dengan mata yang benar. Roti yang retak saat dipanggang, buah yang sudah tua dengan kulit berkerut—semuanya memiliki keanggunan alami jika kita berhenti menuntut kesempurnaan. Prinsip ini berlaku juga untuk manusia: orang yang tidak sempurna, situasi yang tidak ideal, semua memiliki tempatnya dalam tatanan alam yang lebih besar.",
      },
      {
        num: 4,
        title: "Book IV: The Inner Citadel",
        summary:
          "Bab ini berisi salah satu konsep paling kuat dalam Stoikisme: the inner citadel—benteng batin yang tidak bisa ditembus oleh kekuatan luar manapun kecuali oleh kelemahan dari dalam. Marcus menulis: jika Anda terganggu oleh sesuatu dari luar, gangguan itu bukan berasal dari hal itu sendiri, melainkan dari penilaian Anda tentangnya. Dan penilaian itu ada dalam kekuasaan Anda untuk mengubahnya kapan saja. Ini adalah inti dari kebebasan Stoik: tidak ada yang bisa menyakiti Anda tanpa izin Anda.",
      },
      {
        num: 5,
        title: "Book V: At Dawn",
        summary:
          "Marcus sering menulis tentang kesulitannya bangun pagi—sebuah detail yang terasa sangat manusiawi dari seorang kaisar besar. Ia mengingatkan dirinya: ketika Anda malas bangun di pagi hari, katakan pada diri sendiri: saya bangun untuk melakukan pekerjaan manusia. Apa yang lebih nyaman—tidur di bawah selimut hangat atau melakukan apa yang lahir Anda lakukan? Stoikisme bukan tentang menjadi manusia super yang tanpa kelemahan—ia tentang merespons kelemahan dengan disiplin yang penuh kasih pada diri sendiri.",
      },
      {
        num: 6,
        title: "Book VI: The Logos",
        summary:
          "Marcus memperkenalkan konsep Logos—prinsip rasional yang mengatur alam semesta. Segala sesuatu yang terjadi adalah bagian dari tatanan yang lebih besar. Ini bukan fatalisme pasif—Marcus tetap bekerja keras dan berjuang—melainkan penerimaan aktif bahwa ada hal-hal di luar kendali kita yang harus kita terima dengan ketenangan. Amor fati—mencintai takdir—bukan berarti menyukai semua yang terjadi, melainkan memilih untuk tidak membenci apa yang tidak bisa diubah.",
      },
      {
        num: 7,
        title: "Book VII: Our Duties to One Another",
        summary:
          "Marcus merenungkan tentang kewajiban manusia satu sama lain. Ia mengingatkan dirinya berkali-kali: ketika seseorang berbuat salah kepadamu, tanyakan apa yang membuatnya melakukan itu. Hampir selalu, Anda akan menemukan bahwa mereka bertindak dari ketidaktahuan, ketakutan, atau rasa sakit—bukan dari kejahatan murni. Pemahaman ini bukan pembenaran atas kesalahan mereka, melainkan kunci untuk tidak membiarkan kemarahan Anda menghancurkan ketenangan Anda sendiri.",
      },
      {
        num: 8,
        title: "Book VIII: The Obstacle is the Way",
        summary:
          "Salah satu kutipan Marcus yang paling terkenal ada di sini: hambatan pada tindakan memajukan tindakan. Apa yang berdiri di jalan menjadi jalan itu sendiri. Ini adalah prinsip yang kemudian dipopulerkan oleh Ryan Holiday dalam bukunya The Obstacle is the Way. Setiap kesulitan mengandung pelajaran. Setiap kegagalan mengandung kesempatan. Bukan karena dunia adil, melainkan karena pikiran yang terlatih bisa menemukan jalan maju dari situasi apapun.",
      },
      {
        num: 9,
        title: "Book IX: On Death and Impermanence",
        summary:
          "Marcus merenungkan kematian dengan ketenangan yang luar biasa—bukan dengan ketakutan atau penyangkalan. Ia mengamati bahwa Alexander Agung, Julius Caesar, dan semua orang besar dalam sejarah telah tiada—lalu apa yang membuat Anda berpikir kekhawatiran Anda hari ini begitu penting? Perspektif kematian bukan untuk membuat hidup terasa sia-sia, melainkan sebaliknya—untuk membebaskan kita dari kepedulian terhadap hal-hal kecil yang tidak bermakna.",
      },
      {
        num: 10,
        title: "Book X: Amor Fati",
        summary:
          "Marcus mengembangkan konsep amor fati—mencintai takdir—lebih jauh. Ia tidak sekadar menerima apa yang terjadi, melainkan aktif memeluknya. Segala yang terjadi adalah bahan baku untuk menjadi lebih baik. Sakit mengajarkan ketabahan. Pengkhianatan mengajarkan tentang karakter manusia. Kegagalan mengajarkan kerendahan hati. Tidak ada pengalaman yang benar-benar sia-sia bagi orang yang memilih untuk belajar dari semuanya.",
      },
      {
        num: 11,
        title: "Book XI: On Anger and Forgiveness",
        summary:
          "Marcus kembali kepada tema yang ia tulis berkali-kali: mengelola kemarahan. Ia mengingatkan dirinya bahwa orang yang berbuat salah selalu memiliki alasannya—alasan yang mungkin tampak masuk akal dari sudut pandang mereka. Memaafkan bukan berarti menyetujui kesalahan mereka, melainkan membebaskan diri Anda dari beban kemarahan yang hanya menyakiti Anda sendiri. Manusia saling membutuhkan satu sama lain—kita tidak bisa bertahan sendirian. Maka kemarahan terhadap sesama manusia adalah irasional.",
      },
      {
        num: 12,
        title: "Book XII: The Final Meditations",
        summary:
          "Bab terakhir berisi renungan-renungan Marcus menjelang akhir hidupnya. Ia menulis tentang kesederhanaan: semua yang Anda butuhkan sudah ada dalam diri Anda. Ia menulis tentang waktu: masa lalu dan masa depan tidak ada—yang ada hanya sekarang. Ia menulis tentang warisan: bukan nama atau monumen yang abadi, melainkan karakter yang dijalani dengan integritas setiap hari yang benar-benar bermakna. Meditations ditutup sebagaimana dimulai—sebagai pengingat pribadi seorang pria yang berjuang setiap hari untuk menjadi manusia yang lebih baik.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B018-S1",
        task: "Setiap pagi selama seminggu, tulis satu hal yang tidak dalam kendali Anda hari ini dan satu hal yang sepenuhnya dalam kendali Anda. Fokuskan energi Anda hanya pada yang kedua.",
      },
      {
        stepId: "B018-S2",
        task: "Saat ada seseorang yang membuat Anda marah hari ini, tanyakan: apa yang mungkin membuat mereka bertindak seperti itu? Apakah kemarahan saya mengubah situasi atau hanya menyakiti saya sendiri?",
      },
      {
        stepId: "B018-S3",
        task: "Lakukan negative visualization selama 5 menit: bayangkan kehilangan hal-hal yang paling Anda hargai hari ini. Lalu sadari bahwa Anda masih memilikinya sekarang. Bagaimana perasaan Anda?",
      },
      {
        stepId: "B018-S4",
        task: "Tulis jurnal singkat malam ini: apa yang Anda lakukan hari ini yang sesuai dengan nilai-nilai terbaik Anda? Apa yang tidak? Bukan untuk menghakimi, tapi untuk belajar dan memperbaiki besok.",
      },
    ],
  },
  {
    bookId: "B019",
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    category: "Sains",
    readingTimeMinutes: 16,
    coverStyle:
      "background:linear-gradient(160deg,#001a33 0%,#003366 50%,#004d99 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🔭</div><div style="font-family:Playfair Display,serif;font-size:0.82rem;font-weight:700;color:#90caf9;line-height:1.4;">A Short History<br>of Nearly<br>Everything</div><div style="width:36px;height:2px;background:#90caf9;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Bill Bryson</div></div>',
    tags: ["sains", "sejarah ilmu", "alam semesta", "kehidupan"],
    bigIdea:
      "Ilmu pengetahuan bukan kumpulan fakta kering yang membosankan—ia adalah petualangan manusia yang penuh drama, kecelakaan, kecemburuan, dan kejeniusan untuk memahami alam semesta yang luar biasa ini.",
    analogy: {
      title:
        "Sains adalah Detektif yang Memecahkan Kasus Terbesar Sepanjang Masa",
      content:
        "Bayangkan Anda adalah detektif yang harus memecahkan kasus paling rumit yang pernah ada: bagaimana alam semesta terbentuk, bagaimana kehidupan muncul dari batu dan gas, bagaimana makhluk bersel satu berevolusi menjadi manusia yang bisa mempertanyakan asal-usulnya sendiri.\n\nAnda tidak bisa mewawancarai saksi—semuanya sudah mati miliaran tahun lalu. Anda tidak bisa mengunjungi TKP—sebagian besar sudah berubah tidak bisa dikenali. Yang Anda miliki hanyalah jejak-jejak yang tersisa: fosil, isotop radioaktif, cahaya bintang yang perjalanannya memakan jutaan tahun, dan pola matematis yang tersembunyi di balik kekacauan.\n\nItulah yang para ilmuwan lakukan selama berabad-abad. Dan Bryson menceritakan kisah detektif kosmik ini dengan cara yang membuat Anda tidak bisa berhenti membaca.",
    },
    chapters: [
      {
        num: 1,
        title: "How to Build a Universe",
        summary:
          "Bryson membuka dengan pertanyaan yang paling mendasar: bagaimana alam semesta yang ada sekarang bisa muncul dari ketiadaan? Ia menjelaskan Big Bang bukan sebagai ledakan dalam ruang, melainkan sebagai ledakan ruang itu sendiri. Dalam sepersekian detik pertama, seluruh materi dan energi yang kita kenal muncul sekaligus. Yang membuat ini luar biasa: jika konstanta fisika dasar—kekuatan gravitasi, muatan elektron, kecepatan cahaya—berbeda hanya sedikit saja, alam semesta seperti yang kita kenal tidak akan pernah terbentuk.",
      },
      {
        num: 2,
        title: "The Size of the Universe",
        summary:
          "Manusia secara biologis tidak dirancang untuk memahami skala yang sangat besar atau sangat kecil. Bryson mengajak pembaca bergulat dengan angka-angka yang tidak masuk akal: jarak dari Bumi ke Matahari adalah 150 juta kilometer—jika Anda mengemudi dengan kecepatan 100 km/jam tanpa berhenti, perjalanan itu memakan waktu 170 tahun. Bintang terdekat empat kali lebih jauh. Galaksi kita berisi 200-400 miliar bintang. Dan ada mungkin dua triliun galaksi di alam semesta yang dapat diamati.",
      },
      {
        num: 3,
        title: "The Reverend Evans's Universe",
        summary:
          "Bryson menceritakan kisah Robert Evans, seorang pendeta Australia yang hobi mengamati galaksi dengan teleskop sederhana di halaman belakang rumahnya. Evans memiliki kemampuan luar biasa untuk menghafal peta bintang ribuan galaksi—dan dengan kemampuan ini ia berhasil menemukan lebih banyak supernova daripada kebanyakan observatorium profesional. Kisah ini mengajarkan bahwa sains bukan hanya milik institusi besar dan alat canggih—kecintaan dan dedikasi personal bisa menghasilkan penemuan yang luar biasa.",
      },
      {
        num: 4,
        title: "The Measure of Things",
        summary:
          "Bagaimana ilmuwan mengukur hal-hal yang tidak bisa diukur langsung—massa Bumi, jarak ke bintang, usia alam semesta? Bryson menceritakan kisah-kisah brilian dan sering kali absurd di balik pengukuran-pengukuran ini. Henry Cavendish mengukur massa Bumi menggunakan dua bola timah besar di laboratorium pada abad ke-18—dengan akurasi yang mengejutkan. Parallax digunakan untuk mengukur jarak ke bintang terdekat dengan memotret langit dari dua titik berbeda dalam orbit Bumi.",
      },
      {
        num: 5,
        title: "The Stone-Breakers",
        summary:
          "Geologi modern lahir dari pertanyaan sederhana yang ternyata sangat sulit dijawab: seberapa tua Bumi ini? Selama berabad-abad, jawaban yang diterima adalah sekitar 6.000 tahun berdasarkan interpretasi Alkitab. Lalu para geolog mulai memperhatikan lapisan-lapisan batuan dan fosil, dan menyadari bahwa proses yang mereka amati—erosi, sedimentasi, pengangkatan pegunungan—membutuhkan waktu jauh lebih lama dari itu. Perlawanan terhadap ide ini sangat sengit dan personal.",
      },
      {
        num: 6,
        title: "Science Goes Underground",
        summary:
          "Bryson menjelajahi dunia yang tersembunyi jauh di bawah kaki kita. Interior Bumi adalah salah satu tempat yang paling sulit dipelajari—kita tidak bisa mengebor lebih dalam dari 12 kilometer, sementara inti Bumi ada di kedalaman 6.000 kilometer. Semua yang kita ketahui tentang struktur dalam Bumi berasal dari analisis gelombang seismik—cara gempa bumi merambat melalui berbagai lapisan material. Ini seperti mencoba memahami struktur sebuah bangunan hanya dari suara yang dihasilkan saat Anda mengetuknya.",
      },
      {
        num: 7,
        title: "Elemental Matters",
        summary:
          "Kisah penemuan dan penamaan unsur-unsur kimia adalah salah satu saga paling dramatis dalam sejarah sains—penuh dengan persaingan sengit, klaim yang diperdebatkan, dan penemuan yang terjadi secara bersamaan di laboratorium yang berbeda. Bryson juga menceritakan betapa berbahayanya pekerjaan para kimiawan awal yang sering kali dengan polos menghirup, menelan, atau bahkan menyuntikkan ke tubuh mereka sendiri zat-zat yang ternyata sangat beracun demi ilmu pengetahuan.",
      },
      {
        num: 8,
        title: "Einstein's Universe",
        summary:
          "Bryson menjelaskan relativitas dengan cara yang langka: mudah dimengerti tanpa menyederhanakan esensinya. Einstein mengembangkan teori relativitas khusus pada 1905 bukan dari eksperimen laboratorium, melainkan dari eksperimen pikiran—membayangkan apa yang akan terjadi jika Anda bisa berlari secepat cahaya. Hasilnya merevolusi pemahaman kita tentang ruang, waktu, massa, dan energi sekaligus. Yang paling mengejutkan: Einstein mendapat Nobel bukan untuk relativitas, melainkan untuk penjelasannya tentang efek fotolistrik.",
      },
      {
        num: 9,
        title: "The Mighty Atom",
        summary:
          "Dunia subatomik adalah tempat di mana intuisi sehari-hari sama sekali tidak berlaku. Atom adalah sebagian besar ruang kosong—jika nukleus atom seukuran lalat di tengah sebuah katedral, elektronnya berputar di dinding katedral. Mekanika kuantum mengatakan bahwa elektron tidak berada di satu tempat yang pasti—ia ada di semua tempat yang mungkin secara bersamaan, sampai Anda mengukurnya. Ini bukan metafora—ini adalah deskripsi paling akurat dari realitas subatomik yang kita miliki.",
      },
      {
        num: 10,
        title: "Getting the Lead Out",
        summary:
          "Bryson menceritakan kisah Clair Patterson, seorang geokimia yang berusaha mengukur usia Bumi menggunakan peluruhan radioaktif timbal. Dalam prosesnya, ia menemukan sesuatu yang mengerikan: atmosfer Bumi terkontaminasi timbal jauh melebihi level alami—akibat dari bensin bertimbal dan cat bertimbal yang telah digunakan selama puluhan tahun. Perjuangannya selama dua dekade melawan industri minyak dan pemerintah untuk melarang timbal adalah salah satu kisah kepahlawanan saintifik yang paling dramatis dan paling jarang diceritakan.",
      },
      {
        num: 11,
        title: "Muster Mark's Quarks",
        summary:
          "Murray Gell-Mann menemukan bahwa proton dan neutron tersusun dari partikel yang lebih kecil lagi—yang ia namakan quarks, diambil dari sebuah baris dalam novel Finnegans Wake karya James Joyce. Fisika partikel modern telah mengidentifikasi puluhan partikel subatomik, semuanya dijelaskan oleh Standard Model—teori paling akurat yang pernah diuji dalam sejarah sains. Namun Standard Model masih belum lengkap: ia tidak bisa menjelaskan gravitasi, materi gelap, atau energi gelap.",
      },
      {
        num: 12,
        title: "The Earth Moves",
        summary:
          "Teori lempeng tektonik—yang menjelaskan bagaimana benua-benua bergerak, bagaimana pegunungan terbentuk, dan mengapa gempa bumi terjadi—adalah salah satu revolusi terbesar dalam sejarah geologi. Namun ketika Alfred Wegener pertama kali mengusulkannya pada 1912, ia diejek habis-habisan oleh komunitas ilmiah. Baru pada 1960-an bukti yang tidak bisa dibantah muncul, dan teori yang sama diterima secara universal. Kisah ini adalah pelajaran tentang bagaimana sains bekerja—dan tentang harga yang harus dibayar para pelopor.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B019-S1",
        task: "Cari tahu satu fenomena alam yang selalu Anda anggap biasa—hujan, pelangi, atau kenapa langit biru—dan pelajari penjelasan ilmiahnya. Keajaiban ada di mana-mana jika Anda tahu cara melihatnya.",
      },
      {
        stepId: "B019-S2",
        task: "Kunjungi museum sains atau planetarium terdekat. Jika tidak ada, tonton satu dokumenter sains berkualitas seperti Cosmos atau Blue Planet minggu ini.",
      },
      {
        stepId: "B019-S3",
        task: "Bayangkan skala waktu geologis: jika usia Bumi adalah 24 jam, seluruh sejarah manusia terjadi dalam 1,5 detik terakhir. Tulis refleksi Anda tentang apa artinya ini bagi cara Anda melihat masalah sehari-hari.",
      },
      {
        stepId: "B019-S4",
        task: "Pilih satu ilmuwan yang kisahnya menginspirasi Anda dan baca biografinya. Sains bukan hanya tentang penemuan—ia tentang manusia yang berjuang keras untuk memahami dunia.",
      },
    ],
  },
  {
    bookId: "B020",
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    category: "Sains",
    readingTimeMinutes: 18,
    coverStyle:
      "background:linear-gradient(160deg,#001a0a 0%,#003320 50%,#005c38 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🧬</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#a5d6a7;line-height:1.3;">The Gene</div><div style="width:36px;height:2px;background:#a5d6a7;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Siddhartha Mukherjee</div></div>',
    tags: ["genetika", "DNA", "evolusi", "biologi"],
    bigIdea:
      "Gen adalah unit terkecil dari warisan biologis—namun dampaknya terhadap identitas manusia, penyakit, dan masa depan spesies kita jauh melampaui apa yang para penemunya bayangkan. Memahami gen berarti memahami apa artinya menjadi manusia.",
    analogy: {
      title: "Gen adalah Instruksi yang Menulis Diri Sendiri Sambil Dibaca",
      content:
        "Bayangkan sebuah buku resep yang sangat aneh: saat Anda membacanya, buku itu tidak hanya memberikan instruksi untuk membuat hidangan—ia juga secara aktif membuat bahan-bahan yang dibutuhkan, memodifikasi resep berdasarkan kondisi dapur, dan bahkan menentukan siapa yang akan membaca resep berikutnya.\n\nItulah gen. DNA bukan hanya cetak biru pasif—ia adalah instruksi aktif yang membaca dirinya sendiri, merespons lingkungan, dan mewariskan versi modifikasinya kepada generasi berikutnya. Setiap sel dalam tubuh Anda mengandung informasi genetik yang sama—namun sel hati, sel otak, dan sel kulit menggunakan bagian yang berbeda dari instruksi yang sama untuk menjadi sangat berbeda.\n\nMukherjee menceritakan bagaimana manusia perlahan memahami bahasa rahasia ini—dari kebun biara Gregor Mendel di abad ke-19 hingga revolusi CRISPR hari ini yang memungkinkan kita mengedit kode kehidupan itu sendiri.",
    },
    chapters: [
      {
        num: 1,
        title: "The Monk in the Garden",
        summary:
          "Gregor Mendel, seorang biarawan Agustinian di Brno, Moravia, menghabiskan delapan tahun menyilangkan ribuan tanaman kacang polong di kebun biara dan mencatat hasilnya dengan teliti luar biasa. Pada 1866, ia mempresentasikan temuannya—bahwa sifat-sifat diwariskan dalam unit diskrit yang kini kita sebut gen—kepada Masyarakat Ilmu Alam setempat. Tidak ada yang memperhatikan. Makalahnya dikutip hanya tiga kali dalam 35 tahun berikutnya. Mendel meninggal tanpa pernah tahu bahwa ia telah meletakkan fondasi biologi modern.",
      },
      {
        num: 2,
        title: "The Music of the Cell",
        summary:
          "Pada awal abad ke-20, para ilmuwan mulai menghubungkan temuan Mendel dengan kromosom yang bisa dilihat di bawah mikroskop. Thomas Hunt Morgan dan murid-muridnya di Columbia University menggunakan lalat buah Drosophila—yang berkembang biak cepat dan memiliki kromosom yang relatif sedikit—untuk memetakan lokasi gen di kromosom. Ini adalah pertama kalinya gen memiliki lokasi fisik, bukan hanya konsep abstrak. Peta kromosom pertama lahir dari jutaan lalat buah.",
      },
      {
        num: 3,
        title: "Secrets of Life",
        summary:
          "Oswald Avery membuktikan pada 1944 bahwa DNA—bukan protein seperti yang banyak ilmuwan yakini—adalah molekul yang membawa informasi genetik. Penemuan ini revolusioner namun awalnya ditolak oleh komunitas ilmiah. Linus Pauling, kimiawan terbesar zamannya, hampir memecahkan struktur DNA tapi membuat kesalahan mendasar. James Watson dan Francis Crick akhirnya memecahkan misteri struktur double helix DNA pada 1953—sebagian dengan menggunakan data kristalografi sinar-X milik Rosalind Franklin yang kontroversial.",
      },
      {
        num: 4,
        title: "The Chromosome Theory of Heredity",
        summary:
          "Setelah struktur DNA diketahui, pertanyaan berikutnya adalah: bagaimana informasi dalam DNA diterjemahkan menjadi protein dan akhirnya menjadi organisme hidup? Dekade 1950-1960an adalah era keemasan biologi molekuler—Marshall Nirenberg, Har Gobind Khorana, dan kolega-kolega mereka memecahkan kode genetik, menemukan bahwa tiga basa DNA (codon) mengkode satu asam amino. Seluruh bahasa kehidupan—dari bakteri hingga manusia—menggunakan alfabet yang sama.",
      },
      {
        num: 5,
        title: "The Genomic Hurricane",
        summary:
          "Proyek Genom Manusia yang dimulai pada 1990 adalah upaya ilmiah paling ambisius dalam sejarah biologi—lebih dari 1.000 ilmuwan dari 20 negara bekerja sama untuk memetakan seluruh 3 miliar pasang basa DNA manusia. Persaingan dramatis antara konsorsium publik yang dipimpin Francis Collins dan perusahaan swasta Celera Genomics milik Craig Venter mengubah proyek ini menjadi drama yang menarik perhatian dunia. Pada 2001, peta kasar genom manusia pertama dipublikasikan.",
      },
      {
        num: 6,
        title: "The Fate of Genes",
        summary:
          "Salah satu kejutan terbesar dari Proyek Genom Manusia adalah betapa sedikitnya gen yang kita miliki: sekitar 20.000-25.000—hampir sama dengan cacing tanah. Jawabannya ada pada regulasi gen: bukan hanya gen apa yang Anda miliki, melainkan kapan, di mana, dan berapa banyak gen itu diekspresikan. Epigenetik—studi tentang perubahan ekspresi gen yang tidak melibatkan perubahan urutan DNA—membuka dimensi baru dalam pemahaman kita tentang warisan biologis.",
      },
      {
        num: 7,
        title: "Genes and Identity",
        summary:
          "Mukherjee menjelajahi pertanyaan yang paling sensitif: sejauh mana gen menentukan identitas manusia—kecerdasan, kepribadian, orientasi seksual, kerentanan terhadap penyakit mental? Jawabannya selalu lebih kompleks dari yang ingin diakui baik oleh kaum determinis genetik maupun oleh mereka yang menolak semua pengaruh genetik. Gen dan lingkungan berinteraksi dalam cara yang sangat rumit—ekspresi gen dipengaruhi oleh pengalaman hidup, dan pengalaman hidup dipengaruhi oleh predisposisi genetik.",
      },
      {
        num: 8,
        title: "The Gene and the Self",
        summary:
          "Mukherjee merefleksikan pengalaman pribadinya—dua paman dan seorang sepupunya menderita gangguan mental berat, dan ia bertanya-tanya tentang risiko genetiknya sendiri. Bagian ini menjadikan buku ini bukan sekadar sejarah ilmu pengetahuan, melainkan juga meditasi pribadi tentang apa artinya membawa warisan genetik tertentu. Pengetahuan genetik bisa membebaskan—atau membebani—tergantung bagaimana kita memilih untuk memaknainya.",
      },
      {
        num: 9,
        title: "Editing the Genome: CRISPR",
        summary:
          "CRISPR-Cas9, yang dikembangkan oleh Jennifer Doudna dan Emmanuelle Charpentier (peraih Nobel 2020), adalah alat pengeditan gen yang merevolusi biologi. Untuk pertama kalinya, ilmuwan bisa memotong dan menempel DNA dengan presisi, kemudahan, dan biaya yang tidak pernah bisa dibayangkan sebelumnya. Ini membuka kemungkinan yang luar biasa—penyembuhan penyakit genetik yang selama ini tidak bisa diobati—sekaligus kekhawatiran mendalam tentang eugenika, designer babies, dan ketidaksetaraan akses.",
      },
      {
        num: 10,
        title: "The Post-Genomic World",
        summary:
          "Mukherjee menutup dengan merenungkan masa depan yang sedang kita masuki—dunia di mana kemampuan untuk membaca dan menulis genom manusia semakin murah dan mudah. Pertanyaan yang perlu dijawab bukan hanya ilmiah—apakah kita bisa melakukan ini—melainkan etis: apakah kita seharusnya melakukan ini? Siapa yang memiliki akses? Siapa yang membuat keputusan? Dan apa yang tetap kita sebut manusiawi ketika kita bisa mengedit definisi kemanusiaan itu sendiri?",
      },
    ],
    actionableSteps: [
      {
        stepId: "B020-S1",
        task: "Pelajari riwayat kesehatan keluarga Anda setidaknya tiga generasi ke atas. Pola penyakit apa yang berulang? Informasi ini sangat berharga untuk pencegahan kesehatan Anda sendiri.",
      },
      {
        stepId: "B020-S2",
        task: "Cari tahu satu penyakit genetik yang pernah Anda dengar (diabetes tipe 1, kanker payudara BRCA, Huntington) dan pelajari mekanisme genetiknya. Pemahaman ini mengubah cara Anda melihat penyakit.",
      },
      {
        stepId: "B020-S3",
        task: "Ikuti perkembangan berita tentang CRISPR dan terapi gen. Ini adalah teknologi yang akan mengubah dunia dalam 20 tahun ke depan—dan setiap warga negara perlu memahami implikasinya untuk membuat keputusan demokratis yang informasional.",
      },
      {
        stepId: "B020-S4",
        task: "Renungkan pertanyaan ini: jika Anda bisa mengetahui predisposisi genetik Anda terhadap penyakit tertentu, apakah Anda ingin tahu? Mengapa atau mengapa tidak? Tidak ada jawaban yang salah—tapi prosesnya membantu Anda memahami nilai-nilai Anda.",
      },
    ],
  },
  {
    bookId: "B021",
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Sains",
    readingTimeMinutes: 15,
    coverStyle:
      "background:linear-gradient(160deg,#1a0a1a 0%,#2d1a00 50%,#5c3800 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🧫</div><div style="font-family:Playfair Display,serif;font-size:0.9rem;font-weight:700;color:#ffb74d;line-height:1.3;">The Selfish<br>Gene</div><div style="width:36px;height:2px;background:#ffb74d;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Richard Dawkins</div></div>',
    tags: ["evolusi", "genetika", "biologi", "seleksi alam"],
    bigIdea:
      "Evolusi tidak terjadi pada level individu atau spesies—ia terjadi pada level gen. Kita semua hanyalah mesin survival yang dibangun oleh gen untuk memastikan kelangsungan hidup gen itu sendiri. Namun kita adalah satu-satunya mesin yang bisa memberontak terhadap programnya.",
    analogy: {
      title:
        "Kita Adalah Robot yang Diprogram oleh Gen—tapi Bisa Memilih Memberontak",
      content:
        "Bayangkan sebuah perusahaan yang mendirikan ribuan cabang di seluruh dunia. Setiap cabang dikelola secara otonom, memiliki tampilan yang berbeda, beradaptasi dengan kondisi lokal. Tapi semua cabang memiliki satu tujuan yang sama: memastikan kantor pusat—perusahaan induk—terus eksis dan berkembang.\n\nItulah hubungan antara gen dan organisme. Tubuh Anda, kepribadian Anda, naluri Anda—semuanya adalah strategi yang dikembangkan oleh gen selama jutaan tahun evolusi untuk memastikan satu hal: gen itu sendiri terus berduplikasi dan bertahan.\n\nNamun Dawkins mengakhiri bukunya dengan catatan yang mengejutkan: manusia adalah satu-satunya makhluk yang bisa memahami program ini—dan dengan pemahaman itu, kita bisa memilih untuk tidak mengikutinya. Kita bisa melawan gen kita. Kita bisa menggunakan kontrasepsi, mengadopsi anak orang lain, berkorban untuk orang asing. Itulah keunikan manusia.",
    },
    chapters: [
      {
        num: 1,
        title: "Why Are People?",
        summary:
          "Dawkins membuka dengan pertanyaan yang tampak sederhana namun ternyata sangat dalam: mengapa makhluk hidup ada? Jawaban tradisional—untuk bertahan hidup, untuk berkembang biak, untuk kebaikan spesies—semuanya salah arah, kata Dawkins. Jawaban yang lebih fundamental adalah: makhluk hidup ada sebagai kendaraan bagi gen untuk bertahan dan bereplikasi. Pergeseran perspektif ini—dari individu sebagai unit evolusi ke gen sebagai unit evolusi—mengubah segalanya dalam cara kita memahami perilaku makhluk hidup.",
      },
      {
        num: 2,
        title: "The Replicators",
        summary:
          "Dawkins menceritakan asal mula kehidupan. Di lautan purba sekitar 3,5-4 miliar tahun lalu, molekul-molekul kimia secara kebetulan membentuk struktur yang bisa membuat salinan dirinya sendiri—replikator pertama. Replikator yang paling stabil dan paling efisien dalam menyalin dirinya menjadi semakin dominan. Seleksi alam dimulai bukan dari organisme yang bersaing untuk bertahan hidup, melainkan dari molekul yang bersaing untuk menjadi salinan terbanyak. Gen modern adalah keturunan langsung dari replikator purba itu.",
      },
      {
        num: 3,
        title: "Immortal Coils",
        summary:
          "Gen bersifat hampir abadi—individual organisme mati, tapi gen terus hidup dalam keturunan mereka selama jutaan generasi. Dawkins memperkenalkan konsep gene pool—kumpulan semua gen dalam suatu populasi yang terus berputar dan bergabung ulang setiap generasi. Seleksi alam bekerja pada gen di dalam gene pool ini: gen yang membuat organisme pembawanya lebih mungkin bereproduksi akan semakin banyak dalam gene pool, sementara gen yang merugikan akan tersisih.",
      },
      {
        num: 4,
        title: "The Gene Machine",
        summary:
          "Organisme—termasuk manusia—adalah mesin survival yang dibangun oleh gen. Otak, tangan, mata, emosi, kecerdasan—semuanya adalah alat yang dikembangkan oleh gen karena membantu gen bertahan. Ini bukan berarti gen sadar atau punya tujuan—gen tidak punya pikiran. Tapi gen yang kebetulan membangun mesin yang lebih efektif dalam bertahan dan bereproduksi akan meninggalkan lebih banyak salinan. Hasilnya adalah seolah gen memiliki tujuan, meskipun sebenarnya tidak.",
      },
      {
        num: 5,
        title: "Aggression: Stability and the Selfish Machine",
        summary:
          "Dawkins menggunakan teori permainan (game theory) untuk menjelaskan evolusi perilaku agresif dan kooperatif. Konsep Evolutionary Stable Strategy (ESS): strategi perilaku yang, jika diadopsi oleh sebagian besar populasi, tidak bisa dikalahkan oleh strategi alternatif. Ini menjelaskan mengapa agresivitas ekstrem jarang berevolusi—seekor hewan yang selalu bertarung habis-habisan akan sering terluka dan akhirnya kalah dibanding hewan yang bertarung selektif. Keseimbangan antara agresivitas dan kepatuhan adalah ESS yang stabil.",
      },
      {
        num: 6,
        title: "Genesmanship",
        summary:
          "Altruisme—perilaku yang menguntungkan organisme lain dengan mengorbankan diri sendiri—tampak bertentangan dengan teori selfish gene. Dawkins menjelaskannya melalui konsep kin selection: gen yang mendorong organisme untuk berkorban bagi kerabat dekat (yang berbagi banyak gen yang sama) sebenarnya sedang melindungi salinan-salinan dirinya sendiri. Lebah pekerja yang mati melindungi sarang adalah contoh klasik—semua lebah dalam satu sarang adalah saudara yang berbagi hampir semua gen yang sama.",
      },
      {
        num: 7,
        title: "Family Planning",
        summary:
          "Bagaimana gen menentukan berapa banyak keturunan yang optimal untuk diproduksi? Dawkins menjelaskan trade-off antara kualitas dan kuantitas keturunan melalui perspektif gen. Konflik kepentingan yang menarik: gen kepentingan terbaik orang tua mungkin berbeda dari gen kepentingan terbaik anak. Anak yang menangis lebih keras mendapat lebih banyak perhatian—bahkan mungkin lebih dari yang optimal bagi orang tua yang juga harus merawat saudara-saudaranya. Ini bukan perilaku jahat, melainkan perilaku yang dipandu oleh gen untuk memaksimalkan transmisi gen itu sendiri.",
      },
      {
        num: 8,
        title: "Battle of the Generations",
        summary:
          "Dawkins menganalisis konflik yang hampir universal antara orang tua dan anak—terutama seputar sapih, perhatian, dan sumber daya. Dari perspektif gen orang tua, optimal untuk menyapih anak lebih awal agar bisa memproduksi lebih banyak keturunan. Dari perspektif gen anak, optimal untuk terus menyusu selama mungkin. Konflik ini bukan karena orang tua atau anak jahat—keduanya sedang mengekspresikan strategi yang diprogram oleh gen mereka masing-masing untuk memaksimalkan transmisi gen.",
      },
      {
        num: 9,
        title: "Battle of the Sexes",
        summary:
          "Mengapa laki-laki dan perempuan berevolusi dengan strategi reproduksi yang berbeda? Jawaban Dawkins berakar pada asimetri investasi: sel telur jauh lebih besar dan lebih mahal untuk diproduksi dari sperma. Akibatnya, betina cenderung berevolusi untuk lebih selektif dalam memilih pasangan, sementara jantan cenderung berevolusi untuk bersaing mendapat akses ke betina. Ini bukan tentang moralitas—ini adalah konsekuensi matematika dari asimetri biologis yang mendasar.",
      },
      {
        num: 10,
        title: "You Scratch My Back, I'll Ride on Yours",
        summary:
          "Bagaimana kooperasi bisa berevolusi di antara individu yang tidak berkerabat? Dawkins menjelaskan reciprocal altruism: aku membantu kamu sekarang karena mungkin kamu akan membantuku nanti. Ini bisa berevolusi jika individu-individu berinteraksi berulang kali dan bisa mengenali satu sama lain. Teori permainan menunjukkan bahwa strategi Tit-for-Tat—kooperasi di awal, lalu meniru apa yang dilawan lakukan—adalah ESS yang sangat kuat dalam lingkungan di mana interaksi berulang.",
      },
      {
        num: 11,
        title: "Memes: The New Replicators",
        summary:
          "Dawkins memperkenalkan konsep meme—unit budaya yang bereplikasi melalui imitasi, analog dengan gen dalam biologi. Lagu, ide, cara berpakaian, resep masakan—semuanya adalah meme yang menyebar dari otak ke otak, bermutasi, dan bersaing untuk bertahan. Beberapa meme sangat sukses bukan karena mereka bermanfaat bagi pembawanya, melainkan karena mereka sangat mudah ditiru atau sangat mudah diingat. Konsep meme, yang lahir dari satu bab dalam buku ini, menjadi salah satu ide paling berpengaruh dalam ilmu sosial dan budaya pop.",
      },
      {
        num: 12,
        title: "Nice Guys Finish First",
        summary:
          "Bab terakhir—yang ditambahkan di edisi berikutnya—adalah respons Dawkins terhadap kritik bahwa bukunya mempromosikan egoisme. Ia menegaskan kembali perbedaan penting: gen bersifat selfish, tapi itu tidak berarti organisme yang membawanya harus atau akan berperilaku selfish. Bahkan lebih dari itu: dalam banyak kondisi, strategi kooperatif mengalahkan strategi egois dalam jangka panjang. Dan manusia—dengan kemampuan uniknya untuk memahami proses evolusi—bisa secara sadar memilih untuk bertindak di luar program genetiknya.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B021-S1",
        task: "Perhatikan satu naluri kuat yang Anda miliki—kecemburuan, protektif terhadap anak, daya tarik seksual, atau ketakutan tertentu. Tanyakan: apakah ini mungkin adalah program genetik yang berevolusi karena membantu nenek moyang saya bertahan? Apakah program ini masih relevan untuk saya hari ini?",
      },
      {
        stepId: "B021-S2",
        task: "Pikirkan satu perilaku altruistik yang pernah Anda lakukan. Apakah itu untuk kerabat, teman dekat, atau orang asing? Bagaimana perspektif kin selection dan reciprocal altruism menjelaskan—atau tidak menjelaskan—motivasi Anda?",
      },
      {
        stepId: "B021-S3",
        task: "Identifikasi satu meme yang sangat kuat dalam budaya Anda—keyakinan, kebiasaan, atau nilai yang menyebar sangat luas. Apakah meme itu menyebar karena benar-benar bermanfaat, atau karena ia sangat mudah menular meskipun tidak selalu bermanfaat?",
      },
      {
        stepId: "B021-S4",
        task: "Renungkan: di area mana dalam hidup Anda Anda ingin memberontak terhadap program genetik Anda? Misalnya: menahan nafsu jangka pendek demi tujuan jangka panjang, berkorban untuk orang asing, atau memilih tidak punya anak meski ada dorongan biologis.",
      },
    ],
  },
  {
    bookId: "B022",
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    category: "Bisnis",
    readingTimeMinutes: 14,
    coverStyle:
      "background:linear-gradient(160deg,#0a0a0a 0%,#1a1a1a 40%,#2a1a0a 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">⚔️</div><div style="font-family:Playfair Display,serif;font-size:0.82rem;font-weight:700;color:#ff8f00;line-height:1.4;">The Hard Thing<br>About Hard<br>Things</div><div style="width:36px;height:2px;background:#ff8f00;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Ben Horowitz</div></div>',
    tags: ["startup", "kepemimpinan", "CEO", "manajemen"],
    bigIdea:
      "Tidak ada rumus untuk memimpin perusahaan melalui krisis. Yang membedakan CEO yang baik dari yang buruk bukan kemampuan menghindari masalah sulit, melainkan kemampuan menghadapinya dengan kejernihan pikiran saat semua orang panik.",
    analogy: {
      title:
        "Memimpin Startup adalah Seperti Berperang di Malam yang Gelap Gulita",
      content:
        "Semua buku bisnis mengajarkan Anda cara membangun perusahaan yang sukses—strategi yang tepat, kultur yang kuat, produk yang hebat. Tapi tidak ada yang mengajarkan Anda apa yang harus dilakukan saat gajian besok dan rekening perusahaan hampir kosong. Tidak ada yang mengajarkan cara memecat sahabat terbaik Anda yang ternyata tidak kompeten untuk posisinya. Tidak ada yang mengajarkan cara memotivasi tim yang sudah setengah keluar karena melihat kapal sedang tenggelam.\n\nBen Horowitz menyebut kondisi ini The Struggle—perjuangan yang menyiksa di mana tidak ada jawaban yang jelas, tidak ada mentor yang bisa membantu, dan keputusan apapun yang Anda ambil mungkin salah.\n\nBuku ini bukan tentang best practices. Ini adalah buku tentang survival—tentang bagaimana Anda tetap waras dan tetap memimpin saat segalanya runtuh di sekitar Anda.",
    },
    chapters: [
      {
        num: 1,
        title: "From Communist to Venture Capitalist",
        summary:
          "Horowitz menceritakan latar belakangnya yang tidak biasa: tumbuh besar dengan ayah yang adalah seorang Marxis, lalu menjadi salah satu investor venture capital paling berpengaruh di Silicon Valley bersama Marc Andreessen. Perjalanan ini mengajarkannya bahwa dunia bisnis—seperti dunia politik—penuh dengan ideologi yang terdengar indah tapi gagal ketika bertemu realitas. Yang bertahan bukan yang memiliki teori paling elegan, melainkan yang bisa beradaptasi dengan fakta di lapangan.",
      },
      {
        num: 2,
        title: "The Struggle",
        summary:
          "The Struggle adalah kondisi di mana Anda sebagai founder atau CEO merasa sendirian, tertekan, dan tidak tahu jalan keluar. Horowitz menggambarkannya dengan jujur: Anda tidak bisa tidur. Anda berpura-pura baik-baik saja di depan tim. Anda mencari jawaban di setiap buku dan percakapan tapi tidak menemukannya. Ia berpendapat bahwa The Struggle bukan tanda kegagalan—ia adalah bagian yang tidak bisa dihindari dari membangun sesuatu yang berarti. Yang membedakan adalah bagaimana Anda meresponsnya.",
      },
      {
        num: 3,
        title: "When Things Fall Apart",
        summary:
          "Horowitz berbagi kisah nyata bagaimana Loudcloud—perusahaannya—hampir bangkrut setelah dot-com crash. Mereka harus memberhentikan ratusan karyawan, menjual bisnis utama mereka, dan pivot ke bisnis yang sama sekali berbeda—semua dalam kondisi di mana hampir tidak ada uang dan moral tim di titik terendah. Setiap keputusan yang ia buat terasa salah. Namun dari pengalaman ini ia belajar prinsip yang menjadi inti buku: dalam kondisi krisis, kejernihan dan kecepatan pengambilan keputusan lebih penting dari kesempurnaan keputusan.",
      },
      {
        num: 4,
        title:
          "Take Care of the People, the Products, and the Profits—in That Order",
        summary:
          "Urutan prioritas ini adalah framework utama Horowitz dalam memimpin perusahaan. Orang dulu—rekrut dengan benar, jaga dengan baik, dan berhentikan dengan bermartabat jika perlu. Produk kedua—pastikan Anda membangun sesuatu yang benar-benar dibutuhkan. Profit ketiga—konsekuensi alami dari dua yang pertama. Ia juga membahas pentingnya culture yang didefinisikan bukan oleh nilai-nilai yang dipajang di dinding, melainkan oleh perilaku yang benar-benar dijalankan dan dihargai setiap hari.",
      },
      {
        num: 5,
        title: "Hiring: The Most Important Thing You Do",
        summary:
          "Horowitz berpendapat bahwa keputusan hiring adalah keputusan paling penting yang dibuat seorang CEO—lebih penting dari strategi, produk, atau fundraising. Ia membedakan antara strength-based hiring (rekrut orang dengan kekuatan luar biasa meskipun memiliki kelemahan yang jelas) versus weakness-based hiring (eliminasi kandidat berdasarkan kelemahan mereka). Untuk posisi senior, ia lebih memilih yang pertama—karena kelemahan bisa dikelola, tapi kekuatan tidak bisa diciptakan.",
      },
      {
        num: 6,
        title: "Why It's Hard to Bring in a Senior Executive from Outside",
        summary:
          "Salah satu keputusan paling sulit dalam scaling startup adalah kapan harus mempromosikan orang dalam versus merekrut eksekutif senior dari luar. Horowitz menjelaskan mengapa merekrut dari luar sering gagal: eksekutif yang sukses di perusahaan besar membawa mindset dan cara kerja yang tidak sesuai dengan kecepatan dan ambiguitas startup. Sebaliknya, orang dalam yang dipromosikan mungkin belum memiliki pengalaman yang dibutuhkan. Tidak ada jawaban universal—setiap situasi membutuhkan analisis yang jujur.",
      },
      {
        num: 7,
        title: "The Right Kind of Ambition",
        summary:
          "Ada dua tipe ambisi dalam kepemimpinan: ambisi untuk diri sendiri (untuk terlihat pintar, untuk mendapat kredit, untuk membangun personal brand) dan ambisi untuk perusahaan dan timnya. Pemimpin terbaik yang Horowitz kenal hampir selalu memiliki ambisi yang berorientasi ke luar—mereka tidak peduli siapa yang mendapat kredit, yang penting pekerjaan selesai dengan baik. Ia menyebut ini managerial courage: kemampuan untuk membuat keputusan yang benar meskipun tidak populer dan tidak menguntungkan diri sendiri.",
      },
      {
        num: 8,
        title: "First, Define the Problem",
        summary:
          "Kesalahan paling umum yang Horowitz lihat pada CEO muda adalah melompat ke solusi sebelum benar-benar memahami masalahnya. Ia menceritakan bagaimana ia sering dipanggil oleh perusahaan portfolio Andreessen Horowitz yang sedang dalam krisis, dan dalam hampir semua kasus, krisis yang terlihat ternyata adalah gejala dari masalah yang lebih dalam. Kemampuan untuk mendiagnosis masalah dengan akurat—bahkan saat berada di bawah tekanan ekstrem—adalah skill kepemimpinan yang paling underrated.",
      },
      {
        num: 9,
        title: "The Fine Line Between Fear and Courage",
        summary:
          "Keberanian bukan ketiadaan rasa takut—melainkan kemampuan untuk bertindak dengan benar meskipun takut. Horowitz berbagi momen-momen di mana ia harus membuat keputusan yang menakutkan: memecat co-founder, menolak tawaran akuisisi yang menggiurkan, bertahan saat investor menyarankan menyerah. Dalam setiap kasus, keputusan yang benar terasa jauh lebih menakutkan dari keputusan yang mudah. Ia berpendapat bahwa pemimpin yang baik bukan yang tidak takut, melainkan yang bisa membedakan ketakutan yang harus diatasi dari ketakutan yang harus didengarkan.",
      },
      {
        num: 10,
        title: "The Peacetime CEO and the Wartime CEO",
        summary:
          "Salah satu kerangka paling berguna dalam buku ini: perbedaan antara peacetime CEO (memimpin saat perusahaan sedang tumbuh dan sehat) dan wartime CEO (memimpin saat perusahaan menghadapi ancaman eksistensial). Gaya kepemimpinan yang efektif dalam kondisi damai—konsensus, delegasi, pengembangan jangka panjang—bisa menghancurkan perusahaan dalam kondisi perang. Dan sebaliknya. CEO terbaik bisa beralih antara kedua mode ini sesuai kebutuhan, meskipun ini sangat sulit untuk dilakukan.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B022-S1",
        task: "Identifikasi satu keputusan sulit yang sudah terlalu lama Anda tunda dalam pekerjaan atau bisnis Anda. Tanyakan: apakah saya menundanya karena memang butuh lebih banyak informasi, atau karena takut menghadapi konsekuensinya? Buat keputusan itu minggu ini.",
      },
      {
        stepId: "B022-S2",
        task: "Evaluasi satu rekrutmen atau promosi yang tidak berjalan seperti yang diharapkan. Apakah masalahnya pada orangnya, atau pada penempatan dan ekspektasi yang tidak jelas? Apa yang bisa Anda lakukan berbeda?",
      },
      {
        stepId: "B022-S3",
        task: "Tulis tiga hal yang benar-benar Anda percayai tentang bisnis atau pekerjaan Anda yang berbeda dari konvensional wisdom di industri Anda. Apakah Anda berani bertindak berdasarkan keyakinan itu?",
      },
      {
        stepId: "B022-S4",
        task: "Apakah Anda sedang dalam mode peacetime atau wartime dalam pekerjaan Anda sekarang? Apakah gaya kepemimpinan atau kerja Anda sesuai dengan kondisi yang sebenarnya?",
      },
    ],
  },
  {
    bookId: "B023",
    title: "Man and His Symbols",
    author: "Carl G. Jung",
    category: "Filsafat",
    readingTimeMinutes: 16,
    coverStyle:
      "background:linear-gradient(160deg,#1a0a2e 0%,#0a1a2e 50%,#1a2e0a 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🌙</div><div style="font-family:Playfair Display,serif;font-size:0.9rem;font-weight:700;color:#ce93d8;line-height:1.3;">Man and<br>His Symbols</div><div style="width:36px;height:2px;background:#ce93d8;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Carl G. Jung</div></div>',
    tags: ["psikologi", "ketidaksadaran", "simbol", "mimpi"],
    bigIdea:
      "Sebagian besar pikiran kita beroperasi di bawah ambang kesadaran—dalam dunia simbol, arketipe, dan mimpi yang berbicara dalam bahasa yang berbeda dari logika sehari-hari. Mengabaikan dunia batin ini adalah akar dari banyak penderitaan modern.",
    analogy: {
      title: "Kesadaran adalah Puncak Gunung Es—yang Berbahaya Ada di Bawah",
      content:
        "Kita semua familiar dengan gunung es: bagian yang terlihat di atas permukaan air hanyalah sebagian kecil dari massa sesungguhnya. Yang berbahaya bagi kapal bukan bagian yang terlihat, melainkan bagian bawah yang tidak terlihat namun jauh lebih besar.\n\nJung berpendapat bahwa pikiran manusia persis seperti gunung es itu. Ego—kesadaran sehari-hari kita, pikiran rasional, identitas yang kita presentasikan kepada dunia—hanyalah bagian kecil yang terlihat. Di bawahnya terdapat ketidaksadaran pribadi: memori yang terlupakan, perasaan yang ditekan, keinginan yang tidak diakui.\n\nDan lebih dalam lagi, ada ketidaksadaran kolektif: lapisan terdalam yang dibagi oleh seluruh umat manusia, berisi arketipe-arketipe purba yang muncul dalam mimpi, mitos, dongeng, dan seni di semua budaya sepanjang sejarah. Inilah yang Jung habiskan hidupnya untuk dipetakan.",
    },
    chapters: [
      {
        num: 1,
        title: "Approaching the Unconscious",
        summary:
          "Jung membuka dengan argumen bahwa manusia modern telah kehilangan kontak dengan dunia simbolis dan mitologis yang selama ribuan tahun menjadi jembatan antara kesadaran dan ketidaksadaran. Sains dan rasionalisme modern, meski sangat berharga, telah menciptakan manusia yang setengah—cerdas secara intelektual namun miskin secara batin. Buku ini adalah upaya terakhir Jung—ditulis menjelang kematiannya—untuk menjelaskan psikologi ketidaksadaran kepada masyarakat umum melalui bahasa simbol.",
      },
      {
        num: 2,
        title: "The Function of Dreams",
        summary:
          "Mimpi bukan sekadar noise acak dari otak yang tidur—ia adalah pesan dari ketidaksadaran dalam bahasa simbolis. Jung menolak pendekatan Freud yang mereduksi semua simbol mimpi menjadi representasi seksual. Sebaliknya, ia berpendapat bahwa setiap mimpi harus dipahami dalam konteks kehidupan spesifik si pemimpi. Fungsi utama mimpi adalah kompensatoris: ketidaksadaran menyeimbangkan sikap sadar yang terlalu ekstrem, memperingatkan tentang bahaya yang belum disadari, dan menunjukkan potensi yang belum berkembang.",
      },
      {
        num: 3,
        title: "Ancient Myths and Modern Man",
        summary:
          "Jung dan muridnya Marie-Louise von Franz menunjukkan bagaimana pola-pola arketipal yang sama muncul dalam mitos dari budaya yang tidak pernah saling berkontak—kisah pahlawan, sosok ibu agung, trickster, shadow. Ini bukan kebetulan atau hasil pinjam-meminjam budaya. Ini adalah bukti bahwa ada lapisan dalam psikologi manusia yang melampaui pengalaman individual—ketidaksadaran kolektif yang menjadi warisan biologis seluruh spesies kita dari jutaan tahun evolusi.",
      },
      {
        num: 4,
        title: "The Process of Individuation",
        summary:
          "Individuation adalah konsep sentral Jung: proses seumur hidup menjadi diri yang utuh dengan mengintegrasikan semua aspek psike—termasuk aspek-aspek yang tidak menyenangkan atau tidak diakui. Ini berbeda dari pencapaian sosial atau kesuksesan karir. Seseorang bisa sangat sukses secara eksternal namun sama sekali belum terindividuasi—masih hidup sepenuhnya dari persona (topeng sosial) tanpa kontak dengan diri sejatinya. Individuation sering dimulai di paruh kedua hidup, dipicu oleh krisis yang memaksa seseorang menghadapi diri yang sesungguhnya.",
      },
      {
        num: 5,
        title: "The Shadow",
        summary:
          "Shadow adalah semua aspek kepribadian yang tidak kita akui, yang kita sembunyikan dari diri sendiri dan orang lain—bukan hanya yang buruk, tapi juga kualitas baik yang kita anggap tidak boleh dimiliki. Shadow yang tidak diintegrasikan diproyeksikan ke orang lain: kita membenci pada orang lain apa yang tidak kita akui dalam diri sendiri. Seorang yang sangat kritis terhadap ketidakjujuran orang lain mungkin sedang tidak mengakui ketidakjujurannya sendiri. Mengintegrasikan shadow—bukan menekannya—adalah langkah pertama individuation.",
      },
      {
        num: 6,
        title: "The Anima and Animus",
        summary:
          "Jung berpendapat bahwa setiap pria memiliki aspek feminin dalam psike yang ia sebut Anima, dan setiap wanita memiliki aspek maskulin yang ia sebut Animus. Anima dan Animus berkembang melalui pengalaman dengan lawan jenis—pertama melalui ibu atau ayah, lalu melalui hubungan-hubungan selanjutnya. Ketika Anima atau Animus tidak diintegrasikan, ia muncul dalam proyeksi: jatuh cinta secara obsesif, atau mengalami iritasi berlebihan terhadap seseorang dari lawan jenis. Mengintegrasikannya berarti mengembangkan aspek-aspek tersebut dalam diri sendiri.",
      },
      {
        num: 7,
        title: "The Syzygy: Anima and Animus",
        summary:
          "Von Franz memperluas konsep Jung tentang Anima dan Animus dengan menjelaskan empat tahap perkembangan masing-masing. Anima pria berkembang dari figur yang sepenuhnya biologis dan instinktual, melalui figur romantis-estetis, figur kebijaksanaan spiritual, hingga akhirnya menjadi Sophia—kebijaksanaan tertinggi. Animus wanita berkembang dari figur kekuatan fisik, melalui kemampuan tindakan terencana, kecerdasan verbal, hingga menjadi pembawa makna spiritual. Perkembangan ini tidak otomatis—ia membutuhkan kesadaran dan usaha.",
      },
      {
        num: 8,
        title: "The Self",
        summary:
          "Self—dengan S kapital—adalah arketipe totalitas dalam psikologi Jung: pusat sejati dari seluruh psike yang melampaui ego. Ego adalah pusat kesadaran, tapi Self adalah pusat dari seluruh kepribadian termasuk ketidaksadaran. Simbol Self muncul dalam semua tradisi agama dan mitologi: mandala dalam Buddhisme, Kristus dalam Kekristenan, chakra mahkota dalam Hinduisme, Tao dalam Taoisme. Individuation adalah perjalanan mendekatkan diri kepada Self—bukan untuk menghancurkan ego, melainkan untuk menempatkannya dalam relasi yang tepat dengan sesuatu yang jauh lebih besar.",
      },
      {
        num: 9,
        title: "Symbolism in the Visual Arts",
        summary:
          "Aniela Jaffe mengeksplorasi bagaimana arketipe-arketipe Jung muncul dalam seni visual dari berbagai budaya dan periode sejarah. Seni bukan sekadar dekorasi atau ekspresi estetis—ia adalah bahasa ketidaksadaran yang berbicara melalui seniman, seringkali tanpa seniman itu sendiri sepenuhnya memahami apa yang ia ungkapkan. Analisis karya-karya dari Pablo Picasso, Henry Moore, dan seni primitif menunjukkan pola arketipal yang berulang meskipun konteks kulturalnya sangat berbeda.",
      },
      {
        num: 10,
        title: "Symbols and the Interpretation of Dreams",
        summary:
          "Jung menjelaskan metodologi amplifikasi dalam interpretasi mimpi: alih-alih memaksakan interpretasi standar pada simbol mimpi, analis mengumpulkan semua asosiasi yang mungkin—personal, kultural, mitologis—dan membiarkan makna muncul secara organik. Ini berbeda secara fundamental dari pendekatan Freudian yang cenderung mereduksi simbol. Setiap simbol mimpi adalah jendela multi-dimensi yang bisa dilihat dari banyak sudut; setiap sudut menambah lapisan pemahaman tanpa mengeliminasi lapisan yang lain.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B023-S1",
        task: "Mulai jurnal mimpi: letakkan buku catatan di sebelah tempat tidur dan tulis mimpi Anda segera setelah bangun, sebelum melakukan hal lain. Lakukan selama 7 hari dan perhatikan tema atau simbol apa yang berulang.",
      },
      {
        stepId: "B023-S2",
        task: "Identifikasi satu kualitas yang sangat Anda kritik pada orang lain. Tanyakan dengan jujur: apakah kualitas ini mungkin juga ada dalam diri saya namun tidak saya akui? Ini adalah latihan mengenal Shadow Anda.",
      },
      {
        stepId: "B023-S3",
        task: "Pilih satu mitos, dongeng, atau cerita yang selalu beresonansi kuat dengan Anda sejak kecil. Renungkan: tokoh atau situasi mana yang paling menarik Anda, dan apa yang mungkin ini katakan tentang aspek diri Anda yang belum sepenuhnya tereksplorasi?",
      },
      {
        stepId: "B023-S4",
        task: "Luangkan 20 menit untuk melakukan active imagination: duduk tenang, tutup mata, dan biarkan imaji muncul tanpa diarahkan. Jangan analisis—cukup amati. Ini adalah teknik Jung untuk berkomunikasi dengan ketidaksadaran.",
      },
    ],
  },
  {
    bookId: "B024",
    title: "Essentialism",
    author: "Greg McKeown",
    category: "Produktivitas",
    readingTimeMinutes: 12,
    coverStyle:
      "background:linear-gradient(160deg,#0a0a1a 0%,#1a1a2e 50%,#2e2e1a 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🎯</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#e8d5a3;line-height:1.3;">Essentialism</div><div style="width:36px;height:2px;background:#e8d5a3;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Greg McKeown</div></div>',
    tags: ["fokus", "prioritas", "minimalisme", "keputusan"],
    bigIdea:
      "Jalan menuju produktivitas sejati bukan dengan melakukan lebih banyak hal—melainkan dengan melakukan lebih sedikit hal yang benar-benar penting. Essentialist tidak mencoba melakukan segalanya; ia memilih dengan sangat hati-hati dan melakukannya dengan luar biasa.",
    analogy: {
      title:
        "Hidup adalah Lemari Pakaian yang Harus Dikurasikan, Bukan Diisi Penuh",
      content:
        "Bayangkan lemari pakaian Anda. Jika Anda seperti kebanyakan orang, lemari itu penuh sesak—baju yang jarang dipakai, hadiah yang tidak cocok, pakaian yang dibeli karena diskon bukan karena benar-benar diinginkan. Setiap pagi Anda menghabiskan waktu mencari apa yang ingin dipakai, dan sering kali merasa tidak punya pilihan yang tepat meskipun lemari penuh.\n\nHidup modern terasa persis seperti itu. Kalender penuh dengan komitmen yang tidak sepenuhnya Anda pilih. Daftar to-do yang tidak pernah habis. Proyek yang setengah jalan. Hubungan yang tidak lagi bermakna namun terus dijaga dari kebiasaan.\n\nMcKeown menawarkan solusi yang radikal: kosongkan lemari itu. Simpan hanya yang benar-benar Anda cintai dan benar-benar Anda butuhkan. Lakukan ini pada hidup Anda—dan Anda akan menemukan bahwa dengan lebih sedikit pilihan, Anda justru lebih bebas dan lebih efektif.",
    },
    chapters: [
      {
        num: 1,
        title: "The Essentialist",
        summary:
          "McKeown memperkenalkan perbedaan fundamental antara Non-Essentialist dan Essentialist. Non-Essentialist percaya: saya harus melakukan semuanya, semuanya penting, bagaimana saya bisa melakukan semuanya. Essentialist percaya: saya memilih dengan hati-hati, hanya sedikit yang benar-benar penting, bagaimana saya bisa melakukan hal yang tepat dengan cara terbaik. Ini bukan tentang melakukan lebih sedikit demi kemalasan—ini tentang membuat kontribusi tertinggi Anda terhadap hal-hal yang paling penting.",
      },
      {
        num: 2,
        title: "Choose: The Invincible Power of Choice",
        summary:
          "Kita telah kehilangan kesadaran bahwa kita selalu memilih. Ketika seseorang berkata saya harus melakukan ini, ia melepaskan kekuasaannya. Ketika ia berkata saya memilih untuk melakukan ini, ia mengambil kembali kekuasaannya. Paradoks pilihan: semakin banyak pilihan yang tersedia, semakin sulit kita memilih dan semakin tidak puas dengan pilihan yang dibuat. Solusinya bukan lebih banyak pilihan, melainkan kejelasan tentang apa yang benar-benar penting sehingga pilihan menjadi mudah.",
      },
      {
        num: 3,
        title: "Discern: The Unimportance of Practically Everything",
        summary:
          "Tidak semua hal diciptakan sama—ada beberapa hal yang jauh lebih penting dari yang lain. Hukum Pareto: 20% usaha menghasilkan 80% hasil. Namun kebanyakan orang memperlakukan semua tugas seolah memiliki nilai yang sama. Essentialist secara aktif mencari the vital few di antara the trivial many—bukan dengan bekerja lebih keras, melainkan dengan mempertanyakan secara radikal apa yang benar-benar penting sebelum memutuskan ke mana energi diarahkan.",
      },
      {
        num: 4,
        title: "Trade-off: Which Problem Do I Want?",
        summary:
          "Trade-off adalah kenyataan yang tidak bisa dihindari. Dengan memilih A, Anda secara otomatis tidak memilih B dan C. Non-Essentialist mencoba menghindari trade-off dengan berkata ya pada semuanya—dan akhirnya tidak melakukan apapun dengan sangat baik. Essentialist secara proaktif membuat trade-off: saya memilih ini, dan dengan sadar melepaskan itu. Pertanyaan yang tepat bukan bagaimana saya bisa melakukan semuanya, melainkan masalah mana yang ingin saya hadapi?",
      },
      {
        num: 5,
        title: "Escape: The Perks of Being Unavailable",
        summary:
          "Untuk membedakan hal esensial dari non-esensial, Anda membutuhkan ruang—waktu dan tempat untuk berpikir, merenung, dan mempertanyakan. Namun budaya modern menghargai kesibukan lebih dari kontemplasi. Jeff Weiner memblok dua jam setiap hari dalam kalendernya hanya untuk berpikir. Bill Gates melakukan Think Weeks dua kali setahun—minggu di mana ia mengasingkan diri tanpa gangguan untuk membaca dan berpikir. Ruang untuk berpikir bukan kemewahan—ia adalah investasi esensial.",
      },
      {
        num: 6,
        title: "Look: See What Really Matters",
        summary:
          "Essentialist tidak hanya mendengarkan apa yang dikatakan orang—ia memperhatikan apa yang tidak dikatakan. Ia tidak hanya melihat informasi yang tersedia—ia mencari pola dan makna di baliknya. Dalam rapat, sementara orang lain terjebak dalam detail, Essentialist bertanya: apa pertanyaan terbesar yang sedang kami coba jawab? Jurnaling adalah salah satu alat terkuat untuk melatih kemampuan ini—menulis secara teratur membantu Anda melihat pola yang tidak terlihat saat Anda tenggelam dalam aktivitas sehari-hari.",
      },
      {
        num: 7,
        title: "Play: Embrace the Wisdom of Your Inner Child",
        summary:
          "Bermain—aktivitas yang dilakukan semata-mata karena menyenangkan, tanpa tujuan produktif—adalah esensial untuk kreativitas, eksplorasi, dan kebahagiaan. Namun budaya produktivitas modern memperlakukan bermain sebagai pemborosan waktu. Penelitian menunjukkan sebaliknya: bermain merangsang area otak yang berkaitan dengan kreativitas dan problem-solving, mengurangi stres, dan meningkatkan kemampuan untuk berpikir divergen. Stuart Brown, pendiri National Institute for Play, berpendapat bahwa kebalikan dari bermain bukanlah kerja—melainkan depresi.",
      },
      {
        num: 8,
        title: "Sleep: Protect the Asset",
        summary:
          "Tidur adalah salah satu hal yang paling sering dikorbankan oleh orang-orang yang sibuk—dan ini adalah kesalahan yang sangat mahal. Tidur bukan pemborosan waktu; ia adalah investasi tertinggi yang bisa Anda buat pada kemampuan Anda untuk melakukan pekerjaan penting dengan sangat baik. Otak yang kurang tidur beroperasi dengan kapasitas yang jauh lebih rendah—kemampuan problem-solving, kreativitas, pengambilan keputusan, dan regulasi emosi semuanya terdegradasi secara signifikan hanya dengan kehilangan satu hingga dua jam tidur per malam.",
      },
      {
        num: 9,
        title: "Select: The Power of Extreme Criteria",
        summary:
          "Ketika mengevaluasi peluang baru, kebanyakan orang menggunakan kriteria yang terlalu longgar: apakah ini cukup baik? Apakah ini layak? Essentialist menggunakan kriteria yang jauh lebih ketat. McKeown mengusulkan aturan 90%: jika sebuah kesempatan tidak mendapat skor 90 dari 100 pada kriteria terpenting Anda, jawabnya adalah tidak. Jika Anda tidak bisa mengatakan yes! dengan penuh keyakinan, jawabnya adalah tidak. Ini terasa kejam, tapi ia melindungi Anda dari komitmen yang setengah-setengah.",
      },
      {
        num: 10,
        title: "Clarify: One Decision that Makes a Thousand",
        summary:
          "Kejelasan tentang tujuan atau peran menghilangkan ribuan keputusan kecil secara sekaligus. Ketika seseorang tidak yakin apa perannya dalam sebuah tim, ia akan ragu-ragu dalam setiap keputusan kecil. Ketika perannya jelas, keputusan-keputusan itu mengalir secara alami. McKeown menceritakan bagaimana satu kalimat visi yang sangat jelas—bukan pernyataan misi yang umum dan membosankan—bisa mentransformasi seluruh cara sebuah organisasi atau individu bekerja.",
      },
      {
        num: 11,
        title: "Dare: The Power of a Graceful No",
        summary:
          "Kemampuan untuk mengatakan tidak dengan anggun adalah skill yang paling penting namun paling sulit bagi seorang Essentialist. Kita merasa tidak enak mengatakan tidak karena takut mengecewakan orang, takut kehilangan peluang, atau takut dianggap tidak kooperatif. McKeown memberikan berbagai cara untuk mengatakan tidak tanpa merusak hubungan: mengatakan tidak untuk permintaan namun ya untuk orang tersebut, menunda komitmen dengan mengatakan biarkan saya periksa jadwal saya, atau menawarkan alternatif yang lebih sesuai.",
      },
      {
        num: 12,
        title: "Uncommit: Win Big by Cutting Your Losses",
        summary:
          "Sunk cost fallacy—kecenderungan untuk terus berinvestasi dalam sesuatu karena sudah berinvestasi banyak di masa lalu—adalah salah satu perangkap terbesar bagi Non-Essentialist. Essentialist berpegang pada prinsip berbeda: keputusan untuk melanjutkan atau berhenti harus berdasarkan nilai masa depan, bukan sumber daya yang sudah dikeluarkan. Zero-based budgeting diterapkan tidak hanya pada anggaran keuangan, tapi juga pada waktu: setiap komitmen dinilai ulang dari nol, bukan secara otomatis dilanjutkan.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B024-S1",
        task: "Terapkan aturan 90% minggu ini: untuk setiap komitmen baru yang datang, tanyakan apakah ini mendapat skor 90 dari 100 pada hal yang paling penting bagi Anda. Jika tidak, jawabannya adalah tidak.",
      },
      {
        stepId: "B024-S2",
        task: "Blok dua jam dalam kalender minggu ini hanya untuk berpikir—tanpa meeting, tanpa email, tanpa ponsel. Gunakan waktu ini untuk mempertanyakan: apakah saya sedang bekerja pada hal yang paling penting?",
      },
      {
        stepId: "B024-S3",
        task: "Buat daftar semua komitmen Anda saat ini. Untuk setiap komitmen, tanyakan: jika ini bukan komitmen yang sudah ada dan seseorang menawarkannya kepada saya hari ini, apakah saya akan menerimanya? Jika tidak, pertimbangkan untuk keluar dari komitmen itu.",
      },
      {
        stepId: "B024-S4",
        task: "Latih mengatakan tidak dengan anggun hari ini. Pilih satu permintaan yang masuk yang tidak benar-benar penting bagi Anda, dan tolak dengan sopan namun tegas. Perhatikan bagaimana rasanya.",
      },
    ],
  },
  {
    bookId: "B025",
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    category: "Keuangan",
    readingTimeMinutes: 17,
    coverStyle:
      "background:linear-gradient(160deg,#0a1400 0%,#1a2800 50%,#2e4a00 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">📈</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#b8e066;line-height:1.3;">The Intelligent<br>Investor</div><div style="width:36px;height:2px;background:#b8e066;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Benjamin Graham</div></div>',
    tags: ["investasi", "saham", "value investing", "pasar modal"],
    bigIdea:
      "Investasi yang cerdas bukan tentang menebak arah pasar atau menemukan saham yang akan meledak—melainkan tentang membeli aset dengan harga di bawah nilai intrinsiknya dan memiliki kesabaran untuk menunggu pasar mengakui nilai tersebut.",
    analogy: {
      title: "Mr. Market adalah Mitra Bisnis yang Manic-Depressive",
      content:
        "Bayangkan Anda memiliki mitra bisnis bernama Mr. Market. Setiap hari ia datang ke pintu Anda dan menawarkan untuk membeli saham Anda atau menjual sahamnya kepada Anda—dengan harga yang ia tentukan sendiri.\n\nMasalahnya: Mr. Market adalah orang yang sangat tidak stabil secara emosional. Beberapa hari ia sangat optimis—ia menawarkan harga yang sangat tinggi karena yakin bisnis akan luar biasa. Hari lain ia sangat pesimis—ia menawarkan harga yang sangat rendah karena takut segalanya akan hancur.\n\nAnda tidak pernah harus menerima tawarannya. Anda bisa mengabaikannya kapan saja. Keunggulan Anda atas Mr. Market adalah bahwa Anda tidak harus bereaksi terhadap mood-nya. Anda hanya perlu mengambil keputusan saat ia menawarkan harga yang jauh di bawah nilai intrinsik bisnis—dan itulah inti dari value investing.",
    },
    chapters: [
      {
        num: 1,
        title: "Investment versus Speculation",
        summary:
          "Graham membuka dengan perbedaan fundamental yang sering diabaikan: investasi versus spekulasi. Investasi adalah operasi yang, melalui analisis menyeluruh, menjanjikan keamanan modal dan return yang memadai. Semua yang tidak memenuhi definisi ini adalah spekulasi. Banyak orang yang merasa diri mereka investor sebenarnya adalah spekulator—mereka membeli saham berdasarkan tren, rumor, atau harapan bahwa harga akan naik, bukan berdasarkan analisis nilai intrinsik bisnis yang mendasarinya.",
      },
      {
        num: 2,
        title: "The Investor and Inflation",
        summary:
          "Inflasi adalah musuh tersembunyi setiap investor—ia menggerogoti daya beli secara perlahan dan tidak terasa. Graham menjelaskan mengapa menyimpan uang di deposito atau obligasi pemerintah saja tidak cukup dalam jangka panjang—return nominalnya bisa positif namun return riilnya negatif setelah inflasi. Saham, meski lebih volatil, secara historis adalah satu-satunya aset yang konsisten mengalahkan inflasi dalam jangka panjang karena perusahaan dapat menaikkan harga produknya seiring inflasi.",
      },
      {
        num: 3,
        title: "A Century of Stock-Market History",
        summary:
          "Graham menganalisis sejarah panjang pasar saham untuk menemukan pola yang bertahan. Kesimpulan utamanya: pasar saham sangat tidak dapat diprediksi dalam jangka pendek namun cenderung bergerak sesuai fundamental ekonomi dalam jangka panjang. Investor yang mencoba market timing—masuk dan keluar pasar berdasarkan prediksi arah pasar—hampir selalu kalah dibanding investor yang konsisten membeli dan memegang saham berkualitas dalam jangka panjang.",
      },
      {
        num: 4,
        title: "General Portfolio Policy: The Defensive Investor",
        summary:
          "Graham membedakan dua tipe investor: defensive (pasif) dan enterprising (aktif). Defensive investor tidak memiliki waktu, keinginan, atau keahlian untuk menganalisis saham secara mendalam. Rekomendasinya untuk tipe ini sangat sederhana: diversifikasi antara saham dan obligasi, beli index fund berbiaya rendah, rebalance secara periodik, dan jangan pernah menjual panik saat pasar jatuh. Strategi sederhana yang dijalankan konsisten hampir selalu mengalahkan strategi kompleks yang dijalankan tidak konsisten.",
      },
      {
        num: 5,
        title: "The Defensive Investor and Common Stocks",
        summary:
          "Untuk memilih saham individual, Graham memberikan kriteria yang ketat bagi defensive investor: perusahaan besar dan mapan, kondisi keuangan yang kuat (current ratio minimal 2:1), dividend yang konsisten selama minimal 20 tahun, tidak ada kerugian dalam 10 tahun terakhir, pertumbuhan earnings minimal 33% dalam 10 tahun, dan P/E ratio tidak lebih dari 15. Kriteria ini dengan sengaja dirancang untuk mengeliminasi sebagian besar saham—hanya menyisakan yang benar-benar berkualitas.",
      },
      {
        num: 6,
        title: "Portfolio Policy for the Enterprising Investor",
        summary:
          "Enterprising investor bersedia menghabiskan waktu yang signifikan untuk menganalisis dan mengelola portofolionya. Graham memberikan dua strategi yang terbukti efektif: membeli saham yang diabaikan atau tidak populer dari perusahaan besar (yang sering undervalued karena diabaikan analis), dan membeli saham perusahaan kecil yang menjual di bawah nilai working capital bersihnya—yang Graham sebut net-net stocks. Kedua strategi membutuhkan kesabaran dan kemampuan untuk bertindak berlawanan dengan sentimen pasar.",
      },
      {
        num: 7,
        title: "The Investor and Market Fluctuations",
        summary:
          "Ini adalah bab di mana Graham memperkenalkan alegori Mr. Market yang terkenal. Pesan utamanya: fluktuasi pasar seharusnya tidak mempengaruhi keputusan investasi Anda kecuali jika harga yang ditawarkan sangat jauh dari nilai intrinsik. Saat pasar jatuh drastis, kebanyakan investor panik dan menjual—padahal ini adalah saat terbaik untuk membeli. Saat pasar naik euforia, kebanyakan investor membeli lebih banyak—padahal ini adalah saat yang tepat untuk lebih berhati-hati.",
      },
      {
        num: 8,
        title: "Investor versus the Speculator",
        summary:
          "Graham menegaskan kembali bahwa perbedaan antara investor dan spekulator bukan pada instrumen yang digunakan (keduanya bisa membeli saham) melainkan pada pendekatan dan mindset. Spekulator membeli karena ia pikir harga akan naik. Investor membeli karena ia pikir harga lebih rendah dari nilai intrinsiknya. Spekulator menggunakan margin untuk meningkatkan return—dan juga kerugian. Investor menghindari margin karena ia tidak mau dipaksa menjual saat harga rendah hanya karena margin call.",
      },
      {
        num: 9,
        title: "Investing in Investment Funds",
        summary:
          "Graham membahas reksa dana dan ETF sebagai alternatif bagi investor yang tidak ingin memilih saham sendiri. Temuan penelitiannya yang mengejutkan: sebagian besar reksa dana aktif tidak berhasil mengalahkan index dalam jangka panjang setelah biaya. Implikasinya: untuk sebagian besar investor, membeli index fund berbiaya rendah adalah pilihan yang lebih cerdas dari membayar manajer investasi yang mahal untuk kinerja yang lebih buruk. Jack Bogle kemudian membangun Vanguard berdasarkan insight ini.",
      },
      {
        num: 10,
        title: "The Investor and His Advisers",
        summary:
          "Graham sangat skeptis terhadap sebagian besar penasihat keuangan—bukan karena mereka tidak jujur, melainkan karena insentif mereka sering tidak selaras dengan kepentingan investor. Penasihat yang dibayar berdasarkan transaksi punya insentif untuk mendorong lebih banyak trading. Penasihat yang menjual produk investasi tertentu punya insentif untuk merekomendasikan produk yang membayar komisi terbesar. Investor yang cerdas memahami struktur insentif penasihatnya sebelum mengikuti sarannya.",
      },
      {
        num: 11,
        title: "Security Analysis for the Lay Investor",
        summary:
          "Graham mengajarkan prinsip-prinsip dasar analisis fundamental: memahami laporan keuangan, menghitung nilai intrinsik, mengidentifikasi sumber earnings yang berkelanjutan versus yang bersifat sementara. Ia menekankan pentingnya memahami bisnis yang Anda investasikan—bukan sebagai ticker symbol yang harganya bergerak naik turun, melainkan sebagai bisnis nyata yang menghasilkan produk atau layanan, memiliki pelanggan, dan menghadapi kompetitor. Jika Anda tidak bisa menjelaskan bisnis ini dalam beberapa kalimat, jangan investasikan uang Anda di sana.",
      },
      {
        num: 12,
        title: "Margin of Safety as the Central Concept of Investment",
        summary:
          "Margin of safety adalah konsep paling penting dalam seluruh buku ini—dan dalam seluruh filosofi value investing. Membeli saham hanya ketika harganya jauh di bawah nilai intrinsiknya memberikan perlindungan terhadap kesalahan analisis, kejadian yang tidak terduga, dan ketidakpastian masa depan. Graham menyatakan bahwa margin of safety adalah perbedaan antara investasi dan spekulasi. Warren Buffett menyebut bab terakhir ini sebagai tulisan terpenting yang pernah ia baca tentang investasi.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B025-S1",
        task: "Hitung berapa persen portofolio Anda yang benar-benar investasi (dibeli berdasarkan analisis nilai intrinsik) versus spekulasi (dibeli karena berharap harga naik). Jujurlah pada diri sendiri.",
      },
      {
        stepId: "B025-S2",
        task: "Pilih satu perusahaan yang sahamnya Anda miliki atau pertimbangkan. Bisakah Anda menjelaskan model bisnisnya, sumber keunggulan kompetitifnya, dan bagaimana ia menghasilkan uang dalam 5 kalimat? Jika tidak, pelajari dulu sebelum berinvestasi.",
      },
      {
        stepId: "B025-S3",
        task: "Cek biaya reksa dana atau produk investasi yang Anda gunakan. Berapa expense ratio-nya per tahun? Bandingkan dengan biaya index fund. Selisih biaya 1-2% per tahun terlihat kecil tapi dalam 30 tahun bisa memakan 30-40% dari total return Anda.",
      },
      {
        stepId: "B025-S4",
        task: "Buat rencana tertulis: apa yang akan Anda lakukan jika portofolio Anda turun 30% dalam 3 bulan? Tulis rencananya sekarang saat pikiran jernih—bukan nanti saat panik. Komitmen pada rencana itu.",
      },
    ],
  },
  {
    bookId: "B026",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "Sejarah",
    readingTimeMinutes: 18,
    coverStyle:
      "background:linear-gradient(160deg,#1a0f00 0%,#3d2200 50%,#6b3d00 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">⚔️</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#ffa726;line-height:1.3;">Guns, Germs,<br>and Steel</div><div style="width:36px;height:2px;background:#ffa726;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Jared Diamond</div></div>',
    tags: ["sejarah", "peradaban", "geografi", "evolusi budaya"],
    bigIdea:
      "Mengapa bangsa Eropa yang menaklukkan dunia, bukan bangsa lain? Jawabannya bukan pada superioritas ras atau kecerdasan—melainkan pada keberuntungan geografis yang memberikan akses ke tanaman dan hewan yang bisa didomestikasi lebih awal.",
    analogy: {
      title:
        "Sejarah Dunia adalah Permainan Kartu dengan Tangan yang Tidak Adil",
      content:
        "Bayangkan permainan kartu di mana setiap pemain mendapat tangan yang berbeda sejak awal—bukan karena kecerdasan atau usaha mereka, melainkan semata-mata karena keberuntungan tempat duduk. Beberapa pemain mendapat kartu as dan raja. Yang lain mendapat kartu rendah.\n\nItulah yang terjadi dalam sejarah manusia. Benua-benua mendapat tangan yang berbeda: beberapa wilayah kaya dengan tanaman yang bisa didomestikasi (gandum, beras, jagung), hewan yang bisa dijinakkan (kuda, sapi, domba), dan bentang alam yang memudahkan penyebaran inovasi. Yang lain tidak.\n\nDari keuntungan awal ini mengalir segalanya: surplus pangan yang mendukung spesialisasi pekerjaan, kota-kota yang memunculkan penyakit menular yang membangun imunitas, teknologi yang terakumulasi selama ribuan tahun. Diamond berpendapat bahwa sejarah manusia adalah konsekuensi dari geografi, bukan takdir atau superioritas.",
    },
    chapters: [
      {
        num: 1,
        title: "Up to the Starting Line",
        summary:
          "Diamond membuka dengan pertanyaan yang diajukan temannya dari Papua Nugini, Yali: mengapa orang kulit putih mengembangkan begitu banyak kargo dan membawanya ke Papua Nugini, tapi kami orang Papua memiliki sedikit kargo kami sendiri? Pertanyaan sederhana ini membutuhkan jawaban yang merangkum seluruh sejarah umat manusia. Diamond menolak jawaban rasis dan mencari penjelasan yang berakar pada faktor lingkungan dan geografis, bukan pada perbedaan biologis antar manusia.",
      },
      {
        num: 2,
        title: "A Natural Experiment of History",
        summary:
          "Diamond menggunakan kepulauan Polynesia sebagai laboratorium alami untuk menguji teorinya. Nenek moyang yang sama menyebar ke pulau-pulau dengan kondisi geografis yang sangat berbeda—dan dalam beberapa ratus generasi mengembangkan masyarakat yang sangat berbeda, dari pemburu-pengumpul sederhana hingga kerajaan yang kompleks. Perbedaan ini bukan karena orang Polinesia di satu pulau lebih cerdas dari yang lain, melainkan karena kondisi lingkungan yang mereka hadapi berbeda.",
      },
      {
        num: 3,
        title: "Collision at Cajamarca",
        summary:
          "Diamond menganalisis pertemuan antara Pizarro dan Atahualpa di Cajamarca 1532—di mana 168 tentara Spanyol berhasil menangkap kaisar Inca yang dikelilingi 80.000 tentaranya. Bagaimana ini bisa terjadi? Senjata besi versus batu, kuda versus tanpa kuda, dan yang paling penting: penyakit yang belum pernah dikenal orang Amerika. Namun Diamond bertanya lebih jauh: mengapa Spanyol yang mengembangkan semua ini, bukan Inca yang menyerang Eropa?",
      },
      {
        num: 4,
        title: "Farmer Power",
        summary:
          "Pertanian adalah kunci dari segalanya dalam teori Diamond. Surplus pangan memungkinkan sebagian populasi untuk tidak bertani—menjadi tentara, pengrajin, administrator, dan ilmuwan. Populasi yang lebih padat memungkinkan lebih banyak inovasi dan akumulasi pengetahuan. Namun tidak semua wilayah bisa mengembangkan pertanian—hanya wilayah yang memiliki tanaman dan hewan yang tepat untuk didomestikasi. Dan distribusi ini ditentukan oleh geografi, bukan oleh pilihan manusia.",
      },
      {
        num: 5,
        title: "History's Haves and Have-Nots",
        summary:
          "Hanya 14 spesies hewan besar yang berhasil didomestikasi sepanjang sejarah—dan 13 dari 14 berasal dari Eurasia. Benua lain memiliki hewan besar (Amerika memiliki kuda sebelum punah, Afrika memiliki zebra dan gajah) namun hewan-hewan ini tidak bisa atau sangat sulit didomestikasi. Diamond menganalisis mengapa: temperamen, laju pertumbuhan, kemampuan berkembang biak dalam penangkaran, hierarki sosial, dan kepekaan terhadap kepanikan semuanya berperan.",
      },
      {
        num: 6,
        title: "To Farm or Not to Farm",
        summary:
          "Pertanian tidak langsung diadopsi begitu tersedia—ada periode panjang di mana masyarakat mengetahui tentang pertanian namun memilih untuk tidak melakukannya karena gaya hidup pemburu-pengumpul masih lebih menguntungkan. Transisi ke pertanian terjadi secara bertahap dan sering kali dipaksakan oleh pertumbuhan populasi dan berkurangnya sumber daya liar. Begitu dimulai, pertanian menciptakan siklus yang self-reinforcing: lebih banyak makanan mendukung lebih banyak populasi yang membutuhkan lebih banyak makanan.",
      },
      {
        num: 7,
        title: "How to Make an Almond",
        summary:
          "Proses domestikasi tanaman adalah evolusi yang dipercepat—manusia secara tidak sengaja (dan kemudian secara sengaja) menyeleksi tanaman dengan sifat yang menguntungkan manusia: benih yang lebih besar, buah yang tidak jatuh sendiri, siklus pertumbuhan yang lebih cepat. Almond liar mengandung senyawa beracun yang membuat manusia dan hewan menghindarinya. Almond yang kita makan hari ini adalah hasil ribuan tahun seleksi untuk varian yang tidak beracun—varian yang tidak bisa bertahan di alam liar tanpa bantuan manusia.",
      },
      {
        num: 8,
        title: "Apples or Indians",
        summary:
          "Diamond menjelaskan mengapa beberapa wilayah mengembangkan pertanian secara independen sementara yang lain mengadopsinya dari tetangga atau tidak pernah mengembangkannya sama sekali. Pertanian muncul secara independen hanya di beberapa wilayah dunia yang memiliki kombinasi yang tepat: tanaman dan hewan yang bisa didomestikasi, iklim yang mendukung penyimpanan makanan, dan kepadatan populasi yang cukup untuk menciptakan tekanan menuju pertanian.",
      },
      {
        num: 9,
        title: "Zebras, Unhappy Marriages, and the Anna Karenina Principle",
        summary:
          "Anna Karenina Principle—diambil dari kalimat pembuka novel Tolstoy: semua keluarga bahagia serupa; setiap keluarga tidak bahagia tidak bahagia dengan caranya masing-masing. Untuk domestikasi hewan, harus ada banyak kondisi yang terpenuhi sekaligus: diet yang fleksibel, laju pertumbuhan yang cepat, kemampuan berkembang biak dalam penangkaran, temperamen yang tidak panik, struktur sosial yang hirarkis, dan tidak terlalu agresif terhadap manusia. Gagal memenuhi satu saja kondisi ini dan domestikasi tidak mungkin terjadi.",
      },
      {
        num: 10,
        title: "Spacious Skies and Tilted Axes",
        summary:
          "Salah satu argumen paling orisinal Diamond: orientasi sumbu benua sangat mempengaruhi penyebaran inovasi. Eurasia berorientasi horizontal (timur-barat) sehingga tanaman, hewan, dan teknologi bisa menyebar dalam zona iklim yang sama. Amerika dan Afrika berorientasi vertikal (utara-selatan) sehingga penyebaran inovasi harus melewati berbagai zona iklim yang berbeda—proses yang jauh lebih lambat dan sering kali gagal.",
      },
      {
        num: 11,
        title: "From egalitarianism to kleptocracy",
        summary:
          "Diamond menjelaskan evolusi organisasi sosial manusia dari band kecil pemburu-pengumpul yang egaliter, melalui suku yang lebih besar, chiefdom, hingga negara yang kompleks. Setiap transisi dimungkinkan oleh pertanian yang menghasilkan surplus yang mendukung populasi yang lebih besar dan spesialisasi yang lebih dalam. Dengan ukuran yang lebih besar muncul hierarki, ketidaksetaraan, dan institusi yang mengontrol kekerasan internal—kondisi yang diperlukan untuk membangun peradaban yang kompleks.",
      },
      {
        num: 12,
        title: "Blueprints and Borrowed Letters",
        summary:
          "Diamond menganalisis penyebaran tulisan dan teknologi untuk menunjukkan bahwa sebagian besar inovasi menyebar melalui difusi—dipinjam dan diadaptasi dari tetangga—bukan ditemukan secara independen. Alfabet yang digunakan hampir semua bahasa di dunia hari ini bisa dilacak kembali ke satu sumber di Timur Tengah kuno. Ini bukan karena orang lain tidak cerdas—melainkan karena jauh lebih mudah mengadaptasi ide yang sudah ada dari menciptakannya dari awal.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B026-S1",
        task: "Pilih satu ketimpangan global yang Anda perhatikan (antara negara kaya dan miskin, atau antara kelompok dalam satu negara). Tanyakan: sejauh mana ini bisa dijelaskan oleh faktor geografis dan historis versus faktor budaya atau individual?",
      },
      {
        stepId: "B026-S2",
        task: "Pelajari sejarah pertanian di wilayah tempat Anda tinggal: tanaman apa yang pertama kali didomestikasi di sana, kapan, dan bagaimana itu mengubah masyarakat lokal?",
      },
      {
        stepId: "B026-S3",
        task: "Renungkan: privilege apa yang Anda miliki yang merupakan hasil dari keberuntungan geografis dan historis, bukan usaha pribadi Anda? Bagaimana kesadaran ini mengubah cara Anda melihat orang lain?",
      },
    ],
  },
  {
    bookId: "B027",
    title: "The Art of War",
    author: "Sun Tzu",
    category: "Sejarah",
    readingTimeMinutes: 10,
    coverStyle:
      "background:linear-gradient(160deg,#1a0000 0%,#2e0000 50%,#4a0f0f 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🏯</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#ef9a9a;line-height:1.3;">The Art<br>of War</div><div style="width:36px;height:2px;background:#ef9a9a;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Sun Tzu</div></div>',
    tags: ["strategi", "perang", "kepemimpinan", "China kuno"],
    bigIdea:
      "Kemenangan tertinggi adalah mengalahkan musuh tanpa bertempur sama sekali. Strategi yang paling efektif bukan yang paling agresif, melainkan yang paling cerdas dalam memanfaatkan kelemahan lawan dan kekuatan sendiri.",
    analogy: {
      title: "Strategi adalah Air yang Selalu Mencari Celah Terendah",
      content:
        "Air tidak melawan batu—ia mengalir di sekelilingnya, mencari celah, mengikis perlahan dari bawah, atau menunggu hingga batu itu retak sendiri. Air tidak pernah berjuang secara langsung, namun pada akhirnya selalu menemukan jalannya.\n\nItulah strategi menurut Sun Tzu. Jenderal yang baik tidak bertempur di tempat musuh yang kuat—ia menyerang di tempat musuh yang lemah. Ia tidak memaksakan kekuatannya—ia memanfaatkan kelemahan lawan. Ia tidak menghabiskan sumber daya dalam perang panjang—ia mencari cara untuk menang sebelum perang dimulai.\n\nMeski ditulis 2.500 tahun lalu untuk konteks perang militer, prinsip-prinsip Sun Tzu terbukti berlaku untuk bisnis, negosiasi, politik, dan hampir setiap situasi kompetitif dalam kehidupan modern.",
    },
    chapters: [
      {
        num: 1,
        title: "Laying Plans",
        summary:
          "Sun Tzu membuka dengan menegaskan bahwa perang adalah urusan vital negara—masalah hidup dan mati yang harus dipelajari dengan sangat serius. Lima faktor fundamental yang menentukan kemenangan: Tao (keselarasan moral antara pemimpin dan rakyat), Langit (kondisi iklim dan waktu), Bumi (geografi dan medan), Pemimpin (kebijaksanaan, keberanian, kemanusiaan, integritas, dan ketegasan), dan Metode (organisasi, disiplin, dan logistik). Jenderal yang menguasai kelima faktor ini hampir pasti menang.",
      },
      {
        num: 2,
        title: "Waging War",
        summary:
          "Perang yang panjang dan mahal selalu merugikan, bahkan bagi pemenang. Sun Tzu menekankan pentingnya kecepatan dan efisiensi: kemenangan yang cepat selalu lebih baik dari kemenangan yang lambat meski lebih sempurna. Hidup dari sumber daya musuh jauh lebih efisien dari membawa semua perbekalan sendiri. Prinsip ini berlaku langsung dalam bisnis modern: perang harga yang panjang menghancurkan kedua belah pihak; akuisisi yang cepat dan tepat lebih baik dari persaingan bertahun-tahun.",
      },
      {
        num: 3,
        title: "Attack by Stratagem",
        summary:
          "Bab yang paling terkenal dalam seluruh buku. Kemenangan tertinggi adalah menundukkan tentara musuh tanpa bertempur sama sekali. Hierarki kemenangan dari terbaik hingga terburuk: hancurkan rencana musuh, hancurkan aliansinya, serang pasukannya, dan terakhir—pilihan paling buruk—kepung kotanya. Jenderal terbaik menang tanpa pertumpahan darah. Prinsip ini langsung relevan untuk negosiasi bisnis, politik, dan konflik personal.",
      },
      {
        num: 4,
        title: "Tactical Dispositions",
        summary:
          "Jenderal yang baik pertama-tama memastikan dirinya tidak bisa dikalahkan, lalu menunggu kesempatan untuk mengalahkan musuh. Ketidakmungkinan dikalahkan ada di tangan sendiri; kemungkinan mengalahkan musuh ada di tangan musuh. Ini mengajarkan tentang pertahanan dan kesabaran: bangun posisi yang tidak bisa diserang sebelum mencari kesempatan untuk menyerang. Dalam bisnis, ini berarti membangun keunggulan kompetitif yang kuat sebelum ekspansi agresif.",
      },
      {
        num: 5,
        title: "Energy",
        summary:
          "Sun Tzu membedakan antara kekuatan langsung (cheng) dan kekuatan tidak langsung (chi). Kekuatan langsung digunakan untuk menghadapi musuh secara frontal; kekuatan tidak langsung digunakan untuk memberikan pukulan yang menentukan dari arah yang tidak terduga. Jenderal terbaik menggunakan keduanya secara terkoordinasi—kekuatan langsung untuk mengikat perhatian musuh, kekuatan tidak langsung untuk memberikan pukulan yang sesungguhnya.",
      },
      {
        num: 6,
        title: "Weak Points and Strong",
        summary:
          "Siapa yang tiba lebih dulu di medan perang dan menunggu musuh berada dalam posisi segar dan kuat. Siapa yang tiba terlambat harus bergegas dan tiba dalam kondisi lelah. Kuasai ini: paksakan musuh untuk bergerak menuju Anda, bukan sebaliknya. Temukan kelemahan musuh dan serang di sana; lindungi kelemahan Anda sendiri. Dalam negosiasi bisnis modern, prinsip ini berarti selalu mencoba mengontrol waktu, tempat, dan agenda—jangan biarkan pihak lain yang menentukannya.",
      },
      {
        num: 7,
        title: "Maneuvering",
        summary:
          "Manuver adalah mengubah apa yang tidak menguntungkan menjadi menguntungkan. Jalan memutar sering kali lebih cepat dari jalan langsung jika jalan langsung terblokir atau dijaga ketat. Sun Tzu mengajarkan seni deception—membuat musuh berpikir Anda bergerak ke satu arah sementara Anda sebenarnya bergerak ke arah lain. Komunikasi yang jelas dengan pasukan sendiri dan kebingungan maksimal bagi musuh adalah kunci manuver yang efektif.",
      },
      {
        num: 8,
        title: "Variation in Tactics",
        summary:
          "Jenderal yang baik tidak pernah kaku dalam taktiknya—ia beradaptasi dengan kondisi yang berubah. Ada lima kelemahan karakter yang bisa menghancurkan jenderal: terlalu nekat (bisa dibunuh), terlalu pengecut (bisa ditangkap), terlalu emosional (bisa diprovokasi), terlalu mementingkan kehormatan (bisa dipermalukan), dan terlalu peduli pada rakyatnya (bisa dimanipulasi). Keseimbangan dan fleksibilitas karakter adalah senjata terpenting seorang pemimpin.",
      },
      {
        num: 9,
        title: "The Army on the March",
        summary:
          "Sun Tzu memberikan panduan praktis tentang membaca tanda-tanda di medan perang dan dalam perilaku musuh. Banyak dari observasi ini berlaku langsung untuk membaca situasi bisnis dan sosial: jika utusan musuh berbicara dengan rendah hati namun terus mempersiapkan perang, ia akan segera menyerang. Jika ia berbicara dengan arogan namun tidak bergerak, ia sedang menarik mundur. Perhatikan apa yang dilakukan orang, bukan hanya apa yang mereka katakan.",
      },
      {
        num: 10,
        title: "Terrain",
        summary:
          "Ada enam jenis medan perang yang membutuhkan strategi berbeda, dan enam kesalahan yang bisa menghancurkan pasukan meski kondisi lain menguntungkan. Prinsip universal: kenali medan Anda lebih baik dari musuh mengenalnya. Dalam konteks modern, medan adalah pasar, industri, atau situasi kompetitif Anda—dan mengenal seluk-beluknya lebih baik dari kompetitor adalah keunggulan yang sangat berharga.",
      },
      {
        num: 11,
        title: "The Nine Situations",
        summary:
          "Sun Tzu mengklasifikasikan sembilan jenis situasi perang, dari yang paling menguntungkan hingga yang paling berbahaya—dan strategi optimal untuk masing-masing. Salah satu insight paling kontra-intuitif: kadang menempatkan pasukan dalam situasi berbahaya di mana tidak ada jalan mundur justru memotivasi mereka untuk bertempur dengan keberanian luar biasa. Ini adalah teknik yang digunakan dalam banyak kampanye militer bersejarah yang terkenal.",
      },
      {
        num: 12,
        title: "The Use of Intelligence",
        summary:
          "Bab terakhir yang paling sering diabaikan namun sangat penting: intelijen adalah fondasi dari semua strategi yang baik. Jenderal yang tidak menggunakan mata-mata karena terlalu pelit membayar mereka adalah jenderal yang tidak peduli pada pasukannya. Ada lima tipe mata-mata yang perlu dikelola: lokal, internal, ganda, dead, dan living. Prinsip modernnya sederhana: informasi yang akurat tentang musuh, pasar, dan diri sendiri adalah prasyarat dari semua keputusan strategis yang baik.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B027-S1",
        task: "Identifikasi satu konflik atau kompetisi yang sedang Anda hadapi. Tanyakan: di mana kelemahan lawan yang belum dimanfaatkan? Di mana kelemahan saya yang perlu dilindungi? Apakah ada cara untuk menang tanpa konfrontasi langsung?",
      },
      {
        stepId: "B027-S2",
        task: "Sebelum negosiasi atau pertemuan penting berikutnya, terapkan prinsip Sun Tzu: kenali tujuan Anda, kenali tujuan pihak lain, dan cari solusi yang memungkinkan semua pihak merasa menang.",
      },
      {
        stepId: "B027-S3",
        task: "Evaluasi di mana Anda menghabiskan energi dalam konflik yang tidak perlu. Apakah ada cara untuk mengakhirinya lebih cepat, atau menghindarinya sama sekali?",
      },
    ],
  },
  {
    bookId: "B028",
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    category: "Sejarah",
    readingTimeMinutes: 20,
    coverStyle:
      "background:linear-gradient(160deg,#0f0f0f 0%,#1a1a1a 40%,#2a1a00 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">📖</div><div style="font-family:Playfair Display,serif;font-size:0.82rem;font-weight:700;color:#bdbdbd;line-height:1.4;">The Rise and Fall<br>of the<br>Third Reich</div><div style="width:36px;height:2px;background:#bdbdbd;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">William L. Shirer</div></div>',
    tags: ["perang dunia", "Nazi", "Hitler", "sejarah modern"],
    bigIdea:
      "Nazi Jerman adalah peringatan terpenting dalam sejarah modern: bagaimana sebuah demokrasi yang beradab bisa runtuh menjadi totalitarisme dalam hitungan tahun, dan bagaimana satu individu dengan ideologi yang menyimpang bisa menyeret seluruh bangsa—dan dunia—ke dalam bencana terbesar sepanjang masa.",
    analogy: {
      title: "Demokrasi adalah Tanaman yang Bisa Mati Jika Tidak Dirawat",
      content:
        "Kita sering membayangkan demokrasi sebagai sesuatu yang permanen—sebuah pencapaian yang, sekali diraih, tidak bisa diambil kembali. Weimar Republic Jerman membuktikan betapa salahnya asumsi ini.\n\nJerman pasca Perang Dunia I adalah salah satu negara paling terdidik dan berbudaya di dunia. Ia memiliki konstitusi demokratis yang canggih, tradisi ilmu pengetahuan dan filsafat yang luar biasa, seniman dan pemikir kelas dunia. Namun dalam waktu kurang dari 14 tahun, semua itu runtuh.\n\nMelalui kombinasi trauma ekonomi, ketidakstabilan politik, propaganda yang terampil, dan kelemahan institusi, Adolf Hitler naik dari pelukis jalanan gagal menjadi penguasa absolut negara paling kuat di Eropa—secara legal, melalui proses demokratis yang dimanipulasi. Ini bukan anomali sejarah. Ini adalah peringatan.",
    },
    chapters: [
      {
        num: 1,
        title: "Birth of the Third Reich",
        summary:
          "Shirer—yang hadir langsung sebagai jurnalis di Jerman selama periode ini—menggambarkan kondisi Republik Weimar yang membuat kebangkitan Hitler mungkin terjadi: kekalahan memalukan dalam Perang Dunia I, inflasi hiperbolik yang menghapus tabungan kelas menengah, Depresi Besar yang menciptakan pengangguran massal, dan sistem politik yang terfragmentasi sehingga tidak ada yang bisa membentuk pemerintahan yang stabil. Kondisi ini menciptakan populasi yang putus asa dan marah—dan sangat rentan terhadap demagog yang menawarkan kambing hitam dan janji kebangkitan.",
      },
      {
        num: 2,
        title: "The Mind of Hitler and the Roots of the Third Reich",
        summary:
          "Shirer menganalisis ideologi Hitler yang terbentuk selama tahun-tahun kemiskinannya di Wina—pan-Germanisme, antisemitisme virulent, dan keyakinan pada superioritas ras Arya. Yang paling mengejutkan bagi banyak pembaca: tidak ada yang rahasia tentang rencana Hitler. Semua tertulis jelas dalam Mein Kampf—ekspansi ke Timur, penghancuran Yahudi, dominasi Eropa. Para pemimpin Eropa yang bertemu Hitler bisa membacanya. Mereka memilih untuk tidak percaya, atau memilih untuk mengabaikannya.",
      },
      {
        num: 3,
        title: "The Rise of Adolf Hitler",
        summary:
          "Dari veteran perang kecewa yang bergabung dengan partai kecil tidak dikenal pada 1919, Hitler membangun Nazi Party menjadi kekuatan politik yang tidak bisa diabaikan melalui kemampuan oratori yang luar biasa, propaganda yang terampil, dan kombinasi intimidasi dan daya tarik emosional. Kudeta Munich 1923 yang gagal justru memberinya platform nasional. Penjara memberinya waktu untuk menulis Mein Kampf dan merestrukturisasi strategi dari pemberontakan bersenjata ke perebutan kekuasaan melalui jalur demokratis.",
      },
      {
        num: 4,
        title: "The Consolidation of Power",
        summary:
          "Bagaimana Hitler mengubah Kanselir yang terpilih secara konstitusional menjadi diktator absolut dalam waktu 18 bulan adalah pelajaran tentang bagaimana demokrasi bisa dibongkar dari dalam. Pembakaran Reichstag memberikan preteks untuk undang-undang darurat. Enabling Act—yang disahkan oleh parlemen yang terintimidasi—memberikan Hitler kekuasaan legislatif. Penghancuran serikat buruh, partai oposisi, dan pers bebas terjadi secara berurutan, masing-masing dengan pembenaran yang tampak masuk akal pada saat itu.",
      },
      {
        num: 5,
        title: "The Road to War",
        summary:
          "Shirer mendokumentasikan bagaimana Hitler secara sistematis membongkar perjanjian Versailles—remiliterisasi Rhineland, anschluss Austria, pencaplokan Sudetenland—sementara Inggris dan Prancis berulang kali mengalah dalam kebijakan appeasement yang tragis. Setiap konsesi yang diberikan kepada Hitler tidak membuatnya puas, melainkan semakin berani. Munich 1938—yang Chamberlain klaim sebagai peace for our time—hanyalah memberikan Hitler waktu untuk mempersiapkan perang besar yang ia rencanakan sejak awal.",
      },
      {
        num: 6,
        title: "World War II Begins",
        summary:
          "Invasi Polandia 1 September 1939 memulai konflik yang akhirnya menewaskan lebih dari 70 juta orang. Shirer menggambarkan kecepatan yang mengejutkan dari Blitzkrieg Jerman yang menghancurkan kepercayaan diri militer Barat. Jatuhnya Prancis dalam 6 minggu—kekuatan militer yang dianggap terkuat di Eropa—menunjukkan betapa revolusionernya doktrin militer Jerman dan betapa tertinggalnya pemikiran militer Sekutu yang masih terpaku pada strategi Perang Dunia I.",
      },
      {
        num: 7,
        title: "The New Order",
        summary:
          "Pendudukan Nazi di Eropa bukan sekadar kontrol militer—ia adalah proyek ideologis untuk mengubah tatanan demografis benua secara fundamental. Eksploitasi tenaga kerja budak dari seluruh Eropa mendukung mesin perang Jerman. Sistem administrasi yang birokratis dan efisien digunakan untuk mengidentifikasi, mengumpulkan, dan mendeportasi populasi yang dianggap tidak diinginkan ke kamp-kamp di Timur. Shirer mendokumentasikan bagaimana banyak orang biasa—bukan hanya fanatik Nazi—berpartisipasi dalam sistem ini.",
      },
      {
        num: 8,
        title: "The Holocaust",
        summary:
          "Shirer mendokumentasikan dengan teliti bagaimana Holocaust—pembunuhan sistematis enam juta orang Yahudi Eropa—direncanakan dan dilaksanakan sebagai kebijakan negara. Konferensi Wannsee Januari 1942 mengkoordinasikan apa yang disebut Final Solution di antara berbagai lembaga pemerintah Jerman. Yang paling menggelisahkan: ini bukan dilakukan oleh monster yang jelas teridentifikasi, melainkan oleh birokrat yang mengerjakan tugas mereka, pejabat yang mematuhi perintah, dan warga biasa yang memilih untuk tidak bertanya.",
      },
      {
        num: 9,
        title: "The Turn of the Tide",
        summary:
          "Stalingrad musim dingin 1942-1943 adalah titik balik. Untuk pertama kalinya, seluruh tentara Jerman—330.000 orang—dihancurkan atau ditangkap. Invasi Sekutu ke Afrika Utara, Italia, dan akhirnya Normandia pada Juni 1944 membuka front barat yang Hitler selalu takutkan. Di dalam Jerman sendiri, kelompok-kelompok perlawanan tumbuh dan mencapai klimaks dalam percobaan pembunuhan 20 Juli 1944 yang hampir berhasil.",
      },
      {
        num: 10,
        title: "The Fall of the Third Reich",
        summary:
          "Shirer menggambarkan kehancuran akhir Jerman Nazi dengan detail yang mengerikan: kota-kota yang dibombardir hingga rata dengan tanah, jutaan pengungsi yang membanjiri jalan dalam musim dingin yang kejam, tentara yang semakin muda dan semakin tua mempertahankan tanah yang semakin menyempit. Hitler di bunkernya—semakin tidak terhubung dengan realitas, memerintahkan divisi-divisi yang sudah tidak ada—menolak menyerah hingga akhirnya bunuh diri pada 30 April 1945, sehari setelah hari ulang tahunnya yang ke-56.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B028-S1",
        task: "Pelajari tanda-tanda peringatan dini dari erosi demokrasi: serangan terhadap kebebasan pers, demonisasi kelompok minoritas, pelemahan institusi independen, dan konsentrasi kekuasaan. Apakah Anda melihat tanda-tanda ini di negara Anda atau negara lain hari ini?",
      },
      {
        stepId: "B028-S2",
        task: "Renungkan: bagaimana orang-orang biasa—bukan hanya fanatik—bisa berpartisipasi dalam kejahatan massal? Apa kondisi psikologis dan sosial yang memungkinkan ini terjadi? Apa yang bisa Anda lakukan untuk menghindari jatuh ke dalam kondisi yang sama?",
      },
      {
        stepId: "B028-S3",
        task: "Cari tahu tentang satu tokoh yang menolak untuk berpartisipasi dalam ketidakadilan pada masa Nazi—baik yang terkenal maupun yang tidak dikenal. Apa yang membuat mereka berbeda? Apa yang bisa Anda pelajari dari keberanian mereka?",
      },
    ],
  },
  {
    bookId: "B029",
    title: "1491",
    author: "Charles C. Mann",
    category: "Sejarah",
    readingTimeMinutes: 16,
    coverStyle:
      "background:linear-gradient(160deg,#002200 0%,#003d00 50%,#1a5200 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🌿</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#a5d6a7;line-height:1.3;">1491</div><div style="width:36px;height:2px;background:#a5d6a7;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Charles C. Mann</div></div>',
    tags: ["Amerika pra-Columbus", "sejarah", "peradaban", "arkeologi"],
    bigIdea:
      "Amerika sebelum Columbus bukan benua yang kosong dan liar yang dihuni oleh suku-suku primitif—melainkan rumah bagi peradaban-peradaban yang kompleks, padat, dan inovatif yang telah mengubah lanskap benua secara mendalam selama ribuan tahun.",
    analogy: {
      title:
        "Amerika Pra-Columbus adalah Perpustakaan yang Dibakar Sebelum Sempat Dibaca",
      content:
        "Bayangkan sebuah perpustakaan besar yang berisi ribuan tahun pengetahuan, seni, dan sejarah. Lalu bayangkan perpustakaan itu terbakar—bukan sekaligus, melainkan perlahan selama beberapa generasi, sehingga bahkan orang-orang yang selamat tidak sepenuhnya menyadari betapa banyak yang hilang.\n\nItulah yang terjadi pada peradaban-peradaban asli Amerika. Penyakit yang dibawa penjelajah Eropa—cacar, campak, influenza—menyapu sebagian besar populasi asli Amerika bahkan sebelum kontak langsung yang meluas. Diperkirakan 90% populasi meninggal dalam beberapa generasi.\n\nAkibatnya, ketika penjelajah dan pemukim Eropa tiba dalam jumlah besar, mereka melihat hutan lebat dan padang rumput yang tampaknya tidak berpenghuni—dan menyimpulkan bahwa benua ini selalu seperti itu. Mereka tidak tahu bahwa lanskap yang mereka lihat adalah bekas peradaban yang baru saja runtuh.",
    },
    chapters: [
      {
        num: 1,
        title: "A View from Above",
        summary:
          "Mann membuka dengan pemandangan dari udara di atas Amazon—yang selama ini dianggap sebagai hutan perawan yang tidak tersentuh manusia. Namun penelitian arkeologi terbaru menunjukkan jejak kota-kota besar, jalan-jalan, dan sistem pertanian yang canggih di bawah kanopi hutan. Amazon yang kita kenal hari ini bukan alam liar yang tidak tersentuh—ia adalah taman yang dibiarkan liar selama 500 tahun setelah peradaban yang memeliharanya hancur akibat penyakit Eropa.",
      },
      {
        num: 2,
        title: "The Artificial Wilderness",
        summary:
          "Konsep wilderness—alam liar yang tidak tersentuh manusia—yang menjadi fondasi gerakan konservasi modern di Amerika sebagian besar adalah mitos. Hutan-hutan Amerika Utara yang dilihat oleh pemukim Eropa awal sebagai alam liar yang asli sebenarnya adalah hasil dari ribuan tahun pengelolaan aktif oleh penduduk asli: pembakaran yang terkontrol untuk membuka padang, penanaman yang menciptakan kelimpahan buah dan kacang, manajemen air yang kompleks. Ketika populasi asli hancur, landscape ini berubah menjadi apa yang tampak sebagai hutan perawan.",
      },
      {
        num: 3,
        title: "The Plague",
        summary:
          "Tidak ada bencana demografis yang sebanding dalam sejarah manusia. Dalam satu abad setelah kontak Eropa, populasi asli Amerika mungkin turun dari 40-100 juta orang menjadi hanya beberapa juta. Kematian ini tidak terjadi karena kekerasan langsung—melainkan karena penyakit yang belum pernah dikenal sebelumnya. Karena populasi asli Amerika berkembang di benua yang terpisah dari Dunia Lama selama ribuan tahun, mereka tidak memiliki imunitas terhadap penyakit seperti cacar, campak, dan influenza yang sudah endemis di Eurasia dan Afrika.",
      },
      {
        num: 4,
        title: "Cahokia",
        summary:
          "Di sekitar tahun 1100 M, kota Cahokia di dekat lokasi St. Louis modern adalah salah satu kota terbesar di dunia—dengan populasi yang mungkin melebihi London pada masa yang sama. Ia memiliki piramid tanah yang lebih besar dari piramid Giza dalam volume, sistem perdagangan yang mencapai dari Teluk Meksiko hingga Great Lakes, dan organisasi sosial yang kompleks. Namun pada 1400 M, kota ini sudah ditinggalkan—misterius seperti kejatuhan banyak peradaban besar.",
      },
      {
        num: 5,
        title: "Frequently Asked Questions",
        summary:
          "Mann menjawab pertanyaan-pertanyaan yang sering diajukan tentang peradaban pra-Columbus: apakah mereka benar-benar hidup selaras dengan alam? (tidak selalu—mereka juga melakukan eksploitasi berlebihan yang menyebabkan kehancuran beberapa peradaban), apakah mereka primitif? (sama sekali tidak—banyak yang memiliki teknologi dan pengetahuan yang mengagumkan dalam bidang pertanian, astronomi, dan matematika), dan apakah kontak Eropa selalu merupakan bencana? (jauh lebih kompleks dari narasi sederhana).",
      },
      {
        num: 6,
        title: "The Lords of the Earth",
        summary:
          "Mann mendokumentasikan kompleksitas dan kecanggihan Kerajaan Aztec—yang lebih tepat disebut Triple Alliance. Tenochtitlan, ibukota Aztec yang dibangun di atas danau, adalah kota terbesar di dunia pada masanya dengan populasi sekitar 200.000-300.000 orang, jauh melampaui Madrid atau London kontemporer. Sistem irigasi, pasar, dan administrasinya mengagumkan para penjelajah Spanyol yang pertama kali melihatnya—meski mereka kemudian menghancurkannya.",
      },
      {
        num: 7,
        title: "The Artificial Earth",
        summary:
          "Tanah hitam yang kaya nutrisi yang disebut Terra Preta ditemukan di berbagai lokasi di seluruh Amazon. Berbeda dari tanah Amazon yang biasanya sangat miskin nutrisi, Terra Preta sangat subur dan terus mempertahankan kesuburannya selama ribuan tahun. Penelitian terbaru menunjukkan bahwa ini bukan terbentuk secara alami—ia adalah produk dari praktik pertanian intensif selama berabad-abad yang mencampur arang, tulang, dan material organik ke dalam tanah. Ini adalah salah satu pencapaian teknologi pertanian yang paling luar biasa dalam sejarah manusia.",
      },
      {
        num: 8,
        title: "Made in America",
        summary:
          "Jagung—yang kini menjadi tanaman pangan terpenting ketiga di dunia—adalah ciptaan rekayasa genetika manusia yang paling luar biasa sebelum era modern. Nenek moyang liar jagung, teosinte, hampir tidak menyerupai jagung sama sekali—ia memiliki beberapa biji keras yang terbungkus dalam cangkang keras. Melalui ribuan tahun seleksi yang terencana, petani Mesoamerika mengubahnya menjadi tanaman yang sangat berbeda sehingga para botanis modern kesulitan mengidentifikasi nenek moyangnya.",
      },
      {
        num: 9,
        title: "The Desolate Valley",
        summary:
          "Mann menggambarkan bagaimana banyak penjelajah dan pemukim Eropa melihat benua yang tampaknya kosong dan tidak terurus—dan menggunakan ini sebagai pembenaran moral untuk pengambilalihan tanah. Yang tidak mereka sadari adalah bahwa kekosongan ini bukan kondisi alami—ia adalah akibat dari bencana demografis yang baru saja terjadi. Hutan-hutan yang tampak tidak tersentuh, padang rumput yang luas, sungai yang penuh ikan—semuanya adalah tanda-tanda ekosistem yang baru saja kehilangan pengelolanya, bukan alam liar yang tidak pernah disentuh manusia.",
      },
      {
        num: 10,
        title: "The Ancient Ones",
        summary:
          "Bab penutup Mann merenungkan implikasi dari temuan-temuan ini untuk cara kita memandang sejarah, konservasi, dan identitas nasional Amerika. Narasi tentang wilderness yang tidak tersentuh dan penduduk asli yang primitif tidak hanya tidak akurat secara historis—ia juga berbahaya karena menghapus agency dan pencapaian peradaban-peradaban yang sangat kompleks. Mengakui kecanggihan peradaban pra-Columbus bukan hanya tentang keadilan historis—ia adalah tentang pemahaman yang lebih akurat dan lebih kaya tentang apa yang mungkin bagi manusia.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B029-S1",
        task: "Cari tahu siapa penduduk asli yang tinggal di tanah tempat Anda hidup sekarang sebelum kolonialisasi. Apa nama mereka, bagaimana budaya mereka, dan apa yang terjadi pada mereka?",
      },
      {
        stepId: "B029-S2",
        task: "Pertimbangkan satu narasi tentang sejarah lokal atau nasional Anda yang mungkin tidak lengkap atau menyederhanakan realitas. Siapa yang tidak terwakili dalam narasi itu? Cari sumber yang memberikan perspektif yang berbeda.",
      },
      {
        stepId: "B029-S3",
        task: "Renungkan: pengetahuan ekologis apa yang mungkin sudah hilang bersama peradaban-peradaban yang hancur? Bagaimana kita bisa belajar dari praktik-praktik pertanian dan pengelolaan alam yang telah terbukti berkelanjutan selama ribuan tahun?",
      },
    ],
  },
  {
    bookId: "B030",
    title: "Why We Sleep",
    author: "Matthew Walker",
    category: "Kesehatan",
    readingTimeMinutes: 15,
    coverStyle:
      "background:linear-gradient(160deg,#000033 0%,#000066 50%,#000099 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🌙</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#90caf9;line-height:1.3;">Why We Sleep</div><div style="width:36px;height:2px;background:#90caf9;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Matthew Walker</div></div>',
    tags: ["tidur", "kesehatan", "otak", "neurosains"],
    bigIdea:
      "Tidur bukan kemewahan atau pemborosan waktu—ia adalah fondasi biologis dari kesehatan fisik, kesehatan mental, dan kinerja kognitif. Tidak ada satu aspek kesehatan yang tidak dipengaruhi oleh kualitas tidur Anda.",
    analogy: {
      title: "Tidur adalah Layanan Maintenance Malam yang Tidak Bisa Ditunda",
      content:
        "Bayangkan tubuh Anda adalah sebuah pabrik yang beroperasi 24 jam. Di siang hari, pabrik berproduksi penuh—berpikir, bergerak, merespons lingkungan. Namun setiap malam, pabrik membutuhkan jendela maintenance: membersihkan limbah beracun yang terakumulasi, memperbaiki mesin yang aus, mengupdate software, dan menyimpan arsip produksi hari itu.\n\nJika Anda menunda maintenance ini—memotong tidur untuk bekerja lebih lama—pabrik mungkin bisa beroperasi satu dua hari. Tapi lambat laun, limbah beracun menumpuk, mesin mulai rusak, dan software penuh bug. Pabrik masih berjalan, tapi jauh di bawah kapasitas optimalnya.\n\nYang mengejutkan dari penelitian Walker: tidak ada yang namanya membayar hutang tidur di akhir pekan. Kerusakan yang terjadi akibat kurang tidur tidak bisa sepenuhnya dipulihkan. Dan kerusakan itu jauh lebih serius dari yang kebanyakan orang sadari.",
    },
    chapters: [
      {
        num: 1,
        title: "To Sleep, Perchance to Dream",
        summary:
          "Walker membuka dengan fakta yang mengejutkan: manusia adalah satu-satunya makhluk yang secara sengaja mengorbankan tidurnya—dan sering kali bangga dengan itu. Namun setelah puluhan tahun penelitian, ia menyimpulkan bahwa tidak ada satu proses biologis yang tidak dioptimalkan oleh tidur atau tidak dirusak oleh kurang tidur. Tidur bukan sekadar istirahat pasif—ia adalah kondisi aktif yang sangat kompleks di mana otak dan tubuh melakukan pekerjaan yang tidak bisa dilakukan saat terjaga.",
      },
      {
        num: 2,
        title: "Caffeine, Jet Lag, and Melatonin",
        summary:
          "Walker menjelaskan dua sistem yang mengatur tidur: ritme sirkadian (jam biologis internal yang berjalan sekitar 24 jam) dan adenosine (tekanan tidur yang terakumulasi semakin lama Anda terjaga). Kafein bekerja bukan dengan memberi energi, melainkan dengan memblok reseptor adenosine di otak—namun adenosine terus terakumulasi di belakang blokade itu, menjelaskan mengapa Anda crash saat kafein habis. Jet lag adalah konflik antara jam internal dan waktu eksternal yang baru.",
      },
      {
        num: 3,
        title: "Defining and Generating Sleep",
        summary:
          "Tidur bukan satu kondisi homogen—ia terdiri dari siklus yang berulang sepanjang malam, masing-masing sekitar 90 menit, yang mengandung proporsi berbeda dari NREM (Non-Rapid Eye Movement) dan REM sleep. NREM sleep—terutama slow-wave sleep di tahap awal malam—adalah saat otak memindahkan memori dari penyimpanan sementara ke penyimpanan jangka panjang. REM sleep—yang dominan di tahap akhir malam—adalah saat otak mengintegrasikan informasi baru dengan pengetahuan yang ada dan menghasilkan kreativitas.",
      },
      {
        num: 4,
        title: "Who Sleeps, How Do We Sleep, and How Much Sleep Do We Need?",
        summary:
          "Semua makhluk yang dipelajari menunjukkan beberapa bentuk tidur—dari lalat buah hingga paus. Manusia membutuhkan sekitar 7-9 jam tidur per malam untuk fungsi optimal. Hanya sekitar 1-3% populasi yang secara genetis bisa berfungsi dengan baik dengan kurang dari 6 jam—jauh lebih sedikit dari mereka yang mengklaim bisa melakukannya. Sebagian besar orang yang pikir mereka bisa bertahan dengan 5-6 jam sebenarnya sudah sangat terbiasa dengan kondisi sub-optimal sehingga tidak lagi merasakan betapa buruk fungsi mereka.",
      },
      {
        num: 5,
        title: "Changes in Sleep Across the Life Span",
        summary:
          "Kebutuhan dan pola tidur berubah drastis sepanjang hidup. Bayi baru lahir tidur sekitar 16 jam sehari dengan proporsi REM yang sangat tinggi—karena REM sleep adalah krusial untuk perkembangan otak yang pesat. Remaja mengalami pergeseran fisiologis dalam ritme sirkadian mereka yang membuat mereka secara biologis lebih suka tidur terlambat dan bangun terlambat—sekolah yang memulai jam 7 pagi secara harfiah memaksa remaja untuk berfungsi dalam kondisi jet lag kronis.",
      },
      {
        num: 6,
        title: "Your Mother and Shakespeare Both Knew",
        summary:
          "Walker mendokumentasikan efek kurang tidur pada hampir setiap sistem tubuh. Sistem imun: satu malam dengan 4 jam tidur mengurangi aktivitas sel NK (natural killer) hingga 70%. Kardiovaskular: tidur kurang dari 6 jam meningkatkan risiko serangan jantung sebesar 200%. Kanker: kurang tidur mengganggu sistem imun yang berperan dalam mendeteksi dan menghancurkan sel-sel kanker. Metabolisme: kurang tidur mengubah hormon lapar dan kenyang sehingga mendorong makan lebih banyak dan memilih makanan tidak sehat.",
      },
      {
        num: 7,
        title: "Too Extreme for the Guinness Book of World Records",
        summary:
          "Guinness World Records menghentikan kategori record untuk tidak tidur—karena bukti bahwa kurang tidur ekstrem bisa mematikan. Tikus yang dicegah tidur sepenuhnya mati dalam 2-3 minggu meskipun diberi makan cukup. Manusia dengan kondisi Fatal Familial Insomnia—penyakit genetis langka yang mencegah tidur—meninggal dalam hitungan bulan. Eksperimen deprivasi tidur pada manusia sehat menunjukkan halusinasi, paranoia, dan gangguan kognitif yang mirip psikosis setelah beberapa hari.",
      },
      {
        num: 8,
        title: "Cancer, Heart Attacks, and a Shorter Life",
        summary:
          "Walker menyajikan data epidemiologis yang mengejutkan: negara-negara dan wilayah yang mengadopsi Daylight Saving Time—yang mencuri satu jam tidur di musim semi—mengalami peningkatan 24% dalam serangan jantung pada hari Senin setelah perubahan waktu. Sebaliknya, di musim gugur saat satu jam tidur ditambahkan, serangan jantung turun 21%. Ini adalah eksperimen alami yang menunjukkan hubungan kausal antara tidur dan kesehatan kardiovaskular, bukan sekadar korelasi.",
      },
      {
        num: 9,
        title: "Dreaming as Overnight Therapy",
        summary:
          "REM sleep dan mimpi melayani fungsi terapi emosional yang unik: memungkinkan kita untuk memproses pengalaman emosional yang menyakitkan dalam kondisi yang relatif aman—tanpa norepinephrine (hormon stres) yang biasanya menyertai kenangan yang menyakitkan. Walker berpendapat bahwa PTSD sebagian adalah kondisi di mana otak gagal memproses trauma melalui REM sleep karena kadar norepinephrine yang tinggi mencegah tidur REM yang normal. Terapi yang efektif untuk PTSD sering kali melibatkan normalisasi tidur REM.",
      },
      {
        num: 10,
        title: "Sleep and Society: What Medicine and Education Are Doing Wrong",
        summary:
          "Walker mengkritik keras dua institusi yang paling banyak merusak tidur: kedokteran dan pendidikan. Dokter residen sering bekerja shift 30 jam lebih—dan membuat 36% lebih banyak kesalahan medis yang serius dibanding dokter yang cukup tidur. Sekolah yang mulai terlalu pagi secara sistematis merampas tidur dari remaja yang paling membutuhkannya. Distrik sekolah di AS yang menggeser jadwal mulai sekolah lebih siang melaporkan peningkatan dramatis dalam nilai, kesehatan mental, dan penurunan kecelakaan lalu lintas.",
      },
      {
        num: 11,
        title: "A New Vision for Sleep in the Twenty-First Century",
        summary:
          "Walker menutup dengan argumen bahwa kita perlu revolusi budaya dalam cara kita memandang tidur. Saat ini, kurang tidur dipandang sebagai tanda dedikasi dan kerja keras. Walker berpendapat sebaliknya: pemimpin dan profesional yang cukup tidur membuat keputusan yang lebih baik, lebih kreatif, lebih empatik, dan lebih produktif. Ia mengusulkan perubahan kebijakan konkret: sekolah mulai lebih siang, perusahaan memberikan ruang tidur siang, dan dokter berhenti bangga dengan jam kerja yang tidak manusiawi.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B030-S1",
        task: "Hitung hutang tidur Anda: berapa rata-rata jam tidur Anda per malam seminggu ini? Jika kurang dari 7 jam, Anda sudah dalam defisit. Tambahkan 30 menit per malam selama seminggu dan perhatikan perbedaannya.",
      },
      {
        stepId: "B030-S2",
        task: "Tetapkan jadwal tidur yang konsisten—waktu tidur dan bangun yang sama setiap hari termasuk akhir pekan. Konsistensi ritme sirkadian lebih penting dari total durasi tidur.",
      },
      {
        stepId: "B030-S3",
        task: "Stop kafein setelah jam 14.00. Kafein memiliki half-life sekitar 5-6 jam—kopi jam 15.00 masih setengah aktif di otak Anda pada jam 21.00 dan mengganggu kualitas tidur meski Anda bisa tertidur.",
      },
      {
        stepId: "B030-S4",
        task: "Turunkan suhu kamar tidur Anda menjadi sekitar 18-19 derajat Celsius. Penurunan suhu tubuh adalah sinyal biologis untuk memulai tidur—kamar yang terlalu hangat adalah salah satu penyebab paling umum dari tidur yang tidak berkualitas.",
      },
    ],
  },
  {
    bookId: "B031",
    title: "Outlive: The Science and Art of Longevity",
    author: "Peter Attia",
    category: "Kesehatan",
    readingTimeMinutes: 17,
    coverStyle:
      "background:linear-gradient(160deg,#001a0a 0%,#003320 50%,#004d30 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">💪</div><div style="font-family:Playfair Display,serif;font-size:0.95rem;font-weight:700;color:#80cbc4;line-height:1.3;">Outlive</div><div style="width:36px;height:2px;background:#80cbc4;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Peter Attia</div></div>',
    tags: ["longevity", "kesehatan", "olahraga", "metabolisme"],
    bigIdea:
      "Tujuan kesehatan bukan sekadar hidup lebih lama—melainkan hidup lebih baik lebih lama. Medicine 3.0 berfokus pada pencegahan penyakit kronis puluhan tahun sebelum gejala muncul, bukan hanya mengobati setelah penyakit sudah ada.",
    analogy: {
      title:
        "Kesehatan Jangka Panjang adalah Investasi Compounding yang Dimulai Hari Ini",
      content:
        "Kebanyakan orang mengelola kesehatan mereka seperti mengelola keuangan dengan mentalitas gali lubang tutup lubang: tidak melakukan apa-apa sampai ada krisis, lalu bereaksi dengan panik. Pergi ke dokter hanya saat sakit. Mulai diet hanya setelah kolesterol tinggi terdeteksi.\n\nAttia berpendapat untuk pendekatan yang berbeda—seperti investor jangka panjang yang bijaksana. Setiap keputusan gaya hidup hari ini adalah investasi atau penarikan dari rekening kesehatan masa depan Anda. Olahraga hari ini bukan hanya tentang penampilan atau perasaan sekarang—ia adalah deposit ke rekening yang akan Anda butuhkan 30-40 tahun lagi.\n\nDan seperti compounding finansial, semakin awal Anda mulai berinvestasi dalam kesehatan, semakin besar return yang Anda dapatkan. Seseorang yang mulai menjaga kesehatan di usia 30 akan berada dalam kondisi yang jauh lebih baik di usia 70 dari seseorang yang baru mulai di usia 50—meski keduanya akhirnya melakukan hal yang sama.",
    },
    chapters: [
      {
        num: 1,
        title: "The Long Game: From Fast Death to Slow Death",
        summary:
          "Attia membedakan antara fast death (kecelakaan, infeksi akut) yang didominasi penyakit di masa lalu, dan slow death (penyakit jantung, kanker, diabetes, Alzheimer) yang mendominasi kematian modern. Ia menyebut keempat penyakit ini sebagai The Four Horsemen. Kunci perbedaan: slow death dimulai puluhan tahun sebelum gejala muncul. Seseorang yang didiagnosis penyakit jantung di usia 65 sebenarnya sudah mengembangkan penyakit itu sejak usia 30-an atau bahkan 20-an. Ini berarti intervensi terbaik harus dimulai jauh sebelum ada gejala.",
      },
      {
        num: 2,
        title:
          "Medicine 3.0: Rethinking Medicine for the Age of Chronic Disease",
        summary:
          "Medicine 1.0 adalah era sebelum sains modern—pengobatan berbasis tradisi dan intuisi. Medicine 2.0 adalah kedokteran berbasis bukti modern yang sangat efektif untuk penyakit akut dan infeksi, namun kurang efektif untuk pencegahan penyakit kronis. Medicine 3.0 adalah paradigma yang Attia usulkan: sangat personal, sangat preventif, dan berfokus pada span kesehatan (healthspan) bukan hanya lifespan. Ini membutuhkan pemeriksaan yang jauh lebih mendalam dan jauh lebih awal dari standar medis konvensional.",
      },
      {
        num: 3,
        title: "Objective, Strategy, Tactics: A Road Map for Reading This Book",
        summary:
          "Attia memperkenalkan framework tiga level untuk longevity: Objective (tujuan: hidup sehat dan fungsional hingga usia lanjut), Strategy (pilihan besar: olahraga, nutrisi, tidur, manajemen stres, dan obat-obatan jika diperlukan), dan Tactics (implementasi spesifik yang dipersonalisasi untuk setiap individu). Ia menekankan bahwa tidak ada satu diet atau protokol olahraga yang optimal untuk semua orang—setiap individu perlu menemukan pendekatan yang sesuai dengan biologi dan gaya hidup unik mereka.",
      },
      {
        num: 4,
        title: "Centenarian Decathlon: The Physiology of Aging and Exercise",
        summary:
          "Attia menggunakan konsep Centenarian Decathlon: sepuluh aktivitas fisik yang ingin Anda masih bisa lakukan di usia 100 (naik tangga, membawa belanjaan, bermain dengan cucu, dll). Untuk bisa melakukan ini di usia 100, Anda harus memiliki kapasitas fisik yang jauh melebihi ini di usia 70, 60, dan 50. Ini memerlukan investasi dalam muscle mass, VO2 max, dan kekuatan yang dimulai jauh sebelum Anda merasa membutuhkannya. Otot adalah organ longevity yang paling underrated.",
      },
      {
        num: 5,
        title: "VO2 Max: The Single Best Predictor of Longevity",
        summary:
          "VO2 max—kapasitas tubuh untuk menggunakan oksigen saat olahraga maksimal—adalah prediktor terkuat tunggal dari mortalitas semua penyebab, lebih kuat dari merokok, diabetes, atau penyakit jantung. Meningkatkan VO2 max dari low ke above average mengurangi risiko kematian lebih dari menghentikan merokok. Namun kebanyakan orang tidak pernah melakukan olahraga dengan intensitas yang cukup untuk meningkatkan VO2 max secara signifikan. Zone 2 training (olahraga aerobik sedang) dan interval intensitas tinggi adalah dua cara yang terbukti efektif.",
      },
      {
        num: 6,
        title:
          "The Centenarian Decathlon: Training for the Last Decade of Your Life",
        summary:
          "Attia menjelaskan empat pilar kebugaran yang perlu dilatih untuk longevity: stabilitas (fondasi yang mencegah cedera), kekuatan (muscle mass yang melindungi dari sarcopenia), aerobik zone 2 (efisiensi metabolik dan kesehatan kardiovaskular), dan aerobik peak (VO2 max). Ia menekankan bahwa stabilitas—kemampuan untuk mentransfer kekuatan dengan efisien dan aman—adalah fondasi yang paling sering diabaikan namun paling kritis untuk mencegah jatuh dan cedera di usia tua.",
      },
      {
        num: 7,
        title:
          "The Tablestakes of Longevity: Sleep, Emotional Health, and Medications",
        summary:
          "Tidur, kesehatan emosional, dan manajemen stres adalah fondasi yang tidak bisa dikompensasi oleh olahraga atau nutrisi apapun. Attia mendiskusikan hubungannya sendiri dengan stres dan kesehatan emosional secara jujur dan personal—sebuah confession yang jarang dari seorang dokter. Ia berpendapat bahwa kesehatan mental dan fisik tidak bisa dipisahkan, dan bahwa banyak penyakit fisik kronis memiliki komponen psikologis yang sering diabaikan oleh kedokteran konvensional.",
      },
      {
        num: 8,
        title: "Nutritional Biochemistry: How Food Affects Our Health",
        summary:
          "Attia menghindari memberikan satu diet yang direkomendasikan untuk semua orang—karena bukti menunjukkan bahwa respons metabolik terhadap makanan sangat bervariasi antar individu. Namun beberapa prinsip universal: protein sangat penting untuk mempertahankan muscle mass seiring usia (kebanyakan orang makan terlalu sedikit), kalori berlebih dalam bentuk apapun adalah berbahaya, dan kualitas makanan lebih penting dari rasio makronutrien yang tepat.",
      },
      {
        num: 9,
        title: "The Hungry Caterpillar: A Case for Nutritional Biochemistry",
        summary:
          "Attia menjelaskan metabolisme glukosa dan insulin secara mendalam—karena disfungsi metabolik adalah akar dari sebagian besar Four Horsemen. Resistensi insulin, yang berkembang perlahan selama bertahun-tahun sebelum terdeteksi sebagai diabetes, adalah kondisi yang sangat umum dan sangat berbahaya yang bisa dideteksi jauh lebih awal dengan tes yang tepat. Intervensi gaya hidup—terutama olahraga—adalah cara paling efektif untuk meningkatkan sensitivitas insulin.",
      },
      {
        num: 10,
        title: "Putting It All Together",
        summary:
          "Attia menutup dengan menegaskan bahwa longevity bukan tentang menghindari kematian—melainkan tentang memaksimalkan jumlah tahun di mana Anda hidup dengan penuh, aktif, dan bermakna. Ia menggunakan kisah pasien-pasiennya yang telah menerapkan prinsip Medicine 3.0 untuk menggambarkan apa yang mungkin: orang di usia 70 dan 80 yang masih berlari, mendaki, bermain dengan cucu, dan berkontribusi secara aktif. Itu bukan keberuntungan genetis—itu adalah hasil dari investasi yang dimulai puluhan tahun sebelumnya.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B031-S1",
        task: "Ukur kebugaran dasar Anda hari ini: berapa lama Anda bisa berjalan cepat tanpa kehabisan napas? Berapa push-up yang bisa Anda lakukan? Berapa lama Anda bisa berdiri dengan satu kaki? Catat hasilnya sebagai baseline.",
      },
      {
        stepId: "B031-S2",
        task: "Tambahkan 150 menit Zone 2 cardio per minggu—olahraga aerobik dengan intensitas sedang di mana Anda masih bisa berbicara dalam kalimat penuh tapi sudah berkeringat. Ini adalah investasi tunggal terbesar untuk longevity.",
      },
      {
        stepId: "B031-S3",
        task: "Hitung konsumsi protein harian Anda. Target optimal untuk longevity adalah sekitar 1.6-2.2 gram per kilogram berat badan. Kebanyakan orang makan jauh di bawah ini, terutama seiring bertambahnya usia.",
      },
      {
        stepId: "B031-S4",
        task: "Minta dokter Anda untuk memeriksa biomarker metabolik yang lebih lengkap: bukan hanya gula darah puasa, tapi juga HbA1c, insulin puasa, dan trigliserida. Ini memberikan gambaran yang jauh lebih akurat tentang kesehatan metabolik Anda.",
      },
    ],
  },
  {
    bookId: "B032",
    title: "The Obesity Code",
    author: "Jason Fung",
    category: "Kesehatan",
    readingTimeMinutes: 14,
    coverStyle:
      "background:linear-gradient(160deg,#1a0500 0%,#3d1000 50%,#6b2000 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🍽️</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#ffcc80;line-height:1.3;">The Obesity<br>Code</div><div style="width:36px;height:2px;background:#ffcc80;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Jason Fung</div></div>',
    tags: ["obesitas", "insulin", "diet", "puasa"],
    bigIdea:
      "Obesitas bukan soal kalori masuk versus kalori keluar—ia adalah masalah hormonal, terutama resistensi insulin. Memahami peran insulin adalah kunci untuk memahami mengapa diet konvensional gagal dan bagaimana cara yang benar untuk menurunkan berat badan secara permanen.",
    analogy: {
      title: "Obesitas adalah Masalah Termostat, Bukan Masalah Kalori",
      content:
        "Bayangkan rumah Anda memiliki termostat yang diset pada 25 derajat. Jika Anda membuka jendela di musim dingin, udara dingin masuk dan suhu turun—tapi termostat langsung menyalakan pemanas untuk mengembalikannya ke 25 derajat. Tidak peduli seberapa lama Anda membiarkan jendela terbuka, rumah akan selalu kembali ke 25 derajat.\n\nTubuh manusia memiliki termostat berat badan yang disebut set point—level berat badan yang dipertahankan oleh hormon-hormon. Ketika Anda mengurangi kalori, tubuh tidak hanya membakar lemak—ia juga menurunkan metabolisme, meningkatkan rasa lapar, dan melakukan segala cara untuk mengembalikan berat badan ke set point.\n\nFung berpendapat bahwa solusinya bukan memaksakan kurang makan melalui kemauan keras—melainkan menurunkan set point itu sendiri dengan mengatasi resistensi insulin yang menyebabkannya naik.",
    },
    chapters: [
      {
        num: 1,
        title: "The Epidemic",
        summary:
          "Obesitas adalah epidemi global yang telah tumbuh secara dramatis sejak 1970-an meskipun konsumsi lemak justru turun dan orang semakin banyak berolahraga. Ini sendiri adalah petunjuk bahwa teori kalori masuk-kalori keluar tidak cukup untuk menjelaskan fenomena ini. Fung mengajukan pertanyaan yang menggelisahkan: jika solusinya sesederhana makan lebih sedikit dan bergerak lebih banyak, mengapa tingkat obesitas terus meningkat meski pesan ini sudah disampaikan selama 50 tahun?",
      },
      {
        num: 2,
        title: "The Caloric Reduction Error",
        summary:
          "Model kalori masuk-kalori keluar memiliki masalah fundamental: ia memperlakukan tubuh manusia seperti mesin pasif yang output energinya konstan. Kenyataannya, tubuh sangat aktif menyesuaikan pengeluaran energi berdasarkan asupan. Ketika Anda mengurangi kalori, metabolisme basal menurun, aktivitas fisik tanpa sadar berkurang, dan hormon rasa lapar meningkat. Ini menjelaskan mengapa hampir semua diet berbasis pengurangan kalori gagal dalam jangka panjang—sekitar 95% orang yang berhasil menurunkan berat badan akan mendapatkannya kembali dalam 5 tahun.",
      },
      {
        num: 3,
        title: "A New Model of Obesity",
        summary:
          "Fung memperkenalkan model hormonal obesitas: berat badan diatur oleh hormon-hormon, terutama insulin. Insulin adalah hormon penyimpanan—ia memerintahkan sel-sel tubuh untuk menyimpan energi. Ketika kadar insulin tinggi secara kronis, tubuh terus-menerus berada dalam mode penyimpanan dan sulit membakar lemak. Resistensi insulin—kondisi di mana sel tidak lagi merespons insulin dengan normal—mengharuskan pankreas memproduksi lebih banyak insulin, yang semakin memperburuk masalah penyimpanan lemak.",
      },
      {
        num: 4,
        title: "The Calorie Deception",
        summary:
          "Tidak semua kalori diciptakan sama dari perspektif hormonal. 100 kalori dari gula meja memiliki efek insulin yang sangat berbeda dari 100 kalori dari minyak zaitun. 100 kalori dari protein memiliki efek yang berbeda dari 100 kalori dari karbohidrat olahan. Fung menjelaskan mengapa fokus pada kalori semata menyesatkan: yang penting bukan jumlah kalori yang dikonsumsi, melainkan respons hormonal yang dipicu oleh makanan tersebut.",
      },
      {
        num: 5,
        title: "The Insulin Model of Obesity",
        summary:
          "Bukti yang menghubungkan insulin dengan obesitas sangat kuat. Pasien yang menggunakan insulin sebagai obat secara konsisten mengalami kenaikan berat badan. Obat-obatan yang menurunkan kadar insulin secara konsisten menyebabkan penurunan berat badan. Populasi yang mengonsumsi makanan rendah insulin—baik karena diet tradisional maupun karena puasa—memiliki tingkat obesitas yang jauh lebih rendah. Fung berpendapat bahwa menurunkan kadar insulin, bukan sekadar mengurangi kalori, adalah kunci penurunan berat badan yang berkelanjutan.",
      },
      {
        num: 6,
        title: "The Carbohydrate-Insulin Hypothesis",
        summary:
          "Karbohidrat olahan—terutama gula dan tepung putih—adalah driver utama peningkatan insulin kronis. Ini menjelaskan mengapa epidemi obesitas berkorelasi kuat dengan panduan diet resmi yang merekomendasikan diet rendah lemak tinggi karbohidrat sejak 1970-an: mengganti lemak dengan karbohidrat olahan justru meningkatkan kadar insulin dan mendorong penyimpanan lemak. Namun Fung menekankan bahwa tidak semua karbohidrat sama—karbohidrat dari sayuran dan kacang-kacangan memiliki efek insulin yang sangat berbeda dari karbohidrat olahan.",
      },
      {
        num: 7,
        title: "Fasting and Hunger",
        summary:
          "Rasa lapar bukan sekadar respons terhadap berkurangnya kalori—ia sangat dipengaruhi oleh kebiasaan dan jadwal makan. Ghrelin, hormon lapar utama, meningkat sebelum waktu makan yang biasa dan turun setelahnya—terlepas dari apakah Anda makan atau tidak. Artinya: jika Anda biasa makan jam 12 siang, Anda akan merasa lapar jam 12 bahkan jika Anda sudah makan banyak pagi ini. Puasa yang terstruktur dapat merestrukturisasi jadwal ghrelin ini, sehingga rasa lapar menyesuaikan diri dengan pola makan baru.",
      },
      {
        num: 8,
        title: "When Does Eating Become a Problem?",
        summary:
          "Frekuensi makan—bukan hanya apa yang dimakan—sangat mempengaruhi kadar insulin dan resistensi insulin. Rekomendasi untuk makan 5-6 kali sehari agar metabolisme terjaga adalah mitos yang tidak didukung bukti kuat, dan justru bisa berbahaya bagi orang dengan resistensi insulin karena terus-menerus merangsang produksi insulin. Setiap kali Anda makan—tidak peduli seberapa kecil porsinya—insulin meningkat. Periode tanpa makan (puasa) adalah saat tubuh menurunkan insulin dan bisa mulai membakar lemak tersimpan.",
      },
      {
        num: 9,
        title: "The Social Origins of Obesity",
        summary:
          "Lingkungan sosial dan ekonomi memainkan peran besar dalam epidemi obesitas. Makanan ultra-proses yang tinggi gula dan karbohidrat olahan lebih murah dan lebih mudah diakses oleh masyarakat berpenghasilan rendah. Stres kronis meningkatkan kortisol yang kemudian meningkatkan insulin. Kurang tidur meningkatkan resistensi insulin. Fung berpendapat bahwa menyalahkan individu atas obesitas tanpa mempertimbangkan faktor-faktor sistemik ini adalah tidak adil dan tidak efektif sebagai kebijakan kesehatan publik.",
      },
      {
        num: 10,
        title: "Therapeutic Fasting",
        summary:
          "Puasa—bukan diet permanen—adalah alat paling efektif untuk menurunkan kadar insulin secara dramatis dan membalikkan resistensi insulin. Berbagai protokol puasa: 16:8 (makan dalam jendela 8 jam), 24 jam puasa 1-2 kali seminggu, atau 5:2 (dua hari makan sangat sedikit per minggu). Fung menekankan bahwa puasa bukan kelaparan—kelaparan adalah kurangnya makanan yang tidak sengaja, sementara puasa adalah pilihan sadar untuk tidak makan dalam periode tertentu. Tubuh memiliki cadangan energi berlimpah untuk mendukung puasa yang terkontrol.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B032-S1",
        task: "Coba protokol 16:8 selama satu minggu: batasi semua makan dalam jendela 8 jam (misalnya 11.00-19.00) dan puasa selama 16 jam sisanya. Minum air, teh, atau kopi hitam tanpa gula selama jendela puasa.",
      },
      {
        stepId: "B032-S2",
        task: "Audit makanan Anda selama 3 hari: berapa banyak gula tambahan dan karbohidrat olahan yang Anda konsumsi? Cek label produk kemasan—gula tersembunyi dalam banyak makanan yang tidak terasa manis.",
      },
      {
        stepId: "B032-S3",
        task: "Ganti satu makanan ultra-proses dalam diet harian Anda dengan alternatif yang lebih rendah insulin: ganti roti putih dengan sayuran, ganti minuman manis dengan air atau teh tanpa gula.",
      },
      {
        stepId: "B032-S4",
        task: "Minta dokter Anda untuk memeriksa insulin puasa (bukan hanya gula darah) pada pemeriksaan kesehatan berikutnya. Insulin puasa yang tinggi adalah tanda awal resistensi insulin yang bisa hadir bertahun-tahun sebelum diabetes terdiagnosis.",
      },
    ],
  },
  {
    bookId: "B033",
    title: "The Telomere Effect",
    author: "Elizabeth Blackburn & Elissa Epel",
    category: "Kesehatan",
    readingTimeMinutes: 13,
    coverStyle:
      "background:linear-gradient(160deg,#000a1a 0%,#001a33 50%,#002a4d 100%);",
    coverHTML:
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;"><div style="font-size:3rem;margin-bottom:12px;">🔬</div><div style="font-family:Playfair Display,serif;font-size:0.85rem;font-weight:700;color:#80deea;line-height:1.3;">The Telomere<br>Effect</div><div style="width:36px;height:2px;background:#80deea;margin:10px auto;"></div><div style="font-size:0.6rem;color:rgba(255,255,255,0.65);letter-spacing:0.1em;text-transform:uppercase;">Blackburn & Epel</div></div>',
    tags: ["penuaan", "sel", "stres", "longevity"],
    bigIdea:
      "Penuaan biologis bukan hanya soal waktu—ia dipengaruhi oleh gaya hidup, pola pikir, dan lingkungan sosial kita. Telomer—ujung pelindung kromosom—adalah jembatan antara kehidupan yang kita jalani dan bagaimana sel-sel kita menua.",
    analogy: {
      title: "Telomer adalah Ujung Tali Sepatu yang Melindungi Kromosom Anda",
      content:
        "Bayangkan tali sepatu dengan ujung plastik yang melindunginya dari terurai. Tanpa ujung plastik itu, tali sepatu akan segera rusak dan tidak bisa digunakan. Ujung plastik itu adalah telomer—struktur pelindung di ujung setiap kromosom dalam sel Anda.\n\nSetiap kali sel membelah, telomer sedikit memendek. Ketika telomer terlalu pendek, sel tidak bisa lagi membelah dengan benar—ia memasuki kondisi yang disebut senescence (penuaan sel) atau mati. Ini adalah jam biologis yang menentukan bagaimana dan seberapa cepat Anda menua.\n\nYang mengejutkan dari penelitian Blackburn (peraih Nobel 2009) dan Epel: panjang telomer bukan hanya ditentukan oleh genetika dan usia. Stres kronis, diet buruk, kurang tidur, dan isolasi sosial mempercepat pemendekan telomer. Sebaliknya, olahraga, meditasi, hubungan sosial yang baik, dan pola pikir tertentu bisa memperlambat—bahkan dalam beberapa kasus membalikkan—pemendekan telomer.",
    },
    chapters: [
      {
        num: 1,
        title: "How Prematurely Aging Cells Make Us Old and Sick",
        summary:
          "Blackburn dan Epel membuka dengan menjelaskan perbedaan antara chronological age (usia kalender) dan biological age (usia sel). Dua orang berusia 50 tahun bisa memiliki usia biologis yang sangat berbeda berdasarkan panjang telomer mereka. Telomer yang sangat pendek dikaitkan dengan peningkatan risiko penyakit jantung, diabetes, kanker, dan demensia—bahkan setelah mengontrol faktor-faktor lain. Ini adalah bukti bahwa proses seluler yang mendasari penuaan adalah target yang bisa dimodifikasi, bukan takdir yang tidak bisa diubah.",
      },
      {
        num: 2,
        title: "The Power of Long Telomeres",
        summary:
          "Penelitian longitudinal menunjukkan bahwa orang dengan telomer yang lebih panjang tidak hanya hidup lebih lama—mereka hidup lebih sehat lebih lama. Mereka memiliki risiko lebih rendah untuk hampir semua penyakit terkait usia, lebih jarang mengalami penurunan kognitif, dan mempertahankan fungsi fisik yang lebih baik di usia tua. Yang paling menarik: beberapa orang di usia 70-an memiliki telomer sepanjang orang berusia 40-an—dan kondisi kesehatan mereka mencerminkan usia biologis yang lebih muda itu.",
      },
      {
        num: 3,
        title: "Telomerase: The Enzyme That Replenishes Telomeres",
        summary:
          "Blackburn menemukan telomerase—enzim yang bisa memperbarui telomer—yang memenangkan Nobel Prize-nya pada 2009. Telomerase aktif dalam sel-sel stem dan sel-sel imun, memungkinkan mereka untuk terus membelah tanpa pemendekan telomer yang signifikan. Intervensi gaya hidup tertentu terbukti meningkatkan aktivitas telomerase dalam sel darah putih—termasuk olahraga aerobik, meditasi, dan beberapa perubahan diet. Ini membuka kemungkinan bahwa penuaan biologis, setidaknya sebagian, bisa diperlambat melalui pilihan gaya hidup.",
      },
      {
        num: 4,
        title: "How Stress Threatens Our Telomeres",
        summary:
          "Stres kronis adalah salah satu ancaman terbesar bagi telomer. Namun tidak semua stres sama: stres akut yang singkat tidak berbahaya—bahkan bisa menstimulasi respons yang menguntungkan. Yang berbahaya adalah stres kronis yang berkepanjangan dan terutama stres yang disertai perasaan tidak berdaya dan tidak terkontrol. Kortisol yang diproduksi dalam respons stres secara langsung merusak telomer. Anak-anak yang tumbuh dalam lingkungan yang penuh stres dan tidak aman menunjukkan telomer yang lebih pendek—bukti bahwa pengalaman masa kecil meninggalkan jejak biologis yang nyata.",
      },
      {
        num: 5,
        title: "Telomeres and the Diseases of Aging",
        summary:
          "Blackburn dan Epel mendokumentasikan hubungan antara telomer pendek dan berbagai penyakit kronis. Pasien penyakit jantung koroner memiliki telomer yang lebih pendek dari kelompok kontrol yang sehat dengan usia yang sama. Pasien dengan diabetes tipe 2 menunjukkan pemendekan telomer yang lebih cepat. Orang dengan depresi kronis memiliki telomer yang secara rata-rata lebih pendek dari orang tanpa depresi. Ini tidak berarti telomer pendek menyebabkan penyakit-penyakit ini—hubungannya kompleks dan saling memperkuat.",
      },
      {
        num: 6,
        title: "Mind Your Telomeres: Negative Thinking and Stress",
        summary:
          "Pola pikir tertentu secara konsisten dikaitkan dengan telomer yang lebih pendek: cynical hostility (kecurigaan dan permusuhan terhadap orang lain), pessimism, dan mind-wandering (pikiran yang terus-menerus mengembara ke masa lalu atau masa depan alih-alih hadir di saat ini). Sebaliknya, mindfulness—kemampuan untuk hadir di momen saat ini tanpa penilaian—dikaitkan dengan telomer yang lebih panjang dan aktivitas telomerase yang lebih tinggi. Ini bukan sekadar korelasi—mekanisme biologis yang menghubungkan pola pikir dengan biologi sel sudah mulai teridentifikasi.",
      },
      {
        num: 7,
        title: "Training Your Stress Response: How to Handle Stressors",
        summary:
          "Cara Anda merespons stres lebih penting dari jumlah stres yang Anda hadapi. Dua orang yang menghadapi stressor yang identik bisa menunjukkan respons biologis yang sangat berbeda berdasarkan evaluasi kognitif mereka terhadap situasi tersebut. Melihat stres sebagai tantangan yang bisa ditangani (challenge response) versus ancaman yang menakutkan (threat response) menghasilkan profil hormonal yang sangat berbeda. Yang pertama bahkan bisa bersifat protektif bagi telomer; yang kedua merusak.",
      },
      {
        num: 8,
        title: "De-Stressing Your Cells: How to Renew Your Telomeres",
        summary:
          "Berbagai intervensi terbukti meningkatkan panjang telomer atau aktivitas telomerase: meditasi mindfulness (8 minggu program MBSR menunjukkan peningkatan terukur dalam aktivitas telomerase), olahraga aerobik (3 kali seminggu 45 menit selama 6 bulan meningkatkan aktivitas telomerase secara signifikan), dan koneksi sosial yang bermakna. Blackburn dan Epel juga mendiskusikan peran tidur, omega-3, dan vitamin D berdasarkan bukti penelitian yang ada—dengan kehati-hatian dalam menginterpretasikan data yang masih berkembang.",
      },
      {
        num: 9,
        title: "Pregnancy: A Telomere Time Capsule",
        summary:
          "Pengalaman prenatal—kondisi lingkungan selama kehamilan—meninggalkan jejak pada telomer bayi yang baru lahir. Bayi yang lahir dari ibu yang mengalami stres tinggi selama kehamilan menunjukkan telomer yang lebih pendek. Bayi yang lahir dari ibu yang kelebihan berat badan atau mengalami depresi selama kehamilan juga menunjukkan pola serupa. Ini menunjukkan bahwa biological aging clock kita mulai berdetak bahkan sebelum kita lahir, dan bahwa intervensi untuk melindungi telomer harus dimulai sedini mungkin.",
      },
      {
        num: 10,
        title: "The Social World Shapes Your Telomeres",
        summary:
          "Manusia adalah makhluk sosial yang kesehatan biologisnya sangat dipengaruhi oleh kualitas hubungan sosialnya. Isolasi sosial dan kesepian kronis dikaitkan dengan telomer yang lebih pendek dan penuaan yang lebih cepat—efek yang sebanding dengan merokok. Sebaliknya, hubungan sosial yang hangat dan saling mendukung, rasa memiliki komunitas, dan kepercayaan terhadap orang lain dikaitkan dengan telomer yang lebih panjang. Ini adalah bukti biologis bahwa koneksi manusia bukan kemewahan—ia adalah kebutuhan kesehatan yang fundamental.",
      },
    ],
    actionableSteps: [
      {
        stepId: "B033-S1",
        task: "Mulai praktik mindfulness sederhana: 10 menit per hari selama 30 hari. Tidak perlu meditasi formal—bisa berupa berjalan tanpa ponsel sambil memperhatikan lingkungan sekitar, atau duduk diam memperhatikan napas. Konsistensi lebih penting dari durasi.",
      },
      {
        stepId: "B033-S2",
        task: "Identifikasi sumber stres kronis terbesar dalam hidup Anda. Apakah ini bisa dihilangkan? Dikurangi? Atau dipersepsikan ulang sebagai tantangan daripada ancaman? Tulis satu langkah konkret yang bisa Anda ambil minggu ini.",
      },
      {
        stepId: "B033-S3",
        task: "Evaluasi kualitas hubungan sosial Anda: apakah ada hubungan yang memberikan rasa aman, diterima, dan dipahami? Hubungi satu orang yang sudah lama tidak Anda ajak bicara secara mendalam hari ini.",
      },
      {
        stepId: "B033-S4",
        task: "Tambahkan 3 porsi ikan berlemak per minggu (salmon, sarden, mackerel) atau suplemen omega-3 berkualitas. Omega-3 adalah salah satu nutrisi dengan bukti terkuat untuk mendukung panjang telomer.",
      },
    ],
  },
];
// STATE
let currentBook = null;
let currentCategory = "Semua";
let searchQuery = "";
let debounceTimer = null;

// LOCALSTORAGE
function getBookmarks() {
  return JSON.parse(localStorage.getItem("rangkumin_bookmarks") || "[]");
}
function saveBookmarks(a) {
  localStorage.setItem("rangkumin_bookmarks", JSON.stringify(a));
}
function isBookmarked(id) {
  return getBookmarks().includes(id);
}
function toggleBookmark(id, e) {
  if (e) e.stopPropagation();
  const bm = getBookmarks(),
    idx = bm.indexOf(id);
  idx === -1 ? bm.push(id) : bm.splice(idx, 1);
  saveBookmarks(bm);
  updateBookmarkCount();
  return idx === -1;
}
function getActionState(id) {
  return JSON.parse(localStorage.getItem("rangkumin_actions_" + id) || "{}");
}
function saveActionState(id, s) {
  localStorage.setItem("rangkumin_actions_" + id, JSON.stringify(s));
}
function updateBookmarkCount() {
  document.getElementById("bookmarkCount").textContent = getBookmarks().length;
}

// VIEWS
function showHome() {
  document.getElementById("homeView").style.display = "";
  document.getElementById("detailView").style.display = "none";
  document.getElementById("bookmarkView").style.display = "none";
  document.getElementById("mainFooter").style.display = "";
  document.getElementById("stickyHeader").classList.remove("visible");
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderBooks();
}
function showBookmarks() {
  document.getElementById("homeView").style.display = "none";
  document.getElementById("detailView").style.display = "none";
  document.getElementById("bookmarkView").style.display = "";
  document.getElementById("mainFooter").style.display = "";
  window.scrollTo({ top: 0 });
  renderBookmarkGrid();
}
function showDetail(bookId) {
  const book = BOOKS.find(function (b) {
    return b.bookId === bookId;
  });
  if (!book) return;
  currentBook = book;
  document.getElementById("homeView").style.display = "none";
  document.getElementById("bookmarkView").style.display = "none";
  document.getElementById("detailView").style.display = "";
  document.getElementById("mainFooter").style.display = "";
  window.scrollTo({ top: 0 });
  populateDetail(book);
  resetTabs();
  updateDetailBookmarkBtn();
}

// RENDER
function getFilteredBooks() {
  return BOOKS.filter(function (b) {
    const mc = currentCategory === "Semua" || b.category === currentCategory;
    const q = searchQuery.toLowerCase();
    const ms =
      !q ||
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.tags.some(function (t) {
        return t.toLowerCase().includes(q);
      }) ||
      b.category.toLowerCase().includes(q);
    return mc && ms;
  });
}
function renderBooks() {
  const grid = document.getElementById("bookGrid");
  const empty = document.getElementById("emptyState");
  const info = document.getElementById("resultsInfo");
  const filtered = getFilteredBooks();
  info.textContent =
    searchQuery || currentCategory !== "Semua"
      ? filtered.length + " buku ditemukan"
      : BOOKS.length + " buku tersedia";
  if (!filtered.length) {
    grid.innerHTML = "";
    empty.style.display = "";
    return;
  }
  empty.style.display = "none";
  grid.innerHTML = filtered
    .map(function (b, i) {
      return buildCard(b, i);
    })
    .join("");
  updateBookmarkCount();
}
function buildCard(book, index) {
  const bm = isBookmarked(book.bookId);
  const svgF =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
  const svgE =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
  const bid = book.bookId;
  return (
    '<div class="book-card" style="animation-delay:' +
    index * 0.05 +
    's" onclick="showDetail(\'' +
    bid +
    "')\">" +
    '<div class="card-cover" style="' +
    book.coverStyle +
    'position:relative;overflow:hidden;">' +
    book.coverHTML +
    "</div>" +
    '<div class="card-body">' +
    '<div class="card-cat">' +
    book.category +
    "</div>" +
    '<div class="card-title">' +
    book.title +
    "</div>" +
    '<div class="card-author">' +
    book.author +
    "</div>" +
    "</div>" +
    '<div class="card-footer">' +
    '<span class="card-time">&#9201; ' +
    book.readingTimeMinutes +
    " menit</span>" +
    '<button class="card-bookmark ' +
    (bm ? "bookmarked" : "") +
    '" id="bm-' +
    bid +
    '" onclick="handleCardBookmark(\'' +
    bid +
    "',event)\">" +
    (bm ? svgF : svgE) +
    "</button>" +
    "</div>" +
    "</div>"
  );
}
function handleCardBookmark(id, e) {
  e.stopPropagation();
  const now = toggleBookmark(id);
  const btn = document.getElementById("bm-" + id);
  if (!btn) return;
  const svgF =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
  const svgE =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
  btn.innerHTML = now ? svgF : svgE;
  btn.classList.toggle("bookmarked", now);
}
function renderBookmarkGrid() {
  const bm = getBookmarks();
  const grid = document.getElementById("bookmarkGrid");
  const empty = document.getElementById("bookmarkEmpty");
  const books = BOOKS.filter(function (b) {
    return bm.includes(b.bookId);
  });
  if (!books.length) {
    grid.innerHTML = "";
    empty.style.display = "";
    return;
  }
  empty.style.display = "none";
  grid.innerHTML = books
    .map(function (b, i) {
      return buildCard(b, i);
    })
    .join("");
}

// FILTER / SEARCH
function filterCategory(btn) {
  currentCategory = btn.dataset.cat;
  document.querySelectorAll(".filter-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  btn.classList.add("active");
  renderBooks();
}
function handleSearch() {
  clearTimeout(debounceTimer);
  const val = document.getElementById("searchInput").value;
  document
    .getElementById("searchClear")
    .classList.toggle("visible", val.length > 0);
  debounceTimer = setTimeout(function () {
    searchQuery = val;
    renderBooks();
  }, 300);
}
function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchClear").classList.remove("visible");
  searchQuery = "";
  renderBooks();
}

// DETAIL
function populateDetail(book) {
  document.getElementById("stickyTitle").textContent = book.title;
  const cover = document.getElementById("detailCover");
  cover.setAttribute(
    "style",
    book.coverStyle + "position:relative;overflow:hidden;",
  );
  cover.innerHTML = book.coverHTML;
  document.getElementById("detailCategory").textContent = book.category;
  document.getElementById("detailTitle").textContent = book.title;
  document.getElementById("detailAuthor").textContent = book.author;
  document.getElementById("detailTime").textContent = book.readingTimeMinutes;
  document.getElementById("detailBigIdea").textContent =
    "\u201c" + book.bigIdea + "\u201d";
  document.getElementById("detailTags").innerHTML = book.tags
    .map(function (t) {
      return '<span class="tag-chip">#' + t + "</span>";
    })
    .join("");
  document.getElementById("analogyTitle").textContent = book.analogy.title;
  document.getElementById("analogyContent").textContent = book.analogy.content;

  // Chapters accordion
  const chapterHTML = book.chapters
    .map(function (ch) {
      return (
        '<div class="accordion-item" id="acc-' +
        ch.num +
        '">' +
        '<div class="accordion-header" onclick="toggleAccordion(' +
        ch.num +
        ')">' +
        '<div class="accordion-num">' +
        ch.num +
        "</div>" +
        '<div class="accordion-headline">Bab ' +
        ch.num +
        " \u2014 " +
        ch.title +
        "</div>" +
        '<div class="accordion-arrow">\u25bc</div>' +
        "</div>" +
        '<div class="accordion-body" id="accbody-' +
        ch.num +
        '"><p>' +
        ch.summary +
        "</p></div>" +
        "</div>"
      );
    })
    .join("");
  document.getElementById("takeawaysList").innerHTML = chapterHTML;

  // Actions
  const state = getActionState(book.bookId);
  const actHTML = book.actionableSteps
    .map(function (step) {
      const done = !!state[step.stepId];
      return (
        '<div class="action-item ' +
        (done ? "checked" : "") +
        '" id="act-' +
        step.stepId +
        '">' +
        '<div class="action-checkbox">' +
        '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        "</div>" +
        '<div class="action-text">' +
        step.task +
        "</div>" +
        "</div>"
      );
    })
    .join("");
  document.getElementById("actionsList").innerHTML = actHTML;

  // Add click handlers after render
  book.actionableSteps.forEach(function (step) {
    const el = document.getElementById("act-" + step.stepId);
    if (el)
      el.onclick = function () {
        toggleAction(book.bookId, step.stepId);
      };
  });

  document.getElementById("actionsTotalCount").textContent =
    book.actionableSteps.length;
  updateActionsProgress(book.bookId);
}

function resetTabs() {
  document.querySelectorAll(".tab-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  document.querySelectorAll(".tab-content").forEach(function (c) {
    c.classList.remove("active");
  });
  document.querySelector('[data-tab="analogy"]').classList.add("active");
  document.getElementById("tab-analogy").classList.add("active");
}
function switchTab(btn, tabId) {
  document.querySelectorAll(".tab-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  document.querySelectorAll(".tab-content").forEach(function (c) {
    c.classList.remove("active");
  });
  btn.classList.add("active");
  document.getElementById("tab-" + tabId).classList.add("active");
}
function toggleAccordion(num) {
  const item = document.getElementById("acc-" + num);
  const body = document.getElementById("accbody-" + num);
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".accordion-item").forEach(function (i) {
    i.classList.remove("open");
  });
  document.querySelectorAll(".accordion-body").forEach(function (b) {
    b.classList.remove("open");
  });
  if (!isOpen) {
    item.classList.add("open");
    body.classList.add("open");
  }
}
function toggleAction(bookId, stepId) {
  const state = getActionState(bookId);
  state[stepId] = !state[stepId];
  saveActionState(bookId, state);
  const el = document.getElementById("act-" + stepId);
  if (el) el.classList.toggle("checked", !!state[stepId]);
  updateActionsProgress(bookId);
}
function updateActionsProgress(bookId) {
  const book = BOOKS.find(function (b) {
    return b.bookId === bookId;
  });
  const state = getActionState(bookId);
  const done = book.actionableSteps.filter(function (s) {
    return state[s.stepId];
  }).length;
  document.getElementById("actionsDoneCount").textContent = done;
  document.getElementById("actionsTotalCount").textContent =
    book.actionableSteps.length;
  document.getElementById("completionBadge").style.display =
    done === book.actionableSteps.length && done > 0 ? "flex" : "none";
}
function updateDetailBookmarkBtn() {
  if (!currentBook) return;
  const bm = isBookmarked(currentBook.bookId);
  document.getElementById("detailBookmarkBtn").classList.toggle("active", bm);
  document.getElementById("detailBookmarkLabel").textContent = bm
    ? "Tersimpan"
    : "Simpan";
}
function toggleBookmarkDetail() {
  if (!currentBook) return;
  toggleBookmark(currentBook.bookId);
  updateDetailBookmarkBtn();
}
function scrollToContent() {
  document
    .getElementById("contentStart")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

// SCROLL
function handleScroll() {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 10);
  if (document.getElementById("detailView").style.display !== "none") {
    const container = document.querySelector(".detail-container");
    if (!container) return;
    document
      .getElementById("stickyHeader")
      .classList.toggle("visible", container.getBoundingClientRect().top < 0);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById("stickyProgressFill").style.width =
      (docH > 0 ? Math.round((window.scrollY / docH) * 100) : 0) + "%";
  }
}
window.addEventListener("scroll", handleScroll, { passive: true });

// INIT
document.addEventListener("DOMContentLoaded", function () {
  renderBooks();
  updateBookmarkCount();
});
