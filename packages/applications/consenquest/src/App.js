
import './assets/App.css';
import theme from './assets/theme'
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import { Router } from "@reach/router"

import { EthersProvider } from '@rapid/ethers-react'
import { BoxProvider } from '@kames/3box-hooks/dist'
// Top Level Routes
import SiteView from './routes/SiteRoutes'
import DashboardView from './routes/DashboardRoutes'
import {
	createHistory,
	LocationProvider,
} from "@reach/router";
import createHashSource from 'hash-source'

let source = createHashSource();
let history = createHistory(source)

export default () => {

	return (
		<EthersProvider>
			<BoxProvider>
			<ThemeProvider theme={theme}>
				<>
				<LocationProvider history={history}>
					<Router >
						<SiteView path="/*" />
						<DashboardView path="/dashboard/*" />
					</Router>
				</LocationProvider>
				</>
			</ThemeProvider>
				</BoxProvider>
			</EthersProvider>
	)
}

