import axios from "axios";

const instance = axios.create({
    baseURL: "https://becarias-back.herokuapp.com/",
});

instance.interceptors.response.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (
            !user || !user.isAuthenticated 
            ) {
                localStorage.removeItem('user')
                window.location.href = '/login'
        }
        return config
    }
)

export default instance;