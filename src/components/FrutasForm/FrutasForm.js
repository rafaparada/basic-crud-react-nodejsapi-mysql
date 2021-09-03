import {Formik,Form,Field,ErrorMessage} from "formik";
import SuccessAlert from "../SuccessAlert";
import useFrutasForm from "../../hooks/useFrutasForm"
import TablaFrutas from "./TablaFrutas";
import Loading from './Loading';
import { defaultValuesFrutasForm } from "./helpers/defaultValuesForms";
import * as Yup from 'yup';
const myValidation = Yup.object().shape({
    nombre:Yup.string().max(15,'EL nombre no debe pasar de 15 caracteres').required('Ingrese el nombre de la fruta papu'),
    color:Yup.string().required('Seleccione el color papu'),
    precio:Yup.number().typeError('El precio debe ser numérico').positive('El precio debe ser positivo').required('Ingrese el Precio'),
});
const FrutasForm = () => {
    const [submitForm,successRequest,fetchFrutas,deleteFruit,mensajeReq,editFruit,editOn,submitUpdate,isLoading,resetFruitForm] = useFrutasForm();
    return (
        <div className="container mt-5">
            {isLoading && <Loading />}
            {successRequest ? <SuccessAlert mensajeReq={mensajeReq} />:''}
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 mt-3">
                    <h5>{editOn ? 'MODIFICAR FRUTA':' REGISTRAR FRUTA'}</h5>
                    <hr />

                    <Formik 
                        initialValues = {defaultValuesFrutasForm}
                        validationSchema = {myValidation}
                        onSubmit = {(values,{resetForm})=>{
                           editOn ? submitUpdate(values) : submitForm(values);
                           resetForm();
                        }}
                    >    
                        {({ touched, errors, isSubmitting,setValues,resetForm}) => {
                            return( 
                                <Form>
                                    <label htmlFor="nombre">Fruta:</label>
                                    <Field id="nombre" name="nombre" className="form-control" />
                                    <ErrorMessage name="nombre" component="div" className="alert alert-warning" />
                                    <label htmlFor="color">Color:</label>
                                    <Field id="color" name="color" as="select" className="form-select">
                                        <option value="">Seleccione</option>
                                        <option value="Rojo">Rojo</option>
                                        <option value="Amarillo">Amarillo</option>
                                        <option value="Blanco">Blanco</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Verde">Verde</option>
                                        <option value="Negro">Negro</option>
                                        <option value="Anaranjado">Anaranjado</option>
                                    </Field>
                                    <ErrorMessage name="color" component="div" className="alert alert-warning"/>
                                    <label htmlFor="precio">Precio:</label> 
                                    <Field id="precio" name="precio" className="form-control" />
                                    <ErrorMessage name="precio" component="div" className="alert alert-warning"/>
                                    <button type="submit" className="btn btn-primary mt-3">{editOn ? "Guardar cambios":"Registrar"}</button>
                                     {editOn && <button type="button" className="btn btn-danger mt-2" onClick={()=>resetFruitForm(resetForm)}>Cancelar</button>}
                                    <hr />
                                    <TablaFrutas fetchFrutas={fetchFrutas} deleteFruit={deleteFruit} editFruit={editFruit} setValues={setValues} />
                                </Form>
                            );
                        }
                    }
                    </Formik>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default FrutasForm
