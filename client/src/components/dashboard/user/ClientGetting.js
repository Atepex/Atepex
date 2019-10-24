import axios from 'axios';

export const getClients = () => {
    return (
        axios.get("/api/user/invoice", (req, res) => {
            const { fname, lname, email, phone, zip } = req.body;
            res.send(fname, lname, email, phone, zip);
          })
    )
}