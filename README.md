<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novel Consult - Workspace Pribadiku</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Font & Google Material Icons -->
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
              bgLight: '#F6F7FB',
              sidebarBg: '#1A0938'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
</head>
<body class="bg-brand-bgLight font-sans text-gray-800 flex h-screen overflow-hidden">

  <!-- 1. SIDEBAR NAVIGASI KIRI -->
  <aside class="w-64 bg-brand-sidebarBg text-white flex flex-col justify-between p-4 shrink-0 overflow-y-auto">
    <div>
      <!-- Header Brand -->
      <div class="flex items-center gap-3 px-2 py-3 mb-4">
        <div class="bg-brand-purple p-2 rounded-xl text-brand-green flex items-center justify-center shadow-lg">
          <span class="material-symbols-outlined text-2xl">edit_note</span>
        </div>
        <div>
          <h1 class="font-bold text-base tracking-wide leading-tight">NOVEL CONSULT</h1>
          <p class="text-[11px] text-purple-300">Workspace Pribadiku</p>
        </div>
      </div>

      <!-- Navigasi Menu Utama -->
      <nav class="space-y-1 text-sm font-medium">
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-brand-green text-gray-900 font-bold shadow-md">
          <span class="material-symbols-outlined">home</span> Beranda
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">menu_book</span> Novelku
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">view_kanban</span> Chapter Manager
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">account_tree</span> Story Planner
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">badge</span> Character Database
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">chat_bubble</span> Catatan Konsultasi
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">lightbulb</span> Idea Vault
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">insights</span> Writing Progress
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition">
          <span class="material-symbols-outlined">settings</span> Pengaturan
        </a>
      </nav>
    </div>

    <!-- Profil Pengguna -->
    <div class="pt-4 border-t border-purple-900/60 flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-full bg-brand-purple flex items-center justify-center font-bold text-white border-2 border-brand-green">
          N
        </div>
        <div class="leading-tight">
          <p class="font-bold text-xs text-white">Nazari</p>
          <p class="text-[10px] text-purple-300">Penulis • Dreamer</p>
        </div>
      </div>
      <span class="material-symbols-outlined text-purple-300 text-sm cursor-pointer">expand_more</span>
    </div>
  </aside>

  <!-- 2. KONTEN UTAMA (DASHBOARD) -->
  <main class="flex-1 overflow-y-auto p-5 space-y-5">

    <!-- Top Navigation / Search Bar -->
    <header class="flex justify-between items-center bg-white p-3.5 px-5 rounded-2xl shadow-sm border border-gray-100">
      <div class="relative w-1/3">
        <span class="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-sm">search</span>
        <input type="text" placeholder="Cari di Novel Consult..." class="w-full pl-9 pr-4 py-1.5 rounded-xl bg-gray-100 text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple">
      </div>
      <div class="flex items-center gap-3">
        <button class="relative p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
          <span class="material-symbols-outlined text-gray-600 text-lg">notifications</span>
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>

    <!-- Banner Menyapa Penulis -->
    <section class="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 rounded-2xl p-6 relative flex justify-between items-center border border-purple-200/60 shadow-sm">
      <div class="space-y-2 max-w-md">
        <h2 class="text-2xl font-bold text-gray-900">Halo, Nazari! 👋</h2>
        <p class="text-xs text-gray-600">Mari kembangkan ceritamu hari ini.</p>
        <div class="bg-white/80 backdrop-blur-sm p-3 rounded-xl border-l-4 border-brand-purple text-[11px] italic text-gray-700 mt-2">
          "Setiap kata yang kamu tulis adalah langkah menuju novelnya yang luar biasa." 💜
        </div>
      </div>
      <!-- Placeholder Ilustrasi Monstero -->
      <div class="w-40 h-28 bg-purple-200/50 rounded-2xl border-2 border-dashed border-brand-purple/40 flex flex-col items-center justify-center text-center p-2 text-brand-purple text-[11px]">
        <span class="material-symbols-outlined text-2xl mb-1">image</span>
        <span>Maskot Monstero</span>
      </div>
    </section>

    <!-- Grid Layout Utama: 3 Kolom -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

      <!-- KOLOM KIRI & TENGAH (2 Kolom) -->
      <div class="lg:col-span-2 space-y-5">

        <!-- Card: Novel Aktif -->
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-bold text-sm text-gray-900">Novel Aktif</h3>
            <a href="#" class="text-[11px] font-semibold text-brand-purple hover:underline">Lihat Semua Novel</a>
          </div>
          <div class="flex gap-4 items-center">
            <div class="w-20 h-28 bg-gray-900 text-white font-bold text-xs flex items-center justify-center rounded-xl shadow-md shrink-0">
              MADONA
            </div>
            <div class="flex-1 space-y-1.5">
              <h4 class="font-bold text-base text-gray-900">Madona</h4>
              <p class="text-[11px] text-gray-500">Romance • Thriller</p>
              <div class="text-[11px] text-gray-600 flex gap-4 pt-1">
                <span>📑 12 / 30 Chapter</span>
                <span>📝 42.500 / 80.000 kata</span>
              </div>
              <div class="w-full bg-gray-100 rounded-full h-2 mt-2">
                <div class="bg-brand-purple h-2 rounded-full" style="width: 40%"></div>
              </div>
            </div>
            <button class="bg-brand-purple text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-brand-purpleDark transition shadow-md shrink-0">
              Lanjut Menulis →
            </button>
          </div>
        </div>

        <!-- Card: Quick Access -->
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <h3 class="font-bold text-sm text-gray-900 mb-3">Quick Access</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div class="p-3 rounded-xl bg-purple-50/60 border border-purple-100 cursor-pointer hover:bg-purple-100/60 transition flex items-center gap-3">
              <span class="material-symbols-outlined text-brand-purple">edit</span>
              <div>
                <p class="font-bold text-xs">Tulis Novel</p>
                <p class="text-[10px] text-gray-500">Mulai chapter baru</p>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-purple-50/60 border border-purple-100 cursor-pointer hover:bg-purple-100/60 transition flex items-center gap-3">
              <span class="material-symbols-outlined text-brand-purple">account_tree</span>
              <div>
                <p class="font-bold text-xs">Story Planner</p>
                <p class="text-[10px] text-gray-500">Atur alur & plot</p>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-purple-50/60 border border-purple-100 cursor-pointer hover:bg-purple-100/60 transition flex items-center gap-3">
              <span class="material-symbols-outlined text-brand-purple">badge</span>
              <div>
                <p class="font-bold text-xs">Character DB</p>
                <p class="text-[10px] text-gray-500">Kelola karakter</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- KOLOM KANAN (1 Kolom) -->
      <div class="space-y-5">

        <!-- Card: Ringkasan Hari Ini -->
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-3">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-sm text-gray-900">Ringkasan Hari Ini</h3>
            <a href="#" class="text-[11px] text-brand-purple font-medium">Lihat Semua</a>
          </div>
          <div class="grid grid-cols-2 gap-2.5">
            <div class="p-3 bg-purple-50/50 rounded-xl border border-purple-100">
              <p class="text-base font-bold text-brand-purple">1.250</p>
              <p class="text-[10px] text-gray-500">Kata ditulis hari ini</p>
            </div>
            <div class="p-3 bg-purple-50/50 rounded-xl border border-purple-100">
              <p class="text-base font-bold text-brand-purple">45 Min</p>
              <p class="text-[10px] text-gray-500">Menit menulis fokus</p>
            </div>
          </div>
        </div>

        <!-- Card: Konsultasi Terakhir -->
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
          <h3 class="font-bold text-sm text-gray-900">Konsultasi Terakhir</h3>
          <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
            <p class="font-bold text-xs text-amber-900">⚠️ Perkuat konflik utama</p>
            <p class="text-[10px] text-amber-800">Konflik terlalu cepat selesai. Perlu ketegangan dan transisi yang lebih kuat.</p>
          </div>
        </div>

      </div>

    </div>

  </main>

</body>
</html>
