import  express  from "express";
import { createPembicara, getPembicara, getPembicaraById } from "../controllers/pembicaraController";


const router = express.Router();

router.get("/", getPembicara);
router.post("/", createPembicara);
router.get("/:id", getPembicaraById);
export default router;
