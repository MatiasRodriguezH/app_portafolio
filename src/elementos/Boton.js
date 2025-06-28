import styled from "styled-components";
import { Link } from "react-router-dom";

const Boton = styled(Link)`
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  font-family: "Work Sans";
  color: #ffffff;
  font-size: 20px;
  background-color: transparent;
  padding: 5px 15px;
  margin: 0 0.2rem;
  text-decoration: none;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 2px;
    width: 0%;
    background: #ffffff;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

export default Boton;
