import React from 'react';
import MenuSection from './MenuSection/MenuSection';
import menuItems from './items';
import { Container, Card } from '@horizin/design-system';

import './menu.css';

const Menu = () => {
	return (
		<Container className="menu">
			{menuItems.map(({title, Content}, index) => {
				return (
					<MenuSection key={index} index={index} element={title}>
						<Content></Content>
					</MenuSection>
				);
			})}
		</Container>
	);
};

export default Menu;
