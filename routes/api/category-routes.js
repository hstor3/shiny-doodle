const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {
    Category.findAll({
      include: [Product],
    }).then(categories => {
      console.log("This categoty has been successfully viewed!")
      res.json(categories)
    }).catch(err => {
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
    Category.findOne({where: {
      id: req.params.id
    }}, 
    {
      include: [Product],
    }).then(category => {
      res.json(category)
    }).catch(err => {
      res.status(400).json(err);
    })
});

router.post('/', (req, res) => {
  Category.create(req.body).then(newCategory => {
    console.log("The category has been successfully added!")
    res.status(200).json(newCategory)
  }).catch(err => {
    res.status(400).json(err);
  }) 
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(newCategory => {
    console.log('This category was successfully updated!')
    res.status(200).json(newCategory)
  }).catch(err => {
    res.status(400).json(err);
  }) 
});

router.delete('/:id', (req, res) => {
  Category.destroy({
      where: {
        id: req.params.id,
      },
    }).then(newCategory => {
      console.log("This category has been destroyed!")
      res.status(200).json(newCategory)
    }).catch(err => {
      res.status(400).json(err);
    }) 
});

module.exports = router;
