import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  openGithub() {
    window.open('https://github.com/KKrntzk/coderr_backend', '_blank');
  }

  openLiveTest() {
    window.open('https://coderr.kelly-kornetzki.de/', '_blank');
  }
}
