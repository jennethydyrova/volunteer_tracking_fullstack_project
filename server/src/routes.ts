import { UserController } from "./controller/UserController";
import { ProjectsController } from "./controller/ProjectsController";
import { VolunteersTrackingController } from "./controller/VolunteersTracking";

export const Routes = [
  {
    method: "get",
    route: "/volunteers",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/volunteers/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/volunteers",
    controller: UserController,
    action: "save",
  },
  {
    method: "patch",
    route: "/volunteers/:id",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/volunteers/:id",
    controller: UserController,
    action: "remove",
  },

  {
    method: "get",
    route: "/projects",
    controller: ProjectsController,
    action: "all",
  },
  {
    method: "get",
    route: "/projects/:id",
    controller: ProjectsController,
    action: "one",
  },
  {
    method: "post",
    route: "/projects",
    controller: ProjectsController,
    action: "save",
  },
  {
    method: "patch",
    route: "/projects/:id",
    controller: ProjectsController,
    action: "save",
  },
  {
    method: "delete",
    route: "/projects/:id",
    controller: ProjectsController,
    action: "remove",
  },

  {
    method: "get",
    route: "/volunteertracking",
    controller: VolunteersTrackingController,
    action: "all",
  },
  {
    method: "get",
    route: "/volunteertracking/:id",
    controller: VolunteersTrackingController,
    action: "one",
  },
  {
    method: "post",
    route: "/volunteertracking",
    controller: VolunteersTrackingController,
    action: "save",
  },
  {
    method: "patch",
    route: "/volunteertracking/:id",
    controller: VolunteersTrackingController,
    action: "save",
  },
  {
    method: "delete",
    route: "/volunteertracking/:id",
    controller: VolunteersTrackingController,
    action: "remove",
  },
];
