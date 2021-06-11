import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const FavouriteTab = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourite</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle size="large">Favourite</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default FavouriteTab;
