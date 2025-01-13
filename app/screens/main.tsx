import * as React from 'react'
import { Text, Box, Center, VStack, useColorModeValue } from 'native-base'
import ThemeToggle from '../../components/theme-toggle'
// import { App } from '../../components/animated-checkbox'

export default function MainScreeen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
      px={4}
    >
      <VStack space={5} alignItems="center">
        <Box>
          {/* <App/> */}
        </Box>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
