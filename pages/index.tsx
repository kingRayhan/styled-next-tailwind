import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

const Wrapper = styled.div``;
const Navbar = styled.div`
  ${tw`bg-white shadow h-10 w-full mx-auto flex items-center px-6`}
`;

const index = () => {
  return (
    <Wrapper>
      <Navbar>
        <h2>Logo</h2>
      </Navbar>

      <div tw="flex justify-center items-center h-screen">
        <Card>
          <Input />
          <Input />
          <Input />
          <Button>Signup</Button>
        </Card>
      </div>
    </Wrapper>
  );
};

export default index;
