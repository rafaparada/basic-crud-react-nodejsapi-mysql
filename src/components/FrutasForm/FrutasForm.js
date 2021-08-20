import SuccessAlert from "../SuccessAlert";
import useFrutasForm from "../../hooks/useFrutasForm"
import TablaFrutas from "./TablaFrutas";
import Loading from './Loading';
const FrutasForm = () => {
    const [frutas,handleInput,submitForm,successRequest,fetchFrutas,deleteFruit,mensajeReq,editFruit,editOn,submitUpdate,setEditOn,isLoading,myInputRef] = useFrutasForm();
    return (
        <div className="container mt-5">
            {isLoading && <Loading />}
            {successRequest ? <SuccessAlert mensajeReq={mensajeReq} />:''}
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 mt-3">
                    <h5>{editOn ? 'MODIFICAR FRUTA':' REGISTRAR FRUTA'}</h5>
                    <hr />
                    <form onSubmit={editOn ? submitUpdate : submitForm}>
                    Nombre fruta:
                    <input type="text" id="nombre" ref={myInputRef} value={frutas.nombre} onChange={handleInput} className="form-control" />
                    Color:
                    <input type="text" id="color" value={frutas.color} onChange={handleInput} className="form-control" />
                    Precio:
                    <input type="text" id="precio" value={frutas.precio} onChange={handleInput} className="form-control" />
                    <button className="btn btn-primary mt-3">{editOn ? "Guardar cambios":"Registrar"}</button>
                    </form>
                    {editOn && <button className="btn btn-danger mt-2" onClick={()=>setEditOn(false)}>Cancelar</button>}
                    <hr />
                    <TablaFrutas fetchFrutas={fetchFrutas} deleteFruit={deleteFruit} editFruit={editFruit} />
                   
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default FrutasForm
