import React from 'react';
import { Provider } from 'react-redux';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import store from './redux/store'; //Import the store
import HomeScreen from './screens/home';
import  LanguageScreen  from './screens/language';
import { SettingsScreen } from './screens/settings';
import { ThankYouScreen } from './screens/thankyou';
import { colors } from './styles/index.style';
import { CreditsScreen } from './screens/credits';

const SettingsStack = StackNavigator(
  {
    Settings: {
      screen: SettingsScreen
    },
    ThankYou: {
      screen: ThankYouScreen
    },
    Credits: {
      screen: CreditsScreen
    }
  }, {
    initialRouteName: 'Settings',
  }
)

const languageStack = StackNavigator(
  {
    Language: {
      screen: LanguageScreen
    }
  }, {
    initialRouteName: 'Language',
  }
)

const homeStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  }, {
    initialRouteName: 'Home',
  }
)

const RootStack = TabNavigator(
  {
    Language: {
      screen: languageStack,
    },
    Home: {
      screen: homeStack,
    },
    Settings: {
      screen: SettingsStack,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Settings') {
          iconName = `more-horizontal`;
        } else if (routeName === 'Language') {
          iconName = `message-circle`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <FeatherIcons name={`${iconName}`} size={20} color={tintColor} />;
      },
      // headerTransparent: true,
      headerBackground: colors.header,
      headerStyle: {
        backgroundColor: colors.header,
        fontWeight: 'normal',
        fontSize: 19
      },
      headerTitleStyle: {
        fontWeight: 'normal',
        fontSize: 19
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.tomato,
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,

    initialRouteName: 'Home',
  });

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack>
          <StatusBar
            barStyle="dark-content"
          />
        </RootStack>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
