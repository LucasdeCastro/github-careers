import axios from "axios";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token")

    if (token !== null) {
      config.headers.Authorization = token;
    }

    return config;
  }, function (err) {
    return Promise.reject(err);
  });
  return instance
}

export const BASE_URL = "https://api.github.com/repos/";
export const instance = createAxiosInstance()

export function getIssue(repo, id) {
  return instance.get(`${repo}/vagas/issues/${id}`);
}

export function getIssues(repo) {
  return instance.get(`${repo}/vagas/issues`);
}

export function getIssuesPage(repo, page) {
  return instance.get(`${repo}/vagas/issues?page=${page}`);
}

export function getRepo(repo) {
  return instance.get(`${repo}/vagas`);
}
export function getLabels(repo) {
  return instance.get(`${repo}/vagas/labels`);
}
