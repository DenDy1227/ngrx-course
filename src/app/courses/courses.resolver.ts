import { Injectable } from "@angular/core";
import { Course } from "./model/course";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";
import { first, tap } from "rxjs/operators";
import { loadAllCourses } from "./course.actions";

@Injectable()
export class CoursesResolver implements Resolve<Course[]> {

  constructor(private store: Store<AppState>){

  }
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    return this.store.pipe(
      tap((courses)=>{
        this.store.dispatch(loadAllCourses())
      }),
      first()
    )
  }
}
