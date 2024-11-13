import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa el módulo de Font Awesome
import { faLaptop, faLightbulb, faRocket } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  faLaptop = faLaptop; // Asigna los íconos a variables
  faLightbulb = faLightbulb;
  faRocketlaunch = faRocket;
}
