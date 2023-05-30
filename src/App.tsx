import React, { useEffect, useMemo, useState } from "react";
import AssembliesRender from "./components/AssembliesRender";
import { Item } from "./const/Enums";
import RECIPES from "./const/Recipes";
import { Calculation } from "./models/Calculation";
import AppStyle from "./components/AppStyle";
import "./styles.css";
import StringUtils from "./utils/string";
import Select from "./components/Select";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

export default function App() {
  const [values, setValues] = useState({
    itemType: "23",
    amount: "15"
  });
  const [calculation, setCalculation] = useState<Calculation>(null);
  const options = useMemo(
    () =>
      Object.keys(RECIPES)
        .map((key) => ({
          label: StringUtils.separateCamelCase(Item[key]),
          value: key
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    []
  );
  const calculateDisabled =
    calculation &&
    String(calculation.finalProduct) === values.itemType &&
    String(calculation.finalProductAmount) === values.amount;

  function calculate() {
    const calculation = new Calculation(
      values.itemType ? +values.itemType : 0,
      values.amount ? +values.amount : 1
    );

    setCalculation(calculation);
  }

  function handleChange(evt) {
    console.log({ evt, value: evt.target.value });
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    });
  }

  useEffect(() => {
    calculate();
    /** @reason We only want to fire calculate on first render */
    // eslint-disable-next-line
  }, []);

  return (
    <AppStyle>
      <h1>Satisfactory Calculator</h1>
      <Select
        name="itemType"
        onChange={handleChange}
        options={options}
        value={values.itemType}
      />
      <TextInput name="amount" onChange={handleChange} value={values.amount} />
      <Button disabled={calculateDisabled} onClick={calculate}>
        Calculate
      </Button>
      <AssembliesRender calculation={calculation} />
    </AppStyle>
  );
}
