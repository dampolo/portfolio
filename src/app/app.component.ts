import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header/header.component';
import { FooterComponent } from './shared/components/footer/footer/footer.component';
import AOS from "aos";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Damian Poloczek';
  ngOnInit(): void {
    AOS.init({
      once: true
    });
  }
}
