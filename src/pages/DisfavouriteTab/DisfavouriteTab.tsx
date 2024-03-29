import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import SpecList from '../../components/SpecList/SpecList'

const DisfavouriteTab = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Нелюбимые психологи</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SpecList isLiked={false}/>
      </IonContent>
    </IonPage>
  )
}

export default DisfavouriteTab
