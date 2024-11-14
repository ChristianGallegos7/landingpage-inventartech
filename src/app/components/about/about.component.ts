import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
      once: true
    })
  }
}
