/* eslint-disable react/jsx-sort-props */
/* eslint-disable new-cap */
import React from 'react';
import { Card, Box, Flex, Image, Paragraph, Hero, Heading, Container, BackgroundImage } from '@horizin/design-system';

// Organisms
import { GuildCreate, ProfileCreate, QuestList } from '@kames/dao-system/dist'
const threadName = process.env.REACT_APP_DEFAULT_SPACE_THREAD_NAME

export default ({ styled, ...props }) =>
<>
{/* <Hero
	title='Join the WebΞ Revolution '
	tagline='Instantly Connect to the Decentralized World'
	summary={false}
	image='https://i2.wp.com/content.consensys.net/wp-content/uploads/2018/10/consensys-home-hero.png?w=1800&quality=100'
	styled={{ color: 'white' }}>
	<Box maxWidth={440} mx='auto'>
		<ProfileCreate />
	</Box>
</Hero> */}

<Container width={[1]} py={40} zIndex={100} >
	<Flex center column width={1}>
		{/* <Box circle bg='white' p={20} boxShadow='shadowBlue' maxWidth={300} mb={-50} mt={0}>
			<Image circle src='https://hackernoon.com/hn-images/1*9fsk1eZQlLrQ-st1nRX1AA.gif' />
		</Box>
		<Box my={[50]} textCenter>
			<Heading xxl noMargin>Become a MESH Citizen</Heading>
			<Heading md thin noMargin>Join the first Million Users in the Ethereum Ecosystem and reap the rewards.</Heading>
		</Box> */}
		<Box py={20} width={1} >
			<Flex column width={1}>
				<Flex gutter3>
					<QuestList
						to={`/quest/${threadName}`}
						threadAddress='/orbitdb/zdpuApMKWj5LturWB6YbkdVSijU2WS3FJGwzbKqMkzjXwQGo5/3box.thread.meshhub.meshhub'
						space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
				</Flex>
			</Flex>
		</Box>
	</Flex>
</Container>

<Box py={150} gradient='blue'>
	<BackgroundImage
		opacity={0.2}
		src='https://images.unsplash.com/photo-1553531889-3836a7ee6d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80' />
	<Container width={[1]} >
		<Flex>
			<Box color='white' flex={3}>
				<Heading xxl thin>Start A Guild</Heading>
				<Heading md thin>Create A Team of Adventurers</Heading>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat nisl diam. In vitae tincidunt tellus. Mauris pharetra ante bibendum eros volutpat, id pulvinar justo pulvinar. Ut lacinia convallis dapibus. Phasellus malesuada arcu ut nisi faucibus euismod. Nullam fringilla efficitur urna euismod hendrerit. Fusce porttitor pulvinar elit ac iaculis. Donec ac tortor quis mi mattis dapibus in at mi. Fusce sed porttitor tortor. Pellentesque rutrum erat quis consectetur pharetra. Aliquam sollicitudin lorem nec nulla rutrum pellentesque. Phasellus eget vehicula augue. Vestibulum ornare tincidunt blandit.
			</Paragraph>
			</Box>

			<Flex center column flex={3}>
				<Box maxWidth='80%' fullWidth mx='auto'>
					<GuildCreate />
				</Box>
			</Flex>

		</Flex>
	</Container>
</Box>
</>
