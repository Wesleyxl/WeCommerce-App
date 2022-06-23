import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";

import BackArrow from "../../../assets/sign/back_arrow.svg";
import { Container, Text } from "./styles";

function SignUp() {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sign");
        }}
        style={{ width: 40, height: 40 }}
      >
        <BackArrow width="35px" />
      </TouchableOpacity>
      <Text>SignUp</Text>
    </Container>
  );
}

export default SignUp;
