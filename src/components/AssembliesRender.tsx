import React from "react";
import useHackyUpdate from "../hooks/useHackyUpdate";
import { Calculation } from "../models/Calculation";
import AssemblyRender from "./AssemblyRender";
import ProvisionsRender from "./ProvisionsRender";

type AssembliesRenderProps = {
  calculation: Calculation;
};

function AssembliesRender({ calculation }: AssembliesRenderProps) {
  const update = useHackyUpdate();

  const removeAssembly = (index) => () => {
    calculation.removeAssembly(index);
    update();
  };

  return calculation ? (
    <div>
      {calculation.assemblies.map((assembly, index) => (
        <AssemblyRender
          key={assembly.getMachineMetadata().output}
          assembly={assembly}
          onRemoveClick={removeAssembly(index)}
        />
      ))}
      <ProvisionsRender provisions={calculation.provisions} />
    </div>
  ) : null;
}

export default AssembliesRender;
