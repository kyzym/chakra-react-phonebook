import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const FilterLabel = styled.label`
  display: flex;
  gap: 6px;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 500;
`;

export const FilterInput = styled(DebounceInput)`
  border-radius: 4px;
  width: 250px;
  height: 20px;
`;
