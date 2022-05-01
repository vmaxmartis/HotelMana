import axios from "axios";
import * as Config from "./Config";
import cookie from "react-cookies";

export default async function ApiCaller(endpoint, method = "GET", body, ) {
  try {
    const loginData = cookie.load("ADMIN_DATA") || {}; 
    const token = loginData.Token; 
    let res = await axios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (err) {
    console.error(err);
  }
}
