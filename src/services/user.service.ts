import { AbstractService } from '../core/abstract.service';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entity/user.entity';
import { getCustomRepository } from 'typeorm';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class UserService extends AbstractService {

    protected repository = getCustomRepository(UserRepository);

    async userActivation(user: User) {
        user.isActive = true;
        await this.repository.update(user.id, user);
    }

}
