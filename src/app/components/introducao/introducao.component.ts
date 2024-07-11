import { Component, Input } from '@angular/core';
import { Dados } from '../../interfaces/dados.interface';

@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [],
  templateUrl: './introducao.component.html',
  styleUrl: './introducao.component.scss'
})
export class IntroducaoComponent {
  @Input() dados: Dados | undefined;
}
