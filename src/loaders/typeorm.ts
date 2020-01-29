import { environment } from './../environment/environment';
import { createConnection, Connection } from 'typeorm';
import { User } from '../entity/user.entity';

export default async () => {

const connection: Connection = await createConnection({
    type: 'mysql',
    host: environment.API_DB_HOST,
    port: parseInt(environment.API_DB_PORT || '3306', 10),
    username: environment.API_DB_USER,
    password: environment.API_DB_PASSWORD,
    database: environment.DB_DATABASE,
    entities: [
        User,
    ],
    synchronize: true,
});

return connection;
};
