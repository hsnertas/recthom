import axios from "axios";
const BASEURL= "https://randomuser.me/api/?results=10&nat=us"
export default{
    search:function(query){
        return axios.get(BASEURL);
    }
}