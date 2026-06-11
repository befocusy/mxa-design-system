import * as React from 'react';

export interface DocFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Website (default "mxa.com.uy"). */
  site?: string;
  /** Footer segments after the site (defaults to MXA's Montevideo address + phone). */
  parts?: string[];
  /** Optional page indicator pushed to the right (e.g. "03 / 10"). */
  page?: React.ReactNode;
  /** Use on dark/ink pages. */
  onInk?: boolean;
}

/** The standard MXA document footer: site · address · phone, with a hairline rule above. Appears on every page. */
export function DocFooter(props: DocFooterProps): JSX.Element;
