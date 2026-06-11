**DocFooter** — the standard footer printed on every MXA document page: `mxa.com.uy · address · phone`, with a hairline rule above. Pre-filled with the Montevideo office details.

```jsx
<DocFooter page="03 / 10" />
<DocFooter onInk />   {/* on the dark cover */}
```

Override `site`/`parts` only for a different office. `page` adds a right-aligned page indicator.
