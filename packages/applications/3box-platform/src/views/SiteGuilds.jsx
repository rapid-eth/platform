/* eslint-disable react/jsx-sort-props */
/* eslint-disable new-cap */
import React from 'react';
import { Router } from "@reach/router"
import { Hero, Heading, Span, Container, BackgroundImage } from '@horizin/design-system';
import { Card, Button, Box, Flex, Image, Dashboard, Site, Portal, Menu, Form, Field, Select, Paragraph } from '@horizin/design-system/dist';

// Organisms
import { TabsPhone } from '@horizin/design-system';

import { Tabs, TabsDesignSystem } from '@horizin/react-context-tabs'
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
	<Site>
		<SiteHeader>
			<MenuDefault />
		</SiteHeader>
		<Flex>
			<Flex bg='gray' flex={2}>
				<Menu
					vertical
					label='Guilds'
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

