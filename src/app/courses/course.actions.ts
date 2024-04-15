import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
)
export const loadAllCoursesLoaded = createAction(
  '[Load Courses effect] All Courses Loaded',
  props<{courses:Course[]}>()
)
