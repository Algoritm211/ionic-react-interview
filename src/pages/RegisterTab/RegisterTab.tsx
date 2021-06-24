import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

const RegisterTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Регистрация</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RegistrationForm />
      </IonContent>
    </IonPage>
  )
}

export default RegisterTab
