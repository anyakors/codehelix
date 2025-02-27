"use client";

import React from 'react';
import 'katex/dist/katex.min.css';
import './MathFormula.module.css';
import katex from 'katex';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
}

const MathFormulaNewline: React.FC<MathFormulaProps> = ({ 
  formula, 
  display = false,
}) => {
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

  if (display) {
    return (
      <span className="math-formula-container">
        <span className="math-formula-display" ref={containerRef} />
      </span>
    );
  }
  
  return <span ref={containerRef} className="math-formula-inline" />;
};

export default MathFormulaNewline;