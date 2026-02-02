import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-pull-badge',
  imports: [TranslatePipe],
  templateUrl: './pull-badge.html',
  styleUrl: './pull-badge.scss',
})
export class PullBadge {}
