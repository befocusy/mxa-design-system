import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-sig{font-family:var(--font-body);display:grid;gap:36px;}
  .mxa-sig--two{grid-template-columns:1fr 1fr;}
  .mxa-sig__field{}
  .mxa-sig__line{border-bottom:1px solid var(--mxa-ink);height:34px;}
  .mxa-sig__label{font-size:12px;color:var(--mxa-stone);margin:8px 0 0;}
  .mxa-sig__name{font-family:var(--font-display);font-weight:700;color:var(--mxa-ink);font-size:15px;margin:0;}
  .mxa-sig__role{font-size:12px;color:var(--mxa-graphite);margin:2px 0 0;}
  .mxa-sig__mail{font-size:12px;color:var(--mxa-blue-deep);margin:2px 0 0;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'signatureblock');
  el.textContent = css;
  document.head.appendChild(el);
}

export function SignatureBlock({ signatory, fields = ['Por el Cliente', 'Aclaración'], className = '', ...rest }) {
  useStyles();
  const cls = ['mxa-sig', fields.length > 1 ? 'mxa-sig--two' : '', className].filter(Boolean).join(' ');
  return (
    <div {...rest}>
      {signatory && (
        <div style={{ marginBottom: '32px' }}>
          <p className="mxa-sig__name">{signatory.name}</p>
          {signatory.role && <p className="mxa-sig__role">{signatory.role}</p>}
          {signatory.email && <p className="mxa-sig__mail">{signatory.email}</p>}
        </div>
      )}
      <div className={cls}>
        {fields.map((f, i) => (
          <div className="mxa-sig__field" key={i}>
            <div className="mxa-sig__line" />
            <p className="mxa-sig__label">{f}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
