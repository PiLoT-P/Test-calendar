import {useFormik} from 'formik';

const FormikWrapper = ({ initialValues, onSubmit, validationSchema, children, validateOnChange }) => {
    const formik = useFormik({
        initialValues,
        onSubmit: (values, formikBag) => {
            onSubmit(values, formikBag);
        },
        validationSchema,
        validateOnChange,
    });

    return <>{children(formik)}</>;
};

export default FormikWrapper;