**SectionLabel** — the MXA section header used on every proposal page: a taupe uppercase eyebrow, the signature 48px taupe mark rule, and an optional Ubuntu-bold title.

```jsx
<SectionLabel eyebrow="Antecedentes" />
<SectionLabel eyebrow="Honorarios profesionales" title="Estimación en USD" />
<SectionLabel eyebrow="Anexo" onInk />  {/* on dark cover/divider pages */}
```

Set `mark={false}` to drop the rule. Use `onInk` on dark backgrounds.
