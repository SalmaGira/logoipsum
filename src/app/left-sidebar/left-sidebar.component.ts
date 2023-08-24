import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent {
  weekItems = [
    { index: 0, title: 'الجمعة', dayNum: 30 },
    { index: 1, title: 'الخميس', dayNum: 29 },
    { index: 2, title: 'الأربعاء', dayNum: 28 },
    { index: 3, title: 'الثلاثاء', dayNum: 27 },
    { index: 4, title: 'الاثنين', dayNum: 26 },
    { index: 5, title: 'الأحد', dayNum: 25 },
    { index: 6, title: 'السبت', dayNum: 24 },
  ];

  commentsItems = [
    {
      index: 0,
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى',
      time: '05:00 - 06:00 م',
      src: 'assets/avatar/Image-35.png',
      color: '#F2F5F1',
      user: '',
    },
    {
      index: 1,
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى',
      time: '04:00 - 05:00 م',
      src: 'assets/avatar/Image-36.png',
      color: '#FFF6E3',
      user: 'ميرا محسن',
    },
    {
      index: 2,
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى',
      time: '03:00 - 04:00 م',
      src: 'assets/avatar/Image-37.png',
      color: '#7661E2',
      user: 'محمود الغريب',
    },
    {
      index: 3,
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى',
      time: '05:00 - 06:00 م',
      src: 'assets/avatar/Image-38.png',
      color: '#F1ECFE',
      user: 'كريم عبد العزيز',
    },
    {
      index: 4,
      title: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى',
      time: '05:00 - 06:00 م',
      src: 'assets/avatar/Image-35.png',
      color: '#F1ECFE',
      user: '',
    },
  ];
}
