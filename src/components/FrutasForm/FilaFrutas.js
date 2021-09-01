const FilaFrutas = ({fruit,deleteFruit,editFruit,setFieldValue}) =>{
    console.log(setFieldValue);
    const {id,nombre,color,precio} = fruit;
    return(
        <tr><td>{nombre}</td><td>{color}</td><td>{precio}</td><td><button onClick={()=>deleteFruit(id)} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button><button onClick={()=>editFruit(id)} className="btn btn-danger btn-sm ms-1"><i className="fas fa-edit"></i></button></td></tr>
    );
}

export default FilaFrutas;