import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Back() {
  const navigate = useNavigate();
  return <BackBtn onClick={() => navigate(-1)}>Back</BackBtn>;
}

const BackBtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
