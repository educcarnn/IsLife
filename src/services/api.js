import axios from "axios"

    export const api = axios.create({
        baseURL: "https://is-life-fake-api.herokuapp.com"
    })
