import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa el módulo de Font Awesome
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos
import Aos from 'aos';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})


export class TestimoniosComponent implements OnInit {
  faUser = faUser;


  ngOnInit(): void {
    Aos.init({
      duration: 1200,
      once: true
    });
  }
}
