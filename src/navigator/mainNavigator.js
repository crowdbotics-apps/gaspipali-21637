import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps146873Navigator from '../features/Maps146873/navigator';
import Add-Item146872Navigator from '../features/Add-Item146872/navigator';
import Maps146868Navigator from '../features/Maps146868/navigator';
import UserProfile146864Navigator from '../features/UserProfile146864/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps146873: { screen: Maps146873Navigator },
Add-Item146872: { screen: Add-Item146872Navigator },
Maps146868: { screen: Maps146868Navigator },
UserProfile146864: { screen: UserProfile146864Navigator },

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
