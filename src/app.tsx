import './global.css'

import { StatusBar, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import RootLayout from './app/_layout'

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootLayout />
    </NavigationContainer>
  )
}
