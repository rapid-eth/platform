
import React from 'react';
import PropTypes from 'prop-types'
import { Dashboard, Menu, Portal, Router } from '@horizin/design-system/dist';
import { Aside, MainInner, Header } from '@horizin/design-system/dist/templates/Dashboard';

import { Credentials, Space, Spaces, Threads, Quests, DashboardSystem } from '../views/Dashboard'
import MenuDashboard from '../static/menus/dashboard'
import MenuDefault from '../components/MenuDefault'

/**
 * @function DashboardView
 * @param {String} variant Change Dashboard Layout
 * @returns {Object} component
 */
const DashboardView = ({ variant, ...props }) =>
<Dashboard variant={variant}>
	<Aside>
		<Menu vertical label='Dashboard' items={MenuDashboard}/>
	</Aside>

	<Header>
		<MenuDefault />
	</Header>

	<MainInner>
    <Router>
      <DashboardSystem path='/' />
      <Credentials path='/credentials' />
      <Spaces path='/spaces/*' />
      <Threads path='/threads/*' />
      <Space path='/space/:id' />
      <Quests path='/quests' />
    </Router>
	</MainInner>

	<Portal />
</Dashboard>

Dashboard.propTypes = {
	variant: PropTypes.string
}

export default DashboardView