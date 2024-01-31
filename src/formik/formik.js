import {useFormik} from 'formik';

const FormikWrapper = ({initialValues, onSubmit, validationSchema, children,validateOnChange}) =>{
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnChange,
    })

    return<>{children(formik)}</>
}

export default FormikWrapper;