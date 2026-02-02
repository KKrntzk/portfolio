import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-contact',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './nav-contact.html',
  styleUrl: './nav-contact.scss',
})
export class NavContact {}
