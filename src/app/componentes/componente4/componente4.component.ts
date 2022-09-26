import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Pagina Web', weight: 'Pueden resolver cualquier duda sobre el portafolio de productos.', symbol: 'H' },
  { position: 2, name: 'Atencion remota para TVs y dispositivos Galaxy', weight: 'Solicitudes simples sobre configuracion de dispositivos. Atencion en tiempo real.', symbol: 'He' },
  { position: 3, name: 'Samsung Members', weight: 'Soporte tecnico para dispositivos de forma personalizada.', symbol: 'Li' },
  { position: 4, name: 'Casa Samsung', weight: 'Ubicacion fisica especializada en atencion al cliente y servicio tecnico, con ambiente climatizados para hacer mas amena la espera', symbol: 'Be' },
  { position: 5, name: 'Soporte a domicilio para dispositivos de grandes dimensiones', weight: 'Soporte residecial para heladeras, lavadoras o TVs de 43" o mas.', symbol: 'B' },
  { position: 6, name: 'Tiendas Samsung', weight: 'Ademas de poder consultar y comprar dispositivos Samsung, proveen un servicio tenico simple.', symbol: 'C' },
  { position: 7, name: 'Soporte Telefonico Samsung', weight: 'Ideal para despejar dudas, hacer solicitudes y obtener soporte remoto las 24 horas.', symbol: 'N' },
  /*{ position: 8, name: '', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },*/
];

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css'],
})
export class Componente4Component implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
