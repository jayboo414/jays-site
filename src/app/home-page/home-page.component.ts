import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

interface NavItem {
  title: string;
  link: string;
  bgImage?: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  availableImages: string[] = [
    'images/flower_backgrounds/IMG_7433.JPG',
    'images/flower_backgrounds/P1011785.JPG',
    'images/flower_backgrounds/P1011843.JPG',
    'images/flower_backgrounds/P1011855.JPG',
    'images/flower_backgrounds/P1011909.JPG',
    'images/flower_backgrounds/P1011929.JPG',
    'images/flower_backgrounds/P1012178.JPG',
    'images/flower_backgrounds/P1012216.JPG',
    'images/flower_backgrounds/P1012312.JPG',
    'images/flower_backgrounds/P1014435.JPG',
    'images/flower_backgrounds/P1015074.JPG',
    'images/flower_backgrounds/P1015075.JPG',
    'images/flower_backgrounds/P1015079.JPG',
    'images/flower_backgrounds/P1015111.JPG',
    'images/flower_backgrounds/P1015112.JPG'
  ];

  today: Date = new Date();
  
  navItems: NavItem[] = [
    { title: 'About', link: '/about' },
    { title: 'Photos', link: '/photos' },
    { title: 'Writing', link: '/writing' },
    { title: 'Games', link: '/games' }
  ];

  ngOnInit(): void {
    // Fisher-Yates shuffle algorithm to randomize images without duplicates
    const shuffled = [...this.availableImages].sort(() => Math.random() - 0.5);

    this.navItems = this.navItems.map((item, index) => ({
      ...item,
      bgImage: shuffled[index % shuffled.length] // Assigns a unique random photo
    }));
  }
}