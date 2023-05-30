import styled from "styled-components";
import { Machine } from "../const/Enums";
import { Assembly } from "../models/Assembly";
import ItemRender from "./ItemRender";
import MachineRender from "./MachineRender";
import Clear from "@mui/icons-material/Clear";

const FlexCell = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto 1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    background: #333;
    position: absolute;
    content: " ";
    height: 1rem;
    width: 500px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const RemoveButton = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: orange;
  color: white;
  font-weight: bold;
  border: none;
  transition: filter 0.1s ease-in-out;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.25);
  }

  &:active {
    filter: brightness(0.75);
  }
`;

type AssemblyRenderProps = {
  assembly: Assembly;
  onRemoveClick: () => void;
};

function AssemblyRender({ assembly, onRemoveClick }: AssemblyRenderProps) {
  const meta = assembly.getMachineMetadata();

  return (
    <Flex>
      <FlexCell>
        <RemoveButton title="Remove this assembly line" onClick={onRemoveClick}>
          <Clear />
        </RemoveButton>
      </FlexCell>
      {assembly.recipe.inputs.length ? (
        <FlexCell>
          {assembly.recipe.inputs.map((input) => (
            <ItemRender
              key={input}
              item={input}
              amount={assembly.recipe.ratioFor(input) * assembly.amount}
            />
          ))}
        </FlexCell>
      ) : null}
      <FlexCell>
        {meta.machine === Machine.MinerMk1 ? (
          <div style={{ display: "flex" }}>
            <MachineRender
              machine={meta.machine}
              amount={meta.machineAmount}
              clock={meta.clock}
              outputRatios={[60]}
              small
            />
            <MachineRender
              machine={Machine.MinerMk2}
              amount={meta.machineAmountX2}
              clock={meta.clockX2}
              outputRatios={[120]}
              small
            />
            <MachineRender
              machine={Machine.MinerMk3}
              amount={meta.machineAmountX4}
              clock={meta.clockX4}
              outputRatios={[240]}
              small
            />
          </div>
        ) : (
          <MachineRender
            machine={meta.machine}
            amount={meta.machineAmount}
            clock={meta.clock}
            inputRatios={meta.inputRatios}
            outputRatios={meta.outputRatios}
          />
        )}
      </FlexCell>
      <FlexCell>
        {assembly.recipe.outputs.map((output) => (
          <ItemRender
            key={output}
            item={output}
            amount={assembly.recipe.ratioFor(output) * assembly.amount}
          />
        ))}
      </FlexCell>
    </Flex>
  );
}

export default AssemblyRender;
