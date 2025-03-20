import { StatusBar } from 'react-native';
import '../global.css';
import { Provider } from 'react-redux';

import { Stack } from 'expo-router';
import { reduxStore } from '~/store/reduxStore';

export default function Layout() {
  return (
    <Provider store={reduxStore}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </Provider>
  );
}
