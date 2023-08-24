import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css'],
})
export class TableContentComponent {
  colItems = [
    {
      index: 0,
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      email: 'Example@company.com',
      src: '2',
    },
    {
      index: 1,
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      email: 'Example@company.com',
      src: '1',
    },
    {
      index: 2,
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      email: 'Example@company.com',
      src: '2',
    },
    {
      index: 3,
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      email: 'Example@company.com',
      src: '1',
    },
    {
      index: 4,
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      email: 'Example@company.com',
      src: '1',
    },
    {
      index: 5,
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      email: 'Example@company.com',
      src: '2',
    },
    {
      index: 6,
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      email: 'Example@company.com',
      src: '1',
    },
    {
      index: 7,
      id: 'ID-15877',
      name: 'اسم إفتراضي جديدي ...',
      email: 'Example@company.com',
      src: '2',
    },
  ];
}
