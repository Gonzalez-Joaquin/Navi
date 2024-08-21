import { Avatar } from '../'

import styles from './Header.module.css'

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  const user = {
    pic: 'https://media.licdn.com/dms/image/v2/D4D03AQFD46gtqcHaWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710348280620?e=1729728000&v=beta&t=bJYGDaY06-BGcFQmKnLXeosvqTSqpyetN2BKizJc0A8',
    name: 'Joaquin Gonzalez',
  }

  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <div className={styles.container}>
        <button type="button" className={styles.button}></button>
        <Avatar user={user} />
      </div>
    </header>
  )
}

export default Header
