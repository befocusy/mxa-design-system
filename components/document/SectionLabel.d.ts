import * as React from 'react';

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Taupe uppercase eyebrow, e.g. "ANTECEDENTES", "HONORARIOS PROFESIONALES". */
  eyebrow?: React.ReactNode;
  /** Optional larger Ubuntu-bold title beneath the eyebrow. */
  title?: React.ReactNode;
  /** Show the 48px taupe mark rule (default true). */
  mark?: boolean;
  /** Use on dark/ink backgrounds. */
  onInk?: boolean;
}

/**
 * The MXA section header: taupe uppercase eyebrow + taupe mark rule + optional Ubuntu title.
 * The backbone of every proposal page.
 * @startingPoint section="Document" subtitle="Section header — taupe eyebrow + mark rule" viewport="700x180"
 */
export function SectionLabel(props: SectionLabelProps): JSX.Element;
