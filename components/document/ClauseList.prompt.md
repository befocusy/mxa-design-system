**ClauseList** — numbered legal clauses for the terms-and-conditions annex (MXA's "1) 2) 3)…" style).

```jsx
<ClauseList items={[
  'La responsabilidad de MXA se encontrará acotada al objeto de los servicios…',
  'Los servicios prestados se realizarán siguiendo los criterios técnicos…',
]} />
<ClauseList marker="bullet" items={['Acceso a la plataforma', 'Pericias de valores venales']} />
```

`marker`: `paren` (1)), `dot` (1.), or `bullet` (taupe dash). Use `start` to continue numbering across pages.
