import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navi-projects',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navi-projects.html',
  styleUrl: './navi-projects.scss',
})
export class NaviProjects {}
