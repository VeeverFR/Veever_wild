export type chrData = {
  name: string;
  address: string;
  description: string;
  average_budget: number;
  type?: string;
  duration?: number;
};

export type Restaurant = {
  id: number;
  chr_id: number;
  type: string;
};

export type UpdateChrData = {
  restaurantId: number;
  chrData: chrData;
};

export type UpdateResultChr =
  | { success: true; chrId: number; chrData: chrData }
  | { success: false };
