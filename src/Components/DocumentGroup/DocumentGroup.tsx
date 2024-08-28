import { useMemo } from 'react'

import { useAppSelector } from '../../Hooks/useRedux'
import styles from './DocumentGroup.module.css'

interface Props {
  param: Array<string>
}

const DocumentGroup = ({ param }: Props) => {
  const documents = useAppSelector(state => state.documents)
  const metaData = useAppSelector(state => state.metaData)

  const list = useMemo(() => {
    return documents.list
      .filter(doc => param.includes(doc.id))
      .map(doc => {
        return {
          ...doc,
          fileType: metaData.fileTypes.find(file => file.id === doc.fileType),
        }
      })
  }, [documents, metaData.fileTypes, param])

  return (
    <div className={styles.container}>
      {list.map(item => (
        <img
          key={item.id}
          src={item.fileType?.icon}
          alt={item.fileType?.type || 'Ícono de documento'}
          loading="lazy"
          className={styles.icon}
        />
      ))}
    </div>
  )
}

export default DocumentGroup
