import { KeyCard } from '../../Components'
import styles from './KeyStatistics.module.css'

import docIcon from '../../../../Assets/Svg/Icon/doc.svg'
import warningIcon from '../../../../Assets/Svg/State/warning.svg'
import succesIcon from '../../../../Assets/Svg/State/succes.svg'

const KeyStatistics = () => {
  return (
    <article className={styles.article}>
      <h3>Estadísticas Clave</h3>
      <div className={styles.cards}>
        <KeyCard
          title="Expedientes Vistos"
          trend={25}
          description="Los expedientes vistos aumentaron un 25% en esta semana"
          icon={succesIcon}
        />
        <KeyCard
          title="Advertencia"
          trend={5}
          percentage={false}
          description="Actualmente hay 5 certificados y mantenimientos pendientes"
          icon={warningIcon}
        />
        <KeyCard
          title="Documentos Visualizados"
          trend={-11}
          description="Los documentos visualizados disminuyeron 11% respecto a la semana pasada"
          icon={docIcon}
        />
      </div>
    </article>
  )
}

export default KeyStatistics
