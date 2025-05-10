export const chrLoader = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/chr`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error(`Failed to fetch chr data: ${res.status}`);
  return res.json();
};
