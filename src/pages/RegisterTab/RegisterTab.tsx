import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage, IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import './RegisterTab.css'
import SpecDB from '../../firebase/specialists/specDB'

const registerValidationSchema = Yup.object({
  email: Yup.string()
    .required('Поле не должно быть пустым')
    .email('Введите правильный email-адрес'),
  name: Yup.string()
    .required('Поле не должно быть пустым')
    .max(150, 'Имя не должно быть таким длинным'),
  type: Yup.string()
    .required('Обязательно выберите категорию')
})

const RegisterTab: React.FC = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      type: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      const data = await SpecDB.getAll()
      console.log(data)
    }
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form className="ion-padding" onSubmit={formik.handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Введите email</IonLabel>
            <IonInput
              id={'email'}
              name={'email'}
              onIonChange={formik.handleChange}
              value={formik.values.email}/>
          </IonItem>
          <p className={'error'}>
            {formik.touched.email && formik.errors.email}
          </p>
          <IonItem>
            <IonLabel position="floating">Введите имя</IonLabel>
            <IonInput
              id={'name'}
              name={'name'}
              onIonChange={formik.handleChange}
              value={formik.values.name}
            />
          </IonItem>
            <p className={'error'}>
              {formik.touched.name && formik.errors.name}
            </p>
          <IonItem>
            <IonLabel position="floating">Выберите категорию</IonLabel>
            <IonSelect
              name={'type'}
              onIonChange={formik.handleChange}
              value={formik.values.type}>
              <IonSelectOption value={'психолог'}>Психолог</IonSelectOption>
              <IonSelectOption value={'психотерапевт'}>Психотерапевт</IonSelectOption>
              <IonSelectOption value={'психиатр'}>Психиатр</IonSelectOption>
            </IonSelect>
          </IonItem>
            <p className={'error'}>
              {formik.touched.type && formik.errors.type}
            </p>
          <IonButton
            className="ion-margin-top"
            type="submit"
            expand="block">
            Login
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegisterTab;
