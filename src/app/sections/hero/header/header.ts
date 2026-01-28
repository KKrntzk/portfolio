import { Component } from '@angular/core';
import { PersonalLogo } from "./personal-logo/personal-logo";
import { Navbar } from "./navbar/navbar";
import { LgSwitch } from "./lg-switch/lg-switch";

@Component({
  selector: 'app-header',
  imports: [PersonalLogo, Navbar, LgSwitch],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
