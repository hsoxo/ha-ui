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
import animatedFillSleet from '../../assets/icons/weather/animated/sleet.svg';
import animatedFillSnow from '../../assets/icons/weather/animated/snow.svg';
import animatedFillThunderstormsRainDay from '../../assets/icons/weather/animated/thunderstorms-day-rain.svg';
import animatedFillThunderstormsDay from '../../assets/icons/weather/animated/thunderstorms-day.svg';
import animatedFillThunderstormsRainNight from '../../assets/icons/weather/animated/thunderstorms-night-rain.svg';
import animatedFillThunderstormsNight from '../../assets/icons/weather/animated/thunderstorms-night.svg';
import animatedFillWindsock from '../../assets/icons/weather/animated/windsock.svg';
import { WeatherCondition } from '../../types';

export const weatherIcons = {
  [WeatherCondition.ClearNight]: {
    day: animatedFillClearDay,
    night: animatedFillClearNight,
  },
  [WeatherCondition.Cloudy]: {
    day: animatedFillCloudy,
    night: animatedFillCloudy,
  },
  [WeatherCondition.Exceptional]: {
    day: animatedFillHurricane,
    night: animatedFillHurricane,
  },
  [WeatherCondition.Fog]: {
    day: animatedFillFogDay,
    night: animatedFillFogNight,
  },
  [WeatherCondition.Hail]: {
    day: animatedFillHail,
    night: animatedFillHail,
  },
  [WeatherCondition.Lightning]: {
    day: animatedFillThunderstormsDay,
    night: animatedFillThunderstormsNight,
  },
  [WeatherCondition.LightningRainy]: {
    day: animatedFillThunderstormsRainDay,
    night: animatedFillThunderstormsRainNight,
  },
  [WeatherCondition.PartlyCloudy]: {
    day: animatedFillPartlyCloudyDay,
    night: animatedFillPartlyCloudyNight,
  },
  [WeatherCondition.Pouring]: {
    day: animatedFillRain,
    night: animatedFillRain,
  },
  [WeatherCondition.Rainy]: {
    day: animatedFillPartlyCloudyDayRain,
    night: animatedFillPartlyCloudyNightRain,
  },
  [WeatherCondition.Snowy]: {
    day: animatedFillSnow,
    night: animatedFillSnow,
  },
  [WeatherCondition.SnowyRainy]: {
    day: animatedFillSleet,
    night: animatedFillSleet,
  },
  [WeatherCondition.Sunny]: {
    day: animatedFillClearDay,
    night: animatedFillClearNight,
  },
  [WeatherCondition.Windy]: {
    day: animatedFillWindsock,
    night: animatedFillWindsock,
  },
  [WeatherCondition.WindyVariant]: {
    day: animatedFillWindsock,
    night: animatedFillWindsock,
  },
};
