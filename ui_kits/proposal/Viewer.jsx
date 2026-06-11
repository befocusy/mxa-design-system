// MXA Proposal — interactive paged viewer chrome.
const { Button, IconButton } = window.MXADesignSystem_5dc0a4;

const PAGES = [
  { key: 'cover', label: 'Portada', Comp: window.CoverPage },
  { key: 'letter', label: 'Carta', Comp: window.LetterPage },
  { key: 'antecedentes', label: 'Antecedentes', Comp: window.AntecedentesPage },
  { key: 'alcance', label: 'Alcance', Comp: window.AlcancePage },
  { key: 'honorarios', label: 'Honorarios', Comp: window.HonorariosPage },
  { key: 'anexo', label: 'Anexo', Comp: window.AnexoPage },
];

const Chevron = ({ dir }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {dir === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
  </svg>
);
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);

function Viewer() {
  const [idx, setIdx] = React.useState(() => {
    const v = parseInt(localStorage.getItem('mxa-proposal-page') || '0', 10);
    return isNaN(v) ? 0 : Math.min(v, PAGES.length - 1);
  });
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);

  React.useEffect(() => { localStorage.setItem('mxa-proposal-page', String(idx)); }, [idx]);

  React.useEffect(() => {
    function fit() {
      const stage = stageRef.current;
      if (!stage) return;
      const availH = stage.clientHeight - 48;
      const availW = stage.clientWidth - 48;
      setScale(Math.min(availH / 1123, availW / 794, 1.1));
    }
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') setIdx(i => Math.min(i + 1, PAGES.length - 1));
      if (e.key === 'ArrowLeft') setIdx(i => Math.max(i - 1, 0));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const Cur = PAGES[idx].Comp;

  return (
    <div className="pv">
      <header className="pv-bar">
        <div className="pv-bar__brand">
          <img src="../../assets/logos/mxa-logo.svg" alt="mxa" />
          <span className="pv-bar__sep" />
          <span className="pv-bar__doc">Propuesta de servicios · Autodata S.R.L.</span>
        </div>
        <div className="pv-bar__actions">
          <Button variant="ghost" size="sm" iconLeft={<DownloadIcon />}>Descargar PDF</Button>
          <Button variant="primary" size="sm">Aceptar propuesta</Button>
        </div>
      </header>

      <div className="pv-main">
        <nav className="pv-rail" aria-label="Páginas">
          {PAGES.map((p, i) => (
            <button key={p.key} className={'pv-rail__item' + (i === idx ? ' is-active' : '')} onClick={() => setIdx(i)}>
              <span className="pv-rail__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="pv-rail__label">{p.label}</span>
            </button>
          ))}
        </nav>

        <div className="pv-stage" ref={stageRef}>
          <IconButton label="Anterior" variant="outline" className="pv-nav pv-nav--prev"
            onClick={() => setIdx(i => Math.max(i - 1, 0))} disabled={idx === 0}><Chevron dir="left" /></IconButton>

          <div className="pv-scaler" style={{ width: 794 * scale, height: 1123 * scale }}>
            <div className="pv-paper" style={{ transform: `scale(${scale})` }}>
              <Cur />
            </div>
          </div>

          <IconButton label="Siguiente" variant="outline" className="pv-nav pv-nav--next"
            onClick={() => setIdx(i => Math.min(i + 1, PAGES.length - 1))} disabled={idx === PAGES.length - 1}><Chevron dir="right" /></IconButton>
        </div>
      </div>

      <footer className="pv-foot">
        <span>{String(idx + 1).padStart(2, '0')} / {String(PAGES.length).padStart(2, '0')}</span>
        <span className="pv-foot__hint">Usá ← → para navegar</span>
      </footer>
    </div>
  );
}

window.Viewer = Viewer;
