import React, { useState } from 'react';

export default function Result({ result }) {
  return (
    <div className="result">
      <span>{result}</span>
    </div>
  );
}
