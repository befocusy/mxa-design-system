import * as React from 'react';

export interface Signatory {
  name: string;
  role?: string;
  email?: string;
}

export interface SignatureBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** MXA signatory shown above the client signature lines. */
  signatory?: Signatory;
  /** Signature fields the client fills in (default: "Por el Cliente", "Aclaración"). */
  fields?: string[];
}

/** Closing signature area for proposals — MXA signatory + ruled client fields. */
export function SignatureBlock(props: SignatureBlockProps): JSX.Element;
