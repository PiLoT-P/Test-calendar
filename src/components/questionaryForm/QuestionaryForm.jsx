import React, { memo, useCallback } from 'react';
import FormikWrapper from 'formik/formik';
import s from './QuestionaryForm.module.scss'
import { Autocomplete, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { itemObj } from 'jsValues/values';
// import { validationQuestionarySchema } from 'yupSchemes/questionarySchema';

const MemoTextField = memo((props) => <TextField {...props} />);

const MemoAutocomplete = memo((props) => <Autocomplete {...props} />);

const arraydd = ["a", "b", "c", "d"];
const arrayTrueFalse = ["Так", "Ні"];

const QuestionaryForm = memo(() =>{

    const handleSubmit = useCallback((values) =>{
        console.log(values);
    }, [])

    return (
        <>
            <FormikWrapper
                initialValues={itemObj}
                onSubmit={handleSubmit}
                validateOnChange={false}
                // validationSchema={validationQuestionarySchema}
            >
                {(formik) => (
                    <>
                        <form className={s.container} onSubmit={formik.handleSubmit}>
                            <div>
                                <MemoTextField 
                                    required 
                                    id="position" 
                                    name='aboutMyself.position'
                                    label="Посада" 
                                    variant="standard"  
                                    value={formik.values.aboutMyself.position}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="surname" 
                                    name='aboutMyself.surname'
                                    label="Прізвище" 
                                    variant="standard" 
                                    value={formik.values.aboutMyself.surname}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="anotherSurname" 
                                    name='aboutMyself.anotherSurname'
                                    label="Інші прізвища" 
                                    variant="standard" 
                                    value={formik.values.aboutMyself.anotherSurname}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="name"
                                    name='aboutMyself.name' 
                                    label="Ім'я" 
                                    variant="standard" 
                                    value={formik.values.aboutMyself.name}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="middleName"
                                    name='aboutMyself.middleName' 
                                    label="По-батькові" 
                                    variant="standard" 
                                    value={formik.values.aboutMyself.middleName}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="dateBirthday"
                                    name='aboutMyself.dateBirthday'  
                                    variant="standard" 
                                    type='date' 
                                    label="Дата народження" 
                                    InputLabelProps={{ shrink: true }} 
                                    value={formik.values.aboutMyself.dateBirthday} 
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="idNumber"
                                    name='aboutMyself.idNumber'
                                    label="Ідентифікаційний номер" 
                                    variant="standard" 
                                    value={formik.values.aboutMyself.idNumber}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div>
                                <p>Адреса фактичного проживання</p>
                                <MemoTextField 
                                    required 
                                    id=""
                                    name="actualAdress.region" 
                                    variant="standard" 
                                    label="Область" 
                                    value={formik.values.actualAdress.region}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="actualAdress.district" 
                                    variant="standard" 
                                    label="Район" 
                                    value={formik.values.actualAdress.district}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="actualAdress.city"
                                    variant="standard" 
                                    label="Місто" 
                                    value={formik.values.actualAdress.city}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="actualAdress.street"
                                    variant="standard" 
                                    label="Вулиця" 
                                    value={formik.values.actualAdress.street}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="actualAdress.house"
                                    variant="standard" 
                                    label="Будинок" 
                                    value={formik.values.actualAdress.house}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="actualAdress.apartment"
                                    variant="standard" 
                                    label="Квартира" 
                                    value={formik.values.actualAdress.apartment}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div>
                                <p>Адреса реєстрації</p>
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="registrationAdress.region"
                                    variant="standard" 
                                    label="Область" 
                                    value={formik.values.registrationAdress.region}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="registrationAdress.district"
                                    variant="standard" 
                                    label="Район" 
                                    value={formik.values.registrationAdress.district}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="registrationAdress.city"
                                    variant="standard" 
                                    label="Місто" 
                                    value={formik.values.registrationAdress.city}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="registrationAdress.street"
                                    variant="standard" 
                                    label="Вулиця" 
                                    value={formik.values.registrationAdress.street}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="registrationAdress.house"
                                    variant="standard" 
                                    label="Будинок" 
                                    value={formik.values.registrationAdress.house}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField 
                                    required 
                                    id="" 
                                    name="registrationAdress.apartment"
                                    variant="standard" 
                                    label="Квартира" 
                                    value={formik.values.registrationAdress.apartment}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div>
                                <p>---</p>
                                <MemoTextField
                                    required
                                    name="contactsDataAndAnswers.phone"
                                    label="Номер телефону"
                                    variant="standard"
                                    type='phone'
                                    value={formik.values.contactsDataAndAnswers.phone}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField
                                    required
                                    name="contactsDataAndAnswers.email"
                                    label="E-mail"
                                    variant="standard"
                                    type='email'
                                    value={formik.values.contactsDataAndAnswers.email}
                                    onChange={formik.handleChange}
                                />
                                <MemoTextField
                                    required
                                    name="contactsDataAndAnswers.contactsNetworks"
                                    label="Контакти в соцмережах"
                                    variant="standard"
                                    value={formik.values.contactsDataAndAnswers.contactsNetworks}
                                    onChange={formik.handleChange}
                                />
                                <MemoAutocomplete
                                    required
                                    name="contactsDataAndAnswers.findOut"
                                    value={formik.values.contactsDataAndAnswers.findOut}
                                    options={arraydd}
                                    renderInput={(params) => (
                                    <MemoTextField required {...params} label="Звідки дізнались про вакансію?" variant="standard" />
                                    )}
                                    onChange={(event, newValue) => {
                                        formik.handleChange(event); 
                                        formik.setFieldValue("contactsDataAndAnswers.findOut", newValue);
                                    }}
                                />
                                <MemoTextField 
                                    required 
                                    id=""
                                    name="contactsDataAndAnswers.dateStartWork" 
                                    variant="standard"
                                    type='date' 
                                    label="Можлива дата початку роботи"
                                    InputLabelProps={{ shrink: true }} 
                                    value={formik.values.contactsDataAndAnswers.dateStartWork}
                                    onChange={formik.handleChange}
                                />
                                <MemoAutocomplete
                                    required
                                    name="contactsDataAndAnswers.disabilityGroup"
                                    value={formik.values.contactsDataAndAnswers.disabilityGroup}
                                    options={arrayTrueFalse}
                                    renderInput={(params) => (
                                    <MemoTextField required {...params} label="Чи маєте групу інвалідності?" variant="standard" />
                                    )}
                                    onChange={(event, newValue) => {
                                        formik.handleChange(event); 
                                        formik.setFieldValue("contactsDataAndAnswers.disabilityGroup", newValue);
                                    }}
                                />
                                <MemoAutocomplete
                                    required
                                    name="contactsDataAndAnswers.criminalOrAdministrativeResponse"
                                    value={formik.values.contactsDataAndAnswers.criminalOrAdministrativeResponse}
                                    options={arrayTrueFalse}
                                    renderInput={(params) => (
                                    <MemoTextField required {...params} label="Чи притягувались Ви або члени Вашої родини до кримінальної або адміністративної відповідальності?" variant="standard" />
                                    )}
                                    onChange={(event, newValue) => {
                                        formik.handleChange(event); 
                                        formik.setFieldValue("contactsDataAndAnswers.criminalOrAdministrativeResponse", newValue);
                                    }}
                                />
                                <MemoAutocomplete
                                    required
                                    name="contactsDataAndAnswers.relativesInCompany"
                                    value={formik.values.contactsDataAndAnswers.relativesInCompany}
                                    options={arrayTrueFalse}
                                    renderInput={(params) => (
                                    <MemoTextField required {...params} label="Чи є у Вас родичі які працюють у нашій компанії?" variant="standard" />
                                    )}
                                    onChange={(event, newValue) => {
                                        formik.handleChange(event); 
                                        formik.setFieldValue("contactsDataAndAnswers.relativesInCompany", newValue);
                                    }}
                                />
                                <MemoTextField
                                    required
                                    name="contactsDataAndAnswers.aducation"
                                    label="Освіта"
                                    variant="standard"
                                    value={formik.values.contactsDataAndAnswers.aducation}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div>
                                <p>Попередній досвід роботи (вкажіть мін 2 останні місця роботи) </p>
                                <ul>
                                    <li>
                                        <p>Компанія 1</p>
                                        <MemoTextField
                                            required
                                            name="companyOne.name"
                                            label="Найменування"
                                            variant="standard"
                                            value={formik.values.companyOne.name}
                                            onChange={formik.handleChange}
                                        />
                                        <MemoTextField
                                            required
                                            name="companyOne.periodOfWork"
                                            label="Період роботи"
                                            variant="standard"
                                            value={formik.values.companyOne.periodOfWork}
                                            onChange={formik.handleChange}
                                        />
                                        <MemoTextField
                                            required
                                            name="companyOne.duties"
                                            label="Обов'язки"
                                            variant="standard"
                                            value={formik.values.companyOne.duties}
                                            onChange={formik.handleChange}
                                        />
                                        <MemoTextField
                                            required
                                            name="companyOne.reasonForDismissal"
                                            label="Причина звільнення"
                                            variant="standard"
                                            value={formik.values.companyOne.reasonForDismissal}
                                            onChange={formik.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <p>Компанія 2</p>
                                        <MemoTextField
                                            required
                                            name="companyTwo.name"
                                            label="Найменування"
                                            variant="standard"
                                            value={formik.values.companyTwo.name}
                                            onChange={formik.handleChange}
                                        />
                                        <MemoTextField
                                            required
                                            name="companyTwo.periodOfWork"
                                            label="Період роботи"
                                            variant="standard"
                                            value={formik.values.companyTwo.periodOfWork}
                                            onChange={formik.handleChange}
                                        />
                                        <MemoTextField
                                            required
                                            name="companyTwo.duties"
                                            label="Обов'язки"
                                            variant="standard"
                                            value={formik.values.companyTwo.duties}
                                            onChange={formik.handleChange}
                                        />
                                        <MemoTextField
                                            required
                                            name="companyTwo.reasonForDismissal"
                                            label="Причина звільнення"
                                            variant="standard"
                                            value={formik.values.companyTwo.reasonForDismissal}
                                            onChange={formik.handleChange}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            required
                                            name='consentPersonalData'
                                            value={formik.values.consentPersonalData}
                                            onChange={formik.handleChange}
                                        />
                                    }
                                    label="Я даю згоду на обробку своїх персональних даних. Обробка персональних даних буде здійснюватись відповідно до Закону України 'Про захист персональних даних'"
                                />
                            </div>
                            <Button type='submit' variant="outlined">Відправити</Button>
                        </form>
                    </>
                )}
            </FormikWrapper>
        </>
    );
})

export default QuestionaryForm;
