import FilaFrutas from "./FilaFrutas"
const TablaFrutas = ({fetchFrutas,deleteFruit,editFruit}) =>{

      return(
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>FRUTA</th>
                        <th>COLOR</th>
                        <th>PRECIO</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchFrutas.map(fruit=>(
                            <FilaFrutas key={fruit.id} fruit={fruit} deleteFruit={deleteFruit} editFruit={editFruit} />
                        ))
                    }
                </tbody>
            </table>
      );
}
export default TablaFrutas;