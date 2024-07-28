import { Component } from '@angular/core';
import { ContactComponent } from '../../../../main-content/contact/contact.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  // contactMe() {
  //   this.showFocus = true
  // }

}
