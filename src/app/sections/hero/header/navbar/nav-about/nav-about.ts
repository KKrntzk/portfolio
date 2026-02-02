import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-about',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './nav-about.html',
  styleUrl: './nav-about.scss',
})
export class NavAbout {}
