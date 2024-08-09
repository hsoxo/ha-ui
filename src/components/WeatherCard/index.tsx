import React, { useEffect, useMemo, useState } from 'react';

import { useWeather } from '@hakit/core';
import styled from 'styled-components';

import { useSun } from '../../hooks/entities/useSun';
import { WeatherCondition } from '../../types';
import { weatherIcons } from './constants';

const GradientMap = new Map()
  .set(-20, 'rgb(0, 60, 98)') // dark blue
  .set(-10, 'rgb(120, 162, 204)') // darker blue
  .set(0, 'rgb(164, 195, 210)') // light blue
  .set(10, 'rgb(121, 210, 179)') // turquoise
  .set(20, 'rgb(252, 245, 112)') // yellow
  .set(30, 'rgb(255, 150, 79)') // orange
  .set(40, 'rgb(227,87,91)'); // red

export function roundUp(n: number, precision: number = 0): number {
  if (precision <= 0) {
    return Math.ceil(n);
  }
  return Math.ceil(n / precision) * precision;
}

export function roundDown(n: number, precision = 0): number {
  if (precision <= 0) {
    return Math.floor(n);
  }
  return Math.floor(n / precision) * precision;
}

const getGradientRange = (minTemp: number, maxTemp: number) => {
  const minVal = Math.max(roundDown(minTemp, 10), Math.min(...GradientMap.keys()));
  const maxVal = Math.min(roundUp(maxTemp, 10), Math.max(...GradientMap.keys()));
  return (
    Array.from(GradientMap.keys())
      .filter(temp => temp >= minVal && temp <= maxVal)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .map(temp => GradientMap.get(temp)!)
  );
};

const WeatherCard = () => {
  const weather = useWeather('weather.forecast_wo_de_jia', { type: 'daily' });
  const { data: sun } = useSun();
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const Icon = useMemo(() => {
    const iconType = sun?.state === 'below_horizon' ? 'night' : 'day';
    if (weather?.state) {
      return weatherIcons[weather.state as WeatherCondition]?.[iconType];
    }
  }, [weather, sun]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }));
      setCurrentDate(date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { background, marginLeft } = useMemo(() => {
    const tempLow = weather?.forecast?.forecast?.[0].templow ?? 0;
    const tempHigh = weather?.forecast?.forecast?.[0].temperature ?? 0;
    const curTemp = weather?.attributes.temperature ?? 0;

    const gradient = getGradientRange(tempLow, tempHigh).join(',');
    const pos = (curTemp - tempLow) / (tempHigh - tempLow);

    return {
      background: `linear-gradient(to right, ${gradient})`,
      marginLeft: `calc(${pos * 100}% - 18px)`,
    };
  }, [
    weather?.forecast?.forecast?.[0].temperature,
    weather?.forecast?.forecast?.[0].templow,
    weather?.attributes.temperature,
  ]);

  return (
    <Container>
      <div className="icon">{Icon && <Icon />}</div>

      <div className="clock">
        <div className="date">{currentDate}</div>
        <div className="time">{currentTime.split(' ')[0]}</div>
      </div>

      <div className="temp">
        <div>{Math.floor(weather?.forecast?.forecast?.[0].templow ?? 0)}°C</div>
        <div className="temp-bar-wrapper">
          <div className="cur-dot" style={{ marginLeft }} />
          <div className="temp-bar" style={{ background }} />
        </div>
        <div>{Math.floor(weather?.forecast?.forecast?.[0].temperature ?? 0)}°C</div>
      </div>
      {/*<div className="temp">*/}
      {/*  <div>*/}
      {/*    <div>*/}
      {/*      {Math.floor(weather?.attributes.temperature ?? 0)}*/}
      {/*      <div>°C</div>*/}
      {/*    </div>*/}
      {/*    <div>Now</div>*/}
      {/*  </div>*/}
      {/*  {weather?.forecast?.forecast?.slice(0, 8).map(f => (*/}
      {/*    <div className={f.datetime}>*/}
      {/*      <div>{Math.floor(f.temperature)}</div>*/}
      {/*      <div>{new Date(f.datetime).toLocaleTimeString('en-US', { hour: 'numeric' })}</div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </Container>
  );
};

const Container = styled.div`
  --temp-bar-height: 16px;
  --temp-bar-radius: 8px;

  position: relative;
  width: 100%;
  .clock {
    padding: 24px 0;
    .date {
      padding-left: 6px;
      line-height: 1;
    }
    .time {
      font-size: 60px;
      font-family: 'Roboto mono', sans-serif;
      font-weight: 300;
    }
  }
  .temp {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 4px 6px;
    .temp-bar-wrapper {
      width: 100%;
      position: relative;
      .temp-bar {
        width: 100%;
        height: var(--temp-bar-height);
        border-radius: var(--temp-bar-radius);
      }
      .cur-dot {
        position: absolute;
        background-color: #ffffff;
        border-radius: 50%;
        height: 18px;
        width: 18px;
        box-shadow: inset 0 0 0 2px #e1e1e1;
      }
    }
  }
  .temp {
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .forecast {
      padding-left: 6px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 16px;
      line-height: 16px;
      font-weight: 300;
    }
    .current {
      line-height: 20px;
      font-size: 24px;
    }
  }
  .icon {
    position: absolute;
    top: 0;
    right: -16px;
    width: 140px;
  }
`;

export default WeatherCard;
