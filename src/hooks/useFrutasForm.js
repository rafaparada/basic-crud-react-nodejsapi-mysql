import { useState,useEffect} from "react"
import getFrutas from "../components/FrutasForm/helpers/getFrutas";
    const useFrutasForm = () => {
    const urlBaseApi = 'https://rafpapp.herokuapp.com';
    const [successRequest,setSuccessRequest]=useState(false);
    const [fetchFrutas,setFetchFrutas] = useState([]);
    const [mensajeReq,setMensajeReq] = useState('');
    const [editOn,setEditOn] = useState(false);
    const [idToUpdate,setIdToUpdate]=useState(0);
    const [isLoading,setIsLoading] = useState(false);
    const [getFruitss,setGetFruits] = useState(0);
    
    const showAlert = () =>{
        setSuccessRequest(true);
        setTimeout(() => {setSuccessRequest(false)}, 1500);
    }
    
    useEffect(()=>{
        setIsLoading(true);
        getFrutas().then(fruits=>{
            setFetchFrutas(fruits)
            setIsLoading(false);
        });
    },[getFruitss]);
    
    const submitForm =  async(values) =>{
        const options = {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(values)
        };
        setIsLoading(true);
        const res     = await fetch(urlBaseApi+'/crear',options);
        const data    = await res.json();
        showAlert();
        setMensajeReq(data.mensaje);
        setIsLoading(false);
        setGetFruits(Date.now());
    }

    const deleteFruit = async(id) =>{
        try{
            const options = {method:'DELETE'};
            setIsLoading(true);
            const request = await fetch(urlBaseApi+'/delete/'+id,options);
            const res     = await request.json();
            showAlert();
            setMensajeReq(res.mensaje);
            setIsLoading(false);
            setGetFruits(Date.now());
        }catch(error){
            console.log(error);
        }
    }
    

    const editFruit = (id,fruit,setValues) =>{
        const fruitToEdit = {...fruit};
        delete fruitToEdit.id;
        setEditOn(true);
        setIdToUpdate(id);
        setValues(fruitToEdit);
    }

    const submitUpdate = async(values)=>{
        const frutasToUp = {...values,id:idToUpdate};
        const options    = {method:'PUT',headers:{'Content-type':'application/json'},body:JSON.stringify(frutasToUp)};
        setIsLoading(true);
        const request    = await fetch(urlBaseApi+'/update',options);
        const res        = await request.json();
        setMensajeReq(res.mensaje);
        setEditOn(false);
        setIdToUpdate(0);
        showAlert();
        setIsLoading(false);
        setGetFruits(Date.now());
    }

    const resetFruitForm = (resetForm) =>{
        setEditOn(false);
        resetForm();
    }









    return [submitForm,successRequest,fetchFrutas,deleteFruit,mensajeReq,editFruit,editOn,submitUpdate,isLoading,resetFruitForm]
    //Estaba enviando setFrutas y no lo utilizo en el componente, eso causaba un error que no podia encontrar
    //No enviar cosas que no se van utilizar
}

export default useFrutasForm
