import * as React from 'react';

export interface ClauseListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  /** Clause bodies (strings or rich nodes). */
  items: React.ReactNode[];
  /** Marker style: `paren` = "1)", `dot` = "1.", `bullet` = taupe dash. */
  marker?: 'paren' | 'dot' | 'bullet';
  /** First number (default 1). */
  start?: number;
}

/** Numbered legal clauses for the terms-and-conditions annex (matches MXA's "1) 2) 3)…" style). */
export function ClauseList(props: ClauseListProps): JSX.Element;
