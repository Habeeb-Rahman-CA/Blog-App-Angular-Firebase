import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryNavbarComponent } from './layout/category-navbar/category-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PostCardComponent } from './layout/post-card/post-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CategoryNavbarComponent, FooterComponent, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app-angular-firebase';
}
