import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Beranda TapEat", headerShown: false }}
      />
      <Stack.Screen name="detail/[id]" options={{ title: "Detail Pesanan" }} />
    </Stack>
  );
}
