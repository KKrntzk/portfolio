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
import { AboutMe } from './sections/hero-header/navigation/about-me/about-me';
import { Contact } from './sections/hero-header/navigation/contact/contact';
import { Skills } from './sections/hero-header/navigation/skills/skills';
import { Projects } from './sections/hero-header/navigation/projects/projects';

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
    AboutMe,
    Contact,
    Skills,
    Projects,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
