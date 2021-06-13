import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { IonItem, IonLabel, IonSelect, IonSelectOption, IonTitle, useIonViewDidEnter } from '@ionic/react'
import { loadAllSpecs } from '../../store/specialists/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpecs, getIsLoading } from '../../store/specialists/selectors'
import SpecCard from '../specCard/specCard'

type PropsType = {
  isLiked?: boolean,
}

const SpecList: React.FC<PropsType> = ({ isLiked }) => {
  const dispatch = useDispatch()
  const specs = useSelector(getAllSpecs)
  const isLoading = useSelector(getIsLoading)
  const [filter, setFilter] = useState(['all'])

  useIonViewDidEnter(() => {
    dispatch(loadAllSpecs(filter, isLiked))
  }, [])

  useEffect(() => {
    dispatch(loadAllSpecs(filter, isLiked))
  }, [filter])
  const specsBlock = specs.map((specialist) => {
    // return all if no isLiked - it`s Main page
    if (isLiked === undefined) {
      return <SpecCard specialist={specialist} key={specialist.id}/>
    }
    if (specialist.isLiked !== isLiked) {
      return
    }
    return <SpecCard specialist={specialist} key={specialist.id}/>
  })

  return (
    <>
      {isLoading ? (
        <Loader/>) : (
        <>
          <IonTitle size="large" className={'ion-padding'}>Результаты:</IonTitle>
          <IonItem className={'ion-margin'}>
            <IonLabel position="floating">Найденные специалисты</IonLabel>
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
    </>
  )
}

export default SpecList
