import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#101010',
        },
      }}
    >
      <Stack.Screen name='index' />
    </Stack>
  );
}
