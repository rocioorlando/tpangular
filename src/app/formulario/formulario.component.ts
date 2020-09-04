import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LibrosService } from '../libros.service';
import { GeneroService } from '../genero.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // Esto es lo que comunica al padre con el hijo, Output es lo que envia los datos 
  @Output() hayUnNuevoLibro = new EventEmitter();


  // Se cargan las variables  
  nombre: '';
  //descripcion: '';
  genero: '';
  autor: '';
  lended: '';
  

  generos: any;
  constructor(private librosService: LibrosService, private generoService: GeneroService) { }
  //constructor(private librosService: LibrosService){}
  
  ngOnInit(): void {

    this.generos = this.generoService.listaDeGeneros();
    console.log("prueba ", this.generos);
  }

  nuevoLibro(){
    console.log("Guardar libro");
  }


  // Esta funcion es la que crea el objeto con todos los datos de los input
  async agregarLibroALista(){

     var libro = {
       nombre: this.nombre,
       //descripcion: this.descripcion,
       genero: this.genero,
       autor: this.autor,
       lended: this.lended
   }

    var respuesta: any;

    respuesta = await this.librosService.guardarLibro(libro);

    // Esta es la funcion que va a emitir los datos del event
     this.hayUnNuevoLibro.emit();

  }}
