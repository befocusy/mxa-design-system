import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = solid ink, `secondary` = ink outline, `ghost` = quiet text, `accent` = taupe. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  /** Size of the control. */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to fill the container width. */
  block?: boolean;
  disabled?: boolean;
  /** Element/icon rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Element/icon rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as a different element (e.g. 'a' for links). */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/**
 * MXA primary action control. Ink-solid by default; geometric Ubuntu label, crisp 3px corners.
 * @startingPoint section="Core" subtitle="Buttons — ink, outline, ghost, taupe accent" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
