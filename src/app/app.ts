import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsoleHelloService {
  printWelcome() {
    console.log(
      '%cHello Dev! Welcome to my portfolio, feel free to roam around and explore my code ⭐',
      'color: #f8f9fa;; font-size: 18px;',
    );
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');

  protected showFooter = signal(true);

  private router = inject(Router);

  constructor(private consoleHello: ConsoleHelloService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Liste der Pfade, die den Footer ausblenden sollen
        const hiddenFooterRoutes = ['project', 'legal', 'privacy'];

        // Prüfen, ob die aktuelle URL eines der oben genannten Wörter enthält
        const isHiddenRoute = hiddenFooterRoutes.some((route) =>
          event.urlAfterRedirects.includes(route),
        );

        this.showFooter.set(!isHiddenRoute);
      });

    this.consoleHello.printWelcome();
  }
}
