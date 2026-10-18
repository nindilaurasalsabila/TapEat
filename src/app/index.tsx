import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
}

const foods: Food[] = [
  {
    id: 1,
    name: "Mie Ayam",
    description: "Mie kenyal dengan ayam berbumbu dan kuah gurih.",
    price: 12000,
    category: "Makanan",
    emoji: "🍜",
  },
  {
    id: 2,
    name: "Nasi Goreng",
    description: "Nasi goreng spesial dengan telur dan bumbu pilihan.",
    price: 15000,
    category: "Makanan",
    emoji: "🍳",
  },
  {
    id: 3,
    name: "Ayam Geprek",
    description: "Ayam crispy dengan sambal geprek yang pedas.",
    price: 18000,
    category: "Makanan",
    emoji: "🍗",
  },
  {
    id: 4,
    name: "Es Teh",
    description: "Minuman teh manis dingin yang menyegarkan.",
    price: 5000,
    category: "Minuman",
    emoji: "🧋",
  },
];

function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

export default function Index() {
  const router = useRouter();

  // 1. Implementation of useState[cite: 7, 40]
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [filteredCount, setFilteredCount] = useState<number>(foods.length);

  // Filter logika makanan berdasarkan kategori
  const filteredFoods = foods.filter((food) => {
    if (selectedCategory === "Semua") return true;
    return food.category === selectedCategory;
  });

  // 2. Implementation of useEffect[cite: 9, 40]
  useEffect(() => {
    setFilteredCount(filteredFoods.length);
  }, [selectedCategory]);

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

      {/* FILTER CATEGORY (useState Control) */}
      <View style={{ flexDirection: "row", marginBottom: 16, gap: 8 }}>
        {["Semua", "Makanan", "Minuman"].map((cat) => (
          <Pressable
            key={cat}
            style={[
              styles.menuBadge,
              selectedCategory === cat && { backgroundColor: "#171717" },
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.menuBadgeText,
                selectedCategory === cat && { color: "#FFFFFF" },
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
          <Text style={styles.menuBadgeText}>{filteredCount} Menu</Text>
        </View>
      </View>

      {/* LOOP DENGAN map() */}
      {filteredFoods.map((food) => (
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

              {/* 3. Implementation of push()[cite: 31, 40] */}
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
