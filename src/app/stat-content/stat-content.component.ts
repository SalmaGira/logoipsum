import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-content.component.html',
  styleUrls: ['./stat-content.component.css'],
})
export class StatContentComponent {
  readsItems = [
    {
      index: 0,
      title: 'قراءات تانية',
      num: '35',
      icon: 'assets/icons/timer-start.svg',
      bg: 'assets/icons/Mask Group.svg',
      color: '#FF9A3E',
    },
    {
      index: 1,
      title: 'قراءات تانية',
      num: '256',
      icon: 'assets/icons/calendar-2.svg',
      bg: 'assets/icons/Mask Group2.svg',
      color: '#7661E2',
    },
    {
      index: 2,
      title: 'قراءات تانية',
      num: '18',
      icon: 'assets/icons/tick-circle.svg',
      bg: 'assets/icons/Mask Group3.svg',
      color: '#3DD598',
    },
  ];
}
