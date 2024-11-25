import { Card } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const Input = styled.input`
  margin: 20px 0;
  padding: 10px;
  width: 80%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CountryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const StyledCard = styled(Card)`
  width: 300px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  flex-wrap: wrap;
`;

export const PageCenter = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 48px;
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

export const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const CountryList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
