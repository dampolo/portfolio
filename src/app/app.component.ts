import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/components/header/header/header.component';
import { FooterComponent } from './shared/components/footer/footer/footer.component';
import { SentMessageComponent } from './sent-message/sent-message.component';
import AOS from "aos";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, HeaderComponent, FooterComponent, SentMessageComponent],
  templateUrl: './app.component.html',
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
