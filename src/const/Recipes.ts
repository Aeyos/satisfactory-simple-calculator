import { Recipe } from "../models/Recipe";
import { Item, Machine } from "./Enums";

const RECIPES: { [key: number]: Recipe } = {
  // ORES
  [Item.IronOre]: new Recipe([], [Item.IronOre], Machine.MinerMk1, [60]),
  [Item.CopperOre]: new Recipe([], [Item.CopperOre], Machine.MinerMk1, [60]),
  [Item.CoalOre]: new Recipe([], [Item.CoalOre], Machine.MinerMk1, [60]),
  [Item.Limestone]: new Recipe([], [Item.Limestone], Machine.MinerMk1, [60]),
  // INGOTS
  [Item.Concrete]: new Recipe(
    [Item.Limestone],
    [Item.Concrete],
    Machine.Constructor,
    [45, 15]
  ),
  [Item.IronIngot]: new Recipe(
    [Item.IronOre],
    [Item.IronIngot],
    Machine.Smelter,
    [30, 30]
  ),
  [Item.CopperIngot]: new Recipe(
    [Item.CopperOre],
    [Item.CopperIngot],
    Machine.Smelter,
    [30, 30]
  ),
  [Item.SteelIngot]: new Recipe(
    [Item.IronOre, Item.CoalOre],
    [Item.SteelIngot],
    Machine.Foundry,
    [45, 45, 45]
  ),
  // IRON
  [Item.IronPlate]: new Recipe(
    [Item.IronIngot],
    [Item.IronPlate],
    Machine.Constructor,
    [30, 20]
  ),
  [Item.IronRod]: new Recipe(
    [Item.IronIngot],
    [Item.IronRod],
    Machine.Constructor,
    [15, 15]
  ),
  // COPPER
  [Item.Wire]: new Recipe(
    [Item.CopperIngot],
    [Item.Wire],
    Machine.Constructor,
    [15, 30]
  ),
  [Item.Cable]: new Recipe([Item.Wire], [Item.Cable], Machine.Constructor, [
    60,
    30
  ]),
  // STEEL
  [Item.SteelBeam]: new Recipe(
    [Item.SteelIngot],
    [Item.SteelBeam],
    Machine.Constructor,
    [60, 15]
  ),
  [Item.SteelPipe]: new Recipe(
    [Item.SteelIngot],
    [Item.SteelPipe],
    Machine.Constructor,
    [30, 20]
  ),
  // Mid Items
  [Item.Screws]: new Recipe(
    [Item.IronRod],
    [Item.Screws],
    Machine.Constructor,
    [10, 40]
  ),
  // Items
  [Item.ReinforcedIronPlate]: new Recipe(
    [Item.IronPlate, Item.Screws],
    [Item.ReinforcedIronPlate],
    Machine.Assembler,
    [30, 60, 5]
  ),
  [Item.ModularFrame]: new Recipe(
    [Item.ReinforcedIronPlate, Item.IronRod],
    [Item.ModularFrame],
    Machine.Assembler,
    [3, 12, 2]
  ),
  [Item.Stator]: new Recipe(
    [Item.SteelPipe, Item.Wire],
    [Item.Stator],
    Machine.Assembler,
    [15, 40, 5]
  ),
  [Item.EncasedIndustrialBeam]: new Recipe(
    [Item.SteelBeam, Item.Concrete],
    [Item.EncasedIndustrialBeam],
    Machine.Assembler,
    [24, 30, 6]
  ),
  // Elevator
  [Item.VersatileFramework]: new Recipe(
    [Item.ModularFrame, Item.SteelBeam],
    [Item.VersatileFramework],
    Machine.Assembler,
    [2.5, 30, 5]
  ),
  [Item.AutomatedWiring]: new Recipe(
    [Item.Stator, Item.Cable],
    [Item.AutomatedWiring],
    Machine.Assembler,
    [2.5, 50, 2.5]
  )
};

export default RECIPES;
