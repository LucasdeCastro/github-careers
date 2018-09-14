import axios from "axios";

const createAxiosInstance = () => {
  const instace = axios.create({
    baseURL: BASE_URL,
  });
  instace.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token")

    if (token !== null) {
      config.headers.Authorization = token;
    }

    return config;
  }, function (err) {
    return Promise.reject(err);
  });
  return instace
}

export const BASE_URL = "https://api.github.com/repos/";
export const instace = createAxiosInstance()

export function getIssues(repo) {
  return instace.get(`${repo}/vagas/issues`);
}

export function getIssuesPage(repo, page) {
  return instace.get(`${repo}/vagas/issues?page=${page}`);
}

export function getRepo(repo) {
  return instace.get(`${repo}/vagas`);
}
export function getLabels(repo) {
  return instace.get(`${repo}/vagas/labels`);
}
