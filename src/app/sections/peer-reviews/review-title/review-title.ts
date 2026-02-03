import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-review-title',
  imports: [TranslatePipe],
  templateUrl: './review-title.html',
  styleUrl: './review-title.scss',
})
export class ReviewTitle {}
