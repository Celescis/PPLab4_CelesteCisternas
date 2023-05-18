import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {
  perfil:any;
  urlApi:string = "https://api.github.com/users/Celescis";

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
      this.http.get(this.urlApi).subscribe(res => this.perfil = res);
  }
}
