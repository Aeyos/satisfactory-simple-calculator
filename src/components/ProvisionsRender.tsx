import styled from "styled-components";
import { Provision } from "../models/Calculation";
import ItemRender from "./ItemRender";

type ProvisionsRenderProps = {
  provisions: Provision[];
};

const Wrapper = styled.div`
  margin: auto;
  display: inline-block;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function ProvisionsRender({ provisions }: ProvisionsRenderProps) {
  if (!provisions?.length) return null;

  return (
    <Wrapper>
      <h1>Provided</h1>
      <Flex>
        {provisions.map((provision) => (
          <div>
            <ItemRender
              key={provision.item}
              amount={provision.amount}
              item={provision.item}
            />
          </div>
        ))}
      </Flex>
    </Wrapper>
  );
}

export default ProvisionsRender;
