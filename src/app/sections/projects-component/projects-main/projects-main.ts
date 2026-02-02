import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-main',
  imports: [TranslatePipe],
  templateUrl: './projects-main.html',
  styleUrl: './projects-main.scss',
})
export class ProjectsMain {}
