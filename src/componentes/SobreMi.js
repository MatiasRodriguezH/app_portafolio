import React from "react";
import styled from "styled-components";

const SobreMiDiv = styled.div`
  display: flex;
  justify-content: column;
`;

const Titulo = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 35px;
`;

const Texto = styled.p`
  font-family: Helvetica;
  font-size: 19px;
`;

const SobreMi = () => {
  return (
    <SobreMiDiv>
      <Titulo>Sobre Mi</Titulo>
      <Texto>Lorem ajdgflkjsahdfkjhsadkfhsadlkfhasdkjfhlkdsaf</Texto>
    </SobreMiDiv>
  );
};

export default SobreMi;
