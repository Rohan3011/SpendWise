export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("accessToken");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (accessToken) => {
  try {
    const serializedState = JSON.stringify(accessToken);
    localStorage.setItem("accessToken", serializedState);
  } catch (err) {}
};
