import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-seclabel{display:block;}
  .mxa-seclabel__eyebrow{font-family:var(--font-display);font-weight:700;
    text-transform:uppercase;letter-spacing:.16em;color:var(--mxa-taupe);
    font-size:15px;margin:0;line-height:1.2;}
  .mxa-seclabel__mark{height:2px;width:48px;background:var(--mxa-taupe);
    border:0;margin:10px 0 0;}
  .mxa-seclabel--ink .mxa-seclabel__eyebrow{color:var(--mxa-taupe);}
  .mxa-seclabel__title{font-family:var(--font-display);font-weight:700;
    color:var(--mxa-ink);font-size:28px;line-height:1.12;letter-spacing:-.01em;margin:14px 0 0;}
  .mxa-seclabel--ink .mxa-seclabel__title{color:var(--mxa-paper);}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'sectionlabel');
  el.textContent = css;
  document.head.appendChild(el);
}

export function SectionLabel({ eyebrow, title, mark = true, onInk = false, className = '', ...rest }) {
  useStyles();
  const cls = ['mxa-seclabel', onInk ? 'mxa-seclabel--ink' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {eyebrow && <p className="mxa-seclabel__eyebrow">{eyebrow}</p>}
      {mark && <hr className="mxa-seclabel__mark" />}
      {title && <h2 className="mxa-seclabel__title">{title}</h2>}
    </div>
  );
}
