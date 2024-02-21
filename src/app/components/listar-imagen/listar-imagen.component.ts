import { Component, Input } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-imagen',
  standalone: true,
  imports: [FormsModule, CommonModule, SpinnerComponent],
  templateUrl: './listar-imagen.component.html',
  styleUrl: './listar-imagen.component.css'
})
export class ListarImagenComponent {
  termino = '';
  subscripcion: Subscription;
  listImagenes: any [] = [];
  loading = false;
  imagenesPorPagina = 30;
  paginaActual = 1;
  calcularTotalPaginas = 0;
  
  constructor(private _imagenService: ImagenService){
    this.subscripcion = _imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.paginaActual = 1;
      this.loading = true;
      this.obtenerImagenes();
    })
  }

  obtenerImagenes(){
    this._imagenService.getImagenes(this.termino, this.imagenesPorPagina, this.paginaActual).subscribe(data => {
      this.loading = false;
      if(data.hits.length === 0){
        this._imagenService.setError('Opps.. no encontramos ningun resultado');
        this.paginaActual = 1;
        this.listImagenes = [];
        return;
      }
      this.calcularTotalPaginas = Math.ceil(data.totalHits / this.imagenesPorPagina);

      this.listImagenes = data.hits;
    }, error =>{
      this._imagenService.setError('Opps.. ocurrio un error')
      this.loading = false;
    }); 
  }

  paginaAnterior() {
    console.log("Valor actual de this.paginaActual antes de decrementar:", this.paginaActual);
    this.paginaActual--;
    console.log("Valor actual de this.paginaActual después de decrementar:", this.paginaActual);
    this.loading = true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }
  
  paginaPosterior() {
    console.log("Valor actual de this.paginaActual antes de incrementar:", this.paginaActual);
    this.paginaActual++;
    console.log("Valor actual de this.paginaActual después de incrementar:", this.paginaActual);
    this.loading = true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }

  paginaAnteriorClass(){
    if(this.paginaActual === 1){
      return false;
    } else {
      return true;
    }
  }

  paginaPosteriorClass(){
    if(this.paginaActual === this.calcularTotalPaginas){
      return false;
    } else {
      return true;
    }
  }
}
