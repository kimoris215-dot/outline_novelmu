<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novel Consult - Workspace Pribadiku</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              purple: '#6A38E5',
              purpleDark: '#4B1DBA',
              purpleLight: '#8B4DFF',
              green: '#B7F235',
              greenDark: '#64D14D',
              greenBg: '#E6F7BF',
              sidebarBg: '#1A0938'
            }
          },
          fontFamily: { sans: ['Inter', 'sans-serif'] }
        }
      }
    }
  </script>
</head>
<body class="bg-brand-greenBg/30 font-sans text-gray-800 flex h-screen overflow-hidden">

  <!-- SIDEBAR NAVIGASI -->
  <aside class="w-64 bg-brand-sidebarBg text-white flex flex-col justify-between p-4 shrink-0 overflow-y-auto">
    <div>
      <div class="flex items-center gap-3 px-2 py-3 mb-4">
        <div class="bg-brand-purple p-2 rounded-xl text-brand-green flex items-center justify-center shadow-lg">
          <span class="material-symbols-outlined text-2xl">edit_note</span>
        </div>
        <div>
          <h1 class="font-bold text-base tracking-wide leading-tight">NOVEL CONSULT</h1>
          <p class="text-[11px] text-purple-300">Workspace Pribadiku</p>
        </div>
      </div>

      <!-- Menu Navigasi Samping -->
      <nav class="space-y-1 text-sm font-medium">
        <button onclick="switchTab('beranda')" id="btn-beranda" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-brand-green text-gray-900 font-bold shadow-md">
          <span class="material-symbols-outlined">home</span> Beranda
        </button>
        <button onclick="switchTab('novelku')" id="btn-novelku" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">menu_book</span> Novelku
        </button>
        <button onclick="switchTab('planner')" id="btn-planner" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">account_tree</span> Story Planner
        </button>
        <button onclick="switchTab('character')" id="btn-character" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">badge</span> Character DB
        </button>
        <button onclick="switchTab('ideas')" id="btn-ideas" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">lightbulb</span> Idea Vault
        </button>
      </nav>
    </div>

    <!-- Profil Pengguna -->
    <div class="pt-4 border-t border-purple-900/60 flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <div id="user-avatar" class="w-9 h-9 rounded-full bg-brand-purple flex items-center justify-center font-bold text-white border-2 border-brand-green">
          ?
        </div>
        <div class="leading-tight">
          <p id="user-name-sidebar" class="font-bold text-xs text-white">Belum Ada Profil</p>
          <p class="text-[10px] text-purple-300">Penulis Novel</p>
        </div>
      </div>
      <button onclick="editProfile()" class="material-symbols-outlined text-purple-300 text-sm hover:text-white">edit</button>
    </div>
  </aside>

  <!-- KONTEN UTAMA -->
  <main class="flex-1 overflow-y-auto p-5 space-y-5">

    <!-- TAB BERANDA -->
    <div id="tab-beranda" class="space-y-5">
      <!-- Banner Sapaan -->
      <section class="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 rounded-2xl p-6 relative flex justify-between items-center border border-purple-200/60 shadow-sm">
        <div class="space-y-2 max-w-md">
          <h2 class="text-2xl font-bold text-gray-900">Halo, <span id="user-greeting">Penulis</span>! 👋</h2>
          <p class="text-xs text-gray-600">Mari kembangkan ceritamu hari ini.</p>
          <div class="bg-white/80 backdrop-blur-sm p-3 rounded-xl border-l-4 border-brand-purple text-[11px] italic text-gray-700">
            "Setiap kata yang kamu tulis adalah langkah menuju novel yang luar biasa." 💜
          </div>
        </div>
        
        <!-- Wadah Gambar Maskot Monstero -->
        <div class="w-36 h-36 flex items-center justify-center overflow-hidden">
          <img src="monstero.png" onerror="this.onerror=null; this.src='https://via.placeholder.com/150/6A38E5/FFFFFF?text=Monstero';" alt="Monstero" class="object-contain h-full">
        </div>
      </section>

      <!-- Grid Novel Aktif -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="lg:col-span-2 space-y-5">
          <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 class="font-bold text-sm text-gray-900 mb-3">Novel Aktif</h3>
            <div id="active-novel-container">
              <!-- Muncul dinamis via JavaScript -->
            </div>
          </div>
        </div>

        <!-- Ringkasan Hari Ini -->
        <div class="space-y-5">
          <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <h3 class="font-bold text-sm text-gray-900">Ringkasan Hari Ini</h3>
            <div class="grid grid-cols-2 gap-2.5">
              <div class="p-3 bg-purple-50/50 rounded-xl border border-purple-100 text-center">
                <p class="text-base font-bold text-brand-purple">0</p>
                <p class="text-[10px] text-gray-500">Kata Ditulis</p>
              </div>
              <div class="p-3 bg-purple-50/50 rounded-xl border border-purple-100 text-center">
                <p class="text-base font-bold text-brand-purple">0 Min</p>
                <p class="text-[10px] text-gray-500">Waktu Fokus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB NOVELKU -->
    <div id="tab-novelku" class="hidden bg-white p-6 rounded-2xl shadow-sm">
      <h2 class="text-xl font-bold mb-4">Daftar Novelku</h2>
      <button onclick="createNewNovel()" class="bg-brand-purple text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-brand-purpleDark transition mb-4">
        + Tambah Novel Baru
      </button>
      <div id="novel-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- List Novel -->
      </div>
    </div>

    <!-- TAB STORY PLANNER -->
    <div id="tab-planner" class="hidden bg-white p-6 rounded-2xl shadow-sm">
      <h2 class="text-xl font-bold mb-2">Story Planner</h2>
      <p class="text-xs text-gray-500">Rancang alur cerita, struktur babak (Act 1-3), dan plot twist novelmu di sini.</p>
    </div>

    <!-- TAB CHARACTER DB -->
    <div id="tab-character" class="hidden bg-white p-6 rounded-2xl shadow-sm">
      <h2 class="text-xl font-bold mb-2">Character Database</h2>
      <p class="text-xs text-gray-500">Kelola profil, sifat, serta hubungan antar tokoh dalam ceritamu.</p>
    </div>

    <!-- TAB IDEA VAULT -->
    <div id="tab-ideas" class="hidden bg-white p-6 rounded-2xl shadow-sm">
      <h2 class="text-xl font-bold mb-2">Idea Vault</h2>
      <p class="text-xs text-gray-500">Simpan cuplikan ide dialog, konflik mendadak, atau adegan menarik.</p>
    </div>

  </main>

  <script>
    // State Aplikasi
    let userData = JSON.parse(localStorage.getItem('novel_user')) || { name: '' };
    let novelsData = JSON.parse(localStorage.getItem('novel_list')) || [];

    function initApp() {
      // Inisialisasi Profil
      if (!userData.name) {
        let inputName = prompt("Masukkan nama pena/panggilanmu:", "Penulis");
        userData.name = inputName || "Penulis";
        localStorage.setItem('novel_user', JSON.stringify(userData));
      }
      updateUserUI();
      renderActiveNovel();
    }

    function updateUserUI() {
      document.getElementById('user-greeting').innerText = userData.name;
      document.getElementById('user-name-sidebar').innerText = userData.name;
      document.getElementById('user-avatar').innerText = userData.name.charAt(0).toUpperCase();
    }

    function editProfile() {
      let newName = prompt("Ubah nama profilmu:", userData.name);
      if (newName) {
        userData.name = newName;
        localStorage.setItem('novel_user', JSON.stringify(userData));
        updateUserUI();
      }
    }

    function renderActiveNovel() {
      const container = document.getElementById('active-novel-container');
      if (novelsData.length === 0) {
        container.innerHTML = `
          <div class="text-center py-6 border-2 border-dashed border-gray-200 rounded-xl space-y-3">
            <p class="text-xs text-gray-500">Belum ada novel yang ditambahkan.</p>
            <button onclick="createNewNovel()" class="bg-brand-purple text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-brand-purpleDark transition shadow-md">
              + Tambah Novel Baru
            </button>
          </div>
        `;
      } else {
        let active = novelsData[0];
        container.innerHTML = `
          <div class="flex gap-4 items-center">
            <div class="w-20 h-28 bg-gray-900 text-white font-bold text-xs flex items-center justify-center rounded-xl shadow-md shrink-0">
              ${active.title.toUpperCase()}
            </div>
            <div class="flex-1 space-y-1.5">
              <h4 class="font-bold text-base text-gray-900">${active.title}</h4>
              <p class="text-[11px] text-gray-500">${active.genre}</p>
              <div class="text-[11px] text-gray-600 flex gap-4 pt-1">
                <span>📑 ${active.chapters} Chapter</span>
                <span>📝 ${active.words} kata</span>
              </div>
            </div>
            <button class="bg-brand-purple text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-brand-purpleDark transition shadow-md">
              Lanjut Menulis →
            </button>
          </div>
        `;
      }
    }

    function createNewNovel() {
      let title = prompt("Masukkan Judul Novel:");
      if (title) {
        let genre = prompt("Masukkan Genre Novel (misal: Romance, Fantasy):", "General");
        novelsData.push({ title: title, genre: genre, chapters: 0, words: 0 });
        localStorage.setItem('novel_list', JSON.stringify(novelsData));
        renderActiveNovel();
      }
    }

    // Fungsi Switch Tab Menu
    function switchTab(tabName) {
      const tabs = ['beranda', 'novelku', 'planner', 'character', 'ideas'];
      tabs.forEach(t => {
        document.getElementById(`tab-${t}`).classList.add('hidden');
        document.getElementById(`btn-${t}`).classList.remove('bg-brand-green', 'text-gray-900', 'font-bold');
        document.getElementById(`btn-${t}`).classList.add('text-purple-200');
      });

      document.getElementById(`tab-${tabName}`).classList.remove('hidden');
      document.getElementById(`btn-${tabName}`).classList.add('bg-brand-green', 'text-gray-900', 'font-bold');
      document.getElementById(`btn-${tabName}`).classList.remove('text-purple-200');
    }

    // Jalankan saat halaman dibuka
    window.onload = initApp;
  </script>
</body>
</html>
