import * as React from 'react';

export interface DataTableColumn {
  /** Key into each row object. */
  key: string;
  /** Header label. */
  label: React.ReactNode;
  /** Right-align (use for money / numbers). */
  align?: 'left' | 'right';
  /** Render cells in Ubuntu-bold ink. */
  strong?: boolean;
}

export interface DataTableFooterCell {
  value: React.ReactNode;
  colSpan?: number;
}

export interface DataTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: DataTableColumn[];
  rows: Record<string, React.ReactNode>[];
  /** Optional footer row (e.g. totals). */
  footer?: (DataTableFooterCell | React.ReactNode)[];
  /** Alternate beige row striping. */
  zebra?: boolean;
}

/**
 * Editorial fee/concept table — Ubuntu caps headers over an ink rule, tabular numerals, hairline rows.
 * Matches the "Honorarios profesionales" tables in MXA proposals.
 * @startingPoint section="Document" subtitle="Fee / concept table" viewport="700x260"
 */
export function DataTable(props: DataTableProps): JSX.Element;
