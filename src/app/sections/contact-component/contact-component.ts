import { Component } from '@angular/core';
import { ContactMain } from './contact-main/contact-main';
import { ContactForm } from './contact-form/contact-form';
import { Footer } from './footer/footer';
import { PersonalLogo } from '../hero/header/personal-logo/personal-logo';

@Component({
  selector: 'app-contact-component',
  imports: [ContactMain, ContactForm, Footer, PersonalLogo],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {}
