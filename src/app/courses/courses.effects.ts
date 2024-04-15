import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesActions } from "./action.types";
import { CoursesHttpService } from "./services/courses-http.service";
import { concatMap, map } from "rxjs/operators";
import { loadAllCoursesLoaded } from "./course.actions";

@Injectable()

export class CoursesEffects {

  loadCourses = createEffect(
  () => this.actions$.pipe(
    ofType(CoursesActions.loadAllCourses),
    concatMap(action => this.courseHttpService.findAllCourses()),
    map( (courses) => loadAllCoursesLoaded({courses}))
  )
  )
  constructor(private actions$: Actions, private courseHttpService: CoursesHttpService){

  }
}
