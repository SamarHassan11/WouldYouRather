/* eslint-disable  max-classes-per-file */

class InMemoryStorage {
    static storage = {};

    static setItem = (key, value) => { InMemoryStorage.storage[key] = value; };

    static getItem = key => InMemoryStorage.storage[key];

    static removeItem = key => delete InMemoryStorage.storage[key];

    static clear = () => { InMemoryStorage.storage = {}; };
}

class Storage {
    static store = null;

    static getStore = () => {
        try {
            const testKey = 'test_local_storage_key';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return localStorage;
        } catch (e) {
            return InMemoryStorage;
        }
    };

    static configureStore = () => {
        if (!Storage.store) {
            Storage.store = Storage.getStore();
        }

        return Storage.store;
    };

    static setItem = (key, value) => Storage.store.setItem(key, value);

    static getItem = key => Storage.store.getItem(key);

    static removeItem = key => Storage.store.removeItem(key);

    static clear = () => Storage.store.clear();
}

export default Storage;
