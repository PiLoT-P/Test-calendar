import React, { memo, useCallback } from 'react';
import FormikWrapper from 'formik/formik';
import s from './QuestionaryForm.module.scss'
import { TextField, Autocomplete, Button, Checkbox, FormControlLabel, } from '@mui/material';

import { itemObjForQuestionary, itemObjForQuestionaryTranslateUkr } from 'jsValues/values';
import { validationQuestionarySchema } from 'yupSchemes/questionarySchema';


const translate = (name) => {
    if (itemObjForQuestionaryTranslateUkr.hasOwnProperty(name)){
        return itemObjForQuestionaryTranslateUkr[name];
    }
}

const MemoTextField = memo((props) => <TextField {...props} />);

const MemoAutocomplete = memo((props) => <Autocomplete {...props} />);

const arraydd = ["a", "b", "c", "d"];
const arrayTrueFalse = ["Так", "Ні"];

const QuestionaryForm = memo(() =>{

    const handleSubmit = useCallback((values, formik) =>{
        // e.preventDefault()
        console.log("Errors:", formik.errors);
        console.log(values);
        // testData

        // validationQuestionarySchema
        //     .validate(testData, { abortEarly: false })
        //     .then(() => console.log('Валідація успішна'))
        //     .catch((errors) => console.error('Помилки валідації:', errors));
    },[]);

    return (
        <>
            <FormikWrapper
                initialValues={itemObjForQuestionary}
                onSubmit={handleSubmit}
                validateOnChange={true}
                validationSchema={validationQuestionarySchema}
            >
                {(formik) => (
                    <>
                        <form className={s.container} onSubmit={formik.handleSubmit}>
                            <div>
                                <p>Про себе</p>
                                {Object.entries(formik.values.aboutMyself).map(([key, value]) =>{
                                    if(key.includes("date")) {
                                        return(
                                            <div key={key}>
                                                <MemoTextField
                                                    required
                                                    id={key}
                                                    name={`aboutMyself.${key}`}
                                                    label={translate(key)}
                                                    variant="standard"
                                                    type='date'
                                                    InputLabelProps={{ shrink: true }}
                                                    value={value}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.aboutMyself && formik.errors.aboutMyself && formik.touched.aboutMyself[key] && formik.errors.aboutMyself[key] && (
                                                    <div>{formik.errors.aboutMyself[key]}</div>
                                                )}
                                            </div>
                                        );
                                    }else{
                                        return(
                                            <div key={key}>
                                                <MemoTextField
                                                    required
                                                    id={key}
                                                    name={`aboutMyself.${key}`}
                                                    label={translate(key)}
                                                    variant="standard"
                                                    value={value}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.aboutMyself && formik.errors.aboutMyself && formik.touched.aboutMyself[key] && formik.errors.aboutMyself[key] && (
                                                    <div>{formik.errors.aboutMyself[key]}</div>
                                                )}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <div>
                                <p>Адреса фактичного проживання</p>
                                {Object.entries(formik.values.actualAdress).map(([key, value]) => {
                                    return(
                                        <div key={key}>
                                            <MemoTextField
                                                required
                                                name={`actualAdress.${key}`}
                                                label={translate(key)}
                                                variant="standard"
                                                value={value}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.actualAdress && formik.errors.actualAdress && formik.touched.actualAdress[key] && formik.errors.actualAdress[key] && (
                                                <div>{formik.errors.actualAdress[key]}</div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                <p>Адреса реєстрації</p>
                                {Object.entries(formik.values.registrationAdress).map(([key, value]) => {
                                    return(
                                        <div key={key}>
                                            <MemoTextField
                                                required
                                                name={`registrationAdress.${key}`}
                                                label={translate(key)}
                                                variant="standard"
                                                value={value}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.registrationAdress && formik.errors.registrationAdress && formik.touched.registrationAdress[key] && formik.errors.registrationAdress[key] && (
                                                <div>{formik.errors.registrationAdress[key]}</div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                <p>Контактні дані і відповіді на запитання</p>
                                {Object.entries(formik.values.contactsDataAndAnswers).map(([key, value]) =>{
                                    if(key.includes("Select")){
                                        return(
                                            <div key={key}>
                                                <MemoAutocomplete
                                                    required
                                                    name={`contactsDataAndAnswers.${key}`}
                                                    value={value}
                                                    options={key.includes("TF") ? arrayTrueFalse : arraydd}
                                                    renderInput={(params) => (
                                                    <MemoTextField required {...params} name={`contactsDataAndAnswers.${key}`} label={translate(key)} variant="standard" />
                                                    )}
                                                    onChange={(event, newValue) => {
                                                        formik.handleChange(event); 
                                                        formik.setFieldValue(`contactsDataAndAnswers.${key}`, newValue);
                                                    }}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.contactsDataAndAnswers && formik.errors.contactsDataAndAnswers && formik.touched.contactsDataAndAnswers[key] && formik.errors.contactsDataAndAnswers[key] && (
                                                    <div>{formik.errors.contactsDataAndAnswers[key]}</div>
                                                )}
                                            </div>
                                        );
                                    }else if(key.includes("date")){
                                        return(
                                            <div key={key}>
                                                <MemoTextField
                                                    required
                                                    id={key}
                                                    name={`contactsDataAndAnswers.${key}`}
                                                    label={translate(key)}
                                                    variant="standard"
                                                    type='date'
                                                    InputLabelProps={{ shrink: true }}
                                                    value={value}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.contactsDataAndAnswers && formik.errors.contactsDataAndAnswers && formik.touched.contactsDataAndAnswers[key] && formik.errors.contactsDataAndAnswers[key] && (
                                                    <div>{formik.errors.contactsDataAndAnswers[key]}</div>
                                                )}
                                            </div>
                                        );
                                    }else{
                                        return(
                                            <div key={key}>
                                                <MemoTextField
                                                    required
                                                    name={`contactsDataAndAnswers.${key}`}
                                                    label={translate(key)}
                                                    variant="standard"
                                                    value={value}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.touched.contactsDataAndAnswers && formik.errors.contactsDataAndAnswers && formik.touched.contactsDataAndAnswers[key] && formik.errors.contactsDataAndAnswers[key] && (
                                                    <div>{formik.errors.contactsDataAndAnswers[key]}</div>
                                                )}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <p>Попередній досвід роботи (вкажіть мін 2 останні місця роботи)</p>
                            <div>
                                <p>Компанія 1</p>
                                {Object.entries(formik.values.companyOne).map(([key, value]) =>{
                                    return(
                                        <div key={key}>
                                            <MemoTextField
                                                required
                                                name={`companyOne.${key}`}
                                                label={translate(key)}
                                                variant="standard"
                                                value={value}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.companyOne && formik.errors.companyOne && formik.touched.companyOne[key] && formik.errors.companyOne[key] && (
                                                <div>{formik.errors.companyOne[key]}</div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                <p>Компанія 2</p>
                                {Object.entries(formik.values.companyTwo).map(([key, value]) =>{
                                    return(
                                        <div key={key}>
                                            <MemoTextField
                                                required
                                                name={`companyTwo.${key}`}
                                                label={translate(key)}
                                                variant="standard"
                                                value={value}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.companyTwo && formik.errors.companyTwo && formik.touched.companyTwo[key] && formik.errors.companyTwo[key] && (
                                                <div>{formik.errors.companyTwo[key]}</div>
                                            )}
                                        </div>
                                        
                                    );
                                })}
                            </div>
                            <div>
                                <MemoTextField
                                    required
                                    name="fullNameFutureLeader"
                                    label="ПІБ майбутнього керівник"
                                    variant="standard"
                                    value={formik.values.fullNameFutureLeader}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.fullNameFutureLeader && formik.errors.fullNameFutureLeader && (
                                    <div className={s.error}>{formik.errors.fullNameFutureLeader}</div>
                                )}
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
