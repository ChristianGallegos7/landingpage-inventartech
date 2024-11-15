import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
      once: true
    })
  }
}
