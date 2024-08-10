import { Lights } from './lights';

export enum Rooms {
  // Main Floor
  LivingRoom = 'living_room',
  DinningRoom = 'dinning_room',
  Kitchen = 'kitchen',
  EntryHallway = 'entry_hallway',
  GarageHallway = 'garage_hallway',
  MainFloorWashroom = 'main_floor_washroom',
  Garage = 'garage',

  // Second Floor
  SecondFloorWashroom = 'washroom',
  Laundry = 'laundry',
  Bedroom = 'bedroom',
  ToyRoom = 'toy_room',
  MasterBedroom = 'master_bedroom',
  Office = 'office',
  SecondFloorHallway = 'second_floor_hallway',

  // Basement
  BasementBedroom = 'basement_bedroom',
  BasementWashroom = 'basement_washroom',
  BasementRecreation = 'recreation',
  BasementLivingRoom = 'basement_living_room',
  WaterHeaterRoom = 'water_heater_room',
  FurnaceRoom = 'furnace_room',

  // stairs
  Stairs = 'stairs',

  // outside
  MainEntry = 'main_entry',
  Backyard = 'backyard',
  Sidewalk = 'sidewalk',
}

interface RoomInfo {
  name: string;
  icon: string;
  lights: Lights[];
  fan?: string[];
  presence?: string[];
  water?: string[];
  doors?: string[];
  windows?: string[];
  temperature?: string[];
  humidity?: string[];
}

export const RoomsMap: Record<Rooms, RoomInfo> = {
  [Rooms.LivingRoom]: {
    name: 'Living Room',
    icon: 'living-room',
    lights: [Lights.LivingRoom, Lights.RainbowLight],
    presence: [],
    water: [],
    doors: [],
    windows: [],
    temperature: [],
    humidity: [],
  },
  [Rooms.DinningRoom]: {
    name: 'Dinning Room',
    icon: 'dinning-room',
    lights: [Lights.DinningRoomTable, Lights.DinningRoomCabinet, Lights.DinningRoomCabinetStrip],
  },
  [Rooms.Kitchen]: {
    name: 'Kitchen',
    icon: 'kitchen',
    lights: [Lights.KitchenCeiling, Lights.KitchenCabinet, Lights.KitchenIsland],
  },
  [Rooms.EntryHallway]: {
    name: 'Entry Hallway',
    icon: 'entry-hallway',
    lights: [Lights.EntryHallway],
  },
  [Rooms.GarageHallway]: {
    name: 'Garage Hallway',
    icon: 'garage-hallway',
    lights: [Lights.GarageHallway],
  },
  [Rooms.Garage]: {
    name: 'Garage',
    icon: 'garage',
    lights: [Lights.Garage],
  },
  [Rooms.MainFloorWashroom]: {
    name: 'Washroom (Main Floor)',
    icon: 'washroom',
    lights: [Lights.MainFloorWashroom],
  },
  [Rooms.SecondFloorWashroom]: {
    name: 'Washroom (Second Floor)',
    icon: 'washroom',
    lights: [Lights.Washroom],
  },
  [Rooms.Laundry]: {
    name: 'Laundry',
    icon: 'laundry',
    lights: [Lights.Laundry],
  },
  [Rooms.Bedroom]: {
    name: 'Bedroom',
    icon: 'bedroom',
    lights: [Lights.Bedroom],
  },
  [Rooms.ToyRoom]: {
    name: 'Toy Room',
    icon: 'toy-room',
    lights: [Lights.ToyRoom],
  },
  [Rooms.MasterBedroom]: {
    name: 'Master Bedroom',
    icon: 'master-bedroom',
    lights: [Lights.MasterBedroom, Lights.MasterBedroomEnSuite, Lights.MasterBedroomCloset],
  },
  [Rooms.Office]: {
    name: 'Office',
    icon: 'office',
    lights: [Lights.Office11, Lights.Office12, Lights.Office13, Lights.Office21, Lights.Office22, Lights.Office23],
  },
  [Rooms.SecondFloorHallway]: {
    name: 'Second Floor Hallway',
    icon: 'hallway',
    lights: [Lights.SecondFloorHallway],
  },
  [Rooms.BasementBedroom]: {
    name: 'Basement Bedroom',
    icon: 'bedroom',
    lights: [Lights.BasementBedroom],
  },
  [Rooms.BasementWashroom]: {
    name: 'Washroom (Basement)',
    icon: 'washroom',
    lights: [Lights.BasementWashroom],
  },
  [Rooms.BasementRecreation]: {
    name: 'Recreation Room',
    icon: 'recreation-room',
    lights: [Lights.BasementKitchen],
  },
  [Rooms.BasementLivingRoom]: {
    name: 'Basement Living Room',
    icon: 'living-room',
    lights: [Lights.BasementCeiling],
  },
  [Rooms.WaterHeaterRoom]: {
    name: 'Water Heater Room',
    icon: 'water-heater-room',
    lights: [Lights.WaterHeater],
  },
  [Rooms.FurnaceRoom]: {
    name: 'Furnace Room',
    icon: 'furnace-room',
    lights: [Lights.FurnaceRoom],
  },

  [Rooms.Stairs]: {
    name: 'Stairs',
    icon: 'stairs',
    lights: [Lights.UpperStairs, Lights.LowerStairs],
  },

  [Rooms.MainEntry]: {
    name: 'Main Entry',
    icon: 'main-entry',
    lights: [Lights.MainEntry],
  },
  [Rooms.Backyard]: {
    name: 'Backyard',
    icon: 'backyard',
    lights: [Lights.Backyard],
  },
  [Rooms.Sidewalk]: {
    name: 'Sidewalk',
    icon: 'sidewalk',
    lights: [Lights.SideWalk],
  },
};
