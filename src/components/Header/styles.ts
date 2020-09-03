import styled from "styled-components";

import {HiOutlineSearch} from 'react-icons/hi';

export const SearchIcon = styled(HiOutlineSearch)`
  width: 24px;
  height: 24px;
  color: #000;
`

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
    width: 700px;
    height: 60%;
    color: #dcdcdc;
    padding-left: 12px;
    outline: none;
    border: none;
    font-size: 16px;
  }
`;
