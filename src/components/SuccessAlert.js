import '../styles/estilos.css';
const SuccessAlert = ({mensajeReq}) => {
    return (
        <div className="alert alert-success alert-dismissible fixed-top center-block text-center myAlert">
            <i className="fas fa-check-circle"></i> <span style={{fontSize:'18px'}}>{mensajeReq}</span>
        </div>
    )
}

export default SuccessAlert
