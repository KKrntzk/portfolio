import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  openGithub() {
    window.open('https://github.com/KKrntzk/join', '_blank');
  }

  openLiveTest(){
    window.open('https://kelly-kornetzki.de/project/join/', '_blank')
  }
}
