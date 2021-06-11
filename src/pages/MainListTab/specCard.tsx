import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon} from '@ionic/react';
import React from 'react';
import {star} from 'ionicons/icons';
import './specCard.css'
import {SpecType} from "../../types/specialists";

type PropsType = {
  specialist: SpecType
}

const SpecCard:React.FC<PropsType> = (props) => {
  const {name, isLiked, email, type, photo} = props.specialist
  return (
    <IonCard>
      <IonCardHeader className={'card'}>
        <div>
          <IonCardSubtitle>{type}</IonCardSubtitle>
          <IonCardTitle>{name}</IonCardTitle>
          <div className={'contact'}>Email: {email}</div>
        </div>
        <div style={{cursor: 'pointer'}}>
          <IonIcon icon={star} style={{fontSize: '30px'}}/>
        </div>
      </IonCardHeader>
    </IonCard>
  );
};

export default SpecCard;
