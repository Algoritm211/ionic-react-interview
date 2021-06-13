import React from 'react'
import { IonSpinner } from '@ionic/react'
import './Loader.css'

const Loader = () => {
  return (
    <div className={'custom-loader'}>
      <div>
        <IonSpinner name={'lines'}/>
      </div>
      <div>Выполняется загрузка</div>
    </div>
  )
}

export default Loader
