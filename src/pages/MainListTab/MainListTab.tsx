import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import SpecList from '../../components/SpecList/SpecList'

const MainListTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Все специалисты</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SpecList />
      </IonContent>
    </IonPage>
  )
}

export default MainListTab
