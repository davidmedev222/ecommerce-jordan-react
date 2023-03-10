import { useState } from 'react'

const useToggle = (initialValue = false) => {
  const [isToggle, updateIsToggle] = useState(initialValue)

  const toggle = () => updateIsToggle(!isToggle)

  const onToggle = () => updateIsToggle(true)

  const offToggle = () => updateIsToggle(false)

  return { isToggle, toggle, onToggle, offToggle }
}

export { useToggle }
