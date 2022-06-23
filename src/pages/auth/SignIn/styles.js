import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #181a20;
  font-weight: bold;
`;

export const FormArea = styled.View`
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 380px;
  height: 60px;
  position: relative;
  justify-content: center;
  align-items: center;
  background: #fbfbfb;
  border-radius: 15px;
  margin: 12px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  padding-left: 50px;
  color: #181a20;
  font-size: 18px;
`;
