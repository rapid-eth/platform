
import './assets/App.css';
import theme from './assets/theme'
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import { Router } from "@reach/router"

import { ethers, EthersProvider } from '@rapid/ethers-react'
import { BoxProvider } from '@kames/3box-hooks/dist'
// Top Level Routes
import SiteView from './routes/SiteRoutes'
import DashboardView from './routes/DashboardRoutes'

console.log(ethers, 'ethers')
export default () => {

	return (
	<EthersProvider>
		<BoxProvider>
	<ThemeProvider theme={theme}>
		<>
			<Router>
				<SiteView path="/*" />
				<DashboardView path="/dashboard/*" />
			</Router>
		</>
	</ThemeProvider>
		</BoxProvider>
	</EthersProvider>
	)
}

