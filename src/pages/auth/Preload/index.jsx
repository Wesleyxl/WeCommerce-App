import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import LogoPreload from "../../../assets/weCommerceLogo.svg";
import { Container, LoadingIcon } from "./styles";

function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        // validar token
        navigation.navigate("MainTabs");
      } else {
        navigation.navigate("Sign");
      }
    };
    setTimeout(() => {
      checkToken();
    }, 3000);
  }, []);

  return (
    <Container>
      <LogoPreload width="100%" height="350" />
      <LoadingIcon size="large" color="#181a20" />
    </Container>
  );
}

export default Preload;
