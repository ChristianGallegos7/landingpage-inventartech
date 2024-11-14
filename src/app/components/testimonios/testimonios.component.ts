import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa el módulo de Font Awesome
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos


@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent {
  faUser = faUser; 
}
