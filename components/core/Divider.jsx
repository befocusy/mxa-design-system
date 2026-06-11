import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-divider{border:0;background:var(--mxa-sand);}
  .mxa-divider--h{height:1px;width:100%;margin:var(--space-5) 0;}
  .mxa-divider--v{width:1px;align-self:stretch;margin:0 var(--space-5);}
  .mxa-divider--accent{background:var(--mxa-taupe);}
  .mxa-divider--strong{background:var(--mxa-ink);}
  .mxa-divider--h.mxa-divider--mark{height:2px;width:48px;margin:var(--space-3) 0 var(--space-5);}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'divider');
  el.textContent = css;
  document.head.appendChild(el);
}

export function Divider({
  orientation = 'horizontal',
  tone = 'hairline',
  mark = false,
  className = '',
  ...rest
}) {
  useStyles();
  const toneCls = tone === 'accent' ? 'mxa-divider--accent'
    : tone === 'strong' ? 'mxa-divider--strong' : '';
  const cls = ['mxa-divider', orientation === 'vertical' ? 'mxa-divider--v' : 'mxa-divider--h',
    toneCls, mark ? 'mxa-divider--mark' : '', className].filter(Boolean).join(' ');
  return <hr className={cls} {...rest} />;
}
