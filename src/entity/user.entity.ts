import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, Index } from 'typeorm';

export enum UserRole {
    GHOST = 'ghost',
    USER = 'user',
    ADMIN = 'admin',
}

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column()
    lastName!: string;

    @Column()
    firstName!: string;

    @CreateDateColumn()
    birthday!: Date;

    @CreateDateColumn()
    created_At!: Date;

    @Column()
    tel!: string;

    @Column()
    password!: string;

    @Index({ unique: true})
    @Column()
    email!: string;

    @Column()
    isActive!: boolean;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.GHOST,
    })
    role?: UserRole;

}
