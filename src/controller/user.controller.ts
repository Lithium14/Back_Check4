import { connected } from '../middleware/connected-middleware';
import { UserService } from '../services/user.service';
import { Router, Request, Response, Application } from 'express';
import { commonController } from './../core/comon.controller';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const UserController = (app: Application) => {

    const userService = new UserService();
    let router = Router();

    router.use(connected());
// Sur l'URL "me" dans "users", on récupère l'utilisateur associé à l'ID qu'il y a dans le Token
    router.get('/me', async (req: Request, res: Response) => {
        let user;
        console.log((req as any).user);

        try {
            user = await userService.getById((req as any).user.id);
        } catch (error) {
            console.log(error);

        }

        if (!user) {
            res.status(404).send('Aucun utilisateur trouvé pour ce token');
        }
        res.send(user);
    });

    router = commonController(userService, router);

    app.use('/users', router);
};
