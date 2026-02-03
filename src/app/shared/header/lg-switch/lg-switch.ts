import { Component, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lg-switch',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './lg-switch.html',
  styleUrl: './lg-switch.scss',
})
export class LgSwitch {
  private translate = inject(TranslateService);

  currentLang: string = 'en';

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang = language;
  }
}
