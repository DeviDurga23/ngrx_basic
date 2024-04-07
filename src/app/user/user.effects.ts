import{Injectable} from "@angular/core";
import { UsersService } from "../users.service";
import * as UserActions from "../user/user.action" 
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { User } from "../Models/user.model";


@Injectable()


export class UserEffects {

  constructor(
    private actions$: Actions,
    private usersService: UsersService 
  ) {}
  loadUsers$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(()=>
      this.usersService.getUser().pipe(
        map(users => UserActions.loadUsersSuccess({users : users as ReadonlyArray<User>})),
        catchError((error)=>of(UserActions.loadUsersFailure({error}
          ))))))})
        
          addUsers$ = createEffect(() => {
            return this.actions$.pipe(
              ofType(UserActions.addUsers),
              switchMap(({ user }) =>
                this.usersService.addUser(user).pipe(
                  map(() => UserActions.addUsersSuccess({ user })),
                  catchError(error => of(UserActions.addUsersFailure({ error }))) // Dispatch addUsersFailure in case of error
                )
              )
            );
          });
            
          

      
            removeUsers$ = createEffect(()=>{
              return this.actions$.pipe(
                ofType(UserActions.removeUsers),
                switchMap(({id})=>
                this.usersService.deleteUser(id).pipe(
                  map(()=>UserActions.removeUsersSuccess({id})),
                  catchError(error=>of(UserActions.removeUsersFailure({error}))))))})
  
}
       
 
    
// }
//   )
//first step create annonymous function then return 
//switchMap() is used to switch to a new observable (userService.getUser()) each time a loadUsers action is dispatched.
// map() is used to map the successful HTTP response to loadUsersSuccess action.
// catchError() is used to catch any errors during the HTTP request and map them to loadUsersFailure action.