<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novel Consult</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- React & ReactDOM CDN -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

  <!-- Babel CDN untuk Transpile JSX -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background-color: #F6F4FC; color: #1F1147; margin: 0; }
    button { font-family: inherit; }
    input, textarea, select { font-family: inherit; outline: none; }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-thumb { background: #D9D2F0; border-radius: 8px; }
    .nc-navbtn:hover { background: rgba(255,255,255,0.08) !important; }
    .nc-clickable { cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; }
    .nc-clickable:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(31,17,71,0.08); }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect, useRef } = React;

    // URL Gambar Maskot
    const MASCOT_1 = "https://res.cloudinary.com/puw4ihad/image/upload/f_auto,q_auto/ChatGPT_Image_16_Agu_2026_18.18.17";
    const MASCOT_2 = "https://res.cloudinary.com/puw4ihad/image/upload/f_auto,q_auto/ChatGPT_Image_16_Agu_2026_18.20.22";

    // Helper LocalStorage
    const getStorage = (key, fallback) => {
      const saved = localStorage.getItem(key);
      if (!saved) return fallback;
      try { return JSON.parse(saved); } catch (e) { return fallback; }
    };
    const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

    /* ---------------------------------------------------------------
       UI PRIMITIVES
    ---------------------------------------------------------------- */
    function Card({ children, className = "", style = {}, onClick }) {
      return (
        <div
          className={`bg-white rounded-[18px] border border-[#ECE8F8] shadow-sm ${className}`}
          onClick={onClick}
          style={style}
        >
          {children}
        </div>
      );
    }

    function NovelCover({ novel, w = 110, h = 150 }) {
      if (novel && novel.coverUrl) {
        return (
          <img 
            src={novel.coverUrl} 
            alt={novel.title} 
            style={{ width: w, height: h, objectFit: 'cover', borderRadius: 12, flexShrink: 0 }}
          />
        );
      }
      return (
        <div style={{
          width: w, height: h, borderRadius: 12, flexShrink: 0,
          background: novel ? `linear-gradient(160deg, ${novel.coverFrom || '#3B1F6B'}, ${novel.coverTo || '#0F0620'})` : '#EDE9FB',
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
          boxShadow: "0 6px 16px rgba(31,17,71,0.25)",
        }}>
          <span style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#fff",
            fontSize: w < 90 ? 12 : 16, textAlign: "center", padding: "0 8px",
            letterSpacing: 1, textTransform: "uppercase",
          }}>
            {novel ? novel.title : "Kosong"}
          </span>
        </div>
      );
    }

    /* ---------------------------------------------------------------
       APP UTAMA
    ---------------------------------------------------------------- */
    function App() {
      const [activeTab, setActiveTab] = useState("beranda");
      
      // Persisted States
      const [userProfile, setUserProfile] = useState(() => getStorage("nc_profile", {
        name: "Pengguna Baru",
        role: "Penulis • Impian Besar",
        email: "pengguna@email.com",
        photo: null
      }));

      const [novels, setNovels] = useState(() => getStorage("nc_novels", []));
      const [activeNovelId, setActiveNovelId] = useState(() => getStorage("nc_active_novel", null));
      const [language, setLanguage] = useState(() => getStorage("nc_lang", "id"));

      // Profile Modal State
      const [isEditingProfile, setIsEditingProfile] = useState(false);
      const [editName, setEditName] = useState(userProfile.name);
      const [editRole, setEditRole] = useState(userProfile.role);
      const [editEmail, setEditEmail] = useState(userProfile.email);

      // Save to LocalStorage
      useEffect(() => setStorage("nc_profile", userProfile), [userProfile]);
      useEffect(() => setStorage("nc_novels", novels), [novels]);
      useEffect(() => setStorage("nc_active_novel", activeNovelId), [activeNovelId]);
      useEffect(() => setStorage("nc_lang", language), [language]);

      const activeNovel = novels.find(n => n.id === activeNovelId) || novels[0] || null;

      // Profile Photo Upload Handler
      const profileFileRef = useRef(null);
      const handleProfilePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setUserProfile(prev => ({ ...prev, photo: reader.result }));
          };
          reader.readAsDataURL(file);
        }
      };

      // Add New Novel Handler
      const [showAddNovelModal, setShowAddNovelModal] = useState(false);
      const [newTitle, setNewTitle] = useState("");
      const [newGenre, setNewGenre] = useState("");
      const [newCover, setNewCover] = useState(null);
      const novelFileRef = useRef(null);

      const handleNovelCoverUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => setNewCover(reader.result);
          reader.readAsDataURL(file);
        }
      };

      const handleAddNovel = (e) => {
        e.preventDefault();
        if (!newTitle.trim()) return;
        const newNovel = {
          id: "n_" + Date.now(),
          title: newTitle,
          genre: newGenre || "Umum",
          coverUrl: newCover,
          coverFrom: "#3B1F6B",
          coverTo: "#0F0620",
          chapters: 0,
          totalChapters: 20,
          words: 0,
          targetWords: 50000,
        };
        const updated = [...novels, newNovel];
        setNovels(updated);
        setActiveNovelId(newNovel.id);
        setNewTitle("");
        setNewGenre("");
        setNewCover(null);
        setShowAddNovelModal(false);
      };

      const saveProfile = (e) => {
        e.preventDefault();
        setUserProfile(prev => ({
          ...prev,
          name: editName,
          role: editRole,
          email: editEmail
        }));
        setIsEditingProfile(false);
      };

      return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#F6F4FC", color: "#1F1147" }}>
          
          {/* SIDEBAR */}
          <div style={{
            width: 250, background: "linear-gradient(180deg,#2A1B5C,#1B1140)", flexShrink: 0,
            display: "flex", flexDirection: "column", padding: "24px 16px", color: "#fff",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px 4px" }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins,sans-serif", fontWeight: 700,
              }}>N</div>
              <div>
                <div style={{ fontFamily: "Poppins,sans-serif", fontWeight: 700, fontSize: 15, lineHeight: 1.1 }}>NOVEL<br />CONSULT</div>
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#A99CD9", padding: "10px 8px 20px" }}>
              {language === "id" ? "Workspace Pribadiku" : "My Personal Workspace"}
            </div>

            {/* Menu Navigasi */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { key: "beranda", label: language === "id" ? "Beranda" : "Home" },
                { key: "novelku", label: language === "id" ? "Novelku" : "My Novels" },
                { key: "pengaturan", label: language === "id" ? "Pengaturan" : "Settings" }
              ].map(item => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
                    borderRadius: 10, border: "none", cursor: "pointer", textAlign: "left",
                    background: activeTab === item.key ? "#fff" : "transparent",
                    color: activeTab === item.key ? "#5B21B6" : "#D7CFEF",
                    fontWeight: activeTab === item.key ? 600 : 500, fontSize: 13.5,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Bagian Profil Sidebar */}
            <div style={{ marginTop: "auto", paddingTop: 20 }}>
              <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
                <img src={MASCOT_1} alt="Mascot" style={{ width: 90, height: 90, objectFit: "contain" }} />
              </div>
              
              <div 
                onClick={() => {
                  setEditName(userProfile.name);
                  setEditRole(userProfile.role);
                  setEditEmail(userProfile.email);
                  setIsEditingProfile(true);
                }}
                className="nc-clickable"
                style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: 10, marginTop: 8 }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", background: "#7C4DFF",
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 700
                }}>
                  {userProfile.photo ? (
                    <img src={userProfile.photo} alt="Profil" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : userProfile.name.charAt(0)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{userProfile.name}</div>
                  <div style={{ fontSize: 11, color: "#A99CD9", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{userProfile.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* AREA KONTEN UTAMA */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, padding: "28px" }}>
            
            {/* 1. BERANDA */}
            {activeTab === "beranda" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <Card style={{ padding: 28, background: "linear-gradient(120deg,#EDE7FB,#F6F4FC)", position: "relative", overflow: "hidden" }}>
                  <div style={{ maxWidth: 400 }}>
                    <h2 style={{ fontFamily: "Poppins,sans-serif", fontSize: 26, margin: "0 0 6px", color: "#1F1147" }}>
                      {language === "id" ? `Halo, ${userProfile.name}! 👋` : `Hello, ${userProfile.name}! 👋`}
                    </h2>
                    <p style={{ margin: "0 0 16px", color: "#5B4E7D", fontSize: 14 }}>
                      {language === "id" ? "Mari kembangkan ceritamu hari ini." : "Let's develop your story today."}
                    </p>
                  </div>
                  <img src={MASCOT_2} alt="Mascot 2" style={{ position: "absolute", right: 20, bottom: -10, width: 130 }} />
                </Card>

                {/* Status Novel Aktif */}
                <Card style={{ padding: 22 }}>
                  <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
                    {language === "id" ? "Novel Aktif" : "Active Novel"}
                  </h3>
                  {novels.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "20px 0", color: "#9691B0" }}>
                      <p style={{ margin: "0 0 12px" }}>
                        {language === "id" ? "Belum ada novel yang ditambahkan." : "No novels added yet."}
                      </p>
                      <button 
                        onClick={() => setShowAddNovelModal(true)}
                        style={{ background: "#7C4DFF", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontWeight: 600 }}
                      >
                        {language === "id" ? "+ Tambah Novel" : "+ Add Novel"}
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                      <NovelCover novel={activeNovel} />
                      <div>
                        <h4 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700 }}>{activeNovel?.title}</h4>
                        <p style={{ margin: "0 0 12px", color: "#6B7280", fontSize: 13 }}>{activeNovel?.genre}</p>
                        <button 
                          onClick={() => setActiveTab("novelku")}
                          style={{ background: "#F1EBFF", color: "#6D28D9", border: "none", padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 13 }}
                        >
                          {language === "id" ? "Kelola Novel" : "Manage Novel"}
                        </button>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            )}

            {/* 2. NOVELKU */}
            {activeTab === "novelku" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 22 }}>
                    {language === "id" ? "Daftar Novel" : "Novel List"}
                  </h2>
                  <button 
                    onClick={() => setShowAddNovelModal(true)}
                    style={{ background: "#7C4DFF", color: "#fff", border: "none", padding: "10px 18px", borderRadius: 10, cursor: "pointer", fontWeight: 600 }}
                  >
                    {language === "id" ? "+ Tambah Novel Baru" : "+ Add New Novel"}
                  </button>
                </div>

                {novels.length === 0 ? (
                  <Card style={{ padding: 40, textAlign: "center", color: "#9691B0" }}>
                    <p style={{ margin: 0 }}>
                      {language === "id" ? "Belum ada karya novel. Klik tombol di atas untuk membuat." : "No novels found. Click the button above to create one."}
                    </p>
                  </Card>
                ) : (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                    {novels.map(n => (
                      <Card key={n.id} style={{ padding: 16, display: "flex", gap: 14 }}>
                        <NovelCover novel={n} w={80} h={110} />
                        <div style={{ flex: 1 }}>
                          <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700 }}>{n.title}</h4>
                          <p style={{ margin: "0 0 8px", color: "#6B7280", fontSize: 12 }}>{n.genre}</p>
                          <span style={{ fontSize: 11, background: "#E9F9EC", color: "#1F9D4A", padding: "2px 8px", borderRadius: 99, fontWeight: 600 }}>
                            {n.chapters} Bab
                          </span>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. PENGATURAN */}
            {activeTab === "pengaturan" && (
              <div style={{ maxWidth: 600 }}>
                <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 20 }}>
                  {language === "id" ? "Pengaturan" : "Settings"}
                </h2>

                <Card style={{ padding: 20, marginBottom: 16 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
                    {language === "id" ? "Bahasa Aplikasi" : "Application Language"}
                  </h3>
                  <select 
                    value={language} 
                    onChange={e => setLanguage(e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: 10, border: "1px solid #ECE8F8", background: "#F9F8FD" }}
                  >
                    <option value="id">Bahasa Indonesia</option>
                    <option value="en">English</option>
                  </select>
                </Card>

                <Card style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
                    {language === "id" ? "Akun Pengguna" : "User Account"}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
                    <div><strong>Email:</strong> {userProfile.email}</div>
                    <div><strong>Nama:</strong> {userProfile.name}</div>
                    <button 
                      onClick={() => {
                        setEditName(userProfile.name);
                        setEditRole(userProfile.role);
                        setEditEmail(userProfile.email);
                        setIsEditingProfile(true);
                      }}
                      style={{ background: "#7C4DFF", color: "#fff", border: "none", padding: "8px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 600, marginTop: 10, width: "fit-content" }}
                    >
                      {language === "id" ? "Edit Profil & Akun" : "Edit Profile & Account"}
                    </button>
                  </div>
                </Card>
              </div>
            )}
          </div>

          {/* MODAL EDIT PROFIL */}
          {isEditingProfile && (
            <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
              <Card style={{ width: 400, padding: 24 }}>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 16 }}>
                  {language === "id" ? "Edit Profil" : "Edit Profile"}
                </h3>
                <form onSubmit={saveProfile} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ textAlign: "center", marginBottom: 10 }}>
                    <div 
                      onClick={() => profileFileRef.current.click()}
                      style={{ width: 70, height: 70, borderRadius: "50%", background: "#EDE9FB", margin: "0 auto 8px", cursor: "pointer", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
                    >
                      {userProfile.photo ? (
                        <img src={userProfile.photo} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <span style={{ color: "#7C4DFF", fontWeight: 700, fontSize: 20 }}>Pilih</span>
                      )}
                    </div>
                    <input type="file" ref={profileFileRef} onChange={handleProfilePhotoUpload} accept="image/*" style={{ display: "none" }} />
                    <span style={{ fontSize: 11, color: "#7C4DFF", cursor: "pointer" }} onClick={() => profileFileRef.current.click()}>
                      {language === "id" ? "Ganti Foto dari Galeri" : "Change Photo from Gallery"}
                    </span>
                  </div>

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Nama Pengguna</label>
                    <input value={editName} onChange={e => setEditName(e.target.value)} required style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #ECE8F8" }} />
                  </div>

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Role / Bio</label>
                    <input value={editRole} onChange={e => setEditRole(e.target.value)} style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #ECE8F8" }} />
                  </div>

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Email Akun</label>
                    <input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} required style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #ECE8F8" }} />
                  </div>

                  <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                    <button type="submit" style={{ flex: 1, background: "#7C4DFF", color: "#fff", border: "none", padding: 10, borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
                      Simpan
                    </button>
                    <button type="button" onClick={() => setIsEditingProfile(false)} style={{ flex: 1, background: "#F1F1F5", color: "#6B7280", border: "none", padding: 10, borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
                      Batal
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          )}

          {/* MODAL TAMBAH NOVEL */}
          {showAddNovelModal && (
            <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
              <Card style={{ width: 400, padding: 24 }}>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 16 }}>
                  {language === "id" ? "Tambah Novel Baru" : "Add New Novel"}
                </h3>
                <form onSubmit={handleAddNovel} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Judul Novel</label>
                    <input value={newTitle} onChange={e => setNewTitle(e.target.value)} required style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #ECE8F8" }} />
                  </div>

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Genre</label>
                    <input value={newGenre} onChange={e => setNewGenre(e.target.value)} placeholder="Contoh: Romance, Thriller" style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #ECE8F8" }} />
                  </div>

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Cover Novel (Galeri)</label>
                    <input type="file" ref={novelFileRef} onChange={handleNovelCoverUpload} accept="image/*" style={{ display: "none" }} />
                    <button 
                      type="button" 
                      onClick={() => novelFileRef.current.click()}
                      style={{ width: "100%", padding: 10, background: "#F1EBFF", color: "#6D28D9", border: "1px dashed #7C4DFF", borderRadius: 8, cursor: "pointer", fontWeight: 600 }}
                    >
                      {newCover ? "Cover Terpilih ✔" : "Pilih Sampul dari Galeri"}
                    </button>
                  </div>

                  <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                    <button type="submit" style={{ flex: 1, background: "#7C4DFF", color: "#fff", border: "none", padding: 10, borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
                      Tambah
                    </button>
                    <button type="button" onClick={() => setShowAddNovelModal(false)} style={{ flex: 1, background: "#F1F1F5", color: "#6B7280", border: "none", padding: 10, borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
                      Batal
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          )}

        </div>
      );
    }

    // Render ke DOM
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>
