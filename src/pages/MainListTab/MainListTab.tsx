import React, { useEffect } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import SpecCard from '../../components/specCard/specCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpecs } from '../../store/specialists/selectors'
import { loadAllSpecs } from '../../store/specialists/thunks'

const MainListTab: React.FC = () => {
  const dispatch = useDispatch()
  const specs = useSelector(getAllSpecs)

  useEffect(() => {
    dispatch(loadAllSpecs())
  }, [])

  const specsBlock = specs.map((specialist) => {
    return <SpecCard specialist={specialist} key={specialist.id}/>
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Все специалисты</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle size="large">Результаты:</IonTitle>
        {specsBlock}
      </IonContent>
    </IonPage>
  )
}

export default MainListTab
