import { ex } from '@fullcalendar/core/internal-common';

export type AllDomains = 'weather' | 'sun' | 'light';
export type DefaultEntityName = `${AllDomains}.${string}`;
export type EntityName = DefaultEntityName;
export type FilterByDomain<T, Prefix extends AllDomains> = T extends `${Prefix}${infer _Rest}` ? T : never;

interface Context {
  id: string;
  parent_id: any;
  user_id: any;
}

export enum WeatherCondition {
  ClearNight = 'clear-night',
  Cloudy = 'cloudy',
  Fog = 'fog',
  Hail = 'hail',
  Lightning = 'lightning',
  LightningRainy = 'lightning-rainy',
  PartlyCloudy = 'partlycloudy',
  Pouring = 'pouring',
  Rainy = 'rainy',
  Snowy = 'snowy',
  SnowyRainy = 'snowy-rainy',
  Sunny = 'sunny',
  Windy = 'windy',
  WindyVariant = 'windy-variant',
  Exceptional = 'exceptional',
}

export interface WeatherEntity {
  entity_id: string;
  state: WeatherCondition;
  attributes: {
    temperature: number;
    dew_point: number;
    temperature_unit: string;
    humidity: number;
    cloud_coverage: number;
    pressure: number;
    pressure_unit: string;
    wind_bearing: number;
    wind_speed: number;
    wind_speed_unit: string;
    visibility_unit: string;
    precipitation_unit: string;
    attribution: string;
    friendly_name: string;
    supported_features: number;
  };
  last_changed: string;
  last_reported: string;
  last_updated: string;
  context: Context;
}

export interface SunEntity {
  entity_id: string;
  state: string;
  attributes: {
    next_dawn: string;
    next_dusk: string;
    next_midnight: string;
    next_noon: string;
    next_rising: string;
    next_setting: string;
    elevation: number;
    azimuth: number;
    rising: boolean;
    friendly_name: string;
  };
  last_changed: string;
  last_reported: string;
  last_updated: string;
  context: Context;
}

export interface LightEntity {
  entity_id: string;
  state: string;
  attributes: {
    supported_color_modes: string[];
    color_mode: string;
    brightness: number;
    device_id: string;
    zone_id: string;
    icon: string;
    friendly_name: string;
    supported_features: number;
  };
  last_changed: string;
  last_reported: string;
  last_updated: string;
  context: Context;
}

export enum LightAction {
  TurnOn = 'turn_on',
  TurnOff = 'turn_off',
  Toggle = 'toggle',
}

export enum LightOptionsKey {
  Brightness = 'brightness',
  Transition = 'transition',
  ColorTemp = 'color_temp_kelvin',
}

// https://www.home-assistant.io/integrations/light/
export interface LightOptions {
  [LightOptionsKey.Brightness]: number;
  [LightOptionsKey.Transition]: number;
  [LightOptionsKey.ColorTemp]: number;
}
