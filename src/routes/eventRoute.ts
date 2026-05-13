import  express  from "express";
import { createEvent, getEvents } from "../controllers/eventController";


const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
export default router;
