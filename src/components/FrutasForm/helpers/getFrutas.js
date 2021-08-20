const getFrutas = async () =>{
    try{
        const request     = await fetch('http://localhost:8000/frutas');
        const {frutas}    = await request.json();
        return frutas;

    }catch(error){
        console.log(error);
    };
}

export default getFrutas;