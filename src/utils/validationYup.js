import { mixed, object, string } from "yup";

let userSchema = object({
    name: string("El nombre debe tener solo letras").required("El nombre es requerido"),
    phone: mixed().required("El telefono es requerido"),
    email: string("Email no tiene formato correcto").email().required("Email es requerido")
})

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validateForm