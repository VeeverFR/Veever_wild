export type Hotels = {
  id: number;
  chr_id: number;
};
export type ChrData = {
  name: string;
  address: string;
  type: string;
  average_budget: number;
};
export type UpdateResponse = {
  hotelId: number;
  chrData: ChrData;
};
