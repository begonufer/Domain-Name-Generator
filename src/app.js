/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extension = [".es", ".com"];

window.onload = function() {
  //write your code here
  pronoun.forEach(pronouns => {
    adj.forEach(adje => {
      noun.forEach(nouns => {
        extension.forEach(extensions => {
          console.log(`${pronouns}${adje}${nouns}${extensions}`);
        });
      });
    });
  });
};
