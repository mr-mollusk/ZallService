export class LocalStorage {
  static setItem(key: string, value: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return null;
    } catch (error) {
      return error;
    }
  }

  static getItem<T = unknown>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      const value = (item ? JSON.parse(item) : item) as T | null;
      return value;
    } catch (err) {
      return null;
    }
  }

  static removeItem(key: string) {
    try {
      localStorage.removeItem(key);
      return null;
    } catch (err) {
      return err;
    }
  }
}
