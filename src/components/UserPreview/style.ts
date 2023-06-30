import styled from "styled-components";

const Content = styled.div`
  background-color: #2b3566;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  img {
    width: 140px;
    height: 140px;
    border: 4px solid #644aff;
    border-radius: 50%;
  }

  a {
    text-align: center;
    background-color: #644aff;
    padding: 1rem;
    border-radius: 5px;
    opacity: 0.8;
    transition: 0.3s;
  }

  a:hover {
    opacity: 1;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    fill: #4ed8c7;
    font-size: 1.5rem;
  }

  span {
    color: #9da5d1;
    font-weight: 700;
  }
`;

const Stats = styled.div`
  display: flex;

  div {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  div:first-child {
    border-right: 1px solid #9da5d1;
  }

  p:nth-child(2) {
    background-color: #4ed8c7;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
  }
`;

export { Content, Location, Stats };
