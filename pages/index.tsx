import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Wrapper = styled.div`
  ${tw`bg-indigo-300 h-56 text-center`}

  h1 {
    &:hover {
      ${tw`shadow`}
    }
  }
`;

const index = () => {
  return (
    <Wrapper>
      <h1 tw="text-5xl uppercase bg-white inline-block shadow-2xl transition-all duration-300 rounded-md mt-5 px-5 text-primary border-b-8">
        hello
      </h1>
    </Wrapper>
  );
};

export default index;
