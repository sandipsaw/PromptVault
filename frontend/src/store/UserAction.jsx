import axios from "../api/axios.config";

export const asyncLoginUser = (user) =>async(dispatch,getState)=>{
    
    try{
        const res = await axios.post("/auth/login",user)
        console.log(res.data.message);
        return res.data.message
        
    }catch(error){
        if (error.response) {
            console.log("Server responded:", error.response.data);
            return error.response.data.message
        } else if (error.request) {
            console.log("No response received:", error.request);
        } else {
            console.log("Error setting up request:", error.message);
        }
    }
}

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/auth/register", user)
        console.log(res.data);
        const {message} = res.data;
        console.log(message);
        return message
        

    } catch (error) {
        if (error.response) {
            console.log("Server responded:", error.response.data);
            return error.response.data.message
        } else if (error.request) {
            console.log("No response received:", error.request);
        } else {
            console.log("Error setting up request:", error.message);
        }
    }
    
}

