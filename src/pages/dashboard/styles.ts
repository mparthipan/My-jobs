import styled from "styled-components";

export const Container = styled.div`
  background-color: #171c28;

  .search-container {
    position: relative;
    display: inline-block;
  }

  #search-input {
    padding: 16px 16px;
    border: 1px solid #ccc;
    border-radius: 40px;
    font-size: 16px;
    width: 490px;
    background: #242d40;
    color: white;
  }

  .icons {
    width: 42px;
    height: 42px;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #303b54;
    padding: 8px 60px;
  }

  .header-wrapper {
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 5;
  }

  .filter-container {
    background-color: #171c28;
    box-shadow: 4px 4px 4px 4px #00000040;
    width: 340px;
    margin: 30px 65px 65px 65px;
    border-radius: 20px;
    padding: 16px;
  }

  .filter-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h5 {
      margin: 0px;
      font-size: 20px;
    }
    span {
      font-size: 12px;
    }
  }

  .filter-action {
    display: flex;
    gap: 12px;
  }

  .custom-checkbox {
    width: 18px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: red;
    outline: none;
  }

  .custom-checkbox:checked {
    background-color: white;
    border-color: #007bff;
  }
  .checkbox-wrapper {
    gap: 12px;
    display: flex;
    align-items: center;
    padding: 4px;
  }
  .horizon-line {
    margin-top: 24px;
    opacity: 0.1;
  }

  .body-wrapper {
    padding: 100px 0px;
    display: flex;
    align-items: flex-start;
  }

  //
  body,
  h4,
  p {
    margin: 0;
  }
  .job-detail-container {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #323c52;
    padding: 0.5rem 1rem;
  }
  .role-container {
    display: flex;
    flex-direction: column;
  }
  h4,
  p {
    color: white;
  }
  .progress-percentage-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 10px;
  }
  .place-details {
    margin-top: 8px;
  }

  .progress-ring {
    width: 60px;
    height: 80px;
    position: relative;
  }

  .progress-ring__circle {
    fill: none;
    stroke: lightseagreen;
    stroke-width: 10;
    stroke-linecap: round;
  }

  .progress-ring__circle--background {
    fill: none;
    stroke: rebeccapurple;
    stroke-width: 5;
  }

  .progress-ring__text {
    font-family: Arial, sans-serif;
    font-size: 24px !important;
    text-anchor: middle;
  }
  .date-container {
    background-color: #525d79;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
  }
  .action-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .apply-button {
    padding: 0.5rem 2rem;
    border-radius: 24px;
    background-color: lightseagreen;
    border: none;
    color: white;
  }
  .card-wrapper {
    overflow: hidden;
    border-radius: 12px;
  }
  .card-container {
    background-color: #1d2331;
    padding: 34px;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .clear-text {
    cursor: pointer;
  }
  .empty-container {
    margin: auto;
    padding: 200px;
  }
  .search-count-container {
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 8px;
  }

  .search-count-container span {
    font-size: 20px !important;
    font-weight: 300;
  }
  .search-count-container h1 {
    font-size: 20px !important;
  }
  .secondary-container {
    width: 58%;
  }
  .body-section {
    background-color: #171c28;
    height: fit-content;
  }
`;
