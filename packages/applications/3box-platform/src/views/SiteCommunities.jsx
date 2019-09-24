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

import MenuDefault from '../components/MenuDefault'

import TabsHorizontal from '../components/Tabs'

export default ({ styled, ...props }) =>
	<Tabs>
		<TabsDesignSystem default='card' templates={templates} inputs={templateInputs} />
		<Site>
			<SiteHeader>
				<MenuDefault />
			</SiteHeader>
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