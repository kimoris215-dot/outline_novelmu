// LocalStorage Persistence Keys
const STORAGE_KEYS = {
  USER: 'novel_consult_user_v2',
  NOVELS: 'novel_consult_novels_v2',
  CHARACTERS: 'novel_consult_characters_v2'
};

// Data State
let userData = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || {
  name: 'Belum Ada Nama',
  email: 'email@domain.com',
  photo: ''
};

let novelsData = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOVELS)) || [];
let charactersData = JSON.parse(localStorage.getItem(STORAGE_KEYS.CHARACTERS)) || [];

// Inisialisasi Aplikasi Saat Refresh
function initApp() {
  updateUserUI();
  renderActiveNovel();
  renderNovelsList();
  renderCharactersList();
}

// Navigasi Tab Utama
function switchTab(tabName) {
  const tabs = ['beranda', 'novelku', 'chapter', 'planner', 'character', 'konsultasi', 'ideas', 'progress', 'settings'];
  
  tabs.forEach(t => {
    const tabEl = document.getElementById(`tab-${t}`);
    const btnEl = document.getElementById(`btn-${t}`);
    if (tabEl) tabEl.classList.add('hidden');
    if (btnEl) {
      btnEl.classList.remove('bg-[#C3F53C]', 'text-[#1E0B4B]', 'font-bold');
      btnEl.classList.add('text-purple-200');
    }
  });

  const activeTab = document.getElementById(`tab-${tabName}`);
  const activeBtn = document.getElementById(`btn-${tabName}`);
  
  if (activeTab) activeTab.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.classList.add('bg-[#C3F53C]', 'text-[#1E0B4B]', 'font-bold');
    activeBtn.classList.remove('text-purple-200');
  }
}

// Pembaca Gambar Galeri (Base64 DataURL)
function previewImage(input, previewId, placeholderTextId) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgEl = document.getElementById(previewId);
      const textEl = document.getElementById(placeholderTextId);
      if (imgEl) {
        imgEl.src = e.target.result;
        imgEl.classList.remove('hidden');
      }
      if (textEl) textEl.classList.add('hidden');
    };
    reader.readAsDataURL(file);
  }
}

// SIMPAN & UPDATE PROFIL
function openProfileModal() {
  document.getElementById('input-profile-name').value = userData.name !== 'Belum Ada Nama' ? userData.name : '';
  document.getElementById('input-profile-email').value = userData.email !== 'email@domain.com' ? userData.email : '';
  
  const previewImg = document.getElementById('modal-avatar-preview');
  const textEl = document.getElementById('modal-avatar-text');
  
  if (userData.photo) {
    previewImg.src = userData.photo;
    previewImg.classList.remove('hidden');
    textEl.classList.add('hidden');
  } else {
    previewImg.classList.add('hidden');
    textEl.classList.remove('hidden');
    textEl.innerText = userData.name ? userData.name.charAt(0).toUpperCase() : '?';
  }
  
  document.getElementById('modal-profile').classList.remove('hidden');
}

function closeProfileModal() {
  document.getElementById('modal-profile').classList.add('hidden');
}

function saveProfile() {
  const nameInput = document.getElementById('input-profile-name').value.trim();
  const emailInput = document.getElementById('input-profile-email').value.trim();
  const previewImg = document.getElementById('modal-avatar-preview');

  if (nameInput) userData.name = nameInput;
  if (emailInput) userData.email = emailInput;
  if (!previewImg.classList.contains('hidden') && previewImg.src) {
    userData.photo = previewImg.src;
  }

  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
  updateUserUI();
  closeProfileModal();
}

function updateUserUI() {
  document.getElementById('user-greeting').innerText = userData.name;
  document.getElementById('user-name-sidebar').innerText = userData.name;
  document.getElementById('user-email-sidebar').innerText = userData.email;
  document.getElementById('user-name-header').innerText = userData.name;
  document.getElementById('user-email-header').innerText = userData.email;

  const avatarTextSidebar = document.getElementById('user-avatar-text');
  const avatarImgSidebar = document.getElementById('user-avatar-img');
  const avatarTextHeader = document.getElementById('header-avatar-text');
  const avatarImgHeader = document.getElementById('header-avatar-img');

  const initial = userData.name ? userData.name.charAt(0).toUpperCase() : '?';

  if (userData.photo) {
    avatarImgSidebar.src = userData.photo;
    avatarImgSidebar.classList.remove('hidden');
    avatarTextSidebar.classList.add('hidden');

    avatarImgHeader.src = userData.photo;
    avatarImgHeader.classList.remove('hidden');
    avatarTextHeader.classList.add('hidden');
  } else {
    avatarImgSidebar.classList.add('hidden');
    avatarTextSidebar.classList.remove('hidden');
    avatarTextSidebar.innerText = initial;

    avatarImgHeader.classList.add('hidden');
    avatarTextHeader.classList.remove('hidden');
    avatarTextHeader.innerText = initial;
  }
}

// SIMPAN & UPDATE NOVEL
function openNovelModal() {
  document.getElementById('input-novel-title').value = '';
  document.getElementById('input-novel-genre').value = '';
  document.getElementById('input-novel-synopsis').value = '';
  document.getElementById('modal-cover-preview').classList.add('hidden');
  document.getElementById('modal-cover-text').classList.remove('hidden');
  document.getElementById('modal-novel').classList.remove('hidden');
}

function closeNovelModal() {
  document.getElementById('modal-novel').classList.add('hidden');
}

function saveNovel() {
  const title = document.getElementById('input-novel-title').value.trim();
  const genre = document.getElementById('input-novel-genre').value.trim();
  const synopsis = document.getElementById('input-novel-synopsis').value.trim();
  const coverPreview = document.getElementById('modal-cover-preview');

  if (!title) {
    alert("Harap masukkan judul novel.");
    return;
  }

  const newNovel = {
    id: Date.now(),
    title: title,
    genre: genre || 'General',
    synopsis: synopsis || 'Belum ada sinopsis.',
    cover: !coverPreview.classList.contains('hidden') ? coverPreview.src : '',
    chapters: 0,
    words: 0
  };

  novelsData.push(newNovel);
  localStorage.setItem(STORAGE_KEYS.NOVELS, JSON.stringify(novelsData));
  
  renderActiveNovel();
  renderNovelsList();
  closeNovelModal();
}

function renderActiveNovel() {
  const container = document.getElementById('active-novel-card');
  const countCountEl = document.getElementById('dash-total-novels-count');
  const progressBar = document.getElementById('dash-progress-bar');
  
  if (countCountEl) countCountEl.innerText = `${novelsData.length} Novel`;
  if (progressBar) progressBar.style.width = novelsData.length > 0 ? '100%' : '0%';

  if (novelsData.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 border-2 border-dashed border-purple-100 rounded-2xl space-y-3 bg-purple-50/30">
        <span class="material-symbols-outlined text-gray-300 text-4xl">auto_stories</span>
        <p class="text-xs text-gray-500 font-semibold">Belum ada novel yang dibuat. Silakan tambahkan karya pertamamu!</p>
        <button onclick="openNovelModal()" class="bg-[#1E0B4B] text-[#C3F53C] px-4 py-2 rounded-xl text-xs font-bold hover:bg-purple-900 transition shadow-sm inline-flex items-center gap-1">
          <span class="material-symbols-outlined text-sm">add</span> Tambah Novel Pertama
        </button>
      </div>
    `;
  } else {
    const active = novelsData[novelsData.length - 1]; // Menampilkan novel terbaru
    const coverHtml = active.cover 
      ? `<img src="${active.cover}" class="w-full h-full object-cover">`
      : `<div class="w-full h-full bg-[#1E0B4B] flex items-center justify-center font-extrabold text-white text-xs p-2 text-center">${active.title.toUpperCase()}</div>`;

    container.innerHTML = `
      <div class="flex flex-col md:flex-row gap-5 items-center">
        <div class="w-28 h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border border-gray-200">
          ${coverHtml}
        </div>
        <div class="flex-1 space-y-2">
          <h4 class="font-extrabold text-xl text-gray-900">${active.title}</h4>
          <p class="text-xs text-purple-600 font-bold">${active.genre}</p>
          <p class="text-xs text-gray-500 line-clamp-2">${active.synopsis}</p>
          <div class="flex items-center gap-4 text-xs font-semibold text-gray-600 pt-1">
            <span>📑 ${active.chapters} Chapter</span>
            <span>📝 ${active.words} Kata</span>
          </div>
        </div>
        <button onclick="switchTab('chapter')" class="bg-[#1E0B4B] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-purple-900 transition shadow-md flex items-center gap-1">
          Lanjut Menulis <span class="material-symbols-outlined text-xs">arrow_forward</span>
        </button>
      </div>
    `;
  }
}

function renderNovelsList() {
  const container = document.getElementById('novel-grid');
  if (!container) return;

  if (novelsData.length === 0) {
    container.innerHTML = `<p class="text-xs text-gray-400 font-semibold col-span-full text-center py-10">Belum ada novel tersimpan.</p>`;
    return;
  }

  container.innerHTML = novelsData.map(novel => {
    const coverHtml = novel.cover 
      ? `<img src="${novel.cover}" class="w-full h-44 object-cover rounded-2xl mb-3">`
      : `<div class="w-full h-44 bg-[#1E0B4B] rounded-2xl mb-3 flex items-center justify-center font-bold text-white text-sm p-4 text-center">${novel.title.toUpperCase()}</div>`;

    return `
      <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
        <div>
          ${coverHtml}
          <h4 class="font-extrabold text-base text-gray-900">${novel.title}</h4>
          <p class="text-[11px] font-bold text-purple-600 mb-2">${novel.genre}</p>
          <p class="text-xs text-gray-500 line-clamp-3 mb-4">${novel.synopsis}</p>
        </div>
        <div class="flex justify-between items-center pt-2 border-t border-gray-100">
          <span class="text-[11px] font-bold text-gray-400">${novel.chapters} Chapter</span>
          <button onclick="switchTab('chapter')" class="text-xs font-bold text-purple-700 hover:underline">Buka Novel →</button>
        </div>
      </div>
    `;
  }).join('');
}

// SIMPAN & UPDATE KARAKTER
function openCharacterModal() {
  document.getElementById('input-char-name').value = '';
  document.getElementById('input-char-role').value = '';
  document.getElementById('input-char-desc').value = '';
  document.getElementById('modal-char-preview').classList.add('hidden');
  document.getElementById('modal-char-text').classList.remove('hidden');
  document.getElementById('modal-character').classList.remove('hidden');
}

function closeCharacterModal() {
  document.getElementById('modal-character').classList.add('hidden');
}

function saveCharacter() {
  const name = document.getElementById('input-char-name').value.trim();
  const role = document.getElementById('input-char-role').value.trim();
  const desc = document.getElementById('input-char-desc').value.trim();
  const photoPreview = document.getElementById('modal-char-preview');

  if (!name) {
    alert("Harap masukkan nama karakter.");
    return;
  }

  const newChar = {
    id: Date.now(),
    name: name,
    role: role || 'Tokoh Pendukung',
    desc: desc || 'Belum ada deskripsi karakter.',
    photo: !photoPreview.classList.contains('hidden') ? photoPreview.src : ''
  };

  charactersData.push(newChar);
  localStorage.setItem(STORAGE_KEYS.CHARACTERS, JSON.stringify(charactersData));
  
  renderCharactersList();
  closeCharacterModal();
}

function renderCharactersList() {
  const container = document.getElementById('character-grid');
  if (!container) return;

  if (charactersData.length === 0) {
    container.innerHTML = `<p class="text-xs text-gray-400 font-semibold col-span-full text-center py-10">Belum ada karakter ditambahkan.</p>`;
    return;
  }

  container.innerHTML = charactersData.map(char => {
    const photoHtml = char.photo
      ? `<img src="${char.photo}" class="w-14 h-14 rounded-full object-cover border-2 border-purple-200 shrink-0">`
      : `<div class="w-14 h-14 rounded-full bg-purple-600 border-2 border-[#C3F53C] flex items-center justify-center font-bold text-white text-base shrink-0">${char.name.charAt(0).toUpperCase()}</div>`;

    return `
      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition">
        ${photoHtml}
        <div class="space-y-1 overflow-hidden">
          <h4 class="font-extrabold text-sm text-gray-900 truncate">${char.name}</h4>
          <p class="text-[11px] font-bold text-purple-600 truncate">${char.role}</p>
          <p class="text-xs text-gray-500 line-clamp-3">${char.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

window.onload = initApp;
