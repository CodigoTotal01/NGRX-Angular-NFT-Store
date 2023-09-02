// funcion encargada de realizar ek selector
import {createSelector} from "@ngrx/store";
import {AppState} from "../state/item.state";
import {state} from "@angular/animations";
import {ItemsState} from "@core/models/Items.state";

//TODO: El selector que tiene relacion con la propiedad items del state
export const selectItemsFeature = (state: AppState) => state.items;
export const selectShopping = (state: AppState) => state.items;

//Basicamete deleccioan nuestras propiedaddes
export const selectListItems = createSelector(
  selectItemsFeature,
  //La funciln solo nos retorna la proiedad especifica del estado
  (state:ItemsState) => state.items
);

//Recuerda es par aoptener las cosa que queremos de manera automatica
export const selectLoading = createSelector(
  selectItemsFeature,
  (state:ItemsState) => state.loading
);



