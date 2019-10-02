
import './assets/App.css';
import theme from './assets/theme'
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import { Router } from "@reach/router"
import { PortalProvider, PortalTree } from '@horizin/react-hooks-portal'
import { EthersProvider } from '@rapid/ethers-react'
import { BoxProvider } from '@kames/3box-hooks/dist'
import { TabProvider } from '@horizin/react-hooks-tabs'
import { Tabs } from '@horizin/react-hooks-tabs'
import { Responsive } from '@horizin/design-system'

// Top Level Routes
import SiteView from './routes/SiteRoutes'
import DashboardView from './routes/DashboardRoutes'
import MobileRoutes from './routes/MobileRoutes'
import {
	createHistory,
	LocationProvider,
} from "@reach/router";
import createHashSource from 'hash-source'

let source = createHashSource();
let history = createHistory(source)

export default () => {
	return (
		<LocationProvider history={history}>
			<ThemeProvider theme={theme}>
			<PortalProvider>
				<EthersProvider>
					<BoxProvider>
						<TabProvider>
						<PortalTree />
						<Responsive
							mobile={<MobileLayout />}
						>
							<>
								<Router >
									<SiteView path="/*" />
									<DashboardView path="/dashboard/*" />
								</Router>
							</>
						</Responsive>
						</TabProvider>
					</BoxProvider>
				</EthersProvider>
			</PortalProvider>
			</ThemeProvider>
		</LocationProvider>
	)
}

const MobileLayout = ({ styled, ...props}) => { 
 return(
	<Router >
		<MobileRoutes path="/*" />
	</Router>
)
}