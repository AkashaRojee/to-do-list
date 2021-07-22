// Mock Storage object for LocalStorage
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Storage

// I implemented only the store itself, along with the methods getItem and setItem

// Other properties like length, and other methods like key, removeItem and clear
// are not needed at this point

export default class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  // Storage.getItem
  // Parameter: key name
  // Return: key value, or null if key does not exist, in Storage object
  getItem(keyName) {
    return this.store[keyName] || null;
  }

  // Storage.getItem
  // Parameter: key name
  // Does: add key, or update key value if key exists, in Storage object
  setItem(keyName, keyValue) {
    this.store[keyName] = keyValue;
  }

}