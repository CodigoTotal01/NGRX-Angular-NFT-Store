import {createAction, createReducer, on} from '@ngrx/store';
import {ItemModel} from "@core/models/Item.interface";
import {loadedItems, loadItems} from "../actions/items.actions";
import {ItemsState} from "@core/models/Items.state";
//! El reducer conecta con el store --> app module agrega el estado

//TODO: State initial


export const initialState: ItemsState = {loading: false, items: []}


export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    console.log("HOla lola")
    return {...state, loading: true};
  }),
  //Con props -> destructurar para optener los items mira las propiedades
  on(loadedItems, (state, {items}) => {
    console.log("YO uso los props")
    return {...state, loading: false, items};
  }));

