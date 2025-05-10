export const chrLoader = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/chr`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Failed to fetch chr data");
  return res.json();
};
