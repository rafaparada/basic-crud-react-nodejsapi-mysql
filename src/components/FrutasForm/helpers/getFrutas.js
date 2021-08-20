const getFrutas = async () =>{
    try{
        const request     = await fetch('https://rafpapp.herokuapp.com/frutas');
        const {frutas}    = await request.json();
        return frutas;

    }catch(error){
        console.log(error);
    };
}

export default getFrutas;