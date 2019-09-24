/* eslint-disable react/jsx-sort-props */
/* eslint-disable new-cap */
import React from 'react';
import { Router } from "@reach/router"
import { Hero, Heading, Span, Container, BackgroundImage } from '@horizin/design-system';
import { Card, Button, Box, Flex, Image, Dashboard, Site, Portal, Menu, Form, Field, Select, Paragraph } from '@horizin/design-system/dist';

// Organisms
import { TabsPhone } from '@horizin/design-system';

import { Tabs, TabsDesignSystem } from '@horizin/react-hooks-tabs'
import { SiteHeader, SiteMain, SiteFooter } from '@horizin/design-system/dist/templates/Site';

import {
	BoxLoginButton, BoxProfile, BoxLoginProfile,
	BoxThreadManage, BoxThreadManageDetails, BoxThreadManagePeople,
	BoxSpaceManage, BoxThreadList, BoxQuestPostCreate,
	BoxThreadPostList,
} from '@kames/3box-components/dist'

import {
	GuildCreate, ProfileCreate,
	QuestList, QuestCreate
} from '@kames/dao-system/dist'

import MenuDefault from './components/MenuDefault'

import TabsHorizontal from './components/Tabs'

export default ({ styled, ...props }) =>
	<Tabs>
		<TabsDesignSystem default='card' templates={templates} inputs={templateInputs} />
		<Site>


			{/* Header */}
			<SiteHeader>
				<MenuDefault />
			</SiteHeader>

			{/* Main */}
			<SiteMain>
				<Hero
					title='Join the WebΞ Revolution '
					tagline='Instantly Connect to the Decentralized World'
					summary={false}
					image='https://i2.wp.com/content.consensys.net/wp-content/uploads/2018/10/consensys-home-hero.png?w=1800&quality=100'
					styled={{ color: 'white' }}>
					<Box maxWidth={440} mx='auto'>
						<ProfileCreate />
					</Box>
				</Hero>

				<Container width={[1]} py={40} zIndex={100} >
					<Flex center column width={1}>
						<Box circle bg='white' p={20} boxShadow='shadowBlue' maxWidth={300} mb={-50} mt={-120}>
							<Image circle src='https://hackernoon.com/hn-images/1*9fsk1eZQlLrQ-st1nRX1AA.gif' />
						</Box>
						<Box my={[50]} textCenter>
							<Heading xxl noMargin>Become a MESH Citizen</Heading>
							<Heading md thin noMargin>Join the first Million Users in the Ethereum Ecosystem and reap the rewards.</Heading>
						</Box>
						<Box py={20} width={1} >
							<Flex column width={1}>
								<TabsHorizontal
									id='master' tabs={tabList} panels={panelList}
									panelComponent={TabsTabPanel}
								/>
							</Flex>
						</Box>


					</Flex>

				</Container>
				<TabsPhone
					title='The Perfect Set of Features'
					list={ListFeaturesPhone}
					image={'dashboardAnalytics'}
				/>

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
								<Box maxWidth={'80%'} fullWidth mx='auto'>
									<GuildCreate />
								</Box>
							</Flex>

						</Flex>
					</Container>
				</Box>
			</SiteMain>

			{/* Footer */}
			<SiteFooter>
				<Container width={[1]} >
					<Heading>Horizin</Heading>
				</Container>
			</SiteFooter>
		</Site>
	</Tabs>



const templates = {
	shadow: {
		boxShadow: '2px 2px 2px #000'
	},
	card: {
		boxShadow: 'none',
		flex: 1,
		textAlign: 'center'
	}
}

const templateInputs = {
	border: {
		borderLeft: '3px',
	},
	card: {
		colorBackgrounds: 'blue',
		colorBackgroundAcitve: 'white',
		boxShadow: 'none',
		flex: 1,
		textAlign: 'center'
	}
}

const tabList = [
	{
		tabId: 'first',
		title: 'First Tab',
		tagline: 'An amazing feature!',
	},
	{
		tabId: 'second',
		title: 'Second Tab',
		tagline: 'An amazing feature!',
	},
	{
		tabId: 'third',
		title: 'Third Tab',
		tagline: 'An amazing feature!',
	},
]

const validation = {
	required: 'Required',
	pattern: {
		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
		message: "invalid email address"
	}
}

const DoThis = values => alert(JSON.stringify(values))
const panelList = [
	{
		tabId: 'first',
		component:
			<>
				<Form callback={DoThis}>
					<Field
						name="name"
						placeholder="Name"
						validation={validation}
					/>
					<Field
						name="job"
						placeholder="Job"
					/>
					<Field
						name="employer"
						placeholder="employer"
					/>
					<Field
						name="biography"
						placeholder="biography"
						as="textarea"
						minHeight={150}
					/>
				</Form>
			</>,
	},
	{
		tabId: 'second',
		component: {
			title: 'Kames',
			tagline: 'Tagline of the Century'
		},
	}
]

const TabsTabPanel = ({ title, tagline, styled, ...props }) =>
	<>
		<Heading thin xl noMargin>{title}</Heading>
		<Heading md heavy >{tagline}</Heading>
	</>


const ListFeatures = [
	{
		tab: {
			title: 'Issue',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',

		},
		panel: <Box width={[1, 1, '170%']}>

		</Box>
	},
	{
		tab: {
			title: 'Verify',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',

		},
		panel: <Box width={[1, 1, '170%']}>

		</Box>
	},
	{
		tab: {
			title: 'Verify',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',

		},
		panel: <Box width={[1, 1, '170%']}>

		</Box>
	}
]

const ListFeaturesPhone = [
	{
		tab: {
			title: 'Universal Login',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',

		},
		panel: <Box width={[1]}>

		</Box>
	},
	{
		tab: {
			title: 'Private Storage',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',

		},
		panel: <Box width={[1]}>

		</Box>
	},
	{
		tab: {
			title: 'Verifiable Credentials',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',

		},
		panel: <Box width={[1]}>

		</Box>
	},
	{
		tab: {
			title: 'Publishing',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',

		},
		panel: <Box width={[1]}>

		</Box>
	},
	{
		tab: {
			title: 'Friends',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
		},
		panel: <Box width={[1]}>

		</Box>
	},
	{
		tab: {
			title: 'Cryptocurrency',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
		},
		panel: <Box width={[1]}>

		</Box>
	},
]