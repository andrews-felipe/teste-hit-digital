import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { Dados } from './interfaces/dados.interface';
import { ContatoComponent } from "./components/contato/contato.component";
import { SOBRE } from './mock/sobre';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Contato';
  dados: Dados = { title: '', text: '' };
  sobre: any = SOBRE // tipo any pois é apenas um mock

  constructor(private http: HttpService) { }

  changeView(title: string) {
    this.title = title
  }

  ngOnInit(): void {
    this.http.getDados().subscribe(({ data }) => {
      this.dados.title = data?.title
      this.dados.text = data?.text
    })
  }
}
