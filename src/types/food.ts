export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
