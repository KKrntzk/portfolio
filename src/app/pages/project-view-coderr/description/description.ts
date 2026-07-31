import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-description',
  imports: [TranslatePipe],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description {}
