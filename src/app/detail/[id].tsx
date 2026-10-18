import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "../styles";

export default function DetailFood() {
  const router = useRouter();

  // Mengambil parameter URL dari route dinamis[cite: 20, 24]
  const { name, price, emoji, description } = useLocalSearchParams();

  const handleConfirmOrder = () => {
    Alert.alert("Sukses", `Pesanan ${name} berhasil diproses!`);

    // Implementation of replace()[cite: 31, 40]
    router.replace("/");
  };

  return (
    <View style={[styles.container, { paddingTop: 20 }]}>
      <View
        style={[
          styles.foodCard,
          { flexDirection: "column", alignItems: "center", padding: 20 },
        ]}
      >
        <Text style={{ fontSize: 60, marginBottom: 15 }}>{emoji}</Text>
        <Text style={styles.foodName}>{name}</Text>
        <Text
          style={[
            styles.foodDescription,
            { textAlign: "center", marginVertical: 10 },
          ]}
        >
          {description}
        </Text>
        <Text style={[styles.price, { fontSize: 20, marginVertical: 10 }]}>
          Rp {Number(price).toLocaleString("id-ID")}
        </Text>
      </View>

      <View style={{ marginTop: 20, gap: 10 }}>
        {/* Implementation of replace() for action confirmation[cite: 31, 40] */}
        <Pressable style={styles.button} onPress={handleConfirmOrder}>
          <Text
            style={[
              styles.buttonText,
              { textAlign: "center", paddingVertical: 4 },
            ]}
          >
            Konfirmasi Pesanan
          </Text>
        </Pressable>

        {/* Implementation of back()[cite: 31, 40] */}
        <Pressable
          style={[styles.button, { backgroundColor: "#888888" }]}
          onPress={() => router.back()}
        >
          <Text
            style={[
              styles.buttonText,
              { textAlign: "center", paddingVertical: 4 },
            ]}
          >
            Batal / Kembali
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
