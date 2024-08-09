import { ReactNode } from 'react';

import animatedFillClearDay from '../../assets/icons/weather/animated/clear-day.svg';
import animatedFillClearNight from '../../assets/icons/weather/animated/clear-night.svg';
import animatedFillCloudy from '../../assets/icons/weather/animated/cloudy.svg';
import animatedFillFogDay from '../../assets/icons/weather/animated/fog-day.svg';
import animatedFillFogNight from '../../assets/icons/weather/animated/fog-night.svg';
import animatedFillHail from '../../assets/icons/weather/animated/hail.svg';
import animatedFillHurricane from '../../assets/icons/weather/animated/hurricane.svg';
import animatedFillPartlyCloudyDayRain from '../../assets/icons/weather/animated/partly-cloudy-day-rain.svg';
import animatedFillPartlyCloudyDay from '../../assets/icons/weather/animated/partly-cloudy-day.svg';
import animatedFillPartlyCloudyNightRain from '../../assets/icons/weather/animated/partly-cloudy-night-rain.svg';
import animatedFillPartlyCloudyNight from '../../assets/icons/weather/animated/partly-cloudy-night.svg';
import animatedFillRain from '../../assets/icons/weather/animated/rain.svg';
import animatedFillRaindrop from '../../assets/icons/weather/animated/raindrop.svg';
import animatedFillRaindrops from '../../assets/icons/weather/animated/raindrops.svg';
import animatedFillSleet from '../../assets/icons/weather/animated/sleet.svg';
import animatedFillSnow from '../../assets/icons/weather/animated/snow.svg';
import animatedFillThunderstormsRainDay from '../../assets/icons/weather/animated/thunderstorms-day-rain.svg';
import animatedFillThunderstormsDay from '../../assets/icons/weather/animated/thunderstorms-day.svg';
import animatedFillThunderstormsRainNight from '../../assets/icons/weather/animated/thunderstorms-night-rain.svg';
import animatedFillThunderstormsNight from '../../assets/icons/weather/animated/thunderstorms-night.svg';
import animatedFillWindsock from '../../assets/icons/weather/animated/windsock.svg';
import { WeatherCondition } from '../../types';

export const weatherIcons: Record<WeatherCondition, { day: ReactNode; night: ReactNode }> = {
  rainy: {
    day: animatedFillPartlyCloudyDayRain,
    night: animatedFillPartlyCloudyNightRain,
  },
  partlycloudy: {
    day: animatedFillPartlyCloudyDay,
    night: animatedFillPartlyCloudyNight,
  },
  cloudy: animatedFillCloudy,
  'clear-night': {
    day: animatedFillClearDay,
    night: animatedFillClearNight,
  },
  fog: {
    day: animatedFillFogDay,
    night: animatedFillFogNight,
  },
  hail: animatedFillHail,
  lightning: {
    day: animatedFillThunderstormsDay,
    night: animatedFillThunderstormsNight,
  },
  'lightning-rainy': {
    day: animatedFillThunderstormsRainDay,
    night: animatedFillThunderstormsRainNight,
  },
  pouring: {
    day: animatedFillRain,
    night: animatedFillRain,
  },
  raindrop: {
    day: animatedFillRaindrop,
    night: animatedFillRaindrop,
  },
  raindrops: animatedFillRaindrops,
  snowy: animatedFillSnow,
  'snowy-rainy': animatedFillSleet,
  sunny: {
    day: animatedFillClearDay,
    night: animatedFillClearNight,
  },
  windy: animatedFillWindsock,
  'windy-exceptional': animatedFillWindsock,
  exceptional: animatedFillHurricane,
};
