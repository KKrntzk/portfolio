import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-review-cards',
  imports: [TranslatePipe],
  templateUrl: './review-cards.html',
  styleUrl: './review-cards.scss',
})
export class ReviewCards {
  activeSticker: number | null = null;

  toggleSticker(index: number) {
    this.activeSticker = this.activeSticker === index ? null : index;
  }
}
