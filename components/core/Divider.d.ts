import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  /** `hairline` sand rule, `accent` taupe, `strong` ink. */
  tone?: 'hairline' | 'accent' | 'strong';
  /** Short 48px "mark" rule — the signature taupe underline beneath section labels. */
  mark?: boolean;
}

/** Hairline / accent rules. Use the taupe `mark` under section labels. */
export function Divider(props: DividerProps): JSX.Element;
