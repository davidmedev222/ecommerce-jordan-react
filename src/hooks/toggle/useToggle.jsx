import { useState } from 'react'

const useToggle = (initialValue = false) => {
  const [toggle, updateToggle] = useState(initialValue)

  const onToggle = () => updateToggle(!toggle)

  return { toggle, onToggle }
}

export { useToggle }
