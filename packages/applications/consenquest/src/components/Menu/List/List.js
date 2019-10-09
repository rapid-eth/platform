import React from "react";
import ListItem from "./ListItem/ListItem";
import { Button,Paragraph, Image, Box, Flex, Icons} from '@horizin/design-system';

import "./list.css";

const List = props => {
  const { items } = props;

  return (
    <Box width="80%">
      <Flex column>
      {items.map((element, index) => {
        return (
          <ListItem padding={10}  key={index} main={element}></ListItem>
        );
      })}
      </Flex>
    </Box>
  );
};

export default List;
