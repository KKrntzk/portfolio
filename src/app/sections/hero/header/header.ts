import { Component } from '@angular/core';
import { PersonalLogo } from './personal-logo/personal-logo';
import { Navbar } from './navbar/navbar';
import { LgSwitch } from './lg-switch/lg-switch';
import { Socials } from '../socials/socials';

@Component({
  selector: 'app-header',
  imports: [PersonalLogo, Navbar, LgSwitch, Socials],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
