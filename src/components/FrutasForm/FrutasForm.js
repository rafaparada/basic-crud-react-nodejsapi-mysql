import { useEffect } from "react";
import {Formik,Form,Field} from "formik";
import SuccessAlert from "../SuccessAlert";
import useFrutasForm from "../../hooks/useFrutasForm"
import TablaFrutas from "./TablaFrutas";
import Loading from './Loading';
import { defaultValuesFrutasForm } from "./helpers/defaultValuesForms";
import { restElement } from "@babel/types";
const FrutasForm = () => {
    const [frutas,handleInput,submitForm,successRequest,fetchFrutas,deleteFruit,mensajeReq,editFruit,editOn,submitUpdate,setEditOn,isLoading,myInputRef,setFrutas] = useFrutasForm();
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
                        onSubmit = {(values,{resetForm})=>{
                           editOn ? submitUpdate() : submitForm(values);
                           resetForm();
                        }}
                    >     
                        <Form>
                            <label htmlFor="nombre">Fruta:</label>
                            <Field id="nombre" name="nombre" className="form-control" />
                            <label htmlFor="color">Color:</label>
                            <Field id="color" name="color" as="select" className="form-select">
                                <option value="Rojo">Rojo</option>
                                <option value="Amarillo">Amarillo</option>
                                <option value="Blanco">Blanco</option>
                                <option value="Azul">Azul</option>
                                <option value="Verde">Verde</option>
                                <option value="Negro">Negro</option>
                                <option value="Anaranjado">Anaranjado</option>
                            </Field>
                            <label htmlFor="precio">Precio:</label> 
                            <Field id="precio" name="precio" className="form-control" />
                            <button type="submit" className="btn btn-primary mt-3">{editOn ? "Guardar cambios":"Registrar"}</button>
                        </Form>
                    </Formik>

                    {editOn && <button className="btn btn-danger mt-2" onClick={()=>setEditOn(false)}>Cancelar</button>}
                    <hr />
                    <TablaFrutas fetchFrutas={fetchFrutas} deleteFruit={deleteFruit} editFruit={editFruit} setFieldValue={Formik.setFieldValue} />
                   
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default FrutasForm
