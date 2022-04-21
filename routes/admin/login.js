var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
      layout: 'admin/layout'
    });
  });

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;

    var data = await usuariosModel.getUserByUsername(usuario);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.usuario = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});





module.exports = router;