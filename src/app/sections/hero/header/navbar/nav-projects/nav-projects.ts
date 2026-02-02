import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-projects',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './nav-projects.html',
  styleUrl: './nav-projects.scss',
})
export class NavProjects {}
