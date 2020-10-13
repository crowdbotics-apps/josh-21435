import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList140535Navigator from '../features/NotificationList140535/navigator';
import Settings140534Navigator from '../features/Settings140534/navigator';
import Settings140526Navigator from '../features/Settings140526/navigator';
import UserProfile140524Navigator from '../features/UserProfile140524/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList140535: { screen: NotificationList140535Navigator },
Settings140534: { screen: Settings140534Navigator },
Settings140526: { screen: Settings140526Navigator },
UserProfile140524: { screen: UserProfile140524Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
