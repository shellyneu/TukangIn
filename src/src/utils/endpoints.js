import {BASE_URL} from '@env'

export const ENDPOINT = {
  AUTH: {
    LOGIN: `${BASE_URL}api/users/login`,
    REGISTER: `${BASE_URL}api/users/register`,
    VALIDATE: `${BASE_URL}api/tukang/validate-account`,
  },
  REVIEW: {
    POST_REVIEW: `${BASE_URL}api/reviews/add`,
    GET_REVIEW: `${BASE_URL}api/reviews`,
  },
  JOB: {
    POST_JOB: `${BASE_URL}api/postJobs/`,
    GET_JOB: `${BASE_URL}api/postJobs/`,
  },
  PROFILE: {
    USER: `${BASE_URL}api/users`,
  },
}
