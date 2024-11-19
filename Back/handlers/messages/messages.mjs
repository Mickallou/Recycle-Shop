import { app } from "../../app.mjs";
import { Message } from "./messages-model.mjs";
import { messageValidationSchema } from "./messages-joi.mjs";

app.get("/messages", async (req, res) => {
    res.send(await Message.find());
});

app.get("/messages/:id", async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);

        if (!message) {
            return res.status(404).send("Message not found");
        }

        res.send(message);
    } catch (error) {
        res.status(404).send("Message not found");
    }   
});

app.post("/messages", async (req, res) => {
    const { error } = messageValidationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const message = new Message(req.body);
        await message.save();
        res.status(201).send(message);
    } catch (err) {
        res.status(500).send("Internal server error");
    }
});
app.patch("/messages/:id", async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);

        if (!message) {
            return res.status(404).send("Message not found");
        }

        message.closed = true;
        await message.save();

        res.send(message);
    } catch (error) {
        res.status(404).send("Message not found");
    }
});