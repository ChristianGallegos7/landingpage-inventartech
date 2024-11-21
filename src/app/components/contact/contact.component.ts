import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Aos from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
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
