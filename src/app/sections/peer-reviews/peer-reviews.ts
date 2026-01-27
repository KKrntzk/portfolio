import { Component } from '@angular/core';
import { ReviewCards } from './review-cards/review-cards';
import { ReviewTitle } from './review-title/review-title';

@Component({
  selector: 'app-peer-reviews',
  imports: [ReviewCards, ReviewTitle],
  templateUrl: './peer-reviews.html',
  styleUrl: './peer-reviews.scss',
})
export class PeerReviews {}
