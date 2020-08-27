import { Injectable } from '@angular/core';

// importamos el servidor
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  // url del servidor
  url = "https://aqueous-spire-30568.herokuapp.com/";

  // []

  arrayGenero = [
    {
      id: "generoAccion",
      nombre: "Accion"
    },
    {
      id: "generoSuspenso",
      nombre: "Suspenso"
    },
    {
      id: "generoPoesia",
      nombre: "Poesia"
    },
    {
      id: "generoTerror",
      nombre: "Terror"
    }
  ];


  constructor(private http: HttpClient) { }

  async listaDeGeneros(){
    try{
      let respuesta: any;

      respuesta = await this.http.get(this.url + " libro").toPromise;
      return respuesta;
    }
    catch(e){
      console.log(e);
      return [];
    }

  }



}

