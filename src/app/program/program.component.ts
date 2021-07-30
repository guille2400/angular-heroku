import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Alumnos{
  constructor(
  public id: number,
  public areaFuncional: String,
  public nombreCurso: String,
  public codCurso: String,
  public alumnosAptos: number
  ){}
}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  alumnos: Alumnos[] = [];
  searchValue: any;
  constructor(private httpClient: HttpClient) { 
  /*This is intentional*/}

  ngOnInit(): void {
    this.getAlumnos();

  }
  getAlumnos(){
    this.httpClient.get<any>('http://localhost:8080/api-bd/proyeccion/listar').subscribe(
      response =>{
        console.log(response);
        this.alumnos = response;
      }
    );
  }
  SearchFuncional(){
    if(this.searchValue == ""){
      this.ngOnInit();
    }
    else{
      this.alumnos = this.alumnos.filter(res =>{
        return res.areaFuncional.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
      })
    }

  }
  SearchNombre(){
    if(this.searchValue == ""){
      this.ngOnInit();
    }
    else{
      this.alumnos = this.alumnos.filter(res =>{
        return res.nombreCurso.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
      })
    }
  }
  key='id';
  reverse:boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;

  }

}
