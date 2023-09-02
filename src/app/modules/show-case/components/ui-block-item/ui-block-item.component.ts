
import { Component, Input, OnInit } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {loadedItems} from "../../../../state/actions/items.actions";
import {selectListItems} from "../../../../state/selectors/items.selectors";
import {AppState} from "../../../../state/state/item.state";

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {

  items$: Observable<any> = new Observable<any>();

  constructor(private store: Store<AppState>) {


  }

  ngOnInit(): void {
      this.items$ = this.store.select(selectListItems);
  }


}
