import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPagina } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: DataPagina = {
    titulo: '',
    nombre_completo: '',
    correo: '',
    perfil: '',
    celular: '',
    direccion: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  };
  cargada = false;

  constructor(
    private http: HttpClient,
  ) { 
    this.http.get<DataPagina>('/assets/data/data-pagina.json').subscribe((res: DataPagina) => {
      this.cargada = true;
      this.info = res;      
    });
  }

}
