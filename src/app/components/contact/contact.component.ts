import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    Aos.init({
      duration: 1200,
      once: true
    })
  }
}
