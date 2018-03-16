import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Video from './pages/Video';
import Chat from './pages/Chat';

const Routes = StackNavigator({
  Home: { screen: Home },
  Video: { screen: Video },
  Chat: { screen: Chat },
}, {
  initialRouteName: 'Home',
});

export default Routes;
