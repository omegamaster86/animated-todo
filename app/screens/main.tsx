import * as React from 'react';
import { Text, Box, Center } from 'native-base';

export default function MainScreeen() {
  return (
    <Center _dark={{bg: "blueGray.900"}} _light={{bg: "blueGray.50"}} flex={1} px={4}>
      <Box><Text>hello</Text></Box>
    </Center>
  );
}