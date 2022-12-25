import { useDispatch } from 'react-redux';
import { filterList } from 'redux/filter/filtersSlice';
import { Flex, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
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
