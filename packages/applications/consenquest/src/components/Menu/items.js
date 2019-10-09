import React from 'react';
import List from './List/List';
import {Box} from '@horizin/design-system';
import {
  Button, Link,Flex, Image, Span, Paragraph, HorizontalRule} from '@horizin/design-system'
const ahaItems = [
	'Intro to Ethereum',
	'Digital Scarcity',
	'Composability',
	'Global. Open-Source. Permissionless'
];

const leaderItems = ['Jane', 'Irvan', 'Poe'];

const ReferBlock = () => {
	return (

		<Box flex={1} color='black' textAlign='left' p={20}>
			<Paragraph>tore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
				aut odit aut fugit, sed quia consequuntur magni dolores eos qui
				<br />
				<br />
				ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
				dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
				quia non numquam eius modi tempora incidunt ut labore et dolore
				magnam aliquam quaerat voluptatem. Ut enim ad mini
			</Paragraph>
		</Box>
	);
};

const DevBlock = () => {
	return (
  <Box flex={1} color='black' textAlign='left' p={20}>
		<Paragraph>
			ore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
			fugit, sed quia consequuntur magni dolores eos qui
			<br/>
			<br/>
			ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
			dolorem ipsum quia dolor sit amet, consectetur
		</Paragraph >
	</Box>
	);
};


const menuItems = [
	{
		title: 'Refer a friend',
		Content: ReferBlock
	},
	{
		title: "Find your 'A-ha' moment",
		Content: () => <List items={ahaItems}></List>
	},
	{
		title: 'Leaderboards',
		Content: () => (
			<List className="block" items={leaderItems}></List>
		)
	},
	{
		title: 'Devland',
		Content: DevBlock
	}
];

export default menuItems;
