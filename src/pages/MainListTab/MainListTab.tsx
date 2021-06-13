import React, { useEffect, useState } from 'react'
import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react'
import SpecCard from '../../components/specCard/specCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpecs, getIsLoading } from '../../store/specialists/selectors'
import { loadAllSpecs } from '../../store/specialists/thunks'
import Loader from '../../components/Loader/Loader'

const MainListTab: React.FC = () => {
  const dispatch = useDispatch()
  const specs = useSelector(getAllSpecs)
  const isLoading = useSelector(getIsLoading)
  const [filter, setFilter] = useState(['all'])

  useIonViewDidEnter(() => {
    dispatch(loadAllSpecs(filter))
  }, [])

  useEffect(() => {
    dispatch(loadAllSpecs(filter))
  }, [filter])

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
        {isLoading ? (
          <Loader/>) : (
          <>
            <IonTitle size="large" className={'ion-padding'}>Результаты:</IonTitle>
            <IonItem className={'ion-margin'}>
              <IonLabel position="floating">Выберите специалиста</IonLabel>
              <IonSelect
                onIonChange={(event) => setFilter([event.detail.value])}
                value={filter[0]}
                name={'type'}>
                <IonSelectOption value={'all'}>Все</IonSelectOption>
                <IonSelectOption value={'Психолог'}>Психолог</IonSelectOption>
                <IonSelectOption value={'Психотерапевт'}>Психотерапевт</IonSelectOption>
                <IonSelectOption value={'Психиатр'}>Психиатр</IonSelectOption>
              </IonSelect>
            </IonItem>
            {specsBlock}
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default MainListTab
