const FilaFrutas = ({fruit,deleteFruit,editFruit,setValues}) =>{
    const {id,nombre,color,precio} = fruit;
    return(
        <tr><td>{nombre}</td><td>{color}</td><td>{precio}</td><td className="text-center"><button type="button" onClick={()=>deleteFruit(id)} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button><button type="button" onClick={()=>editFruit(id,fruit,setValues)} className="btn btn-danger btn-sm ms-1"><i className="fas fa-edit"></i></button></td></tr>
    );
}

export default FilaFrutas;