import { HeroContent } from './sections/hero-content/hero-content';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { HeroHeader } from './sections/hero-header/hero-header';
import { Logo } from './sections/hero-header/logo/logo';
import { Navigation } from './sections/hero-header/navigation/navigation';
import { LanguageSwitch } from './sections/hero-header/language-switch/language-switch';
import { Badge } from './sections/hero-content/badge/badge';
import { Cta } from './sections/hero-content/cta/cta';
import { Title } from './sections/hero-content/title/title';
import { HeroProfile } from './sections/hero-profile/hero-profile';
import { HeroSocials } from './sections/hero-socials/hero-socials';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Hero,
    HeroHeader,
    Logo,
    Navigation,
    LanguageSwitch,
    Badge,
    HeroContent,
    Cta,
    Title,
    HeroProfile,
    HeroSocials,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
