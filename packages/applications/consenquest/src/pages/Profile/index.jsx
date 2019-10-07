/* --- Global Dependencies --- */
import React from 'react';
import {
  BackgroundImage, Box, HorizontalRule, Flex, Heading, Container, Absolute, Button, Toast,
} from '@horizin/design-system';

import { Profiles } from '@kames/3box-components/dist'

import Page from './page'

export default props => <Profiles address={props.address} component={Page} /> 