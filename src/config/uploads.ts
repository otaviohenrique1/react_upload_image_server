import { request } from "express";
import multer from "multer";
import path from "path";
import crypto from 'crypto';
import fs from "fs";

export default {
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname, '..', '..', 'uploads', 'fotos'))
    },
    filename: (request, file, cb) => {
      // const { id, codigo } = request.body

      // const fileName = `${id}-${codigo}-${crypto.randomBytes(3).toString('hex')}-${Date.now()}-${file.originalname}`;
      const fileName = `${crypto.randomBytes(3).toString('hex')}-${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  })
};

/*
import { request } from "express";
import multer from "multer";
import path from "path";
import crypto from 'crypto';
import fs from "fs";

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads', 'fotos'),
    filename: (request, file, cb) => {
      // const { id, codigo } = request.body

      // const fileName = `${id}-${codigo}-${crypto.randomBytes(3).toString('hex')}-${Date.now()}-${file.originalname}`;
      const fileName = `${crypto.randomBytes(3).toString('hex')}-${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  })
};
*/

/*
import multer from 'multer'
import crypto from 'crypto'
import { extname } from 'path'
import slug from 'slug'
import fs from 'fs'

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const { id } = req.body
      const path = `./uploads/gallery/${id}`
      fs.mkdirSync(path, { recursive: true })
      return cb(null, path)
    },
    filename: (req, file, cb) => {
      const { description } = req.body

      crypto.randomBytes(3, (err, res) => {
        if (err) return cb(err)

        return cb(null, slug(description, { lower: true }) + '_' + res.toString('hex') + extname(file.originalname))
      })
    }
  })
}
*/
/*
Você deve usar mkdirSync apenas se o diretório não existir (você pode existsSync funcionar que retorna um booleano).
*/
