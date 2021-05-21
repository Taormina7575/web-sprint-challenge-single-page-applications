import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string()
    .oneOf(["small", "medium", "large"], "You must choose a size!"),
    special: yup
    .string(),
    sausage: yup
    .boolean(),
    pineapple: yup
    .boolean(),
    anchovies: yup
    .boolean(),
    peppers: yup
    .boolean(),
    pepperoni: yup
    .boolean(),
})