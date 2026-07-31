import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  openGithub() {
    window.open('https://github.com/KKrntzk/el-pollo-loco', '_blank');
  }

  openLiveTest(){
    window.open('https://kelly-kornetzki.de/project/elpolloloco', '_blank')
  }
}
