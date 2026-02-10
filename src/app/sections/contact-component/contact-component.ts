import { Component } from '@angular/core';
import { ContactMain } from './contact-main/contact-main';
import { ContactForm } from './contact-form/contact-form';
import { LogoFoot } from './logo-foot/logo-foot';

@Component({
  selector: 'app-contact-component',
  imports: [ContactMain, ContactForm, LogoFoot],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {}
