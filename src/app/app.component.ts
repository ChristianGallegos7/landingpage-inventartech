import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ChatPopupComponent } from './components/chat-popup/chat-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, ContactComponent, HeaderComponent, HeroComponent, ProjectsComponent, ServicesComponent, TestimoniosComponent, ChatPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
