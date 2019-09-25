/* eslint-disable react/jsx-sort-props */
/* eslint-disable new-cap */
import React from 'react';
import { Card, Box, Flex,Menu } from '@horizin/design-system/dist';
import { QuestList } from '@kames/dao-system/dist'
const threadName = process.env.REACT_APP_DEFAULT_SPACE_THREAD_NAME

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
	<Box p={30} flex={8}>
		<Flex gutter3>
				<QuestList
					to={`/quest/${threadName}`}
					threadAddress='/orbitdb/zdpuApMKWj5LturWB6YbkdVSijU2WS3FJGwzbKqMkzjXwQGo5/3box.thread.meshhub.meshhub'
					space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
		</Flex>
	</Box>
</Flex>
