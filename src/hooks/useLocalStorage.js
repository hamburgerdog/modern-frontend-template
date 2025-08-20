import { useEffect, useState } from 'react'

/**
 * 本地存储自定义 Hook
 * @param {string} key - 存储键名
 * @param {any} initialValue - 初始值
 * @returns {[any, function]} - [值, 设置值的函数]
 */
export const useLocalStorage = (key, initialValue) => {
  // 从 localStorage 获取初始值
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // 设置值到 localStorage
  const setValue = (value) => {
    try {
      // 允许值是函数，用于函数式更新
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}
