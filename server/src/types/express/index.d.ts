import type { JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload {
  id: string;
  role: string;
}

declare global {
  namespace Express {
    export interface Request {
      user?: CustomJwtPayload;
    }
  }
}
