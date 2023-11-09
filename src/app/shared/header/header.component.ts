import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isHeaderScrolled = false;
  isMobileMenu = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollThreshold = 100; // Ajusta este valor según tus necesidades

    if (scrollY > scrollThreshold) {
      this.isHeaderScrolled = true;
    } else {
      this.isHeaderScrolled = false;
    }
  }
}
