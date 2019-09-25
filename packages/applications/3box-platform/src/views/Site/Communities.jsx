/* eslint-disable react/jsx-sort-props */
/* eslint-disable new-cap */
import React from 'react';
import { Card, Box, Flex,Menu } from '@horizin/design-system/dist';
import { QuestList } from '@kames/dao-system/dist'
export default ({ styled, ...props }) =>
<Flex>
	<Flex bg='gray' flex={2}>
		<Menu
			vertical
			label='Communities'
			items={[
				{
					label: 'Search',
					to: '/communities'
				},
				{
					label: 'Active',
					to: '/communities/active'
				},
				{
					label: 'Popular',
					to: '/communities/popular'
				},
			]}
		/>
	</Flex>
	<Box p={30} flex={8}>
		<Flex gutter3>
			<QuestList space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
		</Flex>
	</Box>
</Flex>
