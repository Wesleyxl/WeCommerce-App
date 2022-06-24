import React, { useState } from "react";
import { TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconVest from "react-native-vector-icons/FontAwesome5";
import IconFood from "react-native-vector-icons/MaterialCommunityIcons";
import IconToys from "react-native-vector-icons/MaterialIcons";

import OffersBanner from "../../assets/home/offers.png";
import Profile from "../../assets/home/profileImage.jpeg";
import Bolsa from "../../assets/product/bolsa.jpg";
import Microfone from "../../assets/product/microfone.jpg";
import Roupa from "../../assets/product/Roupa.jpg";
import Sapato from "../../assets/product/Sapato.jpg";
import Product from "../../components/Product";
import {
  Container,
  Header,
  Left,
  Right,
  ProfileImage,
  Title,
  WelcomeText,
  ProfileName,
  NotificationButton,
  FavoriteButton,
  SearchInput,
  Input,
  Offers,
  TitleOffers,
  TextOffers,
  OffersButton,
  OffersImage,
  LinkIcon,
  Top,
  Links,
  Down,
  LinkCircle,
  TextLink,
  TitlePopular,
  Popular,
  TextPopular,
  PopularButton,
  LinksPopular,
  ItemPopular,
  TextItemPopular,
  ItemPopularBlack,
  TextItemPopularBlack,
  ProductArea,
} from "./styles";

function Order() {
  const [text, onChangeText] = useState(null);

  return (
    <Container>
      <Header>
        <Left>
          <ProfileImage source={Profile} />
          <Title>
            <WelcomeText>Bom Dia</WelcomeText>
            <ProfileName>Wesley Alves</ProfileName>
          </Title>
        </Left>
        <Right>
          <NotificationButton>
            <Icon.Button
              name="bell-o"
              size={20}
              color="#181a20"
              backgroundColor="#ffffff00"
            />
          </NotificationButton>
          <FavoriteButton>
            <Icon.Button
              name="heart-o"
              size={20}
              color="#181a20"
              backgroundColor="#ffffff00"
            />
          </FavoriteButton>
        </Right>
      </Header>

      <SearchInput>
        <Icon
          name="search"
          size={20}
          color="#c4c4c4"
          style={{ position: "absolute", left: 15 }}
        />
        <Input
          placeholder="Buscar"
          value={text}
          onChangeText={onChangeText}
          placeholderTextColor="#c4c4c4"
        />
      </SearchInput>

      <Offers>
        <TitleOffers>
          <TextOffers>Ofertas especiais</TextOffers>
          <OffersButton title="Ver tudo" color="#181a20" />
        </TitleOffers>
        <OffersImage source={OffersBanner} />
      </Offers>

      <Links>
        <Top>
          <TouchableHighlight>
            <LinkIcon>
              <LinkCircle>
                <IconVest name="vest" size={25} color="#181a20" />
              </LinkCircle>
              <TextLink>Roupas</TextLink>
            </LinkIcon>
          </TouchableHighlight>
          <TouchableHighlight>
            <LinkIcon>
              <LinkCircle>
                <Icon name="search" size={25} color="#181a20" />
              </LinkCircle>
              <TextLink>Sapatos</TextLink>
            </LinkIcon>
          </TouchableHighlight>
          <TouchableHighlight>
            <LinkIcon>
              <LinkCircle>
                <Icon name="shopping-bag" size={25} color="#181a20" />
              </LinkCircle>
              <TextLink>Bolsas</TextLink>
            </LinkIcon>
          </TouchableHighlight>
          <TouchableHighlight>
            <LinkIcon>
              <LinkCircle>
                <Icon name="desktop" size={25} color="#181a20" />
              </LinkCircle>
              <TextLink>Eletrônicos</TextLink>
            </LinkIcon>
          </TouchableHighlight>
        </Top>

        <Down>
          <TouchableHighlight>
            <LinkIcon>
              <LinkCircle>
                <Icon name="clock-o" size={25} color="#181a20" />
              </LinkCircle>
              <TextLink>Relógios</TextLink>
            </LinkIcon>
          </TouchableHighlight>
          <TouchableHighlight>
            <LinkIcon>
              <LinkCircle>
                <Icon name="diamond" size={25} color="#181a20" />
              </LinkCircle>
              <TextLink>Joias</TextLink>
            </LinkIcon>
          </TouchableHighlight>
          <TouchableHighlight>
            <LinkIcon>
              <LinkCircle>
                <IconFood name="food-outline" size={25} color="#181a20" />
              </LinkCircle>
              <TextLink>Comida</TextLink>
            </LinkIcon>
          </TouchableHighlight>
          <TouchableHighlight>
            <LinkIcon>
              <LinkCircle>
                <IconToys name="toys" size={25} color="#181a20" />
              </LinkCircle>
              <TextLink>Brinquedos</TextLink>
            </LinkIcon>
          </TouchableHighlight>
        </Down>
      </Links>

      <Popular>
        <TitlePopular>
          <TextPopular>Mais Popular</TextPopular>
          <PopularButton title="Ver tudo" color="#181a20" />
        </TitlePopular>

        <LinksPopular horizontal>
          <TouchableHighlight>
            <ItemPopularBlack>
              <TextItemPopularBlack>Tudo</TextItemPopularBlack>
            </ItemPopularBlack>
          </TouchableHighlight>

          <TouchableHighlight>
            <ItemPopular>
              <TextItemPopular>Roupas</TextItemPopular>
            </ItemPopular>
          </TouchableHighlight>

          <TouchableHighlight>
            <ItemPopular>
              <TextItemPopular>Sapatos</TextItemPopular>
            </ItemPopular>
          </TouchableHighlight>

          <TouchableHighlight>
            <ItemPopular>
              <TextItemPopular>Bolsas</TextItemPopular>
            </ItemPopular>
          </TouchableHighlight>

          <TouchableHighlight>
            <ItemPopular>
              <TextItemPopular>Eletrônicos</TextItemPopular>
            </ItemPopular>
          </TouchableHighlight>

          <TouchableHighlight>
            <ItemPopular>
              <TextItemPopular>Relógios</TextItemPopular>
            </ItemPopular>
          </TouchableHighlight>

          <TouchableHighlight>
            <ItemPopular>
              <TextItemPopular>Joias</TextItemPopular>
            </ItemPopular>
          </TouchableHighlight>

          <TouchableHighlight>
            <ItemPopular>
              <TextItemPopular>Comida</TextItemPopular>
            </ItemPopular>
          </TouchableHighlight>

          <TouchableHighlight>
            <ItemPopular>
              <TextItemPopular>Brinquedos</TextItemPopular>
            </ItemPopular>
          </TouchableHighlight>
        </LinksPopular>
      </Popular>

      <ProductArea>
        <Product
          image={Bolsa}
          title="Bolsa de couro"
          note="4,5"
          sales="8,567"
          price="45,00"
        />
        <Product
          image={Roupa}
          title="Bolsa de couro"
          note="4,5"
          sales="8,567"
          price="45,00"
        />
        <Product
          image={Sapato}
          title="Bolsa de couro"
          note="4,5"
          sales="8,567"
          price="45,00"
        />
        <Product
          image={Microfone}
          title="Bolsa de couro"
          note="4,5"
          sales="8,567"
          price="45,00"
        />
      </ProductArea>
    </Container>
  );
}

export default Order;
