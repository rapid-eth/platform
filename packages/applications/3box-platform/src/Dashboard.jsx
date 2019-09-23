
import React from 'react';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Box, Flex, Dashboard, Menu, Portal } from '@horizin/design-system/dist';
import { Aside, MainInner, Header } from '@horizin/design-system/dist/templates/Dashboard';

import {
	BoxLoginButton, BoxProfile, BoxLoginProfile,
	BoxThreadManage, BoxThreadManageDetails, BoxThreadManagePeople,
	BoxSpaceManage, BoxThreadList, BoxQuestPostCreate
} from '@kames/3box-components/dist'

import MenuDefault from './components/MenuDefault'

/**
 * @function DashboardView
 * @param {String} variant Change Dashboard Layout
 * @returns {Object} component
 */
const DashboardView = ({ variant, ...props }) =>
	<Dashboard variant={variant}>
		<Aside>
			<Flex column>
				<Menu
					vertical
					label='Dashboard'
					items={[
						{
							label: 'Dashboard',
							to: '/dashboard'
						},
						{
							label: 'Account',
							to: '/dashboard/account'
						},
						{
							label: 'Credentials',
							to: '/dashboard/credentials',
							children: [
								{
									label: 'Create',
									to: '/dashboard/spaces/create'
								},
							]
						},
						{
							label: 'Spaces',
							to: '/dashboard/spaces',
							children: [
								{
									label: 'Create',
									to: '/dashboard/spaces/create'
								},
							]
						},
						{
							label: 'Threads',
							to: '/dashboard/threads',
							children: [
								{
									label: 'Create',
									to: '/dashboard/threads/create'
								},
							]
						},
					]}
				/>
			</Flex>
		</Aside>

		<Header>
			<MenuDefault />
		</Header>

		<MainInner>
			<Flex minHeight='100%'>
				<Box p={30} flex={10}>
					<BoxWrapper>
						<BoxSpaceManage space='meshhub' />
					</BoxWrapper>
					<BoxWrapper>
						<BoxThreadList space='meshhub' />
					</BoxWrapper>

				</Box>

				<Flex card column minHeight='100%' flex={3} maxWidth='30%'>
					<BoxQuestPostCreate threadName='3box.thread.meshhub.meshhub' />
					<BoxThreadManageDetails threadName='3box.thread.meshhub.meshhub' />
					<BoxThreadManagePeople threadName='3box.thread.meshhub.meshhub' />
				</Flex>

			</Flex>
		</MainInner>
		<Portal />
	</Dashboard>

export default DashboardView