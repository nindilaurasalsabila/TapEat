import type { ApiResponse, Food } from "../types/food";
import { delay } from "../utils/delay";

const MOCK_FOODS: Food[] = [
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

// 1. Custom Async Function: Promise, resolve(), dan reject()
export function fetchMenuLocal(
  isSuccess: boolean = true,
): Promise<ApiResponse<Food[]>> {
  return new Promise(async (resolve, reject) => {
    await delay(1000);

    if (isSuccess) {
      resolve({
        success: true,
        data: MOCK_FOODS,
        message: "Menu berhasil dimuat",
      });
    } else {
      reject(new Error("Gagal mengambil data menu dari server"));
    }
  });
}

// 2. Pre-built Async Function: async/await dan fetch()
export async function checkServerStatus(): Promise<{ status: string }> {
  const response = await fetch("https://dummyjson.com/test");

  if (!response.ok) {
    throw new Error("Gagal terhubung ke API dummy");
  }

  return await response.json();
}

// Bentuk data produk dari DummyJSON
interface DummyProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface DummyProductsResponse {
  products: DummyProduct[];
}

// 3. Mengambil data makanan dan minuman dari External API
export async function fetchMenuFromAPI(): Promise<ApiResponse<Food[]>> {
  const [foodResponse, drinkResponse] = await Promise.all([
    fetch("https://dummyjson.com/products/category/groceries?limit=10"),
    fetch("https://dummyjson.com/products/category/beverages?limit=10"),
  ]);

  if (!foodResponse.ok || !drinkResponse.ok) {
    throw new Error("Gagal mengambil menu dari External API");
  }

  const foodResult: DummyProductsResponse = await foodResponse.json();
  const drinkResult: DummyProductsResponse = await drinkResponse.json();

  // Mengubah data API menjadi objek Food
  const foods: Food[] = foodResult.products.map((product) => ({
    id: product.id,
    name: product.title,
    description: product.description,
    price: Math.round(product.price * 16000),
    category: "Makanan",
    emoji: "🍱",
  }));

  const drinks: Food[] = drinkResult.products.map((product) => ({
    id: product.id,
    name: product.title,
    description: product.description,
    price: Math.round(product.price * 16000),
    category: "Minuman",
    emoji: "🥤",
  }));

  return {
    success: true,
    data: [...foods, ...drinks],
    message: "Menu berhasil diambil dari External API",
  };
}
