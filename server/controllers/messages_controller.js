let messages = [];
let id = 0;

const read = (req, res, next) => {
  res.json(messages);
};

const create = (req, res, next) => {
  const { text, time } = req.body;
  messages.push({ id: id, text: text, time: time });
  id++;
  res.json(messages);
};

const update = (req, res, next) => {
  const updateID = req.params.id;
  const index = messages.findIndex(message => message.id == updateID);

  messages[index] = {
    id: messages[index].id,
    text: req.body.text || messages[index].text,
    time: messages[index].time
  };

  res.json(messages);
};

const destroy = (req, res, next) => {
  const deleteID = req.params.id;
  const index = messages.findIndex(message => messages.id === deleteID);

  messages.splice(messages[index], 1);

  res.json(messages);
};

module.exports = {
  create: create,
  read: read,
  update: update,
  destroy: destroy
};
