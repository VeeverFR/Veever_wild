export type Hotels = {
  id: number;
  chr_id: number;
  type: string;
};
export type ChrData = {
  name: string;
  address: string;
  description: string;
  type: string;
  average_budget: number;
};
export type UpdateResponse = {
  hotelId: number;
  chrData: ChrData;
};
