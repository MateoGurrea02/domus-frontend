export const setLocalStorage = (key,data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
  const dataString = localStorage.getItem(key);
  return dataString ? JSON.parse(dataString) : [];
};