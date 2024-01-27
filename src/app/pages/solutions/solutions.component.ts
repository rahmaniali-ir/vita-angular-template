import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.sass'],
})
export class SolutionsComponent {
  tableRows = [
    {
      name: 'Cloud Analytics Modernization',
      description: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`,
      image: 'cloud.png',
    },
    {
      name: 'Data Science Acceleration',
      description: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`,
      image: 'acceleration.png',
    },
    {
      name: 'Versatility in Application',
      description: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`,
      image: 'versitality.png',
    },
    {
      name: 'Full Customer Experience Service',
      description: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`,
      image: 'customer.png',
    },
  ];

  trackByName(index: number, { name }: { name: string }) {
    return name;
  }
}
