import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filter.actions';

export const valorInicial: filtrosValidos = 'todos';

const _filterReducer = createReducer(valorInicial,
    on(setFiltro, (state, { filtro }) => filtro),
);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}
