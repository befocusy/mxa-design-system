**Button** — MXA's primary action control: solid-ink by default with a geometric Ubuntu label and crisp 3px corners. Use for form submits, document actions, and CTAs.

```jsx
<Button variant="primary" size="md" onClick={save}>Aceptar propuesta</Button>
<Button variant="secondary">Descargar PDF</Button>
<Button variant="ghost" size="sm">Cancelar</Button>
```

Variants: `primary` (ink fill), `secondary` (ink outline → fills on hover), `ghost` (quiet, beige hover), `accent` (taupe). Sizes `sm | md | lg`. Use `block` to fill width, `as="a"` for links, `iconLeft`/`iconRight` for Lucide icons. Reserve `primary` for the single most important action per view.
