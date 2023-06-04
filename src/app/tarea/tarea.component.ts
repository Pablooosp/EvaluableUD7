import { Component } from '@angular/core';

interface Tarea {
  titulo: string;
  descripcion: string;
  fecha: string;
  estado: string;
  editando: boolean;
}


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  tareas: Tarea[] = [];
  nuevaTarea: Tarea = {
    titulo: '',
    descripcion: '',
    fecha: '',
    estado: 'pendiente',
    editando: false,
  };
  estadoFiltrado: string = 'todos';
  constructor() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
      this.ordenarTareas();
      
      this.tareas.forEach(tarea => {
        if (!tarea.estado) {
          tarea.estado = "pendiente";
        }
      });
    }
  }

  agregarTarea() {
    this.nuevaTarea.estado = 'pendiente';
    this.tareas.push({ ...this.nuevaTarea });
    this.ordenarTareas();
    this.guardarTareas();
    this.nuevaTarea.titulo = '';
    this.nuevaTarea.descripcion = '';
    this.nuevaTarea.fecha = '';
  }

  eliminarTarea(tarea: Tarea) {
    const index = this.tareas.indexOf(tarea);
    if (index !== -1) {
      this.tareas.splice(index, 1);
      this.guardarTareas();
    }
  }

  ordenarTareas() { //ordenar las tareas por orden cronologico
    this.tareas.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }

  guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
  cambiarEstado(tarea: Tarea) {
    tarea.estado = tarea.estado === 'pendiente' ? 'completado' : 'pendiente';
    this.guardarTareas();
  }
  editarTarea(tarea: Tarea) {
    tarea.editando = true;
  }
  
  guardarEdicion(tarea: Tarea) {
    tarea.editando = false;
    this.ordenarTareas();
    this.guardarTareas();
  }
 
  
   
}
