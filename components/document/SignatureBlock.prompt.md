**SignatureBlock** — the closing signature area of a proposal: the MXA signatory plus ruled fields for the client to sign.

```jsx
<SignatureBlock
  signatory={{ name: 'Nicolás May', role: 'MXA', email: 'nmay@mxa.com.uy' }}
  fields={['Por el Cliente', 'Aclaración']}
/>
```

Pass one field for a single line, two for a side-by-side layout.
