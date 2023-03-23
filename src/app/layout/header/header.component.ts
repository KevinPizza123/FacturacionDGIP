import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  items: MenuItem[] = [];

  ngOnInit(): void {

      this.items = [
        {label: 'Tarjeta', icon: 'pi pi-fw pi-user', routerLink: '/tarjeta'      },
        {label: 'Calendario', icon: 'pi pi-fw pi-calendar'},
        {label: 'Notificaciones', icon: 'pi pi-fw pi-comment'},
        {label: 'Configuracion', icon: 'pi pi-fw pi-cog'}
    ];
  }
}

