export const environment = {
    JWT_SECRET: process.env.SECRET,
    API_DB_USER: process.env.USER,
    API_DB_HOST: process.env.HOST,
    API_DB_PASSWORD: process.env.PASSWORD,
    DB_DATABASE: process.env.DATABASE_NAME,
    API_DB_PORT: process.env.PORT,
    mailHost: 'smtp.ethereal.email',
    mailPort: 587,
    EMAIL: '"Kanopée Koncept" <fadi.rata@live.fr>',
	confirmationUrl: 'http://localhost:3000/auth/confirmation/',
	websiteUrl: 'http://localhost:4200',
};

