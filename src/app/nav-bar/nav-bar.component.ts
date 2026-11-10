import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input({ required: true }) bgImage!: string; // <-- Must have @Input()
  @Input({ required: true }) title!: string;
  @Input({ required: true }) link!: string;
}