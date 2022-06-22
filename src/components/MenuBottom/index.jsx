import React from "react";
import IconHome from "react-native-vector-icons/AntDesign";
import IconBag from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";
import IconWallet from "react-native-vector-icons/Ionicons";

import { Container } from "./styles";

function MenuBottom() {
  return (
    <Container>
      <IconHome name="home" size={25} color="#181a20" />
      <IconBag name="shopping-bag" size={25} color="#181a20" />
      <IconBag name="shopping-cart" size={25} color="#181a20" />
      <IconWallet name="wallet-outline" size={25} color="#181a20" />
      <Icon name="user-o" size={25} color="#181a20" />
    </Container>
  );
}

export default MenuBottom;
