import React from "react";
import styled from "styled-components/native";

import HomeIconWhite from "../../assets/bar/home-regular-white.svg";
import HomeIcon from "../../assets/bar/home-regular.svg";
import ShoppingIcon from "../../assets/bar/shopping-bag.svg";
import CartIcon from "../../assets/bar/shopping-cart-outlined.svg";
import UserIcon from "../../assets/bar/user.svg";
import WalletIcon from "../../assets/bar/wallet-line.svg";

const TabArea = styled.View`
  height: 80px;
  background-color: #fff;
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  padding-top: 10px;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.state === 2 ? "#181a20" : "#fff")};
  border-radius: 40px;
  border: 1px solid #5b5b5b;
  margin-top: -30px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #000;
`;

export default function CustomTabBar({ state, navigation }) {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  const logout = () => {
    navigation.reset({
      routes: [{ name: "Sign" }],
    });
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Order")}>
        <ShoppingIcon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          width="24"
          height="24"
          color="#000"
        />
        <Text
          style={{
            opacity: state.index === 0 ? 1 : 0.5,
            fontWeight: state.index === 0 ? "bold" : "normal",
          }}
        >
          Pedidos
        </Text>
      </TabItem>
      <TabItem onPress={() => goTo("Cart")}>
        <CartIcon
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
          width="24"
          height="24"
          color="#000"
        />
        <Text
          style={{
            opacity: state.index === 1 ? 1 : 0.5,
            fontWeight: state.index === 1 ? "bold" : "normal",
          }}
        >
          Carrinho
        </Text>
      </TabItem>
      <TabItemCenter onPress={() => goTo("Home")} state={state.index}>
        {state.index === 2 ? (
          <HomeIconWhite width="24" height="24" />
        ) : (
          <HomeIcon
            style={{ opacity: state.index === 2 ? 1 : 0.5 }}
            width="24"
            height="24"
          />
        )}

        <Text
          style={{
            opacity: state.index === 2 ? 1 : 0.5,
            color: state.index === 2 ? "#fff" : "#000",
            fontWeight: state.index === 2 ? "bold" : "normal",
          }}
        >
          Início
        </Text>
      </TabItemCenter>
      <TabItem onPress={() => goTo("Wallet")}>
        <WalletIcon
          style={{ opacity: state.index === 3 ? 1 : 0.5 }}
          width="24"
          height="24"
          color="#000"
        />
        <Text
          style={{
            opacity: state.index === 3 ? 1 : 0.5,
            fontWeight: state.index === 3 ? "bold" : "normal",
          }}
        >
          Carteira
        </Text>
      </TabItem>
      <TabItem onPress={() => logout()}>
        <UserIcon
          style={{ opacity: state.index === 4 ? 1 : 0.5 }}
          width="24"
          height="24"
          color="#000"
        />
        <Text
          style={{
            opacity: state.index === 4 ? 1 : 0.5,
            fontWeight: state.index === 4 ? "bold" : "normal",
          }}
        >
          Perfil
        </Text>
      </TabItem>
    </TabArea>
  );
}
