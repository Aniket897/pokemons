import axios from "axios";

export default axios.create({
  baseURL:
    "https://yigv2ly72m.execute-api.ap-south-1.amazonaws.com/default/pivot-pokemon",
});
