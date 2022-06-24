import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";

import AppleLogo from "../../../assets/sign/appleLogo.svg";
import BackArrow from "../../../assets/sign/back_arrow.svg";
import Envelop from "../../../assets/sign/envelop.svg";
import FacebookLogo from "../../../assets/sign/facebookLogo.svg";
import GoogleLogo from "../../../assets/sign/googleLogo.svg";
import Lock from "../../../assets/sign/lock.svg";
import { AuthButtonSmall } from "../../../components/authButton";
import {
  Container,
  Title,
  FormArea,
  InputArea,
  Input,
  Submit,
  LoginText,
  ForgotText,
  Divisor,
  Line,
  TextDivisor,
  SignUpText,
  SignUpTextBold,
  SignUpArea,
  AuthArea,
} from "./styles";

function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Sign");
          }}
          style={{ justifyContent: "center", paddingLeft: 15 }}
        >
          <BackArrow width="35px" height="35px" />
          <Text>Voltar</Text>
        </TouchableOpacity>
        <Title>Preencha os campos corretamente</Title>

        <FormArea>
          <InputArea>
            <Envelop width="35px" style={{ position: "absolute", left: 5 }} />
            <Input
              keyboardType="email-address"
              placeholder="Digite seu email"
              placeholderTextColor="#ababab"
              value={email}
              onChangeText={setEmail}
            />
          </InputArea>
          <InputArea>
            <Lock width="35px" style={{ position: "absolute", left: 5 }} />
            <Input
              keyboardType="default"
              secureTextEntry
              placeholder="Digite sua senha"
              placeholderTextColor="#ababab"
              value={password}
              onChangeText={setPassword}
            />
          </InputArea>

          <Submit onPress={() => navigation.navigate("MainTabs")}>
            <LoginText>Logar</LoginText>
          </Submit>

          <ForgotText>Esqueceu a senha?</ForgotText>
        </FormArea>

        <Divisor>
          <Line />
          <TextDivisor>ou continue com</TextDivisor>
          <Line />
        </Divisor>

        <AuthArea>
          <TouchableOpacity>
            <AuthButtonSmall Logo={FacebookLogo} />
          </TouchableOpacity>

          <TouchableOpacity>
            <AuthButtonSmall Logo={GoogleLogo} />
          </TouchableOpacity>

          <TouchableOpacity>
            <AuthButtonSmall Logo={AppleLogo} />
          </TouchableOpacity>
        </AuthArea>

        <SignUpArea>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <SignUpText>
              Não tem conta? <SignUpTextBold>Registre-se</SignUpTextBold>
            </SignUpText>
          </TouchableOpacity>
        </SignUpArea>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default SignIn;
