export const fetcher = async (input) => {
  const res = await fetch(input);
  return await res.json();
};
