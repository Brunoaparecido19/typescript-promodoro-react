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

            background-image: linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            box-shadow: 0 0 20px #3d0a0a;
            border-radius: 10px;
            display: block;
            margin-top: 20px;


        &:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }



  }

  .working section{
    border-radius: 50px;
background: #EB443B;
box-shadow:  20px 20px 60px #c83a32,
             -20px -20px 30px #480909;
  }
  .working section>.div-timer{
    background: #eb443b;
border-radius: 100%;
box-shadow: inset 9.91px 9.91px 15px #76221E, inset -9.91px -9.91px 15px #FF6659;
  }
  .working section>.div-details{
    background: #eb443b;
border-radius: 15%;
box-shadow: inset 9.91px 9.91px 15px #D63E36, inset -9.91px -9.91px 15px #FF4A40;
  }
  .hidden{
    display: none;
  }
`;
