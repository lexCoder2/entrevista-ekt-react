import axios from "axios";

const API_URL = "http://localhost:8080/api/test/";

const getUserBoard = () => {
  return Promise.resolve( JSON.parse(localStorage.getItem("user")))
  //axios.get(API_URL + "user", { headers: authHeader() });
};



const UserService = {
  getUserBoard,
};

export default UserService;
