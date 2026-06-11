import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-btn{font-family:var(--font-display);font-weight:500;cursor:pointer;
    display:inline-flex;align-items:center;justify-content:center;gap:.5em;
    border:1px solid transparent;border-radius:var(--radius-sm);
    transition:background var(--dur-fast) var(--ease-standard),
      color var(--dur-fast) var(--ease-standard),
      border-color var(--dur-fast) var(--ease-standard),transform var(--dur-fast);
    text-decoration:none;white-space:nowrap;letter-spacing:.01em;line-height:1;}
  .mxa-btn:active{transform:translateY(1px);}
  .mxa-btn:focus-visible{outline:2px solid var(--mxa-ink);outline-offset:2px;}
  .mxa-btn--sm{font-size:13px;padding:8px 14px;}
  .mxa-btn--md{font-size:14px;padding:11px 20px;}
  .mxa-btn--lg{font-size:16px;padding:14px 28px;}
  /* primary: ink */
  .mxa-btn--primary{background:var(--mxa-ink);color:var(--mxa-paper);}
  .mxa-btn--primary:hover{background:#161d26;}
  /* secondary: outline ink */
  .mxa-btn--secondary{background:transparent;color:var(--mxa-ink);border-color:var(--mxa-ink);}
  .mxa-btn--secondary:hover{background:var(--mxa-ink);color:var(--mxa-paper);}
  /* ghost: quiet, taupe fill on hover */
  .mxa-btn--ghost{background:transparent;color:var(--mxa-charcoal);}
  .mxa-btn--ghost:hover{background:var(--mxa-paper-2);}
  /* accent: taupe */
  .mxa-btn--accent{background:var(--mxa-taupe);color:var(--mxa-ink);}
  .mxa-btn--accent:hover{background:#bca791;}
  .mxa-btn[disabled],.mxa-btn[aria-disabled="true"]{opacity:.4;pointer-events:none;}
  .mxa-btn--block{width:100%;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'button');
  el.textContent = css;
  document.head.appendChild(el);
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = [
    'mxa-btn',
    `mxa-btn--${variant}`,
    `mxa-btn--${size}`,
    block ? 'mxa-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined} {...rest}>
      {iconLeft}
      {children && <span>{children}</span>}
      {iconRight}
    </Tag>
  );
}
