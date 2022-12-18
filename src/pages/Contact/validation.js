import { object, string, number, date, InferType } from 'yup';

let contactSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email(),
    message:string().min(5).required,
  
});

export default contactSchema;