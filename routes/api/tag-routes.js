const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { sequelize } = require('../../models/Product');

router.get('/', (req, res) => {
  Tag.findAll({
      include: [Product],
    }).then(tags => {
      console.log("This tag has been successfully viewed!")
      res.json(tags)
    }).catch(err => {
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  Tag.findOne({where: {
    id: req.params.id
  }},
  {
    include: [Product],
  }).then(tag => {
    res.json(tag)
  }).catch(err => {
    res.status(400).json(err);
  })
});

router.post('/', (req, res) => {
  Tag.create(req.body).then(newTag => {
    console.log("The tag has been successfully added!")
    res.status(200).json(newTag)
  }).catch(err => {
    res.status(400).json(err);
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(newTag => {
    console.log("This tag has been successfully updated!")
    res.status(200).json(newTag)
  }).catch(err => {
    res.status(400).json(err)
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
      where: {
        id: req.params.id,
      },
    }).then(removeTag => {
      console.log("This tag has been destroyed!")
      res.status(200).json(removeTag)
    }).catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
