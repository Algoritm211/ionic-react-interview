import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { person, people, star, analytics, thumbsDown } from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import React from 'react'
import RegisterTab from './pages/RegisterTab/RegisterTab'
import MainListTab from './pages/MainListTab/MainListTab'
import FavouriteTab from './pages/FavouriteTab/FavouriteTab'
import DisfavouriteTab from './pages/DisfavouriteTab/DisfavouriteTab'
import AnalyticsTab from './pages/AnalyticsTab/AnalyticsTab'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/registration">
            <RegisterTab/>
          </Route>
          <Route exact path="/main">
            <MainListTab/>
          </Route>
          <Route path="/favorite">
            <FavouriteTab/>
          </Route>
          <Route path="/disfavorite">
            <DisfavouriteTab/>
          </Route>
          <Route path="/analytics">
            <AnalyticsTab/>
          </Route>
          <Route exact path="/">
            <Redirect to="/main"/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" style={{ height: '60px' }}>
          <IonTabButton tab={'registration'} href="/registration">
            <IonIcon icon={person}/>
            <IonLabel>Добавить</IonLabel>
          </IonTabButton>
          <IonTabButton tab={'main'} href="/main">
            <IonIcon icon={people}/>
            <IonLabel>Все</IonLabel>
          </IonTabButton>
          <IonTabButton tab={'favorite'} href="/favorite">
            <IonIcon icon={star}/>
            <IonLabel>Любимые <br/> психологи</IonLabel>
          </IonTabButton>
          <IonTabButton tab={'disfavorite'} href="/disfavorite">
            <IonIcon icon={thumbsDown}/>
            <IonLabel>Нелюбимые <br/>  психологи</IonLabel>
          </IonTabButton>
          <IonTabButton tab={'analytics'} href="/analytics">
            <IonIcon icon={analytics}/>
            <IonLabel>Аналитика</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
