import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-main',
  imports: [TranslatePipe],
  templateUrl: './contact-main.html',
  styleUrl: './contact-main.scss',
})
export class ContactMain {}
