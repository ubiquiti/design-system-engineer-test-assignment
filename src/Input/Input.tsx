import React from 'react'
import styles from './Input.module.css'

type InputProps = {
  placeholder?: string
}

const Input: React.FC<InputProps> = (props) => {
  const { placeholder } = props

  return (
    <input type="text" className={styles.input} placeholder={placeholder} />
  )
}

export default Input
