import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  cards = [
    {
      image: '/assets/cloud.png',
      title: 'Cloud Analytics Modernization',
      details: `I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.`,
    },
    {
      image: '/assets/acceleration.png',
      title: 'Data Science Acceleration',
      details: `I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.`,
    },
    {
      image: '/assets/versitality.png',
      title: 'Versatility in Application​​​​​​',
      details: `I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.`,
    },
    {
      image: '/assets/customer.png',
      title: 'Full Customer Experience Service',
      details: `I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.`,
    },
  ];

  analyticCards = [
    {
      title: 'Years of Experience',
      value: '15',
    },
    {
      title: 'Business Partners',
      value: '10K',
    },
    {
      title: 'Products Installed',
      value: '25K',
    },
    {
      title: 'Countries World Wide',
      value: '22',
    },
    {
      title: 'Industry Awards',
      value: '5',
    },
  ];

  trackByTitle(index: number, { title }: { title: string }) {
    return title;
  }
}
