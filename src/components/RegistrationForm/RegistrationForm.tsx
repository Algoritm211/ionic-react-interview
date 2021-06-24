import { 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonSelect, 
  IonSelectOption, 
  IonButton, 
  useIonAlert } from '@ionic/react'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import SpecDB from '../../firebase/specialists/specDB'
import './RegistrationForm.css'

const registerValidationSchema = Yup.object({
  email: Yup.string()
    .required('Поле не должно быть пустым')
    .email('Введите правильный email-адрес'),
  name: Yup.string()
    .required('Поле не должно быть пустым')
    .max(150, 'Имя не должно быть таким длинным'),
  type: Yup.string()
    .required('Обязательно выберите категорию'),
})

const RegistrationForm = () => {
  const [created] = useIonAlert()
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      type: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try {
        await SpecDB.create({ ...values })
        created(configAlert('Поздравляем', 'Вы зарегистрированы на платформе!'))
        formik.resetForm()
      } catch (error) {
        created(configAlert('Ошибка', 'Попробуйте еще раз'))
      }
    },
  })

  function configAlert(alertHeader: string, alertMessage: string) {
    return {
      cssClass: 'my-css',
      header: alertHeader,
      message: alertMessage,
      buttons: [
        { text: 'Ok' },
      ],
    }
  }
  return (
    <div className={'register-block'}>
      <form className="ion-padding register-form" onSubmit={formik.handleSubmit}>
        <IonItem>
          <IonLabel position="floating">Введите email</IonLabel>
          <IonInput
            id={'email'}
            name={'email'}
            onIonChange={formik.handleChange}
            value={formik.values.email} />
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
        <IonItem cy-data={'category'}>
          <IonLabel position="floating">Выберите категорию</IonLabel>
          <IonSelect
            name={'type'}
            onIonChange={formik.handleChange}
            value={formik.values.type}>
            <IonSelectOption value={'Психолог'}>Психолог</IonSelectOption>
            <IonSelectOption value={'Психотерапевт'}>Психотерапевт</IonSelectOption>
            <IonSelectOption value={'Психиатр'}>Психиатр</IonSelectOption>
          </IonSelect>
        </IonItem>
        <p className={'error'}>
          {formik.touched.type && formik.errors.type}
        </p>
        <IonButton
          disabled={!formik.isValid}
          className="ion-margin-top"
          type="submit"
          expand="block">
          Добавить специалиста
        </IonButton>
      </form>
    </div>
  )
}

export default RegistrationForm
