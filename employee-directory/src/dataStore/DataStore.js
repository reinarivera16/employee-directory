import axios from "axios";

const uri = "https://randomuser.me/api/";
const params =
    "?results=50&nat=us&exc=gender,location,login,registered,phone,nat";

export const DataStore = {
    fetch: function () {
        return axios.get(uri + params);
    },
};
