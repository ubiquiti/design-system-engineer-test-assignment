import React from 'react'
import styles from './FormItem.module.css'

type FormItemProps = {
  label?: string
}

const FormItem: React.FC<FormItemProps> = (props) => {
  const { label } = props
  return <div className={styles.formItem}>{label}</div>
}

export default FormItem
