import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        //저장된 데이터가 없으면 사용하지 않음
        throw new Error('No saved todos');
      }

      const saveTodos = JSON.parse(rawTodos);
      return saveTodos;
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save todls');
    }
  },
};

export default todosStorage;
