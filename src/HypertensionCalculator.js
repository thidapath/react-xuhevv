import React, { useState, useEffect } from 'react';
import './HypertensionCalculator.css'; // เพิ่มไฟล์ CSS
import RangeCard from './RangeCard';

export default function HypertensionCalculator() {
  const [sysPressure, setSysPressure] = useState(120);
  const [diaPressure, setDiaPressure] = useState(80);
  const [hypertensionLevel, setHypertensionLevel] = useState('ปกติ');

  useEffect(() => {
    if (sysPressure < 120 && diaPressure < 80) {
      setHypertensionLevel('เหมาะสม');
    } else if ((sysPressure >= 120 && sysPressure < 130) || (diaPressure >= 80 && diaPressure < 85)) {
      setHypertensionLevel('ปกติ');
    } else if ((sysPressure >= 130 && sysPressure < 140) || (diaPressure >= 85 && diaPressure < 90)) {
      setHypertensionLevel('สูงกว่าปกติ');
    } else if ((sysPressure >= 140 && sysPressure < 160) || (diaPressure >= 90 && diaPressure < 100)) {
      setHypertensionLevel('ความดันโลหิตสูงระยะแรก');
    } else if ((sysPressure >= 160 && sysPressure < 179) || (diaPressure >= 100 && diaPressure < 110)) {
      setHypertensionLevel('ความดันโลหิตสูงระยะปานกลาง');
    } else if (sysPressure >= 180 || diaPressure >= 110) {
      setHypertensionLevel('ความดันโลหิตสูงระยะรุนแรง');
    }
  }, [sysPressure, diaPressure]);

  return (
    <div className="tab-content" id="hypertension-tab">
      <h1>คำนวณระดับความดันโลหิต (Hypertension)</h1>
      <RangeCard
        title="ความดันโลหิต (บน)"
        data={sysPressure}
        setData={setSysPressure}
        min={90}
        max={250}
        unit="มม.ปรอท (mmHg)"
      />
      <RangeCard
        title="ความดันโลหิต (ล่าง)"
        data={diaPressure}
        setData={setDiaPressure}
        min={60}
        max={250}
        unit="มม.ปรอท (mmHg)"
      />
      <div className={`result ${hypertensionLevel.toLowerCase()}`}>
        <strong>ระดับความดันโลหิต:</strong> {hypertensionLevel}
      </div>
    </div>
  );
}