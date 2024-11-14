import axios from "axios";
export async function fecthApi(props) {
    console.log(process.env.REACT_APP_API_KEY);
    
    try {
        let params = {
            country: "us",
            apiKey: process.env.REACT_APP_API_KEY,
        }
        const queryParams = new URLSearchParams(params);

        if (props?.category)
            queryParams.append('category', props.category)

        const { data } = await axios(`https://newsapi.org/v2/top-headlines?${queryParams}`)
        return data;
    } catch (error) {
        throw error.message
    }
}