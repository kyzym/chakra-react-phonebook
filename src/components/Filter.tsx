import { Flex, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import React from 'react';
import { filterList } from '../redux/filter/filtersSlice';
import { useAppDispatch } from '../redux/store';

export const Filter = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    dispatch(filterList(inputValue));
  };

  return (
    <Flex>
      <InputGroup>
        <InputLeftAddon children="Find contacts :" fontSize="1em" />
        <Input
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={handleChange}
          fontSize="1em"
          mb={2}
        />
      </InputGroup>
    </Flex>
  );
};
