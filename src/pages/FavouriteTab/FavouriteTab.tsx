import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import SpecList from '../../components/SpecList/SpecList'

const FavouriteTab = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Любимые специалисты</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SpecList isLiked/>
      </IonContent>
    </IonPage>
  )
}

export default FavouriteTab
