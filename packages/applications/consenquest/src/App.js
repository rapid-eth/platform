
import './assets/App.css';
import theme from './assets/theme'
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Router } from "@reach/router"

// Top Level Routes
import SiteView from './routes/SiteRoutes'
import DashboardView from './routes/DashboardRoutes'

export default () =>
	<ThemeProvider theme={theme}>
		<>
			<Router>
				<SiteView path="/*" />
				<DashboardView path="/dashboard/*" />
			</Router>
		</>
	</ThemeProvider>