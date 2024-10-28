import { Text } from 'react-native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

function Home({ navigation }: NativeStackScreenProps<any>) {
  return (
    <Text className='bg-slate-50 text-center' onPress={() => navigation.navigate('Details')}>
      hello
    </Text>
  )
}

function Details() {
  return <Text className='bg-slate-50 text-center'>Details</Text>
}
