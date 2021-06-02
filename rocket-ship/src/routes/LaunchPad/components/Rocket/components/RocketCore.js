import React from 'react';
import '../styles/_rocket.scss';

const SECONDS_ROCKET_PLEASE_COME_HOME = 5;
const MS_ROCKET_PLEASE_COME_HOME = SECONDS_ROCKET_PLEASE_COME_HOME * 1000;
const FINAL_POSITION_BOTTOM_VAL = 'calc(400px)';

function timeToPositionPercent(startTime) {
  const now = Date.now();
  const timeDiff = now - startTime;

  if (timeDiff < MS_ROCKET_PLEASE_COME_HOME) {
    return `calc(300px + ${((timeDiff / MS_ROCKET_PLEASE_COME_HOME) * 100).toFixed(0)}%)`;
  } else {
    return FINAL_POSITION_BOTTOM_VAL;
  }

}

function generateEmptyListEls(quantity) {
  return [...Array(quantity)].map(() => <li />);
}

export default function RocketCore({ initialLaunchTime }) {
  return (
    <>
      <div className="rocket" style={{ bottom: timeToPositionPercent(initialLaunchTime) }}>
        <div className="rocket__body">
          <div className="rocket__body__main"/>
          <div className="rocket__body__fin rocket__body__fin__left"/>
          <div className="rocket__body__fin rocket__body__fin__right"/>
          <div className="rocket__body__window"/>
        </div>
        <div className="rocket__exhaust__flame"/>
        <ul className="rocket__exhaust__fumes">
          {generateEmptyListEls(9)}
        </ul>
      </div>
      <ul className="stars">
        {generateEmptyListEls(7)}
      </ul>
    </>
  );
}
