import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment,decrement,reset } from "../action/actions";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent 
{
  count$ : Observable<number> | undefined;

  constructor(private store :Store<{ count : number}>){
    this.count$ = store.pipe(select('count'));
  }

  increment()
  {
    this.store.dispatch(increment());
  }
  decrement()
  {
     this.store.dispatch(decrement());
  }
  reset()
  {
    this.store.dispatch(reset());
  }
  

}
