import { StatusBar } from 'react-native';
import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
