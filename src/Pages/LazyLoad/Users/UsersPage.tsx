import { useEffect, useState } from 'react'

import { useAppSelector } from '../../../Hooks/useRedux'
import { UserFilter, UsersTable } from './Layout'
import { Tabs } from '../../../Components'

import styles from './UsersPage.module.css'

const UsersPage = () => {
  const { userRoles } = useAppSelector(state => state.metaData)
  const { list } = useAppSelector(state => state.users)

  return (
    <section className={styles.section}>
      <UserFilter role={userRoles} />
      <UsersTable users={list.slice(0, 9)} role={userRoles} />
    </section>
  )
}

export default UsersPage
