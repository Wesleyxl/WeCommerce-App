import styled from "styled-components/native";

export const Container = styled.View`
  width: 180px;
  height: 290px;
  margin: 5px 0;
`;

export const ImageArea = styled.View`
  width: 180px;
  height: 180px;
  position: relative;
  border-radius: 30px;
`;

export const Logo = styled.View`
  position: absolute;
  width: 28px;
  height: 28px;
  background: #181a20;
  border-radius: 14px;
  right: 10px;
  top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ImageProduct = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 30px;
`;

export const Title = styled.Text`
  color: #181a20;
  font-weight: bold;
  font-size: 20px;
  margin: 15px 5px 5px;
  text-align: center;
`;

export const Description = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Stars = styled.Text`
  color: #181a20;
  font-weight: bold;
  font-size: 18px;
`;

export const Line = styled.View`
  width: 3px;
  height: 15px;
  background: #181a20;
`;

export const SalesArea = styled.View`
  background: #d9d9d9;
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 5px;
`;

export const Sales = styled.Text`
  color: #181a20;
  font-weight: bold;
  font-size: 14px;
`;

export const Price = styled.Text`
  font-size: 24px;
  color: #181a20;
  font-weight: bold;
  text-align: center;
`;
