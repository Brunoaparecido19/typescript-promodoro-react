import styled from 'styled-components';

export const PomodoroMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const PomodoroContainer = styled.section`
  border-radius: 50px;
  background: #333b44;
  box-shadow: 20px 20px 60px #2b323a, -20px -20px 60px #3b444e;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: #333b44;
  border-radius: 15%;
  box-shadow: inset 9.91px 9.91px 15px #2e363e,
    inset -9.91px -9.91px 15px #38404a;
`;
export const DescriptionDetails = styled.p`
  color: #d5d5d5;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-inline: 20px;
`;
export const Title = styled.h1`
  color: #d5d5d5;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;
