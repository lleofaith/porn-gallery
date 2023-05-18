import { Router } from "express";
import api from "../utils/fetcher.js";

const router = Router();

router.get("/:q", async (req, res) => {

    try {
        const { q } = req.params;
        const { data } = await api.get(`/${q}`);
        res.status(200).json(data.results);
    } catch (error) {
        console.log(error.message);
    }


})

export default router;