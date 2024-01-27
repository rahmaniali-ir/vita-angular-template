import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  socialLinks = [
    {
      name: 'Facebook',
      icon: 'ico-facebook',
      link: '#',
    },
    {
      name: 'Instagram',
      icon: 'ico-instagram',
      link: '#',
    },
    {
      name: 'Twitter',
      icon: 'ico-twitter',
      link: '#',
    },
    {
      name: 'Telegram',
      icon: 'ico-telegram',
      link: '#',
    },
  ];

  navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Solution',
      link: '/solutions',
    },
    {
      name: 'Vision',
      link: '/vision',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
  ];

  trackByName(index: number, { name }: { name: string }) {
    return name;
  }
}
