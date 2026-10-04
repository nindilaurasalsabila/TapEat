import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { styles } from './styles';

// TYPE
interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
}

// ARRAY OF OBJECTS
const foods: Food[] = [
  {
    id: 1,
    name: 'Mie Ayam',
    description: 'Mie kenyal dengan ayam berbumbu dan kuah gurih.',
    price: 12000,
    category: 'Makanan',
    emoji: '🍜',
  },
  {
    id: 2,
    name: 'Nasi Goreng',
    description: 'Nasi goreng spesial dengan telur dan bumbu pilihan.',
    price: 15000,
    category: 'Makanan',
    emoji: '🍳',
  },
  {
    id: 3,
    name: 'Ayam Geprek',
    description: 'Ayam crispy dengan sambal geprek yang pedas.',
    price: 18000,
    category: 'Makanan',
    emoji: '🍗',
  },
  {
    id: 4,
    name: 'Es Teh',
    description: 'Minuman teh manis dingin yang menyegarkan.',
    price: 5000,
    category: 'Minuman',
    emoji: '🧋',
  },
];

// CUSTOM FUNCTION 1
function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString('id-ID')}`;
}

// CUSTOM FUNCTION 2
function handleOrder(foodName: string): void {
  Alert.alert(
    'Pesanan Dipilih',
    `${foodName} berhasil dipilih.`,
  );
}

export default function Index() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>
            TapEat
          </Text>

          {/* INLINE STYLING */}
          <Text
            style={{
              fontSize: 13,
              color: '#777777',
              marginTop: 3,
            }}
          >
            Kantin Teknik UMM
          </Text>
        </View>

        <View style={styles.logoIcon}>
          <Text style={styles.logoEmoji}>
            🍴
          </Text>
        </View>
      </View>

      {/* WELCOME */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeSmall}>
          Selamat datang di TapEat 👋
        </Text>

        <Text style={styles.welcomeTitle}>
          Makan enak,
          {'\n'}
          tanpa antre lama.
        </Text>

        <Text style={styles.welcomeDescription}>
          Temukan makanan favoritmu di kantin
          dengan cara yang lebih mudah.
        </Text>
      </View>

      {/* MENU HEADER */}
      <View style={styles.menuHeader}>
        <View>
          <Text style={styles.sectionTitle}>
            Menu Pilihan
          </Text>

          <Text style={styles.sectionSubtitle}>
            Pilihan makanan untuk kamu hari ini
          </Text>
        </View>

        <View style={styles.menuBadge}>
          <Text style={styles.menuBadgeText}>
            {foods.length} Menu
          </Text>
        </View>
      </View>

      {/* LOOP DENGAN map() */}
      {foods.map((food) => (
        <View
          key={food.id}
          style={styles.foodCard}
        >
          <View style={styles.foodIcon}>
            <Text style={styles.foodEmoji}>
              {food.emoji}
            </Text>
          </View>

          <View style={styles.foodContent}>
            <Text style={styles.category}>
              {food.category}
            </Text>

            <Text style={styles.foodName}>
              {food.name}
            </Text>

            <Text style={styles.foodDescription}>
              {food.description}
            </Text>

            <View style={styles.foodBottom}>
              <Text style={styles.price}>
                {formatPrice(food.price)}
              </Text>

              <Pressable
                style={styles.button}
                onPress={() => handleOrder(food.name)}
              >
                <Text style={styles.buttonText}>
                  Pesan
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          TapEat
        </Text>

        <Text style={styles.footerText}>
          Solusi pemesanan makanan kantin
        </Text>

        <Text style={styles.footerCopyright}>
          © 2026 TapEat • Kantin Teknik UMM
        </Text>
      </View>
    </ScrollView>
  );
}