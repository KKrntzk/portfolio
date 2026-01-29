import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me-cta',
  imports: [RouterLink],
  templateUrl: './about-me-cta.html',
  styleUrl: './about-me-cta.scss',
})
export class AboutMeCta {
  testClick() {
    console.log('Button wurde geklickt!');
  }
}
