import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscarImagenComponent } from './components/buscar-imagen/buscar-imagen.component';
import { ErrorComponent } from './shared/error/error.component';
import { ListarImagenComponent } from './components/listar-imagen/listar-imagen.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    BuscarImagenComponent,
    ErrorComponent,
    ListarImagenComponent,
    SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pixabayAngular';
}
