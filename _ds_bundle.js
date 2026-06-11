/* @ds-bundle: {"format":3,"namespace":"MXADesignSystem_5dc0a4","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ClauseList","sourcePath":"components/document/ClauseList.jsx"},{"name":"DataTable","sourcePath":"components/document/DataTable.jsx"},{"name":"DocFooter","sourcePath":"components/document/DocFooter.jsx"},{"name":"SectionLabel","sourcePath":"components/document/SectionLabel.jsx"},{"name":"SignatureBlock","sourcePath":"components/document/SignatureBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"4c7255490056","components/core/Button.jsx":"9fa6d7a18c63","components/core/Card.jsx":"c1cff96b1a40","components/core/Divider.jsx":"4c76c3fb198f","components/core/IconButton.jsx":"ed4ad9d10b26","components/document/ClauseList.jsx":"9f405f518cb7","components/document/DataTable.jsx":"0fa76b8d24ff","components/document/DocFooter.jsx":"15a53f7d7af8","components/document/SectionLabel.jsx":"efd7e165a103","components/document/SignatureBlock.jsx":"e5546c6c5186","ui_kits/proposal/Pages.jsx":"7a2de46cb1f4","ui_kits/proposal/Viewer.jsx":"3e21416e41cd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MXADesignSystem_5dc0a4 = window.MXADesignSystem_5dc0a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-badge', `mxa-badge--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "mxa-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ['mxa-btn', `mxa-btn--${variant}`, `mxa-btn--${size}`, block ? 'mxa-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest), iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
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
  const cls = ['mxa-card', `mxa-card--${variant}`, accentTop ? 'mxa-card--accent-top' : '', hover ? 'mxa-card--hover' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "mxa-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "mxa-card__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "mxa-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Divider({
  orientation = 'horizontal',
  tone = 'hairline',
  mark = false,
  className = '',
  ...rest
}) {
  useStyles();
  const toneCls = tone === 'accent' ? 'mxa-divider--accent' : tone === 'strong' ? 'mxa-divider--strong' : '';
  const cls = ['mxa-divider', orientation === 'vertical' ? 'mxa-divider--v' : 'mxa-divider--h', toneCls, mark ? 'mxa-divider--mark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-iconbtn', `mxa-iconbtn--${variant}`, `mxa-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/document/ClauseList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ClauseList({
  items = [],
  marker = 'paren',
  start = 1,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-clauses', marker === 'bullet' ? 'mxa-clauses--bullet' : '', className].filter(Boolean).join(' ');
  const mark = i => {
    const n = start + i;
    if (marker === 'bullet') return '—';
    if (marker === 'dot') return `${n}.`;
    return `${n})`;
  };
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: cls
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    className: "mxa-clauses__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mxa-clauses__n"
  }, mark(i)), /*#__PURE__*/React.createElement("p", {
    className: "mxa-clauses__body"
  }, it))));
}
Object.assign(__ds_scope, { ClauseList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ClauseList.jsx", error: String((e && e.message) || e) }); }

// components/document/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function DataTable({
  columns = [],
  rows = [],
  footer = null,
  zebra = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-table', zebra ? 'mxa-table--zebra' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("table", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: c.align === 'right' ? {
      textAlign: 'right'
    } : undefined
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, columns.map((c, ci) => {
    const v = r[c.key];
    const num = c.align === 'right';
    const strong = c.strong;
    return /*#__PURE__*/React.createElement("td", {
      key: ci,
      className: [num ? 'mxa-table__num' : '', strong ? 'mxa-table__strong' : ''].filter(Boolean).join(' ')
    }, v);
  })))), footer && /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, footer.map((cell, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    className: columns[i] && columns[i].align === 'right' ? 'mxa-table__num' : '',
    colSpan: cell && cell.colSpan
  }, cell && cell.value !== undefined ? cell.value : cell)))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/document/DocFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const PARTS = ['Bvr. Gral. Artigas 417 piso 7', 'Punta Carretas', 'Montevideo, Uruguay', '(+598) 2712 6550'];
function DocFooter({
  site = 'mxa.com.uy',
  parts = PARTS,
  page,
  onInk = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-docfooter', onInk ? 'mxa-docfooter--ink' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "mxa-docfooter__site"
  }, site), parts.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mxa-docfooter__dot"
  }), /*#__PURE__*/React.createElement("span", null, p))), page != null && /*#__PURE__*/React.createElement("span", {
    className: "mxa-docfooter__page"
  }, page));
}
Object.assign(__ds_scope, { DocFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DocFooter.jsx", error: String((e && e.message) || e) }); }

// components/document/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SectionLabel({
  eyebrow,
  title,
  mark = true,
  onInk = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-seclabel', onInk ? 'mxa-seclabel--ink' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "mxa-seclabel__eyebrow"
  }, eyebrow), mark && /*#__PURE__*/React.createElement("hr", {
    className: "mxa-seclabel__mark"
  }), title && /*#__PURE__*/React.createElement("h2", {
    className: "mxa-seclabel__title"
  }, title));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/document/SignatureBlock.jsx
try { (() => {
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
function SignatureBlock({
  signatory,
  fields = ['Por el Cliente', 'Aclaración'],
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['mxa-sig', fields.length > 1 ? 'mxa-sig--two' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", rest, signatory && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "mxa-sig__name"
  }, signatory.name), signatory.role && /*#__PURE__*/React.createElement("p", {
    className: "mxa-sig__role"
  }, signatory.role), signatory.email && /*#__PURE__*/React.createElement("p", {
    className: "mxa-sig__mail"
  }, signatory.email)), /*#__PURE__*/React.createElement("div", {
    className: cls
  }, fields.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "mxa-sig__field",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "mxa-sig__line"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mxa-sig__label"
  }, f)))));
}
Object.assign(__ds_scope, { SignatureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/SignatureBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposal/Pages.jsx
try { (() => {
// MXA Proposal — page components. Each renders one A4 page (794×1123).
const {
  SectionLabel,
  DataTable,
  ClauseList,
  SignatureBlock,
  DocFooter,
  Card,
  Badge,
  Divider
} = window.MXADesignSystem_5dc0a4;
const ASSETS = '../../assets';
function PageShell({
  children,
  page,
  ink,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'pp-page' + (ink ? ' pp-page--ink' : ''),
    "data-screen-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "pp-page__body"
  }, children), /*#__PURE__*/React.createElement(DocFooter, {
    page: page,
    onInk: ink
  }));
}
function PageHeaderMark({
  ink
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pp-head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "pp-head__logo",
    src: ASSETS + '/logos/' + (ink ? 'mxa-logo-white.svg' : 'mxa-logo.svg'),
    alt: "mxa"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pp-head__tag"
  }, "Tax \xB7 Accounting \xB7 Legal \xB7 Notary"));
}

/* 1 — COVER */
function CoverPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pp-page pp-page--ink pp-cover",
    "data-screen-label": "Cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pp-cover__top"
  }, /*#__PURE__*/React.createElement("img", {
    className: "pp-cover__logo",
    src: ASSETS + '/logos/mxa-logo-white.svg',
    alt: "mxa"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pp-cover__tag"
  }, "Tax \xB7 Accounting \xB7 Legal \xB7 Notary")), /*#__PURE__*/React.createElement("div", {
    className: "pp-cover__mid"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pp-cover__eyebrow"
  }, "Mayo 2026"), /*#__PURE__*/React.createElement("h1", {
    className: "pp-cover__title"
  }, "Propuesta", /*#__PURE__*/React.createElement("br", null), "de servicios"), /*#__PURE__*/React.createElement("p", {
    className: "pp-cover__client"
  }, "Para: Autodata S.R.L.")), /*#__PURE__*/React.createElement("img", {
    className: "pp-cover__globe",
    src: ASSETS + '/brand/globe-motif.png',
    alt: ""
  }), /*#__PURE__*/React.createElement(DocFooter, {
    onInk: true
  }));
}

/* 2 — LETTER */
function LetterPage() {
  return /*#__PURE__*/React.createElement(PageShell, {
    page: "02 / 10",
    label: "Carta de presentaci\xF3n"
  }, /*#__PURE__*/React.createElement(PageHeaderMark, null), /*#__PURE__*/React.createElement("div", {
    className: "pp-letter-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Para"), /*#__PURE__*/React.createElement("b", null, "Autodata S.R.L.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Ref."), /*#__PURE__*/React.createElement("b", null, "Servicios de consultor\xEDa")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Fecha"), /*#__PURE__*/React.createElement("b", null, "Montevideo, mayo de 2026"))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("p", {
    className: "pp-lead"
  }, "Estimados,"), /*#__PURE__*/React.createElement("p", {
    className: "pp-body"
  }, "De acuerdo con lo convenido, tenemos el agrado de dirigirnos a usted a efectos de hacerle llegar la presente propuesta de servicios profesionales."), /*#__PURE__*/React.createElement("p", {
    className: "pp-body"
  }, "MXA agradece la confianza depositada en nuestro equipo, y espera que la presente propuesta de servicios merezca su aprobaci\xF3n. Quedamos a vuestra disposici\xF3n para cualquier aclaraci\xF3n o informaci\xF3n que consideren necesaria."), /*#__PURE__*/React.createElement("p", {
    className: "pp-body"
  }, "Saluda a usted muy atentamente,"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '36px'
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, {
    signatory: {
      name: 'Nicolás May',
      role: 'MXA — Socio',
      email: 'nmay@mxa.com.uy'
    }
  })));
}

/* 3 — ANTECEDENTES */
function AntecedentesPage() {
  return /*#__PURE__*/React.createElement(PageShell, {
    page: "03 / 10",
    label: "Antecedentes"
  }, /*#__PURE__*/React.createElement(PageHeaderMark, null), /*#__PURE__*/React.createElement(SectionLabel, {
    eyebrow: "Antecedentes"
  }), /*#__PURE__*/React.createElement("p", {
    className: "pp-body",
    style: {
      marginTop: '24px'
    }
  }, "Autodata S.R.L. es una empresa de servicios dedicada al asesoramiento integral del sector automotriz. Puntualmente, obtiene rentas por los siguientes conceptos:"), /*#__PURE__*/React.createElement(ClauseList, {
    marker: "bullet",
    items: ['Acceso a su plataforma de suministro y análisis de información de vehículos.', 'Pericias de valores venales de vehículos.', 'Servicios de consultoría.']
  }), /*#__PURE__*/React.createElement("p", {
    className: "pp-body"
  }, "La sociedad liquid\xF3 sus rentas por el r\xE9gimen ficto hasta el ejercicio finalizado el 31 de diciembre de 2025 inclusive. En dicho ejercicio, super\xF3 el l\xEDmite de ", /*#__PURE__*/React.createElement("b", null, "4.000.000 UI"), ", quedando obligada a tributar sus rentas por el r\xE9gimen real a partir del ejercicio 2026."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    accentTop: true,
    title: "El encargo"
  }, "MXA ha sido solicitado para brindar apoyo en la revisi\xF3n de las liquidaciones de impuestos de la empresa, abarcando los aspectos detallados en el cap\xEDtulo de alcance.")));
}

/* 4 — ALCANCE */
function AlcancePage() {
  return /*#__PURE__*/React.createElement(PageShell, {
    page: "04 / 10",
    label: "Alcance de los servicios"
  }, /*#__PURE__*/React.createElement(PageHeaderMark, null), /*#__PURE__*/React.createElement(SectionLabel, {
    eyebrow: "Alcance de los servicios",
    title: "Servicios de consultor\xEDa"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pp-stages"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    accentTop: true,
    eyebrow: "Etapa 1",
    title: "Diagn\xF3stico de la situaci\xF3n actual en materia de IRAE"
  }, "An\xE1lisis de las \xFAltimas tres Declaraciones Juradas y de las distintas fuentes de ingresos, para opinar sobre la correcta clasificaci\xF3n de las rentas y las eventuales contingencias fiscales asociadas."), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    accentTop: true,
    eyebrow: "Etapa 2",
    title: "Revisi\xF3n de alternativas fiscales a futuro"
  }, "An\xE1lisis de alternativas de optimizaci\xF3n de la carga tributaria: proyecto de inversi\xF3n (Ley N\xB0 16.906), r\xE9gimen de software, canalizaci\xF3n de rentas e impacto en el IRPF por distribuci\xF3n de utilidades.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "ink",
    title: "Entregable"
  }, "Una presentaci\xF3n en formato PowerPoint con el an\xE1lisis de los puntos de las etapas 1 y 2. No incluye la implementaci\xF3n de las alternativas que el Cliente decida adoptar.")));
}

/* 5 — HONORARIOS */
function HonorariosPage() {
  return /*#__PURE__*/React.createElement(PageShell, {
    page: "05 / 10",
    label: "Honorarios profesionales"
  }, /*#__PURE__*/React.createElement(PageHeaderMark, null), /*#__PURE__*/React.createElement(SectionLabel, {
    eyebrow: "Honorarios profesionales"
  }), /*#__PURE__*/React.createElement("p", {
    className: "pp-body",
    style: {
      marginTop: '22px'
    }
  }, "En base al alcance de los servicios descritos, estimamos nuestros honorarios en d\xF3lares americanos (USD):"), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'c',
      label: 'Concepto',
      strong: true
    }, {
      key: 'd',
      label: 'Detalle'
    }, {
      key: 'h',
      label: 'Honorarios',
      align: 'right'
    }],
    rows: [{
      c: 'Servicios de consultoría',
      d: 'Diagnóstico y alternativas (etapas 1 y 2)',
      h: 'USD 2.000'
    }, {
      c: 'Optimización fiscal',
      d: '10% de la eficiencia fiscal (*)',
      h: '10%'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "pp-note"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "*"), /*#__PURE__*/React.createElement("p", {
    className: "pp-body",
    style: {
      margin: 0
    }
  }, "El ahorro econ\xF3mico comprende ideas de optimizaci\xF3n capaces de generar beneficios o ahorros fiscales, susceptibles de implementaci\xF3n y sin riesgo de cuestionamiento cierto. Se devenga por un plazo m\xE1ximo de 5 a\xF1os desde el inicio del ahorro efectivo, y solo si el Cliente decide implementarlas.")));
}

/* 6 — ANEXO */
function AnexoPage() {
  return /*#__PURE__*/React.createElement(PageShell, {
    page: "07 / 10",
    label: "Anexo \u2014 T\xE9rminos y condiciones"
  }, /*#__PURE__*/React.createElement(PageHeaderMark, null), /*#__PURE__*/React.createElement(SectionLabel, {
    eyebrow: "Anexo",
    title: "T\xE9rminos y condiciones"
  }), /*#__PURE__*/React.createElement("p", {
    className: "pp-body",
    style: {
      marginTop: '22px'
    }
  }, "El presente anexo precisa los t\xE9rminos, condiciones y responsabilidades aplicables a la prestaci\xF3n de nuestros servicios profesionales, y junto con la propuesta constituye el contrato de servicios entre las partes."), /*#__PURE__*/React.createElement(ClauseList, {
    items: ['La responsabilidad de MXA se encontrará acotada al objeto de los servicios descritos en el capítulo de alcance de la presente propuesta.', 'Los servicios se realizarán siguiendo los criterios técnicos generalmente aplicados. Nuestra labor importa una obligación de medios y no de resultados.', 'Los servicios se basan en las normas, pronunciamientos y antecedentes vigentes al momento de su conclusión. No nos responsabilizamos por cambios posteriores.']
  }));
}
Object.assign(window, {
  CoverPage,
  LetterPage,
  AntecedentesPage,
  AlcancePage,
  HonorariosPage,
  AnexoPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposal/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposal/Viewer.jsx
try { (() => {
// MXA Proposal — interactive paged viewer chrome.
const {
  Button,
  IconButton
} = window.MXADesignSystem_5dc0a4;
const PAGES = [{
  key: 'cover',
  label: 'Portada',
  Comp: window.CoverPage
}, {
  key: 'letter',
  label: 'Carta',
  Comp: window.LetterPage
}, {
  key: 'antecedentes',
  label: 'Antecedentes',
  Comp: window.AntecedentesPage
}, {
  key: 'alcance',
  label: 'Alcance',
  Comp: window.AlcancePage
}, {
  key: 'honorarios',
  label: 'Honorarios',
  Comp: window.HonorariosPage
}, {
  key: 'anexo',
  label: 'Anexo',
  Comp: window.AnexoPage
}];
const Chevron = ({
  dir
}) => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, dir === 'left' ? /*#__PURE__*/React.createElement("polyline", {
  points: "15 18 9 12 15 6"
}) : /*#__PURE__*/React.createElement("polyline", {
  points: "9 18 15 12 9 6"
}));
const DownloadIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "15",
  x2: "12",
  y2: "3"
}));
function Viewer() {
  const [idx, setIdx] = React.useState(() => {
    const v = parseInt(localStorage.getItem('mxa-proposal-page') || '0', 10);
    return isNaN(v) ? 0 : Math.min(v, PAGES.length - 1);
  });
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  React.useEffect(() => {
    localStorage.setItem('mxa-proposal-page', String(idx));
  }, [idx]);
  React.useEffect(() => {
    function fit() {
      const stage = stageRef.current;
      if (!stage) return;
      const availH = stage.clientHeight - 48;
      const availW = stage.clientWidth - 48;
      setScale(Math.min(availH / 1123, availW / 794, 1.1));
    }
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') setIdx(i => Math.min(i + 1, PAGES.length - 1));
      if (e.key === 'ArrowLeft') setIdx(i => Math.max(i - 1, 0));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const Cur = PAGES[idx].Comp;
  return /*#__PURE__*/React.createElement("div", {
    className: "pv"
  }, /*#__PURE__*/React.createElement("header", {
    className: "pv-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pv-bar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/mxa-logo.svg",
    alt: "mxa"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pv-bar__sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pv-bar__doc"
  }, "Propuesta de servicios \xB7 Autodata S.R.L.")), /*#__PURE__*/React.createElement("div", {
    className: "pv-bar__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(DownloadIcon, null)
  }, "Descargar PDF"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Aceptar propuesta"))), /*#__PURE__*/React.createElement("div", {
    className: "pv-main"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "pv-rail",
    "aria-label": "P\xE1ginas"
  }, PAGES.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.key,
    className: 'pv-rail__item' + (i === idx ? ' is-active' : ''),
    onClick: () => setIdx(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "pv-rail__n"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "pv-rail__label"
  }, p.label)))), /*#__PURE__*/React.createElement("div", {
    className: "pv-stage",
    ref: stageRef
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Anterior",
    variant: "outline",
    className: "pv-nav pv-nav--prev",
    onClick: () => setIdx(i => Math.max(i - 1, 0)),
    disabled: idx === 0
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: "left"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pv-scaler",
    style: {
      width: 794 * scale,
      height: 1123 * scale
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pv-paper",
    style: {
      transform: `scale(${scale})`
    }
  }, /*#__PURE__*/React.createElement(Cur, null))), /*#__PURE__*/React.createElement(IconButton, {
    label: "Siguiente",
    variant: "outline",
    className: "pv-nav pv-nav--next",
    onClick: () => setIdx(i => Math.min(i + 1, PAGES.length - 1)),
    disabled: idx === PAGES.length - 1
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: "right"
  })))), /*#__PURE__*/React.createElement("footer", {
    className: "pv-foot"
  }, /*#__PURE__*/React.createElement("span", null, String(idx + 1).padStart(2, '0'), " / ", String(PAGES.length).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "pv-foot__hint"
  }, "Us\xE1 \u2190 \u2192 para navegar")));
}
window.Viewer = Viewer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposal/Viewer.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ClauseList = __ds_scope.ClauseList;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DocFooter = __ds_scope.DocFooter;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SignatureBlock = __ds_scope.SignatureBlock;

})();
