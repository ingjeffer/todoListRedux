import { Todo } from './todos/models/todo.model';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducers';
import { filtrosValidos } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer,
};
