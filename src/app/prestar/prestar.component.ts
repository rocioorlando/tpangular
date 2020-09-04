import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../genero.service';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-prestar',
  templateUrl: './prestar.component.html',
  styleUrls: ['./prestar.component.css']
})
export class PrestarComponent implements OnInit {

  constructor(private librosService: LibrosService, private generoService: GeneroService) { }

  ngOnInit(): void {
  }

}
