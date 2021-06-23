
import { IonApp, IonContent, IonPage } from '@ionic/react'
import { addDecorator } from '@storybook/react'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const IonicWrapper = ({ children }) => {
  return (
    <IonApp>
      <IonPage>
        <IonContent>
          {children}
        </IonContent>
      </IonPage>
    </IonApp>
  )
}

addDecorator((story) => <IonicWrapper>{story()}</IonicWrapper>)