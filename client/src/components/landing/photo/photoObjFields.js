import axios from 'axios';

export const getImages = () => {
    return (
        axios.get("/api/getimages").then((result) => {
            return result.data;
        }).catch((err) => {
            return err;
        })
    )
}
