import React from "react";

import { Container, Text } from "./styles";

export function AuthButtonLarge({ text, Logo }) {
  return (
    <Container>
      <Logo />
      <Text>{text}</Text>
    </Container>
  );
}
