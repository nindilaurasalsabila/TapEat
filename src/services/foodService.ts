import { ApiResponse, Food } from "../types/food";
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

// 1. Custom Async Function using new Promise, resolve(), and reject()[cite: 9, 10, 23]
export function fetchMenuLocal(
  isSuccess: boolean = true,
): Promise<ApiResponse<Food[]>> {
  return new Promise(async (resolve, reject) => {
    await delay(1000); // Simulate network delay[cite: 5, 10]

    if (isSuccess) {
      resolve({
        success: true,
        data: MOCK_FOODS,
        message: "Menu berhasil dimuat",
      });
    } else {
      reject(new Error("Gagal mengambil data menu dari server")); //[cite: 10]
    }
  });
}

// 2. Pre-built Async Function performing an external API fetch[cite: 12, 15, 23]
export async function checkServerStatus(): Promise<{ status: string }> {
  const response = await fetch("https://dummyjson.com/test");
  if (!response.ok) {
    throw new Error("Gagal terhubung ke API dummy");
  }
  return await response.json();
}
