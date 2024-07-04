import axios from "axios"
const API_URL = "https://jsonplaceholder.typicode.com";

const Tableapi = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;

    } catch (err) {
        console.log("error");
        throw err;
    }

}
export default Tableapi