export default function Header({ activeTab, setActiveTab, setModalType, theme, setTheme }) {
  return (
    <header style={{
      background: theme === 'dark' ? '#0d0e10' : '#ffffff',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      padding: '10px 20px',
      display: 'flex',
      justifySpace: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <a href="#" style={{ color: '#ff6b00', fontWeight: '900', fontSize: '1.4rem', textDecoration: 'none' }}>
        DRAMAVERSE
      </a>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setActiveTab('kdrama')} style={{ padding: '6px 12px', background: activeTab === 'kdrama' ? '#ff6b00' : 'transparent', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>K-Drama</button>
        <button onClick={() => setActiveTab('cdrama')} style={{ padding: '6px 12px', background: activeTab === 'cdrama' ? '#ff6b00' : 'transparent', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>C-Drama</button>
        <button onClick={() => setActiveTab('anime')} style={{ padding: '6px 12px', background: activeTab === 'anime' ? '#ff6b00' : 'transparent', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Anime</button>
        <button onClick={() => setModalType('request')} style={{ padding: '6px 12px', background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>📝 Request</button>
        <button onClick={() => setModalType('faq')} style={{ padding: '6px 12px', background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>💬 FAQ</button>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{ padding: '6px 12px', background: 'transparent', color: '#fff', border: '1px solid #444', borderRadius: '4px', cursor: 'pointer' }}>🎨 Theme</button>
      </div>
    </header>
  );
}
