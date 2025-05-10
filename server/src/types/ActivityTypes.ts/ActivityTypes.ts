export type Activities = {
  id: number;
  duration: number;
  chr_id: number;
};

export type ChrData = {
  name: string;
  address: string;
  description: string;
  average_budget: string;
  duration?: number;
};
export type UpdateResponse = {
  activityId: number;
  chrData: ChrData;
};
