import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';
import { GeneroService } from '../genero.service';


@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  // Aca es donde se va a inicializar toda la lista de los libros, se crea un array 
  lista:any = [];

  constructor(private librosService: LibrosService, private generoService: GeneroService) { }

  async ngOnInit() {

    this.lista = await this.librosService.listaDeLibros();
  }

  // Funcion para agregar un libro a la lista
  async agregarLibroALista (unLibro){
    this.lista = await this.librosService.listaDeLibros();
    // me mandan un libro y lo agrego a la lista, el array de arriba
     this.lista.push(unLibro);
  }

}
