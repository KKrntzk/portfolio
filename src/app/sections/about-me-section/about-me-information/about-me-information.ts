import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-information',
  imports: [TranslatePipe],
  templateUrl: './about-me-information.html',
  styleUrl: './about-me-information.scss',
})
export class AboutMeInformation {}
