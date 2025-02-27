"use client";

import React from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
}

const MathFormula: React.FC<MathFormulaProps> = ({ formula, display = false }) => {
  const containerRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      katex.render(formula, containerRef.current, {
        throwOnError: false,
        displayMode: display,
        output: 'html',
        trust: true
      });
    }
  }, [formula, display]);

  // Use span for inline (within paragraphs) and div for display mode
  return display ? (
    <span ref={containerRef as any} className="math-formula-block" />
  ) : (
    <span ref={containerRef} className="math-formula-inline" />
  );
};

export default MathFormula;
