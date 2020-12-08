import {
  FETCH_VOLUNTEERS,
  FETCH_VOLUNTEERS_SUCCESS,
  FETCH_VOLUNTEERS_FAILURE,
  POST_VOLUNTEERS_SUCCESS,
  POST_VOLUNTEERS_FAILURE,
  EDIT_VOLUNTEER_INFO,
  EDIT_VOLUNTEER_INFO_SUCCESS,
  EDIT_VOLUNTEER_INFO_FAILURE,
  DELETE_VOLUNTEER,
  DELETE_VOLUNTEER_SUCCESS,
  DELETE_VOLUNTEER_FAILURE,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  POST_PROJECTS_SUCCESS,
  POST_PROJECTS_FAILURE,
  EDIT_PROJECT_INFO_SUCCESS,
  DELETE_PROJECT,
  DELETE_PROJECT_FAILURE,
  FETCH_VOLUNTEERS_ACTIVITY,
  FETCH_VOLUNTEERS_ACTIVITY_FAILURE,
  FETCH_VOLUNTEERS_ACTIVITY_SUCCESS,
} from "../actions";

const defaultStateList = {
  isFetching: false,
  volunteers: [],
  error: {},
  projects: [],
  volunteersTrack: [],
};

const volunteerList = (state = defaultStateList, action) => {
  console.log(action);

  switch (action.type) {
    case FETCH_VOLUNTEERS:
      return { ...state, isFetching: true };
    case FETCH_VOLUNTEERS_SUCCESS:
      return { ...state, isFetching: false, volunteers: action.data };
    case FETCH_VOLUNTEERS_FAILURE:
      return { ...state, isFetching: false, error: action.data };
    case POST_VOLUNTEERS_SUCCESS:
      return {
        ...state,
        volunteers: [
          ...state.volunteers,
          {
            name: action.payload.name,
            languagesSpoken: action.payload.languagesSpoken,
            occupation: action.payload.occupation,
            skills: action.payload.skills,
            role: action.payload.role,
          },
        ],
      };
    case POST_VOLUNTEERS_FAILURE:
      return { ...state, error: action.data };
    case EDIT_VOLUNTEER_INFO_SUCCESS:
      const replaceVolunteer = state.volunteers.findIndex(
        (el) => el.id === action.payload.id
      );
      const newState = { ...state };
      newState.volunteers[replaceVolunteer] = {
        name: action.payload.name,
        languagesSpoken: action.payload.languagesSpoken,
        occupation: action.payload.occupation,
        skills: action.payload.skills,
        role: action.payload.role,
        id: action.payload.id,
      };
      return {
        ...newState,
      };
    case DELETE_VOLUNTEER:
      const singleVolunteer = state.volunteers.filter(
        (volunteer) => volunteer.id !== action.id
      );
      console.log(singleVolunteer);
      return { ...state, volunteers: singleVolunteer };
    case DELETE_VOLUNTEER_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    case FETCH_PROJECTS:
      return { ...state, isFetching: true };
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, isFetching: false, projects: action.data };
    case FETCH_PROJECTS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    case POST_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            name: action.payload.name,
            days: action.payload.days,
            time: action.payload.time,
            location: action.payload.location,
          },
        ],
      };
    case POST_PROJECTS_FAILURE:
      return { ...state, error: action.data };

    case EDIT_PROJECT_INFO_SUCCESS:
      const replaceProjectInfo = state.projects.findIndex(
        (el) => el.id === action.payload.id
      );
      const newProjectState = { ...state };
      newProjectState.projects[replaceProjectInfo] = {
        name: action.payload.name,
        days: action.payload.days,
        time: action.payload.time,
        location: action.payload.location,
        id: action.payload.id,
      };
      return {
        ...newProjectState,
      };
    case DELETE_PROJECT:
      const projectIndex = state.projects.filter(
        (project) => project.id !== action.id
      );
      return { ...state, projects: projectIndex };
    case DELETE_PROJECT_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    case FETCH_VOLUNTEERS_ACTIVITY:
      return { ...state, isFetching: true };
    case FETCH_VOLUNTEERS_ACTIVITY_SUCCESS:
      return { ...state, isFetching: false, volunteersTrack: action.data };
    case FETCH_VOLUNTEERS_ACTIVITY_FAILURE:
      return { ...state, isFetching: false, error: action.data };
    default:
      return state;
  }
};

export default volunteerList;
