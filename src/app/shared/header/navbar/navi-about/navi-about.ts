import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navi-about',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navi-about.html',
  styleUrl: './navi-about.scss',
})
export class NaviAbout {}
