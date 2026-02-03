import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  openGithub() {
    window.open('https://github.com/KKrntzk', '_blank');
  }
}
