// State & Manajemen Data Utama
let userData = JSON.parse(localStorage.getItem('novel_user')) || { name: '' };
let novelsData = JSON.parse(localStorage.getItem('novel_list')) || [];

// Inisialisasi Aplikasi saat Pertama Kali Dimuat
function initApp() {
  if (!userData.name) {
    let inputName = prompt("Masukkan nama pena/panggilanmu:", "Penulis");
    userData.name = inputName || "Penulis";
    localStorage.setItem('novel_user', JSON.stringify(userData));
  }
  updateUserUI();
  renderActiveNovel();
}

// Pembaruan UI Profil Pengguna
function updateUserUI() {
  document.getElementById('user-greeting').innerText = userData.name;
  document.getElementById('user-name-sidebar').innerText = userData.name;
  document.getElementById('user-avatar').innerText = userData.name.charAt(0).toUpperCase();
}

// Edit Nama Profil
function editProfile() {
  let newName = prompt("Ubah nama profilmu:", userData.name);
  if (newName) {
    userData.name = newName;
    localStorage.setItem('novel_user', JSON.stringify(userData));
    updateUserUI();
  }
}

// Menampilkan Data Novel Aktif di Beranda
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

// Membuat Novel Baru
function createNewNovel() {
  let title = prompt("Masukkan Judul Novel:");
  if (title) {
    let genre = prompt("Masukkan Genre Novel (misal: Romance, Fantasy):", "General");
    novelsData.push({ title: title, genre: genre, chapters: 0, words: 0 });
    localStorage.setItem('novel_list', JSON.stringify(novelsData));
    renderActiveNovel();
  }
}

// Navigasi Antar Tab Samping
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

// Event Listener Otomatis Jalankan Inisialisasi
window.onload = initApp;
