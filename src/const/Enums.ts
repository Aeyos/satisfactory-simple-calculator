enum Item {
  // ORE
  Limestone,
  CoalOre,
  IronOre,
  CopperOre,
  // INGOT
  Concrete,
  IronIngot,
  CopperIngot,
  SteelIngot,

  // LEVEL 1 CONSTRUCTOR
  // Iron
  IronPlate,
  IronRod,
  // Copper
  Wire,
  CopperSheet,
  // Steel
  SteelBeam,
  SteelPipe,

  // LEVEL 2 CONSTUCTOR
  Screws,
  Cable,

  // LEVEL 1 ASSEMBLER
  // Iron
  ReinforcedIronPlate,
  Rotor,
  // Copper
  Stator,
  // Steel
  EncasedIndustrialBeam,

  // LEVEL 2 ASSEMBLER
  ModularFrame,
  Motor,

  // SPACE ELEVATOR
  SmartPlating,
  VersatileFramework,
  AutomatedWiring,

  // CONSUMABLES
  SolidBiofuel,
  ColorCartridge
}

enum Machine {
  Assembler,
  Blender,
  Constructor,
  CraftBench,
  EquipmentWorkshop,
  Foundry,
  Manufacturer,
  MinerMk1,
  MinerMk2,
  MinerMk3,
  Packager,
  Refinery,
  Smelter
}

export { Item, Machine };
