import {BASE_URL, BASE_URL_2, BASE_URL_4} from '@env'

export const ENDPOINT = {
  AUTH: {
    LOGIN: `${BASE_URL_4}api/users/login`,
    REGISTER: `${BASE_URL_4}api/users/register`,
    VALIDATE: `${BASE_URL_4}api/tukang/validate-account`,
  },
  REVIEW: {
    POST_REVIEW: `${BASE_URL_4}/api/reviews/add`,
    GET_REVIEW: `${BASE_URL_4}/api/reviews`,
  },
  JOB: {
    POST_JOB: `${BASE_URL_4}/api/postJobs`,
    GET_JOB: `${BASE_URL_4}/api/jobs`,
  },
  PROFILE: {
    USER: `${BASE_URL_4}/api/users`,
  },
}
