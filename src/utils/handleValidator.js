import { validationResult } from "express-validator";

const validateResult = (req, res, next) => {
  try {
    console.log('entroooooooo');
    const data = validationResult(req).throw()
    console.log('pasooooo',data);
    return next();
    res.status();
    res.send({ errors: data });
  } catch (err) {
    res.status(403);
    res.send({ errors: err });
  }
};

export default validateResult;
