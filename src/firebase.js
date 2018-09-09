import firebase from "firebase/app";
import "firebase/auth";

import { instace } from "./requests";

const config = {
  apiKey: "AIzaSyCpzGCkGcsRpTTCunnXb-iQ8zsldzDSg-c",
  authDomain: "github-careers.firebaseapp.com",
  databaseURL: "https://github-careers.firebaseio.com",
  projectId: "github-careers",
  storageBucket: "github-careers.appspot.com",
  messagingSenderId: "6118754197"
};

firebase.initializeApp(config);

const createGithubProvider = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("repo");
  provider.setCustomParameters({
    allow_signup: "false"
  });

  return provider;
};

export const githubLogin = () => {
  const provider = createGithubProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      const token = result.credential.accessToken;
      localStorage.setItem("access_token", token);
      instace.headers = { ...instace.headers, Authorization: `token ${token}` };
    });
};
