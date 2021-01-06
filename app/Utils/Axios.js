//@ts-ignore
export const serv = axios.create({
    baseURL: 'https://gregslist-server.herokuapp.com/api/',
    timeout: 50000 
})