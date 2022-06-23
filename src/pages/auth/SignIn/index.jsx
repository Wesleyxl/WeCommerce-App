import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import BackArrow from "../../../assets/sign/back_arrow.svg";
import Envelop from "../../../assets/sign/envelop.svg";
import Lock from "../../../assets/sign/lock.svg";
import { Container, Title, FormArea, InputArea, Input } from "./styles";

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
          style={{ width: 40, height: 40 }}
        >
          <BackArrow width="35px" />
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
        </FormArea>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default SignIn;
