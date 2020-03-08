import axios from "axios";

export default {
  sendMail: function(mail) {
    return axios.post("/contact",mail);
  }
};
