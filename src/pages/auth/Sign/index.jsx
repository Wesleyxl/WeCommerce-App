import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";

import SignLogo from "../../../assets/sign/access_account_dark.svg";
import AppleLogo from "../../../assets/sign/appleLogo.svg";
import FacebookLogo from "../../../assets/sign/facebookLogo.svg";
import GoogleLogo from "../../../assets/sign/googleLogo.svg";
import { AuthButtonLarge } from "../../../components/authButton";
import { Button } from "../../../components/Button";
import {
  AuthButtons,
  Container,
  Divisor,
  Line,
  Register,
  RegisterText,
  Text,
  TextDivisor,
  Title,
} from "./styles";

function Sign() {
  const navigation = useNavigation();

  return (
    <Container>
      <SignLogo width="100%" height="210px" />

      <Title>Vamos Entrar</Title>

      <AuthButtons>
        <TouchableHighlight
          style={{ borderRadius: 15 }}
          onPress={() => {}}
          activeOpacity={1}
          underlayColor="#f1f1f1"
        >
          <AuthButtonLarge text="Continue com Facebook" Logo={FacebookLogo} />
        </TouchableHighlight>

        <TouchableHighlight
          style={{ borderRadius: 15 }}
          onPress={() => {}}
          activeOpacity={1}
          underlayColor="#f1f1f1"
        >
          <AuthButtonLarge text="Continue com Google" Logo={GoogleLogo} />
        </TouchableHighlight>

        <TouchableHighlight
          style={{ borderRadius: 15 }}
          onPress={() => {}}
          activeOpacity={1}
          underlayColor="#f1f1f1"
        >
          <AuthButtonLarge text="Continue com Apple" Logo={AppleLogo} />
        </TouchableHighlight>
      </AuthButtons>

      <Divisor>
        <Line />
        <TextDivisor>Ou</TextDivisor>
        <Line />
      </Divisor>

      <Button
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        text="continue com sua senha"
      />

      <Register>
        <Text>Não tem conta?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <RegisterText>Registre-se</RegisterText>
        </TouchableOpacity>
      </Register>
    </Container>
  );
}

export default Sign;
