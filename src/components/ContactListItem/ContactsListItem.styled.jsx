import styled from 'styled-components';

export const Contact = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

export const DelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;

  &:hover {
    background-color: #e2e5e8;
  }
  &:active {
    background-color: #bdbdbd;
  }
  &:disabled {
    color: black;
  }
`;

export const Name = styled.p`
  margin-left: 10%;
  width: 45%;
  font-size: 18px;
  font-weight: 500;
`;
export const Number = styled.p`
  margin-right: auto;
  font-size: 18px;
  font-weight: 500;
`;
