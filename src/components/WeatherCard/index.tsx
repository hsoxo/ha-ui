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

const TEMP_BAR_HEIGHT = 16;

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
      marginLeft: `calc(${pos * 100}% - ${TEMP_BAR_HEIGHT}px)`,
    };
  }, [
    weather?.forecast?.forecast?.[0].temperature,
    weather?.forecast?.forecast?.[0].templow,
    weather?.attributes.temperature,
  ]);

  return (
    <Container className="relative w-full">
      <div className="absolute top-0 -right-4 w-36">{Icon && <Icon />}</div>

      <div className="py-6 w-fit">
        <div className="pl-1.5 leading-none">{currentDate}</div>
        <div className="text-6xl font-light">{currentTime.split(' ')[0].padStart(5, '0')}</div>
        <div className="text-right leading-none">{weather?.attributes.temperature ?? 0}°C</div>
      </div>

      <div className="flex gap-2 px-1.5 py-1">
        <div className="text-xs">{Math.floor(weather?.forecast?.forecast?.[0].templow ?? 0)}°C</div>
        <div className="relative w-full">
          <div className="cur-dot absolute rounded-full shadow-inner" style={{ marginLeft }} />
          <div className="temp-bar w-full shadow-sm" style={{ background }} />
        </div>
        <div className="text-xs">{Math.floor(weather?.forecast?.forecast?.[0].temperature ?? 0)}°C</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .temp-bar {
    height: ${TEMP_BAR_HEIGHT}px;
    border-radius: ${TEMP_BAR_HEIGHT / 2}px;
  }
  .cur-dot {
    background-color: #ffffff;
    height: ${TEMP_BAR_HEIGHT}px;
    width: ${TEMP_BAR_HEIGHT}px;
  }
`;

export default WeatherCard;
