import { FormSchema, formSchema } from "../schemas/formSchema"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"



export const useForms = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormSchema>({
        resolver:zodResolver(formSchema),
    });
    return {register, handleSubmit, errors}
};