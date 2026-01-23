import { Component } from '@angular/core';
import { AboutMeCta } from './about-me-cta/about-me-cta';
import { AboutMeInformation } from './about-me-information/about-me-information';
import { LocationSnippets } from './location-snippets/location-snippets';

@Component({
  selector: 'app-about-me-section',
  imports: [AboutMeCta, AboutMeInformation, LocationSnippets],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {}
