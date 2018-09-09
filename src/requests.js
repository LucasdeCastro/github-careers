import axios from "axios";

export const BASE_URL = "https://api.github.com/repos/";
export const instace = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `token ${localStorage.getItem("access_token")}` }
});

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
