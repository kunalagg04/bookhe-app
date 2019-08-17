import { createStackNavigator , createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchSreen';

const navigator = createStackNavigator({
  Search : SearchScreen
},{
  /* initialRouteName: 'Screen', */
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);