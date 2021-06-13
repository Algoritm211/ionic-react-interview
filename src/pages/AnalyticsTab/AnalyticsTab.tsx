import React from 'react'
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react'
import AnalyticsTable from '../../components/AnalyticsTable/AnalyticsTable'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpecs, getIsLoading } from '../../store/specialists/selectors'
import { loadAllSpecs } from '../../store/specialists/thunks'
import { groupByKey } from '../../helpFuncs/groupByKey'
import Loader from '../../components/Loader/Loader'

const AnalyticsTab = () => {
  const dispatch = useDispatch()
  const specs = useSelector(getAllSpecs)
  const isLoading = useSelector(getIsLoading)

  useIonViewDidEnter(() => {
    dispatch(loadAllSpecs(['all']))
  }, [])
  const allSpecTablesBlock = []
  // sorting by type, then divide by groups
  // then creating a table for all groups
  const sortedSpecsByType = groupByKey(specs, 'type')
  for (const key in sortedSpecsByType) {
    if (sortedSpecsByType.hasOwnProperty(key)) {
      // @ts-ignore because group by key, function is universal
      const specTypesTable = <AnalyticsTable tableTitle={key} specList={sortedSpecsByType[key]} key={key}/>
      allSpecTablesBlock.push(specTypesTable)
    }
  }
  const sortedSpecsByIsLiked = groupByKey(specs, 'isLiked')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Статистика по специалистам</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle size="large" className={'ion-padding'}>Данные по специалистам</IonTitle>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <IonItem style={{ marginBottom: '10px' }}>
              Всего специалистов - {specs.length}
            </IonItem>
            {allSpecTablesBlock}
            <IonText className={'ion-padding'} style={{ marginBottom: '10px', fontWeight: 'bold' }}>
              Любимые специалисты: {!sortedSpecsByIsLiked['true'] && 'Нет информации'}
            </IonText>
            <IonList>
              {sortedSpecsByIsLiked['true']?.map((spec) => {
                return (
                  <IonItem key={spec.id}>
                    <IonLabel>{spec.name}, <i>{spec.type}</i></IonLabel>
                  </IonItem>
                )
              })}
            </IonList>
            <IonItem style={{ marginBottom: '10px', fontWeight: 'bold' }}>
              Нелюбимые специалисты: {!sortedSpecsByIsLiked['false'] && 'Нет информации'}
            </IonItem>
            <IonList>
              {sortedSpecsByIsLiked['false']?.map((spec) => {
                return (
                  <IonItem key={spec.id}>
                    <IonLabel>{spec.name}, <i>{spec.type}</i></IonLabel>
                  </IonItem>
                )
              })}
            </IonList>
          </>
        )}


      </IonContent>
    </IonPage>
  )
}

export default AnalyticsTab
