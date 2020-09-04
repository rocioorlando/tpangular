import { Injectable } from '@angular/core';

// importamos el servidor
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  // url del servidor
  url='https://aqueous-spire-30568.herokuapp.com/'; 
  
  // se indica la url del servidor
  constructor(private http: HttpClient) { }

  // Recordatorio Http funciona con ruta + metodo
  // metodos van a ser POST= para guardar
  //                     GET = para solicitar info
  //                     DELETE = para solicitar borrar un libro
  //                     PUT = para modificar algo que ya existe

  // manejamos asincronismo con la tecnica async/await
  // en este metodo se indica la url y lo que queremos enviar al servidor

  
  // METODO PUT
  async guardarLibro(unLibro){  
    try{
      let resultado: any;

    // se bloquea la funcion hasta que el servidor responda
    // es todo parte de la sintaxis
    // paraguardar los libros
      resultado = await this.http.post(this.url+'libro', unLibro).toPromise();

      console.log(resultado);

      return resultado;
    }
    catch(error){
      console.log(error);
    }
  }


  // METODO GET
  // para pedir los libros
  async listaDeLibros(){
    try {
      
      let resultado: any;

      resultado = await this.http.get(this.url+'libro').toPromise();

      return resultado;

    } 
    catch(error) {
      console.log(error);  
    }
  }


//METODO DELETE
//para borrar un libro
async borrarLibro (id){
  try{

    let respuesta: any;
    
    respuesta = await this.http.delete(this.url+"libro/"+id).toPromise();

    return true;

  }
  catch(e){
    console.log(e);
    return false;
  }
}

prestarLibros(){
  
}

}
// async getBooks(){
//   try
//   {
//     return await this.http.get(this.url + '/libro').toPromise();
//   }
//   catch (e)
//   {
//     console.log(e);
//   }
//   return '';
// }
