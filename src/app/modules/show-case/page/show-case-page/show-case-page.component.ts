import { Component, OnInit } from '@angular/core';

import {Store} from "@ngrx/store";
import {loadedItems, loadItems} from "../../../../state/actions/items.actions";
import {Observable} from "rxjs";
import {selectLoading} from "../../../../state/selectors/items.selectors";
import {ShowCaseService} from "@modules/show-case/services/show-case.service";
import {ItemModel} from "@core/models/Item.interface";


@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {


  loading$: Observable<boolean> = new Observable<boolean>();

  constructor( private store:Store<any>,
               private showCaseService: ShowCaseService) {}

  ngOnInit(): void {

    this.loading$ = this.store.select(selectLoading);


    this.store.dispatch(loadItems());

    this.showCaseService.getDataApi().subscribe((response: ItemModel[])=> {
      this.store.dispatch(loadedItems({items: response}));
    })
  }

  loadData(): void {

  }

}
