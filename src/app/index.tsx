import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import { fetchMenuFromAPI } from "../services/foodService";
import type { Food } from "../types/food";

function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

export default function Index() {
  const router = useRouter();

  // Menyimpan data makanan dari API
  const [foods, setFoods] = useState<Food[]>([]);

  // Menyimpan kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  // Menyimpan status loading dan error
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Mengambil data menu dari External API
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchMenuFromAPI()
      .then((response) => {
        setFoods(response.data);
      })
      .catch((err) => {
        setError(
          err instanceof Error
            ? err.message
            : "Terjadi kesalahan saat mengambil menu",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter makanan berdasarkan kategori
  const filteredFoods = foods.filter((food) => {
    if (selectedCategory === "Semua") return true;
    return food.category === selectedCategory;
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>TapEat</Text>
          <Text style={{ fontSize: 13, color: "#777777", marginTop: 3 }}>
            Kantin Teknik UMM
          </Text>
        </View>

        <View style={styles.logoIcon}>
          <Text style={styles.logoEmoji}>🍴</Text>
        </View>
      </View>

      {/* WELCOME */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeSmall}>Selamat datang di TapEat 👋</Text>
        <Text style={styles.welcomeTitle}>
          Makan enak,{"\n"}tanpa antre lama.
        </Text>
        <Text style={styles.welcomeDescription}>
          Temukan makanan dan minuman favoritmu di kantin dengan cara yang lebih
          mudah.
        </Text>
      </View>

      {/* FILTER CATEGORY */}
      <View
        style={{
          flexDirection: "row",
          marginBottom: 16,
          gap: 8,
        }}
      >
        {["Semua", "Makanan", "Minuman"].map((cat) => (
          <Pressable
            key={cat}
            style={[
              styles.menuBadge,
              selectedCategory === cat && {
                backgroundColor: "#171717",
              },
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.menuBadgeText,
                selectedCategory === cat && {
                  color: "#FFFFFF",
                },
              ]}
            >
              {cat}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* MENU HEADER */}
      <View style={styles.menuHeader}>
        <View>
          <Text style={styles.sectionTitle}>Menu Pilihan</Text>
          <Text style={styles.sectionSubtitle}>
            Menampilkan kategori: {selectedCategory}
          </Text>
        </View>

        <View style={styles.menuBadge}>
          <Text style={styles.menuBadgeText}>{filteredFoods.length} Menu</Text>
        </View>
      </View>

      {/* LOADING */}
      {loading && (
        <Text style={{ textAlign: "center", marginVertical: 20 }}>
          Sedang memuat menu...
        </Text>
      )}

      {/* ERROR */}
      {!loading && error && (
        <Text
          style={{
            color: "red",
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          {error}
        </Text>
      )}

      {/* EMPTY MENU */}
      {!loading && !error && filteredFoods.length === 0 && (
        <Text style={{ textAlign: "center", marginVertical: 20 }}>
          Tidak ada menu pada kategori ini.
        </Text>
      )}

      {/* DAFTAR MAKANAN */}
      {!loading &&
        !error &&
        filteredFoods.map((food) => (
          <View key={food.id} style={styles.foodCard}>
            <View style={styles.foodIcon}>
              <Text style={styles.foodEmoji}>{food.emoji}</Text>
            </View>

            <View style={styles.foodContent}>
              <Text style={styles.category}>{food.category}</Text>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodDescription}>{food.description}</Text>

              <View style={styles.foodBottom}>
                <Text style={styles.price}>{formatPrice(food.price)}</Text>

                {/* TOMBOL PESAN */}
                <Pressable
                  style={styles.button}
                  onPress={() =>
                    router.push({
                      pathname: "/detail/[id]" as any,
                      params: {
                        id: food.id,
                        name: food.name,
                        price: food.price,
                        emoji: food.emoji,
                        description: food.description,
                      },
                    })
                  }
                >
                  <Text style={styles.buttonText}>Pesan</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>TapEat</Text>
        <Text style={styles.footerText}>Solusi pemesanan makanan kantin</Text>
        <Text style={styles.footerCopyright}>
          © 2026 TapEat • Kantin Teknik UMM
        </Text>
      </View>
    </ScrollView>
  );
}
