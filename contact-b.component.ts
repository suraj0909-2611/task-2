import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-b',
  templateUrl: './contact-b.component.html',
  styleUrl: './contact-b.component.css'
})
export class ContactBComponent {
  selectedOption: string = '';
  phoneNumber: string = '';
  emailAddress: string = '';
}
