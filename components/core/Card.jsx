import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-card{background:var(--surface-card);border:1px solid var(--mxa-sand);
    border-radius:var(--radius-md);padding:var(--space-5);
    transition:box-shadow var(--dur-base) var(--ease-standard),border-color var(--dur-base);}
  .mxa-card--flat{box-shadow:none;}
  .mxa-card--raised{box-shadow:var(--shadow-md);border-color:transparent;}
  .mxa-card--sunken{background:var(--mxa-paper-2);border-color:transparent;}
  .mxa-card--ink{background:var(--mxa-ink);border-color:transparent;color:var(--mxa-paper);}
  .mxa-card--accent-top{border-top:3px solid var(--mxa-taupe);}
  .mxa-card--hover:hover{box-shadow:var(--shadow-md);border-color:transparent;}
  .mxa-card__eyebrow{font-family:var(--font-display);font-weight:700;font-size:12px;
    letter-spacing:.16em;text-transform:uppercase;color:var(--mxa-taupe);margin:0 0 8px;}
  .mxa-card__title{font-family:var(--font-display);font-weight:700;font-size:20px;
    line-height:1.2;color:inherit;margin:0 0 6px;}
  .mxa-card__body{font-family:var(--font-body);font-size:14px;line-height:1.6;color:inherit;margin:0;opacity:.92;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'card');
  el.textContent = css;
  document.head.appendChild(el);
}

export function Card({
  children,
  variant = 'flat',
  accentTop = false,
  hover = false,
  eyebrow,
  title,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-card', `mxa-card--${variant}`, accentTop ? 'mxa-card--accent-top' : '',
    hover ? 'mxa-card--hover' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {eyebrow && <p className="mxa-card__eyebrow">{eyebrow}</p>}
      {title && <h3 className="mxa-card__title">{title}</h3>}
      {children && <div className="mxa-card__body">{children}</div>}
    </div>
  );
}
