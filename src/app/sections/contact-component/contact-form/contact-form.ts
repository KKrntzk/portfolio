import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

export function emailDomainValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) {
      return null;
    }
    const isValid = value.toLowerCase().endsWith('.de') || value.toLowerCase().endsWith('.com');
    return isValid ? null : { invalidDomain: true };
  };
}

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email, emailDomainValidator()]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    privacy: new FormControl(false, [Validators.requiredTrue]),
  });

  post = {
    endPoint: 'https://kelly-kornetzki.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest: Boolean = false;

  http = inject(HttpClient);

  onSubmit() {
    if (this.contactForm.valid && !this.mailTest) {
      const contactData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      };

      this.http.post(this.post.endPoint, contactData, this.post.options).subscribe({
        next: () => {
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Fehler beim Senden:', error);
        },
      });
    } else if (this.contactForm.valid && this.mailTest) {
      this.contactForm.reset();
    }
  }
}
