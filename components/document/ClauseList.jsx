import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-clauses{font-family:var(--font-body);counter-reset:mxa-clause;list-style:none;margin:0;padding:0;}
  .mxa-clauses__item{display:flex;gap:14px;padding:0 0 16px;align-items:baseline;}
  .mxa-clauses__item:last-child{padding-bottom:0;}
  .mxa-clauses__n{font-family:var(--font-display);font-weight:700;color:var(--mxa-ink);
    font-size:15px;flex:none;min-width:26px;}
  .mxa-clauses__body{font-size:13.5px;line-height:1.7;color:var(--mxa-charcoal);margin:0;}
  .mxa-clauses__body strong{font-weight:500;color:var(--mxa-ink);}
  .mxa-clauses--bullet .mxa-clauses__n{color:var(--mxa-taupe);}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'clauselist');
  el.textContent = css;
  document.head.appendChild(el);
}

export function ClauseList({ items = [], marker = 'paren', start = 1, className = '', ...rest }) {
  useStyles();
  const cls = ['mxa-clauses', marker === 'bullet' ? 'mxa-clauses--bullet' : '', className].filter(Boolean).join(' ');
  const mark = (i) => {
    const n = start + i;
    if (marker === 'bullet') return '—';
    if (marker === 'dot') return `${n}.`;
    return `${n})`;
  };
  return (
    <ol className={cls} {...rest}>
      {items.map((it, i) => (
        <li className="mxa-clauses__item" key={i}>
          <span className="mxa-clauses__n">{mark(i)}</span>
          <p className="mxa-clauses__body">{it}</p>
        </li>
      ))}
    </ol>
  );
}
