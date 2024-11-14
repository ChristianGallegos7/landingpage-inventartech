import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
      once: false
    });
  }
}
