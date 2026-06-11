**DataTable** — editorial fee/concept table matching MXA's "Honorarios profesionales" layout: Ubuntu caps headers over an ink rule, tabular numerals, hairline rows.

```jsx
<DataTable
  columns={[
    { key: 'concepto', label: 'Concepto', strong: true },
    { key: 'detalle', label: 'Detalle' },
    { key: 'honorario', label: 'Honorarios', align: 'right' },
  ]}
  rows={[
    { concepto: 'Servicios de consultoría', detalle: 'Por única vez', honorario: 'USD 2.000' },
    { concepto: 'Optimización fiscal', detalle: '10% de la eficiencia fiscal (*)', honorario: '—' },
  ]}
/>
```

Right-align money columns (`align: 'right'`). Use `strong` for the concept column, `zebra` for beige striping, and `footer` for totals.
