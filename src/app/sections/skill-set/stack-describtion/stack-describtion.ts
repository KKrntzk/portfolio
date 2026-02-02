import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-stack-describtion',
  imports: [TranslatePipe],
  templateUrl: './stack-describtion.html',
  styleUrl: './stack-describtion.scss',
})
export class StackDescribtion {}
