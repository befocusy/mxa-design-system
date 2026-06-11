import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status color. */
  variant?: 'neutral' | 'ink' | 'accent' | 'success' | 'danger' | 'blue';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Small pill for statuses, document states, and metadata (e.g. "Vigente", "Por única vez"). */
export function Badge(props: BadgeProps): JSX.Element;
