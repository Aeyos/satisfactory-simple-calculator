import { Item, Machine } from "./Enums";

const ITEM_GRAPHICS: { [key: number]: string } = {
  [Item.AutomatedWiring]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/f/f3/Automated_Wiring.png",
  [Item.Cable]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/4/49/Cable.png",
  [Item.CoalOre]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/a/a7/Coal.png",
  [Item.ColorCartridge]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/3/38/Color_Cartridge.png",
  [Item.Concrete]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/c/c3/Concrete.png",
  [Item.CopperIngot]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/0/00/Copper_Ingot.png",
  [Item.CopperOre]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/7/78/Copper_Ore.png",
  [Item.CopperSheet]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/e/e1/Copper_Sheet.png",
  [Item.EncasedIndustrialBeam]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/7/74/Encased_Industrial_Beam.png",
  [Item.IronIngot]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/0/0a/Iron_Ingot.png",
  [Item.IronOre]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/8/87/Iron_Ore.png",
  [Item.IronPlate]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/51/Iron_Plate.png",
  [Item.IronRod]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/5f/Iron_Rod.png",
  [Item.ModularFrame]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/8/81/Modular_Frame.png",
  [Item.Motor]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/0/0f/Motor.png",
  [Item.ReinforcedIronPlate]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/2/29/Reinforced_Iron_Plate.png",
  [Item.Rotor]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/3/3d/Rotor.png",
  [Item.Screws]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/59/Screw.png",
  [Item.SmartPlating]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/d/d5/Smart_Plating.png",
  [Item.SolidBiofuel]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/b/bb/Solid_Biofuel.png",
  [Item.Stator]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/1/13/Stator.png",
  [Item.SteelBeam]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/6/6f/Steel_Beam.png",
  [Item.SteelIngot]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/b/bd/Steel_Ingot.png",
  [Item.SteelPipe]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/a/aa/Steel_Pipe.png",
  [Item.VersatileFramework]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/7/74/Versatile_Framework.png",
  [Item.Wire]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/7/77/Wire.png",
  [Item.Limestone]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/4/4e/Limestone.png"
};

const MACHINE_GRAPHICS: { [key: number]: string } = {
  [Machine.Assembler]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/a/ae/Assembler.png",
  [Machine.Blender]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/3/39/Blender.png",
  [Machine.Constructor]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/6/61/Constructor.png",
  [Machine.CraftBench]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/7/75/Craft_Bench.png",
  [Machine.EquipmentWorkshop]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/d/d9/Equipment_Workshop.png",
  [Machine.Foundry]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/1/19/Foundry.png",
  [Machine.Manufacturer]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/0/0b/Manufacturer.png",
  [Machine.MinerMk1]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/c/cf/Miner_Mk.1.png",
  [Machine.MinerMk2]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/a/aa/Miner_Mk.2.png",
  [Machine.MinerMk3]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/58/Miner_Mk.3.png",
  [Machine.Packager]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/c/c1/Packager.png",
  [Machine.Refinery]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/6/6d/Refinery.png",
  [Machine.Smelter]:
    "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/4/45/Smelter.png"
};

export { ITEM_GRAPHICS, MACHINE_GRAPHICS };
