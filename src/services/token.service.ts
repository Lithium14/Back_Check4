import { Token } from './../entity/token.entity';
import { getCustomRepository } from 'typeorm';
import { TokenRepository } from './../repository/token.repository';

export class TokenService {
    protected repository = getCustomRepository(TokenRepository);

    create(token: Token) {
        return this.repository.save(token);
    }

    getByValue(value: string) {
        return this.repository.findOne( {value}, { relations: ['user'] } );
    }
}
