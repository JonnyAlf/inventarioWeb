import { Application, Router } from "express";
import { fornecedorRouter } from "./fornecedorRouter";
import { usuarioRouters } from "./usuarioRouter";
import { produtoRouter } from "./produtoRouter";

export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/fornecedor', fornecedorRouter);
    apiRouter.use('/usuario',usuarioRouters);
    apiRouter.use('/produto',produtoRouter);
    app.use('/api/v1', apiRouter);
}
