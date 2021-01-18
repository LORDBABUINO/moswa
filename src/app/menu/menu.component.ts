import { Component } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent {
  productTypes = [
    'Anéis',
    'Brincos',
    'Pulseiras',
    'Colares',
    'Correntes',
    'Conjuntos',
    'Pingentes',
    'Tornozeleiras',
    'Acessórios',
  ]
}
