import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key:"5bfcbdd9b9b24c8589bc979fe109d96f"
    }
});