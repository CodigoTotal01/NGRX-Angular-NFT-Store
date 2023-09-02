//Es una simple interfas el state
import {ItemModel} from "@core/models/Item.interface";
import {ItemsState} from "@core/models/Items.state";
import {ActionReducer, ActionReducerMap} from "@ngrx/store";
import {itemsReducer} from "../reducers/item.reducer";

//Los datos que cualquier componente que los use los usuara, nuestras "bases de datos"
export interface AppState {
  items: ItemsState; //debe cumplir con la interfas del estado inicial
  // otro ...
}

// ActionReducerMap<AppState>
export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    items: itemsReducer
}
