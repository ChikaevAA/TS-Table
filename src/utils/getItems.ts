export const getItems = <T>(key: string, items: T): T => {
  const localItems = localStorage.getItem(key);
  if (!localItems) {
    localStorage.setItem(key, JSON.stringify(items));
  }
  return localItems ? JSON.parse(localItems) : items;
};
