import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  scroll-behavior: smooth;
}
body {
  font-family: sans-serif;
  background: #485563;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #29323c, #485563);
transition: background-color 300ms ease-in-out;
}

.working{
  background: #cb2d3e;
  background: -webkit-linear-gradient(to right, #ef473a, #cb2d3e);
  background: linear-gradient(to right, #ef473a, #cb2d3e);

}
.working button{
    background-image: linear-gradient(
      to right,
      #e53935 0%,
      #e35d5b 51%,
      #e53935 100%
    );
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #000000;
    box-shadow: 0 0 20px #2b323a;
    border-radius: 10px;
    display: block;
    border: none;
    width: 100%;
    margin-top: 30px;

    &:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .working section{
    border-radius: 50px;
background: #EB443B;
box-shadow:  20px 20px 60px #c83a32,
             -20px -20px 30px #480909;
  }
  .working section>div{
    background: #eb443b;
border-radius: 100%;
box-shadow: inset 9.91px 9.91px 15px #76221E, inset -9.91px -9.91px 15px #FF6659;
  }
`;
