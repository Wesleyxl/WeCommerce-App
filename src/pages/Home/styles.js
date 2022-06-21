import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  flex-direction: row;
  justify-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 15px;
`;

export const Title = styled.View`
  height: 100%;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  font-size: 20px;
  color: #616161;
`;

export const ProfileName = styled.Text`
  font-size: 20px;
  color: #181a20;
  font-weight: bold;
`;

export const NotificationButton = styled.View``;

export const FavoriteButton = styled.View``;

export const SearchInput = styled.View`
  width: 380px;
  height: 60px;
  background-color: #f5f5f5;
  margin-top: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 18px auto;
  position: relative;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  color: #181a20;
  padding-left: 40px;
  font-size: 20px;
`;

export const Offers = styled.View`
  width: 100%;
  height: 236px;
  justify-content: space-between;
`;

export const TitleOffers = styled.View`
  width: 100%;
  padding: 0 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextOffers = styled.Text`
  font-size: 20px;
  color: #181a20;
  font-weight: bold;
`;

export const OffersButton = styled.Button`
  font-size: 20px;
  color: #181a20;
  font-weight: bold;
`;

export const OffersImage = styled.Image`
  width: 380px;
  height: 180px;
  margin: 0 auto;
`;

export const Links = styled.View`
  padding: 0 15px;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 10px;
`;

export const Down = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 10px;
`;

export const LinkIcon = styled.View`
  align-items: center;
`;

export const LinkCircle = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #ebebeb;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextLink = styled.Text`
  color: #181a20;
  font-size: 18px;
  font-weight: bold;
`;

export const Popular = styled.View`
  margin-top: 20px;
  width: 100%;
  padding: 0 15px;
`;

export const TitlePopular = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextPopular = styled.Text`
  font-size: 20px;
  color: #181a20;
  font-weight: bold;
`;

export const PopularButton = styled.Button`
  font-size: 20px;
  color: #181a20;
  font-weight: bold;
`;

export const LinksPopular = styled.ScrollView``;

export const ItemPopularBlack = styled.View`
  background: #181a20;
  padding: 7px 10px;
  border-radius: 15px;
  border: 2px solid #181a20;
  margin-right: 10px;
`;

export const ItemPopular = styled.View`
  background: #fff;
  padding: 7px 10px;
  border-radius: 15px;
  border: 2px solid #181a20;
  margin-right: 10px;
`;

export const TextItemPopularBlack = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const TextItemPopular = styled.Text`
  color: #181a20;
  font-size: 20px;
`;
