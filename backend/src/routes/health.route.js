import {Router} from "express";
const router = Router();

router.get("/", (req, res)=>{
    res.json({
        status: 201,
        message: "Backend is running",
        timestamp: new Date(),
    });
});

export default router;