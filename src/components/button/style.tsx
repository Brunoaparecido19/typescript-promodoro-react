import styled from 'styled-components';

export const Btn = styled.button`
  background-image: linear-gradient(
    to right,
    #093028 0%,
    #237a57 51%,
    #093028 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #c4c4c4;
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
`;
