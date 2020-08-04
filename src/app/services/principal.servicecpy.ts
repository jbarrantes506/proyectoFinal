import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  addTarea(tarea: Tarea) {
    throw new Error("Method not implemented.");
  }
  public tareas:  Tarea[]; 
  constructor() {
    this.tareas = new Array <Tarea>();
   }
}
