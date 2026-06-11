import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface treatment. */
  variant?: 'flat' | 'raised' | 'sunken' | 'ink';
  /** Add a 3px taupe accent rule along the top edge. */
  accentTop?: boolean;
  /** Lift on hover (for clickable cards). */
  hover?: boolean;
  /** Taupe uppercase eyebrow label. */
  eyebrow?: React.ReactNode;
  /** Ubuntu-bold title. */
  title?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Container for grouped content — service stages, fee concepts, summary panels.
 * Crisp 6px corners, hairline sand border; quiet warm shadow only when raised.
 * @startingPoint section="Core" subtitle="Card surfaces — flat, raised, sunken, ink" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
