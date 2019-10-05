
/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import { Dashboard, Router, Menu } from '@horizin/design-system/dist';
import { Aside, MainInner, Header } from '@horizin/design-system/dist/templates/Dashboard';

/* --- Local Dependencies --- */
import MenuDashboard from '../static/menus/dashboard'
import { Overview } from '../views/Dashboard'
import { Branding } from "../components";

/**
 * @function DashboardView
 * @param {String} variant Change Dashboard Layout
 * @returns {Object} component
 */
const DashboardView = ({ variant, ...props }) =>
<Dashboard variant={variant}>
	<Aside>
		<Menu vertical label='Dashboard' items={MenuDashboard} />
	</Aside>

	<Header>
		<Branding />
	</Header>

	<MainInner>
		<Router primary={false}>
			<Overview path='/dashboard/*' />
		</Router>
	</MainInner>
</Dashboard>

DashboardView.defaultValues = {
	variant: undefined
}

DashboardView.propTypes = {
	variant: PropTypes.string.isRequired
}

export default DashboardView