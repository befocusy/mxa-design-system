import React from 'react';

let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .mxa-table{width:100%;border-collapse:collapse;font-family:var(--font-body);font-size:14px;color:var(--mxa-charcoal);}
  .mxa-table thead th{font-family:var(--font-display);font-weight:700;font-size:11px;
    letter-spacing:.14em;text-transform:uppercase;color:var(--mxa-stone);
    text-align:left;padding:0 16px 10px;border-bottom:2px solid var(--mxa-ink);}
  .mxa-table tbody td{padding:14px 16px;border-bottom:1px solid var(--mxa-sand);vertical-align:top;line-height:1.5;}
  .mxa-table tbody tr:last-child td{border-bottom:0;}
  .mxa-table--zebra tbody tr:nth-child(even){background:var(--mxa-paper-2);}
  .mxa-table .mxa-table__num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;}
  .mxa-table .mxa-table__strong{font-family:var(--font-display);font-weight:700;color:var(--mxa-ink);}
  .mxa-table tfoot td{padding:14px 16px;border-top:2px solid var(--mxa-ink);
    font-family:var(--font-display);font-weight:700;color:var(--mxa-ink);}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-mxa', 'datatable');
  el.textContent = css;
  document.head.appendChild(el);
}

export function DataTable({ columns = [], rows = [], footer = null, zebra = false, className = '', ...rest }) {
  useStyles();
  const cls = ['mxa-table', zebra ? 'mxa-table--zebra' : '', className].filter(Boolean).join(' ');
  return (
    <table className={cls} {...rest}>
      <thead>
        <tr>{columns.map((c, i) => (
          <th key={i} style={c.align === 'right' ? { textAlign: 'right' } : undefined}>{c.label}</th>
        ))}</tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>
            {columns.map((c, ci) => {
              const v = r[c.key];
              const num = c.align === 'right';
              const strong = c.strong;
              return (
                <td key={ci} className={[num ? 'mxa-table__num' : '', strong ? 'mxa-table__strong' : ''].filter(Boolean).join(' ')}>
                  {v}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr>
            {footer.map((cell, i) => (
              <td key={i} className={columns[i] && columns[i].align === 'right' ? 'mxa-table__num' : ''} colSpan={cell && cell.colSpan}>
                {cell && cell.value !== undefined ? cell.value : cell}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
}
