import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-badge{font-family:var(--font-display);font-weight:500;font-size:11px;
    letter-spacing:.04em;display:inline-flex;align-items:center;gap:.4em;
    padding:4px 10px;border-radius:var(--radius-pill);line-height:1.2;
    border:1px solid transparent;white-space:nowrap;}
  .mxa-badge--neutral{background:var(--mxa-paper-2);color:var(--mxa-charcoal);border-color:var(--mxa-sand);}
  .mxa-badge--ink{background:var(--mxa-ink);color:var(--mxa-paper);}
  .mxa-badge--accent{background:var(--mxa-taupe);color:var(--mxa-ink);}
  .mxa-badge--success{background:rgba(92,124,88,.14);color:var(--mxa-success);border-color:rgba(92,124,88,.30);}
  .mxa-badge--danger{background:rgba(178,58,48,.10);color:var(--mxa-danger);border-color:rgba(178,58,48,.28);}
  .mxa-badge--blue{background:rgba(122,187,229,.16);color:var(--mxa-blue-deep);border-color:rgba(79,135,173,.30);}
  .mxa-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'badge');
  el.textContent = css;
  document.head.appendChild(el);
}

export function Badge({ children, variant = 'neutral', dot = false, className = '', ...rest }) {
  useStyles();
  const cls = ['mxa-badge', `mxa-badge--${variant}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="mxa-badge__dot" />}
      {children}
    </span>
  );
}
