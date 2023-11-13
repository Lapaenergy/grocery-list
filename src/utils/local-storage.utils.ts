interface LocalStorageHook<T> {
  get: () => T;
  set: (value: T) => void;
}

export const useLocalStorage = <T>(key: string): LocalStorageHook<T> => {
  const get = (): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  const set = (value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { get, set };
};
