import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navi-contact',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navi-contact.html',
  styleUrl: './navi-contact.scss',
})
export class NaviContact {}
