import { object, string, boolean} from 'yup';

export const validationQuestionarySchema = object({
    aboutMyself: object({
        position: string().min(10, "Мінімальна довжина 10 символів").required("Це поле є обов'язковим"),
        surname: string().required("Це поле є обов'язковим"),
        anotherSurname: string().required("Це поле є обов'язковим"),
        name: string().required("Це поле є обов'язковим"),
        middleName: string().required("Це поле є обов'язковим"),
        dateBirthday: string().required("Це поле є обов'язковим"),
        idNumber: string().required("Це поле є обов'язковим"),
    }),
    actualAdress: object({
        region: string().min(5).required("Це поле є обов'язковим"),
        district: string().required("Це поле є обов'язковим"),
        city: string().required("Це поле є обов'язковим"),
        street: string().required("Це поле є обов'язковим"),
        house: string().required("Це поле є обов'язковим"),
        apartment: string().required("Це поле є обов'язковим"),
    }),
    registrationAdress: object({
        region: string().required("Це поле є обов'язковим"),
        district: string().required("Це поле є обов'язковим"),
        city: string().required("Це поле є обов'язковим"),
        street: string().required("Це поле є обов'язковим"),
        house: string().required("Це поле є обов'язковим"),
        apartment: string().required("Це поле є обов'язковим"),
    }),
    contactsDataAndAnswers: object({
        phone: string().required("Це поле є обов'язковим"),
        email: string().required("Це поле є обов'язковим"),
        contactsNetworks: string().required("Це поле є обов'язковим"),
        findOutSelect: string().required("Це поле є обов'язковим"),
        dateStartWork: string().required("Це поле є обов'язковим"),
        disabilityGroupSelectTF: string().required("Це поле є обов'язковим"),
        criminalOrAdministrativeResponseSelectTF: string().required("Це поле є обов'язковим"),
        relativesInCompanySelectTF: string().required("Це поле є обов'язковим"),
        aducation: string().required("Це поле є обов'язковим"),
    }),
    companyOne: object({
        name: string().required("Це поле є обов'язковим"),
        periodOfWork: string().required("Це поле є обов'язковим"),
        duties: string().required("Це поле є обов'язковим"),
        reasonForDismissal: string().required("Це поле є обов'язковим"),
    }),
    companyTwo: object({
        name: string().required("Це поле є обов'язковим"),
        periodOfWork: string().required("Це поле є обов'язковим"),
        duties: string().required("Це поле є обов'язковим"),
        reasonForDismissal: string().required("Це поле є обов'язковим"),
    }),
    fullNameFutureLeader: string().required("Це поле є обов'язковим"),
    consentPersonalData: boolean().required("Це поле є обов'язковим"),
});
