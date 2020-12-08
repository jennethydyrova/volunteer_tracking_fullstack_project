// import VOLUNTEERS_API from "../Consts/index";
import axios from "axios";

export const FETCH_VOLUNTEERS = "FETCH_VOLUNTEERS";
export const FETCH_VOLUNTEERS_SUCCESS = "FETCH_VOLUNTEERS_SUCCESS";
export const FETCH_VOLUNTEERS_FAILURE = "FETCH_VOLUNTEERS_FAILURE";
export const POST_VOLUNTEERS = "POST_VOLUNTEERS";
export const POST_VOLUNTEERS_SUCCESS = "POST_VOLUNTEERS_SUCCESS";
export const POST_VOLUNTEERS_FAILURE = "POST_VOLUNTEERS_FAIL";
export const EDIT_VOLUNTEER_INFO = "EDIT_VOLUNTEER_INFO";
export const EDIT_VOLUNTEER_INFO_SUCCESS = "EDIT_VOLUNTEER_INFO_SUCCESS";
export const EDIT_VOLUNTEER_INFO_FAILURE = "EDIT_VOLUNTEER_INFO_FAIL";
export const DELETE_VOLUNTEER = "DELETE_VOLUNTEER";
export const DELETE_VOLUNTEER_SUCCESS = "DELETE_VOLUNTEER_SUCCESS";
export const DELETE_VOLUNTEER_FAILURE = "DELETE_VOLUNTEER_FAIL";
export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";
export const POST_PROJECTS = "POST_PROJECTS";
export const POST_PROJECTS_SUCCESS = "POST_PROJECTS_SUCCESS";
export const POST_PROJECTS_FAILURE = "POST_PROJECTS_FAIL";
export const EDIT_PROJECT_INFO = "EDIT_PROJECT_INFO";
export const EDIT_PROJECT_INFO_SUCCESS = "EDIT_PROJECT_INFO_SUCCESS";
export const EDIT_PROJECT_INFO_FAILURE = "EDIT_PROJECT_INFO_FAIL";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAILURE = "DELETE_PROJECT_FAIL";
export const FETCH_VOLUNTEERS_ACTIVITY = "FETCH_VOLUNTEERS_ACTIVITY";
export const FETCH_VOLUNTEERS_ACTIVITY_SUCCESS =
  "FETCH_VOLUNTEERS_ACTIVITY_SUCCESS";
export const FETCH_VOLUNTEERS_ACTIVITY_FAILURE = "FETCH_VOLUNTEERS_FAILURE";

const VOLUNTEERS_API = "http://localhost:3001/volunteers";
const PROJECTS_API = "http://localhost:3001/projects";
const VOLUNTEERS_ACTIVITY_API = "http://localhost:3001/volunteertracking";

export const fetchVolunteers = () => {
  return {
    type: FETCH_VOLUNTEERS,
  };
};

export const fetchVolunteersSuccess = (data) => {
  return {
    type: FETCH_VOLUNTEERS_SUCCESS,
    data,
  };
};

export const fetchVolunteersFail = (error) => {
  return {
    type: FETCH_VOLUNTEERS_FAILURE,
    error,
  };
};

export const editVolunteerInfo = () => {
  return {
    type: EDIT_VOLUNTEER_INFO,
  };
};

export const editVolunteerInfoSuccess = (data) => {
  return {
    type: EDIT_VOLUNTEER_INFO_SUCCESS,
    data,
  };
};

export const editVolunteerInfoFail = (error) => {
  return {
    type: EDIT_VOLUNTEER_INFO_FAILURE,
    error,
  };
};

export const postVolunteers = () => {
  return {
    type: POST_VOLUNTEERS,
  };
};

export const postVolunteersFail = (error) => {
  return {
    type: POST_VOLUNTEERS_FAILURE,
    error,
  };
};

export const deleteVolunteer = (id) => {
  return {
    type: DELETE_VOLUNTEER,
    id,
  };
};

export const deleteVolunteerSuccess = (id) => {
  return {
    type: DELETE_VOLUNTEER_SUCCESS,
    id,
  };
};

export const deleteVolunteerFail = (error) => {
  return {
    type: DELETE_VOLUNTEER_FAILURE,
    error,
  };
};

export const fetchProjects = () => {
  return {
    type: FETCH_PROJECTS,
  };
};

export const fetchProjectsSuccess = (data) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    data,
  };
};

export const fetchProjectsFail = (error) => {
  return {
    type: FETCH_PROJECTS_FAILURE,
    error,
  };
};

export const postProjects = () => {
  return {
    type: POST_PROJECTS,
  };
};

export const postProjectsFail = (error) => {
  return {
    type: POST_PROJECTS_FAILURE,
    error,
  };
};

export const editProjectInfo = () => {
  return {
    type: EDIT_PROJECT_INFO,
  };
};

export const editProjectInfoSuccess = (data) => {
  return {
    type: EDIT_PROJECT_INFO_SUCCESS,
    data,
  };
};

export const editProjectInfoFail = (error) => {
  return {
    type: EDIT_PROJECT_INFO_FAILURE,
    error,
  };
};

export const deleteProject = (id) => {
  return {
    type: DELETE_PROJECT,
    id,
  };
};

export const deleteProjectSuccess = (id) => {
  return {
    type: DELETE_PROJECT_SUCCESS,
    id,
  };
};

export const deleteProjectFail = (error) => {
  return {
    type: DELETE_PROJECT_FAILURE,
    error,
  };
};

export const fetchVolunteersActivity = () => {
  return {
    type: FETCH_VOLUNTEERS_ACTIVITY,
  };
};

export const fetchVolunteersActivitySuccess = (data) => {
  return {
    type: FETCH_VOLUNTEERS_ACTIVITY_SUCCESS,
    data,
  };
};

export const fetchVolunteersActivityFail = (error) => {
  return {
    type: FETCH_VOLUNTEERS_ACTIVITY_FAILURE,
    error,
  };
};

export function fetchVolunteerList() {
  return async function (dispatch) {
    dispatch(fetchVolunteers());
    const request = axios({
      method: "GET",
      url: VOLUNTEERS_API,
      headers: [],
    });
    const result = await request.then(
      (response) => dispatch(fetchVolunteersSuccess(response.data)),
      (err) => dispatch(fetchVolunteersFail(err))
    );
  };
}

export function fetchProjectsList() {
  return async function (dispatch) {
    dispatch(fetchProjects());
    const request = axios({
      method: "GET",
      url: PROJECTS_API,
      headers: [],
    });
    const result = await request.then(
      (response) => dispatch(fetchProjectsSuccess(response.data)),
      (err) => dispatch(fetchProjectsFail(err))
    );
  };
}

export function postVolunteerInfo(
  name,
  languagesSpoken,
  occupation,
  skills,
  role
) {
  return async function (dispatch) {
    dispatch(postVolunteers());
    await axios
      .post(VOLUNTEERS_API, {
        name,
        languagesSpoken,
        occupation,
        skills,
        role,
      })

      .then((res) => {
        dispatch({
          type: "POST_VOLUNTEERS_SUCCESS",
          payload: { name, languagesSpoken, occupation, skills, role },
        });
      })
      .catch((error) => postVolunteersFail(dispatch, error));
  };
}

export function postProjectInfo(name, days, time, location) {
  return async function (dispatch) {
    dispatch(postProjects());
    await axios
      .post(PROJECTS_API, {
        name,
        days,
        time,
        location,
      })

      .then((res) => {
        dispatch({
          type: "POST_PROJECTS_SUCCESS",
          payload: { name, days, time, location },
        });
      })
      .catch((error) => postProjectsFail(dispatch, error));
  };
}

export function patchVolunteerInfo(
  name,
  languagesSpoken,
  occupation,
  skills,
  role,
  id
) {
  return async function (dispatch) {
    dispatch(editVolunteerInfo());
    await axios
      .patch(`${VOLUNTEERS_API}/${id}`, {
        name,
        languagesSpoken,
        occupation,
        skills,
        role,
        id,
      })
      .then((res) => {
        dispatch({
          type: "EDIT_VOLUNTEER_INFO_SUCCESS",
          payload: { name, languagesSpoken, occupation, skills, role, id },
        });
      })
      .catch((error) => editVolunteerInfoFail(dispatch, error));
  };
}

export function patchProjectInfo(name, days, time, location, id) {
  return async function (dispatch) {
    dispatch(editProjectInfo());
    await axios
      .patch(`${PROJECTS_API}/${id}`, {
        name,
        days,
        time,
        location,
        id,
      })
      .then((res) => {
        dispatch({
          type: "EDIT_PROJECT_INFO_SUCCESS",
          payload: { name, days, time, location, id },
        });
      })
      .catch((error) => editProjectInfoFail(dispatch, error));
  };
}

export function deleteVolunteerInfo(id) {
  return async function (dispatch) {
    dispatch(deleteVolunteer(id));
    await axios
      .delete(`${VOLUNTEERS_API}/${id}`)
      .then((response) => dispatch(deleteVolunteer(id)))
      .catch((err) => dispatch(deleteVolunteerFail(dispatch, err)));
  };
}

export function deleteProjectInfo(id) {
  return async function (dispatch) {
    dispatch(deleteProject(id));
    await axios
      .delete(`${PROJECTS_API}/${id}`)
      .then((response) => dispatch(deleteProject(id)))
      .catch((err) => dispatch(deleteProjectFail(dispatch, err)));
  };
}

export function fetchVolunteerActivityList() {
  return async function (dispatch) {
    dispatch(fetchVolunteersActivity());
    const request = axios({
      method: "GET",
      url: VOLUNTEERS_ACTIVITY_API,
      headers: [],
    });
    const result = await request.then(
      (response) => dispatch(fetchVolunteersActivitySuccess(response.data)),
      (err) => dispatch(fetchVolunteersActivityFail(err))
    );
  };
}
