const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { sequelize } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: ProductTag }, { model: Product }],
      attributes: {
        include: [
          [
            sequelize.literal(
              // something
            ),
            // something else
          ],
        ],
      },
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{ model: ProductTag }, { model: Product }],
      attributes: {
        include: [
          [
            sequelize.literal(
              // something
            ),
            // something
          ],
        ],
      },
    });

    if (!singleTag) {
      res.status(404).json({ message: 'No tag found with that id! '});
      return;
    }

    res.status(200).json(singleTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const createTag = await Tag.create(req.body);
    res.status(200).json(createTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
    const removeTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!removeTag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(removeTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
