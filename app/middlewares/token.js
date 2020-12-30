import jwt from 'jsonwebtoken'

const jwtDecode = (req, res, next) => {
  if ((req.method == 'POST' && req.originalUrl == '/api/users/login' ) || req.method == 'OPTIONS') {
    next()
  } else {
    try {
      if (!req.headers.authorization)
      throw ''
      
      let token = req.headers.authorization.replace('Bearer ', '');
      let decoded = jwt.verify(token, process.env.SECRET);
      req.token = token;
      req.auth = decoded;
      next()

    } catch (error) {
      res.status(401).json({error: "no token", message: "Você não está autenticado, realize o login novamente"})
      return
    }
  }
}

export default {
  jwtDecode
}