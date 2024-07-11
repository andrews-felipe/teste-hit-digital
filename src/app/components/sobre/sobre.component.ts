import { Component } from '@angular/core';
import { SOBRE } from '../../mock/sobre';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  sobre: any = SOBRE // tipo any pois é apenas um mock
}
