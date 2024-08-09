export enum Rooms {
  // Main Floor
  LivingRoom = 'living_room',
  DinningRoom = 'dinning_room',
  Kitchen = 'kitchen',
  EntryHallway = 'entry_hallway',
  GarageHallway = 'garage_hallway',
  MainFloorWashroom = 'main_floor_washroom',

  // Second Floor
  SecondFloorWashroom = 'washroom',
  Laundry = 'laundry',
  Bedroom = 'bedroom',
  ToyRoom = 'toy_room',
  MasterBedroom = 'master_bedroom',
  Office = 'office',

  // Basement
  BasementBedroom = 'basement_bedroom',
  BasementWashroom = 'basement_washroom',
  BasementRecreation = 'recreation',
  BasementKitchen = 'basement_kitchen',
  BasementLivingRoom = 'basement_living_room',
  WaterHeaterRoom = 'water_heater_room',
  FurnaceRoom = 'furnace_room',

  // stairs
  UpperStairs = 'upper_stairs',
  LowerStairs = 'lower_stairs',

  // outside
  MainEntry = 'main_entry',
  Backyard = 'backyard',
  Sidewalk = 'sidewalk',
}

export const RoomsMap = {
  [Rooms.LivingRoom]: {
    name: 'Living Room',
    icon: 'living-room',
  },
  [Rooms.DinningRoom]: 'Dinning Room',
  [Rooms.Kitchen]: 'Kitchen',
  [Rooms.EntryHallway]: 'Entry Hallway',
  [Rooms.GarageHallway]: 'Garage Hallway',
  [Rooms.MainFloorWashroom]: 'Main Floor Washroom',

  [Rooms.SecondFloorWashroom]: 'Washroom',
  [Rooms.Laundry]: 'Laundry',
  [Rooms.Bedroom]: 'Bedroom',
  [Rooms.ToyRoom]: 'Toy Room',
  [Rooms.MasterBedroom]: 'Master Bedroom',
  [Rooms.Office]: 'Office',

  [Rooms.BasementBedroom]: 'Basement Bedroom',
  [Rooms.BasementWashroom]: 'Basement Washroom',
  [Rooms.BasementRecreation]: 'Recreation Room',
  [Rooms.BasementKitchen]: 'Basement Kitchen',
  [Rooms.BasementLivingRoom]: 'Basement Living Room',
  [Rooms.WaterHeaterRoom]: 'Water Heater Room',
  [Rooms.FurnaceRoom]: 'Furnace Room',

  [Rooms.UpperStairs]: 'Upper Stairs',
  [Rooms.LowerStairs]: 'Lower Stairs',

  [Rooms.MainEntry]: 'Main Entry',
  [Rooms.Backyard]: 'Backyard',
  [Rooms.Sidewalk]: 'Sidewalk',
};
