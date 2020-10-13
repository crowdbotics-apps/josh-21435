import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile140635Navigator from '../features/UserProfile140635/navigator';
import Tutorial140634Navigator from '../features/Tutorial140634/navigator';
import NotificationList140606Navigator from '../features/NotificationList140606/navigator';
import Settings140605Navigator from '../features/Settings140605/navigator';
import Settings140597Navigator from '../features/Settings140597/navigator';
import UserProfile140595Navigator from '../features/UserProfile140595/navigator';
import UserProfile140564Navigator from '../features/UserProfile140564/navigator';
import Tutorial140563Navigator from '../features/Tutorial140563/navigator';
import NotificationList140535Navigator from '../features/NotificationList140535/navigator';
import Settings140534Navigator from '../features/Settings140534/navigator';
import Settings140526Navigator from '../features/Settings140526/navigator';
import UserProfile140524Navigator from '../features/UserProfile140524/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile140635: { screen: UserProfile140635Navigator },
Tutorial140634: { screen: Tutorial140634Navigator },
NotificationList140606: { screen: NotificationList140606Navigator },
Settings140605: { screen: Settings140605Navigator },
Settings140597: { screen: Settings140597Navigator },
UserProfile140595: { screen: UserProfile140595Navigator },
UserProfile140564: { screen: UserProfile140564Navigator },
Tutorial140563: { screen: Tutorial140563Navigator },
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
