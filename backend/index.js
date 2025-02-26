const Router = require("express");
const route = Router();
route.use(Router.json());
const { Todo } = require("./db");

const { createTodo, updateTodo } = require("./type");

route.get("/todos", async (req, res) => {
  const response = await Todo.find({});
  res.json(response);
});

route.post("/todo", async (req, res) => {
  const bodyPayload = req.body;
  const response = createTodo.safeParse(bodyPayload);
  if (!response) {
    res.status(411).json({
      msg: "You put the wrong inputs",
    });
    return;
  }
  await Todo.create({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false,
  });

  res.json({
    msg: "Todo created",
  });
});

route.put("/completed", async (req, res) => {
  const putPayload = req.body;
  const response = updateTodo.safeParse(putPayload);
  if (!response.success) {
    res.status(411).json({
      msg: "id incorrect",
    });
    return;
  }
  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    { completed: true }
  );
  res.json({
    msg: "Todo updated",
  });
});

route.listen(3000);
