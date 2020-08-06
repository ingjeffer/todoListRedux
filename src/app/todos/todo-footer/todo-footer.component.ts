import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appstate';
import { filtrosValidos, setFiltro } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    /*
    this.store.select('filtro')
      .subscribe(filtro => {
        this.filtroActual = filtro;
      });
      */

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  seleccionarFiltro(filtro: filtrosValidos) {
    this.store.dispatch(setFiltro({ filtro }));
  }

}
