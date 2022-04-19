import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
    async create(request: Request, response: Response): Promise<Response> {
        const { user_id, text, admin_id } = request.body;

        const messagesService = new MessagesService();

        const message = messagesService.create({
            admin_id,
            text,
            user_id
        });

        return response.json(message);
    }

    async showByUser(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const messagesService = new MessagesService();

        const list = await messagesService.listByUser(id);

        return response.json(list);
    }
}

export { MessagesController };