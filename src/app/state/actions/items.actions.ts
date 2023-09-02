import {createAction, props} from '@ngrx/store';
import {ItemModel} from "@core/models/Item.interface";
//Las acciones requiren de un type pero no necesariamente unas props


export const loadItems = createAction(
    '[Item List] Add items',
);


export const loadedItems = createAction(
    '[Item List] Loaded success',
    //Typado de dato que nosotros capturamsos de la respuesta de la api
    props<{items: ItemModel[]}>()
);
