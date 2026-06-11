import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-iconbtn{font-family:var(--font-body);cursor:pointer;display:inline-flex;
    align-items:center;justify-content:center;border:1px solid transparent;
    border-radius:var(--radius-sm);background:transparent;color:var(--mxa-charcoal);
    transition:background var(--dur-fast) var(--ease-standard),color var(--dur-fast),transform var(--dur-fast);}
  .mxa-iconbtn:hover{background:var(--mxa-paper-2);color:var(--mxa-ink);}
  .mxa-iconbtn:active{transform:translateY(1px);}
  .mxa-iconbtn:focus-visible{outline:2px solid var(--mxa-ink);outline-offset:2px;}
  .mxa-iconbtn--sm{width:30px;height:30px;}
  .mxa-iconbtn--md{width:38px;height:38px;}
  .mxa-iconbtn--lg{width:46px;height:46px;}
  .mxa-iconbtn--outline{border-color:var(--mxa-sand);}
  .mxa-iconbtn--solid{background:var(--mxa-ink);color:var(--mxa-paper);}
  .mxa-iconbtn--solid:hover{background:#161d26;color:var(--mxa-paper);}
  .mxa-iconbtn[disabled]{opacity:.4;pointer-events:none;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'iconbutton');
  el.textContent = css;
  document.head.appendChild(el);
}

export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-iconbtn', `mxa-iconbtn--${variant}`, `mxa-iconbtn--${size}`, className]
    .filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
