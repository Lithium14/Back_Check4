import jwt = require('express-jwt');
import { environment } from '../environment/environment';

export const connected = () => {
  const secret = environment.JWT_SECRET;
  if (!secret) {
    throw new Error('Pas de secret setup');
  }
  // Accroche du middleware avec secret
  return jwt({ secret });
};
