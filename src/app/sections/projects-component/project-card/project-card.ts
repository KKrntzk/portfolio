import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',

  imports: [TranslatePipe],

  templateUrl: './project-card.html',

  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() title: string = '';

  @Input() description: string = '';

  @Input() image: string = '';

  @Input() link: string = '';
}
