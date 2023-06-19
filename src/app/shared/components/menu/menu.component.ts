import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { route: '/main', name: 'Main Screen'},
    { route: '/mostplayed', name: 'Most Played Games'},
    { route: '/pending', name: 'Pending Games'},
    { route: '/new', name: 'Add New Game'}
  ]
  
}
