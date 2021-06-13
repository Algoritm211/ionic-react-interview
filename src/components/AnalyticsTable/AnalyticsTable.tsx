import React from 'react'
import { IonItem, IonLabel, IonList, IonText } from '@ionic/react'
import { SpecType } from '../../types/specialists'

type PropsType = {
  tableTitle: string,
  specList: Array<SpecType>
}

const AnalyticsTable: React.FC<PropsType> = ({ tableTitle, specList }) => {
  const specBlock = specList.map((spec) => {
    return (
      <IonItem key={spec.id}>
        <IonLabel>{spec.name}</IonLabel>
      </IonItem>
    )
  })
  return (
    <div style={{ marginBottom: '20px' }}>
      <IonText className={'ion-padding'} style={{ fontStyle: 'italic', fontSize: '20px' }}>
        1. {tableTitle} - {specList.length} человек:
      </IonText>
      <IonList>
        {specBlock}
      </IonList>
    </div>
  )
}

export default AnalyticsTable
