import "./form.css"

const Form = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form className="form" onSubmit={handleSubmitForm}>
            {/* <label>Name: </label>
            <input type="text" name="name" value={dataForm.name} onChange={handleChangeInput} />

            <label>Phone: </label>
            <input type="text" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

            <label>Mail: </label>
            <input type="text" name="email" value={dataForm.email} onChange={handleChangeInput} />

            <button type="submit">Enviar Orden</button> */}

            <div className="title">Bienvenido</div>
            <div className="subtitle">Ingresa tus datos</div>

            <div className="input-container ic1">
                <input id="firstname" className="input" name="name" type="text" placeholder=" " value={dataForm.name} onChange={handleChangeInput} />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">First name</label>
            </div>

            <div className="input-container ic2">
                <input id="lastname" className="input" name="phone" type="text" placeholder=" " value={dataForm.phone} onChange={handleChangeInput} />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Phone</label>
            </div>

            <div className="input-container ic2">
                <input id="email" className="input" type="text" name="email" placeholder=" " value={dataForm.email} onChange={handleChangeInput} />
                <div className="cut cut-short"></div>
                <label htmlFor="email" className="placeholder">Email</label>
            </div>

            <div className="input-container ic2">
                <input id="confirmEmail" className="input" type="text" name="confirmEmail" placeholder=" " value={dataForm.confirmEmail} onChange={handleChangeInput} />
                <div className="cut cut-short"></div>
                <label htmlFor="confirmEmail" className="placeholder">Confirm email</label>
            </div>

            <button type="submit" className="submit">Enviar Orden</button>

        </form>
    )
}

export default Form


