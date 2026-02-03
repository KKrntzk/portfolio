import { Component } from '@angular/core';
import { LgSwitch } from './lg-switch/lg-switch';
import { Navbar } from './navbar/navbar';
import { PersonalLogo } from './personal-logo/personal-logo';
import { Socials } from '../../sections/hero/socials/socials';

@Component({
  selector: 'app-header',
  imports: [LgSwitch, Navbar, PersonalLogo, Socials],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
