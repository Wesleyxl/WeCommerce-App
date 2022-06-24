import React from "react";

import { ContainerLarge, Text, ContainerSmall } from "./styles";

export function AuthButtonLarge({ text, Logo }) {
  return (
    <ContainerLarge>
      <Logo />
      <Text>{text}</Text>
    </ContainerLarge>
  );
}

export function AuthButtonSmall({ Logo }) {
  return (
    <ContainerSmall>
      <Logo />
    </ContainerSmall>
  );
}
