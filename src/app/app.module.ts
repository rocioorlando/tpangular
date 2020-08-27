import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importamos el formurio 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { PrestarComponent } from './prestar/prestar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    FormularioComponent,
    ListadoComponent,
    PrestarComponent
  ],
  imports: [
    BrowserModule,
    // Tambien lo agregamos aca!
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
