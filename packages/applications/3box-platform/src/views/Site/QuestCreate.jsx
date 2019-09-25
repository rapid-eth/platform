/* eslint-disable react/jsx-sort-props */
/* eslint-disable new-cap */
import React from 'react';
import { Box, Flex,Menu, Heading, Paragraph } from '@horizin/design-system/dist';
import { QuestCreate } from '@kames/dao-system/dist'
import { BoxSpaceManage, BoxSpaceList } from '@kames/3box-components/dist'
export default ({ styled, ...props }) =>
<Flex>
	<Flex bg='gray' flex={2}>
		<Menu
			vertical
			label='Guilds'
			items={[
				{
					label: 'Quests',
					to: '/quests'
				},
				{
					label: 'Create',
					to: '/quest/create'
				},
				{
					label: 'Review',
					to: '/quest/review'
				},
			]}
		/>
	</Flex>
	<Flex flex={8}>
		<Box flex={6}  p={30}>
			<QuestCreate
				space='meshhub'
				threadName='meshhub'
			/>
		</Box>
		<Box flex={2}  p={30} bg='gray'>
			<Heading md normal>Create Quest</Heading>
			<Paragraph xs>
				Encourage interactions with the Ethereum blockchain. Create new quests for seasoned veterans and beginningers.
			</Paragraph>
			<ul>
				<li>title</li>
				<li>tagline</li>
				<li>summary</li>
				<li>image</li>
				<li>content</li>
			</ul>
		</Box>
	</Flex>
</Flex>
