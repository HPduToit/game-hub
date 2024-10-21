import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4550340867754376ae153a92761bbcb1'
    }
})