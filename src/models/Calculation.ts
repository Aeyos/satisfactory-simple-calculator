import { Item } from "../const/Enums";
import RECIPES from "../const/Recipes";
import { ArrayUtils } from "../utils/array";
import { Assembly } from "./Assembly";
import { Recipe } from "./Recipe";

export type Provision = {
  item: Item;
  amount: number;
};

export class Calculation {
  assemblies: Assembly[];
  finalProduct: Item;
  finalProductAmount: number;
  provisions: Provision[];

  constructor(item: Item, amount: number) {
    this.finalProduct = item;
    this.finalProductAmount = amount;
    this.provisions = [];
    const stack = this.calculateInputs(
      this.finalProduct,
      this.finalProductAmount
    );
    this.commitStack(stack);
    console.log(this);
  }

  calculateInputs(
    item: Item,
    amount: number,
    recipeStack: { [key: number]: number } = {}
  ) {
    let recipe: Recipe = RECIPES[item];
    if (!recipe) {
      throw Error(`Unknown recipe for ${Item[item]} (${item})`);
    }

    if (recipe != null) {
      recipeStack[item] = recipeStack[item]
        ? recipeStack[item] + amount
        : amount;
      const multiplier = recipe.machinesFor(item, amount);
      recipe.inputs.forEach((input, index) => {
        this.calculateInputs(
          input,
          recipe.ratio[index] * multiplier,
          recipeStack
        );
      });
    }

    return recipeStack;
  }

  commitStack(stack: { [key: number]: number }) {
    this.assemblies = [];

    Object.entries(stack).forEach(([item, totalAmount]: [string, number]) => {
      const recipe: Recipe = RECIPES[+item];
      const machineCount = recipe.machinesFor(+item, totalAmount);
      this.assemblies.push(new Assembly(recipe, machineCount));
    });

    this.assemblies.sort((a, b) => b.recipe.outputs[0] - a.recipe.outputs[0]);
  }

  assembliesToString() {
    return this.assemblies.map((assembly) => {
      const meta = assembly.getMachineMetadata();

      return `Need ${meta.machineName} to make ${meta.output} x${meta.outputCount}`;
    });
  }

  printAssemblies() {
    this.assembliesToString().forEach(console.log);
  }

  removeAssembly(index) {
    const assembly: Assembly = this.assemblies[index];
    const meta = assembly.getMachineMetadata();

    this.assemblies = ArrayUtils.remove(this.assemblies, index);
    this.provisions.push({
      item: meta.output,
      amount: meta.outputCount
    });
  }
}
