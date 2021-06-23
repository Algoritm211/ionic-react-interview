import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react'
import React from 'react'
import { star, thumbsDown } from 'ionicons/icons'
import './specCard.css'
import { SpecType } from '../../types/specialists'
import { useDispatch } from 'react-redux'
import { updateSpec } from '../../store/specialists/thunks'

type PropsType = {
  specialist: SpecType
}

const SpecCard: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch()
  const { name, email, type, isLiked } = props.specialist
  const onRatingUpdate = () => {
    if (!isLiked) {
      dispatch(updateSpec(props.specialist, true))
    } else {
      dispatch(updateSpec(props.specialist, false))
    }
  }

  return (
    <IonCard>
      <IonCardHeader className={'card'}>
        <div>
          <IonCardSubtitle>{type}</IonCardSubtitle>
          <IonCardTitle>{name}</IonCardTitle>
          <div className={'contact'}>Email: {email}</div>
        </div>
        <div className={'rating'}>
          {/* field isLiked may be undefined*/}
          {!isLiked ? (
            <>
              {isLiked === undefined ? (
                <IonIcon
                  onClick={onRatingUpdate}
                  icon={star}
                  style={{ fontSize: '30px' }}/>
              ) : (
                <IonIcon
                  onClick={onRatingUpdate}
                  icon={thumbsDown}
                  style={{ fontSize: '30px' }}/>
              )}
            </>
          ) : (
            <IonIcon
              onClick={onRatingUpdate}
              icon={star}
              style={{ fontSize: '30px', color: '#c6c662' }}/>
          )}
          {isLiked === undefined && 'Без оценки'}
        </div>
      </IonCardHeader>
    </IonCard>
  )
}

export default SpecCard
