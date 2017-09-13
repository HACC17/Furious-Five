/* eslint-disable */
var STORAGE_KEY = "data";

export default {
  dataf: {
    get: function () {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    },
    set: function (todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }
}
