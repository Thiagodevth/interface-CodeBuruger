import styled from "styled-components";

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const LoginImage = styled.img`
  height: 70%;
  border-radius: 10px 0px 0px 10px;`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form{
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 25px;
  }
  `

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12;
  line-height: 14px; 
  color: #ffffff;
  margin-top: 18px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border: ${props => props.error ? '2px solid #CC1717' : 'none'};
  border-radius: 5px;
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a{
    cursor: pointer;
    text-decoration: underline;
  }`

export const ErrorMessege = styled.p`
    font-size: normal;
    font-style: normal;
    font-size: 13px;
    font-weight: 16px;
    color: #cc1717;
    margin-top: 2px;
  `