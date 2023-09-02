import {ItemModel} from "@core/models/Item.interface";

export interface ItemsState {
  loading: boolean, items: ReadonlyArray<ItemModel>
}
