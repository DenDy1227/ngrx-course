import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap( (actions) =>
        localStorage.setItem('user', JSON.stringify(actions.user))
      )
    ),{
      dispatch: false
    }
  )
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap( (actions) =>
        {localStorage.removeItem('user')
      this.router.navigateByUrl('/login')}
      )
    ),{
      dispatch: false
    }
  )
  constructor(private actions$: Actions, private router: Router){



    // login$.subscribe()
    actions$.subscribe(actions =>{

      if( actions.type == "[Login Page] Login" ){
        localStorage.setItem('user', JSON.stringify(actions["user"]))
      }

      if( actions.type == "[Top Menu] Logout" ){
        localStorage.removeItem('user')
      }
    })
  }
}
