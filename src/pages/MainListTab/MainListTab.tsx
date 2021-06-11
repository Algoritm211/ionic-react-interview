import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const MainListTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App specialists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle size="large">Main List</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default MainListTab;
