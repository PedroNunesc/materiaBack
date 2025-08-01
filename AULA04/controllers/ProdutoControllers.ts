import { Request, Response } from "express"
import { Produto, produtos } from "../models/Produto"

export class UserController {

    createProduto(req: Request, res: Response): Response {
        const { id, nome } = req.body;

        if (!id || !nome ) {
            return res.status(400).json({ mensagem: "Id, nome precisam ser informados!" });
        }

        const produto = new Produto(id, nome );
        produtos.push(produto);

        return res.status(201).json({ mensagem: "Produto criado com sucesso!", produto: produto });

    }

    listAllProdutos(req: Request, res: Response): Response {
        return res.status(200).json({ produtos: produtos });
    }

    updateProduto(req: Request, res: Response): Response {
        const id: number = Number(req.params.id);
        const { nome } = req.body;

        if ( !nome ) {
            return res.status(400).json({ mensagem: "Nome é obrigatórios!" })
        }

        let produto = produtos.find(produto => produto.id === id);

        if (!produto) return res.status(404).json({ mensagem: "Prosuto não encontrado!" })

        produto.nome = nome;

        return res.status(200).json({ mensagem: "Produto atualizado com sucesso!", produto_atualizado: produto })
    }

    deleteProduto(req: Request, res: Response): Response {
        const id: number = Number(req.params.id);

        let index = produtos.findIndex(produtos => produtos.id === id);

        if (index === -1) {
            return res.status(404).json({ mensagem: "Produto não encontrado" })
        }

        produtos.splice(index, 1);
        return res.status(204).send();
    }
}