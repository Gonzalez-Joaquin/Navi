import styles from './Loader.module.css'

interface Props {
  color?: 'dark' | 'light'
}

const Loader = ({ color = 'light' }: Props) => {
  return <div className={`${styles.loader} ${styles[color]}`}></div>
}

export default Loader