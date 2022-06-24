import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: #181a20;
  font-weight: bold;
  width: 100%;
  padding: 0 15px;
  margin-top: 61px;
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

export const Submit = styled.TouchableOpacity`
  width: 380px;
  height: 60px;
  background: #181a20;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 30px;
`;

export const LoginText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`;

export const ForgotText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Divisor = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 60px 0 30px;
`;

export const TextDivisor = styled.Text`
  font-size: 18px;
  color: #ababab;
  font-weight: bold;
  margin: 0 10px;
`;

export const Line = styled.View`
  width: 115px;
  height: 1px;
  background: #ababab;
`;

export const AuthArea = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SignUpArea = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;

export const SignUpText = styled.Text`
  font-size: 20px;
  color: #ababab;
`;

export const SignUpTextBold = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #181a20;
`;
