import React, {useEffect} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import SpecCard from "./specCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllSpecs} from "../../store/specialists/selectors";
import {loadAllSpecs} from "../../store/specialists/thunks";

const MainListTab: React.FC = () => {
  const dispatch = useDispatch()
  const specs = useSelector(getAllSpecs)

  useEffect(() => {
    dispatch(loadAllSpecs())
  }, [])

  // I know that index like key is bad, but no user ids in psychologists.json
  // in exercise file, usually it`s generated in db
  const specsBlock = specs.map((specialist, index) => {
    return <SpecCard specialist={specialist} key={index}/>
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App specialists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle size="large">Main List</IonTitle>
        {specsBlock}
      </IonContent>
    </IonPage>
  );
};

export default MainListTab;
