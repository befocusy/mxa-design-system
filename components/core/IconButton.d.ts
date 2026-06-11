import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Quiet by default; `outline` adds a sand border, `solid` is ink-filled. */
  variant?: 'ghost' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also used as tooltip title). Required. */
  label: string;
  /** The icon node (e.g. a Lucide SVG). */
  children?: React.ReactNode;
}

/** Square icon-only control for toolbars and table rows. Pair with Lucide icons. */
export function IconButton(props: IconButtonProps): JSX.Element;
