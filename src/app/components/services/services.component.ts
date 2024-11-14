import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa el módulo de Font Awesome
import { faLaptop, faLightbulb, faRocket, faLaptopCode } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos
import Aos from 'aos';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  faLaptop = faLaptop; // Asigna los íconos a variables
  faLightbulb = faLightbulb;
  faRocketlaunch = faRocket;
  faLaptopCode = faLaptopCode;



  ngOnInit(): void {
    Aos.init({
      duration: 1200,
      once: true
    });
  }
}
