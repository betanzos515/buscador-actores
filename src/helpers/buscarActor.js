import { Toast } from "./toast";


export const enviarImagen = async (file)=>{
    const urlAPI = 'https://whois.nomada.cloud/upload';
    const Nomada = 'YWI4NDZjY2YtODcxZi00MzI0LWIzMjAtMmVlZGYyZTJhZmVm';

    Toast.fire({
        icon: 'question',
        title: 'Buscando ...'
      })
    
    const formData = new FormData();
    formData.append('file',file);

    try {
        const data = await fetch(urlAPI,{
            method:'POST',
            headers:{
                'Nomada':Nomada
            },
            body:formData
        });
        Toast.close();
        return await data.json();
        
    } catch (error) {
        console.log(error)
    }
}