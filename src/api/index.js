import axios from "axios";

const LIMIT = 100

export const getImagesAsync = async () => {
    try {
        const result = await axios.get(`https://picsum.photos/v2/list?limit=${LIMIT}`)
        return result;
    }
    catch(error) {
        throw new Error("Unknown error")
    }
}