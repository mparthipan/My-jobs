import styled from "styled-components";

export const Container = styled.div`
  .tile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .left {
      margin: 5px 0px;
      padding: 5px;
      cursor: pointer;
      display: flex;
    }
    .right {
      display: flex;
    }
  }
`;
