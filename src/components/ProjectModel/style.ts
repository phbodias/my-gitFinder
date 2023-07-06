import styled from "styled-components";

const Content = styled.div`
  background-color: #0e1129;
  border: solid 1px #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  width: 90%;
  overflow-wrap: break-word;
`;

const Language = styled.div`
  display: flex;
  gap: 5px;

  svg {
    font-size: 20px;
  }

  p {
    font-weight: 700;
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 30px;
  font-size: 15px;

  div {
    display: flex;
    height: 100%;
    border: solid 1px #ffffff;
    border-radius: 3px;
  }

  svg {
    background-color: #52dbc6;
    width: 25px;
    padding: 2px;
    height: 100%;
  }

  p {
    padding: 4px;
  }
`;

const Link = styled.div`
  margin-top: 10px;
  width: 130px;
  height: 30px;
  background-color: #303461;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    gap: 7px;
  }
`;

export { Content, Title, Language, Stats, Link };
