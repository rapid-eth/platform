import React from "react";
import "./listItem.css";
import { Button,Paragraph, Image, Box, Flex, Icons} from '@horizin/design-system';
// import icon from ".images/quest.png";
const ListItem = props => {
  const { icon, main, extra } = props;
  return (
    <Box cardHover color="black" width="100%" className="list-item" padding={10} >
      <Flex alignCenter justifyBetween flex={1} width={1}>
      {icon ? (
        <Image src={icon}  alt="user in leaderboard" />
      ) : (
        <Image  variant='avatar'className="item-icon" />
      )}
      <Paragraph className ="leader-main">{main}</Paragraph>
      <Paragraph className ="leader-extra">{extra}</Paragraph>
      </Flex>
    </Box>
  );
};

export default ListItem;
