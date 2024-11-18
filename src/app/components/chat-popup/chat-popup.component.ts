import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-popup.component.html',
  styleUrl: './chat-popup.component.css'
})
export class ChatPopupComponent {
  isOpen = false;
  newMessage = '';
  messages: { text: string; sender: 'user' | 'bot' }[] = [];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      // Agregar mensaje del usuario
      this.messages.push({ text: this.newMessage, sender: 'user' });

      // Simular respuesta del bot
      this.messages.push({
        text: 'Estoy aquí para ayudarte 😊.',
        sender: 'bot',
      });

      // Limpiar el input
      this.newMessage = '';
    }
  }
}
