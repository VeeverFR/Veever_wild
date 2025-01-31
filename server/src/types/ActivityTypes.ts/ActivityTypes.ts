export type ChrData = {
  name: string;
  address: string;
  description: string;
  average_budget: number;
  duration: number;
};

export type Activities = {
  id: number;
  chr_id: number;
};

export type UpdateResponse = {
  activityId: number;
  chrData: ChrData;
};
