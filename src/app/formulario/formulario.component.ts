import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // Esto es lo que comunica al padre con el hijo, Output es lo que envia los datos 
  // @Output() hayUnNuevoLibro = new EventEmitter();


  // Se cargan las variables

  libro = {
  nombre: '',
  descripcion: '',
  genero: '',
  autor: '',
  ibcn: '',
  }

  generos: any;

  constructor(private generoService: GeneroService) { }

  ngOnInit(): void {

    this.generos = this.generoService.listaDeGeneros();
    console.log("prueba ", this.generos);
  }

  nuevoLibro(){
    console.log("Guardar libro");
  }


  // Esta funcion es la que crea el objeto con todos los datos de los input
  // async agregarLibro(){

  //   var libro = {
  //     nombre: this.nombre,
  //     descripcion: this.descripcion,
  //     genero: this.genero,
  //     autor: this.autor,
  //     ibcn: this.ibcn
  //   }

  //   var respuesta: any;

    // respuesta = await this.librosService.guardarLibro(libro);

    // Esta es la funcion que va a emitir los datos del event
    // this.hayUnNuevoLibro.emit(libro);

  }

}
