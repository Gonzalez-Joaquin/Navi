import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

import { useAppSelector } from '../../../../../Hooks/useRedux'
import { Empty, Loader } from '../../../../../Components'
import { RecordDetail } from './Layout'

import styles from './DetailedViewPage.module.css'

const DetailedView = () => {
  const { list, loading } = useAppSelector(state => state.expedientes)
  const { id } = useParams()

  const record = useMemo(() => list.find(item => item.id === id), [list, loading, id])

  return loading ? (
    <Loader />
  ) : (
    <section className={`${styles.section} ${record === undefined ? styles.empty : ''}`}>
      {record !== undefined ? (
        <RecordDetail record={record} />
      ) : (
        <Empty
          label="expediente"
          button={{
            action: () => {},
          }}
        />
      )}
    </section>
  )
}

export default DetailedView
