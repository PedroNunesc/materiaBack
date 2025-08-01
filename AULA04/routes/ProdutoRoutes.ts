import { Router } from "express";
import { UserController } from "../controllers/ProdutoControllers";

const router = Router();

const controller = new UserController();

router.get('/users', controller.listAllProdutos);
router.post('/users', controller.createProduto);
router.put('/users/:id', controller.updateProduto);
router.delete('/users/:id', controller.deleteProduto);

export default router;