import axios from "axios";

export const BASE_URL = "https://api.github.com/repos/";
export const instace = axios.create({
  baseURL: BASE_URL
});

export function getIssues() {
  return instace.get("frontendbr/vagas/issues");
}

export function getIssuesPage(page) {
  return instace.get("frontendbr/vagas/issues?page=" + page);
}
