import axios from "axios";

const baseUrl = 'http://localhost:4000/'

export default {
    employee(url = baseUrl + 'people/') {
        return {
            fetchAll: () => axios.get(url)
        }
    }
}