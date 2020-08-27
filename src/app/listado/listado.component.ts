import { Component, OnInit, Input } from '@angular/core';
import { LibrosService } from '../libros.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  // Creo un input del listado que va a importar los datos de lista creaba a traves del formulario
  // aca va a volcar el padre la informacion
  // @Input() libros = [];

  constructor(private librosService = LibrosService ) { }

  ngOnInit(): void {
  }

  borrarLibro(idLibro){
    this.librosService.borrar(idLibro);
  }

}
