import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.css'],
})
export class ChatPopupComponent {
  isOpen = false;
  messages: { text: string; sender: 'user' | 'bot' }[] = [];
  options: string[] = []; // Opciones disponibles para el usuario

  toggleChat() {
    this.isOpen = !this.isOpen;

    // Mensaje de bienvenida y opciones iniciales
    if (this.isOpen && this.messages.length === 0) {
      this.messages.push({
        text: '¡Hola! Soy tu asistente virtual. ¿Cómo puedo ayudarte? 😊',
        sender: 'bot',
      });
      this.options = ['Ver servicios', 'Contactar con un programador', 'Conocer más de nosotros'];
    }
  }

  handleOptionClick(option: string) {
    // Mostrar opción seleccionada por el usuario
    this.messages.push({ text: option, sender: 'user' });

    // Limpiar las opciones actuales
    this.options = [];

    // Responder según la opción elegida
    switch (option) {
      case 'Ver servicios':
        this.messages.push({
          text: 'Ofrecemos desarrollo de software, aplicaciones móviles, y diseño web. ¿Te interesa algo en particular?',
          sender: 'bot',
        });
        this.options = ['Desarrollo de software', 'Aplicaciones móviles', 'Diseño web', 'Regresar'];
        break;

      case 'Desarrollo de software':
        this.messages.push({
          text: 'El desarrollo de software incluye sistemas personalizados según tus necesidades. ¿Qué tipo de software estás buscando?',
          sender: 'bot',
        });
        this.options = ['Sistemas empresariales', 'Automatización de procesos', 'Otros', 'Regresar'];
        break;

      case 'Sistemas empresariales':
        this.messages.push({
          text: 'Perfecto, trabajamos en sistemas de gestión de inventario, CRM, ERP, y más. ¿Quieres recibir más detalles?',
          sender: 'bot',
        });
        this.options = ['Sí, por favor', 'No, gracias', 'Regresar'];
        break;

      case 'Automatización de procesos':
        this.messages.push({
          text: 'Podemos automatizar tareas repetitivas como generación de reportes o integraciones entre sistemas. Escríbenos para más información.',
          sender: 'bot',
        });
        this.options = ['Regresar'];
        break;

      case 'Otros':
        this.messages.push({
          text: 'Cuéntame más sobre lo que necesitas para ayudarte de la mejor manera.',
          sender: 'bot',
        });
        this.options = ['Regresar'];
        break;

      case 'Aplicaciones móviles':
        this.messages.push({
          text: 'Creamos aplicaciones móviles nativas y multiplataforma. ¿Te interesa discutir un proyecto?',
          sender: 'bot',
        });
        this.options = ['Sí, por favor', 'No, gracias', 'Regresar'];
        break;

      case 'Diseño web':
        this.messages.push({
          text: 'Ofrecemos diseño web moderno y responsivo para tu empresa o negocio. ¿Te interesa un sitio informativo o una tienda en línea?',
          sender: 'bot',
        });
        this.options = ['Sitio informativo', 'Tienda en línea', 'Regresar'];
        break;

      case 'Sitio informativo':
        this.messages.push({
          text: 'Diseñamos sitios web que reflejan la esencia de tu empresa. ¿Tienes algún estilo en mente?',
          sender: 'bot',
        });
        this.options = ['Moderno', 'Minimalista', 'No estoy seguro', 'Regresar'];
        break;

      case 'Tienda en línea':
        this.messages.push({
          text: 'Podemos crear una tienda en línea completa con carrito de compras, pasarela de pagos y más. ¿Quieres más detalles?',
          sender: 'bot',
        });
        this.options = ['Sí, por favor', 'No, gracias', 'Regresar'];
        break;

      case 'Contactar con un programador':
        this.messages.push({
          text: 'Puedes contactarnos directamente al correo: contacto@inventartech.com o al WhatsApp +123456789.',
          sender: 'bot',
        });
        this.options = ['Regresar'];
        break;

      case 'Conocer más de nosotros':
        this.messages.push({
          text: 'Somos Inventar Tech, una empresa dedicada a brindar soluciones tecnológicas personalizadas.',
          sender: 'bot',
        });
        this.options = ['Ver servicios', 'Contactar con un programador', 'Regresar'];
        break;

      case 'Regresar':
        this.messages.push({
          text: '¿En qué más puedo ayudarte?',
          sender: 'bot',
        });
        this.options = ['Ver servicios', 'Contactar con un programador', 'Conocer más de nosotros'];
        break;

      case 'Sí, por favor':
        this.messages.push({
          text: '¡Genial! Nuestro equipo estará encantado de asesorarte. Contáctanos en contacto@inventartech.com para continuar.',
          sender: 'bot',
        });
        this.options = ['Regresar'];
        break;

      case 'No, gracias':
        this.messages.push({
          text: 'Entendido. Si necesitas algo más, estaré aquí para ayudarte.',
          sender: 'bot',
        });
        this.options = ['Regresar'];
        break;

      default:
        this.messages.push({
          text: 'Lo siento, no entiendo esa opción.',
          sender: 'bot',
        });
        this.options = ['Regresar'];
        break;
    }
  }
}

