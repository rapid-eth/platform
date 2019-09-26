/* eslint-disable react/jsx-sort-props */
/* eslint-disable new-cap */
import './assets/App.css';
import theme from './assets/theme'
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Router } from "@reach/router"
import { Portal } from '@horizin/design-system/dist';
import { BoxProvider } from '@kames/3box-hooks/dist'

// Top Level Routes
import DashboardView from './routes/DashboardRoutes'
import SiteView from './routes/SiteRoutes'

const MasterRoute = props =>
	<ThemeProvider theme={theme}>
		<>
			<BoxProvider>
				{/* Top Level Routing */}
				<Router>

					<SiteView path="/*" />
					<DashboardView path="/dashboard/*" />
				</Router>

				{/* Initialize Portal */}
				<Portal />
			</BoxProvider>
		</>
	</ThemeProvider>

export default MasterRoute;
