// State & Data Utama
let userData = JSON.parse(localStorage.getItem('novel_user')) || { name: 'Nazari' };

function initApp() {
  updateUserUI();
}

function updateUserUI() {
  document.getElementById('user-greeting').innerText = userData.name;
  document.getElementById('user-name-sidebar').innerText = userData.name;
}

function editProfile() {
  let newName = prompt("Ubah nama profilmu:", userData.name);
  if (newName) {
    userData.name = newName;
    localStorage.setItem('novel_user', JSON.stringify(userData));
    updateUserUI();
  }
}

// Fitur Perpindahan Tab Samping Lengkap
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

window.onload = initApp;
