import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  standalone: false,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  observer: IntersectionObserver;

  constructor() {
    // Initialize the IntersectionObserver
    this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
      rootMargin: "0px", // No margin for the root
      threshold: 0.5, // 50% visibility threshold
    });
  }

  ngOnInit(): void {
    this.setupSectionsObserver();
  }

  
  setupSectionsObserver(): void {

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      this.observer.observe(section); 
    });
  }
  
  onIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      const navs = document.querySelectorAll('.nav-item a');
      const index = Array.from(document.querySelectorAll('.section')).indexOf(entry.target);
      if (entry.isIntersecting) {
        navs.forEach((nav) => this.removeActive(nav));
        if (navs[index]) {
          navs[index].classList.add('active');
        }
      }
    });
  }
  
  addActive(nav: Element): void {
    nav.classList.toggle('active');
  }
  
  removeActive(nav: Element): void {
    nav.classList.remove('active');
  }
  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
