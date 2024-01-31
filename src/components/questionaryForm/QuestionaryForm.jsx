import React, { memo, useCallback } from 'react';
import FormikWrapper from 'formik/formik';
import s from './QuestionaryForm.module.scss'
import { TextField } from '@mui/material';
//Autocomplete, Button, Checkbox, FormControlLabel,
import { itemObj } from 'jsValues/values';
// import { validationQuestionarySchema } from 'yupSchemes/questionarySchema';

const MemoTextField = memo((props) => <TextField {...props} />);

// const MemoAutocomplete = memo((props) => <Autocomplete {...props} />);

// const arraydd = ["a", "b", "c", "d"];
// const arrayTrueFalse = ["Так", "Ні"];

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
                                <p>aboutMyself</p>
                                {Object.entries(formik.values.aboutMyself).map(([key, value]) =>{
                                    if(key.includes("date")) {
                                        return(
                                            <MemoTextField
                                                key={key}
                                                required
                                                id={key}
                                                name={`aboutMyself.${key}`}
                                                label={key}
                                                variant="standard"
                                                type='date'
                                                InputLabelProps={{ shrink: true }}
                                                value={value}
                                                onChange={formik.handleChange}
                                            />
                                        );
                                    }else{
                                        return(
                                            <MemoTextField
                                                key={key}
                                                required
                                                id={key}
                                                name={`aboutMyself.${key}`}
                                                label={key}
                                                variant="standard"
                                                value={value}
                                                onChange={formik.handleChange}
                                            />
                                        );
                                    }
                                })}
                            </div>
                            <div>
                                <p>Адреса фактичного проживання</p>
                                {Object.entries(formik.values.actualAdress).map(([key, value]) => {
                                    return(
                                        <MemoTextField
                                            key={key}
                                            required
                                            id={key}
                                            name={`actualAdress.${key}`}
                                            label={key}
                                            variant="standard"
                                            value={value}
                                            onChange={formik.handleChange}
                                        />
                                    );
                                })}
                            </div>
                        </form>
                    </>
                )}
            </FormikWrapper>
        </>
    );
})

export default QuestionaryForm;


