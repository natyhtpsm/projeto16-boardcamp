import { rentalsSchema } from "../schemas/rentals.schema.js";

export function rentalsMiddleware(req, res, next) {
    const validation = rentalsSchema.validate(req.body);
    if (validation.error) {
      return res.send(error.message);
    }
    next();
}