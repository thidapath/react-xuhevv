import React from 'react';

export default function RangeCard({ title, data, setData, min, max, unit }) {
  return (
    <div className="range-card">
      <h3 className="range-title">{title}</h3>
      <input
        className="range-slider"
        type="range"
        value={data}
        onChange={(e) => setData(parseFloat(e.target.value))}
        min={min}
        max={max}
      />
      <div className="range-value">
        {data.toFixed(2)} {unit}
      </div>
    </div>
  );
}
