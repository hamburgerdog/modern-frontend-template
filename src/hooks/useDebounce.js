import { useEffect, useState } from 'react'

/**
 * 防抖自定义 Hook
 * @param {any} value - 需要防抖的值
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {any} - 防抖后的值
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // 设置定时器
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // 清理函数：清除定时器
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
