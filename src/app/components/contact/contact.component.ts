import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  goToLinkedin() {
    window.open('https://www.linkedin.com/in/sumedhav/', '_blank');
  }

  get email(): string {
    return 'vermasumedha94@gmail.com';
  }

}
