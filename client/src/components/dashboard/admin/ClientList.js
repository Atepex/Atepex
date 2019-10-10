import axios from 'axios';

export const getClients = () => {
    return (
        axios.get("/api/getclients").then((result) => {
            return result.data;
        }).catch((err) => {
            return err;
        })
    )
}
