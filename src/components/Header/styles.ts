import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 78px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    background: white;
    width: 450px;
    height: 50%;
    color: gray;
    padding-left: 8px;
    outline: none;
    border: none;
  }
`;
