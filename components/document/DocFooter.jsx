import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-docfooter{display:flex;align-items:center;gap:12px;flex-wrap:wrap;
    border-top:1px solid var(--mxa-sand);padding-top:12px;
    font-family:var(--font-body);font-size:11px;color:var(--mxa-stone);}
  .mxa-docfooter--ink{border-top-color:rgba(201,184,167,.30);color:var(--mxa-taupe);}
  .mxa-docfooter__site{font-weight:500;color:var(--mxa-charcoal);}
  .mxa-docfooter--ink .mxa-docfooter__site{color:var(--mxa-paper);}
  .mxa-docfooter__dot{width:3px;height:3px;border-radius:50%;background:var(--mxa-taupe);flex:none;}
  .mxa-docfooter__page{margin-left:auto;font-family:var(--font-mono);letter-spacing:.04em;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'docfooter');
  el.textContent = css;
  document.head.appendChild(el);
}

const PARTS = [
  'Bvr. Gral. Artigas 417 piso 7',
  'Punta Carretas',
  'Montevideo, Uruguay',
  '(+598) 2712 6550',
];

export function DocFooter({ site = 'mxa.com.uy', parts = PARTS, page, onInk = false, className = '', ...rest }) {
  useStyles();
  const cls = ['mxa-docfooter', onInk ? 'mxa-docfooter--ink' : '', className].filter(Boolean).join(' ');
  return (
    <footer className={cls} {...rest}>
      <span className="mxa-docfooter__site">{site}</span>
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          <span className="mxa-docfooter__dot" />
          <span>{p}</span>
        </React.Fragment>
      ))}
      {page != null && <span className="mxa-docfooter__page">{page}</span>}
    </footer>
  );
}
