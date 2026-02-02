import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-location-snippets',
  imports: [TranslatePipe],
  templateUrl: './location-snippets.html',
  styleUrl: './location-snippets.scss',
})
export class LocationSnippets {}
