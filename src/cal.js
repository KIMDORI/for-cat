import React, { useState, useEffect } from 'react';

function Calculate () {
  const inputCan = {
    width: '15px',
    textAlign:'right',
    padding:0
  }
  const [defaultKcal, setKcal] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [canKcal, setCanKcal] = useState({
    cnt: 1,
    kcal: 30
  });
  const [dryKcal, setDryKcal] = useState(0);
  const calDefaultK = e => {
    let kg = e.target.value
    setKcal(30*kg+70)
  }
  const calCanK = e => {
    const result = {
      ...canKcal,
      [e.target.name]:e.target.value,
    }
    setCanKcal(result)
  }
  const calDryK = e => {
    let kg = e.target.value

    setDryKcal(kg/1000)
  }
  const need = defaultKcal*0.8;
  let can = canKcal.cnt*canKcal.kcal;
  can = Math.round(need-can);
  return (
    <>
      <div className="cal-wrap">
        <p>
          <input type="number" placeholder="몸무게" onChange={calDefaultK}/> kg인 애기는
        </p>
        <p>
          <input type="number" placeholder="사료 칼로리" onChange={calDryK}/> kcal의 사료와 함께
        </p>
        <p>
          <input type="number" name="kcal" placeholder="캔 칼로리" onChange={calCanK}/> kcal의 캔
          <input type="number" name="cnt" placeholder="0" style={inputCan} onChange={calCanK} /> 개를 먹습니다.
        </p>
      </div>
      <div className="cal-btn" onClick={() => {setToggle(true)}}>
        <span></span>
        난 얼마나 먹을 수 있는 거지...
      </div>
      {toggle &&
        <div className="result-wrap">
          애기의 기초대사량은 약 <b>{defaultKcal}kcal</b>, <br />
          다이어트 시 에너지 요구량은 <b>{need}kcal</b> 입니다.<br/>
          애기는 하루에 <b>{Math.round(can/dryKcal)}g</b>의 사료를 먹을 수 있습니다. <br />
        </div>
      }
    </>
  );
}

export default Calculate;