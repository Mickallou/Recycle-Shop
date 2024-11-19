import { app } from "../../app.mjs";
import { User } from "./users.model.mjs";
import { getUser, adminGuard, guard } from "../../guard.mjs";
import { UserSignup } from "./user.joi.mjs";


app.get("/users", adminGuard, async (req, res) => {
    res.send(await User.find());
});

app.get("/users/:id", guard, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send("User not found"); 
        }

        const currentUser = getUser(req); 

        if (currentUser.isAdmin || user._id.toString() === currentUser.userId.toString()) {
            return res.send(user);
        } else {
            return res.status(403).send("You are not authorized to view this user");
        }
    } catch (error) {
        console.error("Erreur : ", error);
        res.status(404).send("User not found (err)");
    }
});

app.put("/users/:id", guard, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(403).send("User not found");

        const { password, ...updateData } = req.body;

        const { error } = UserSignup.validate(updateData);
        if (error) return res.status(400).send(error.details[0].message);

        if (user._id.equals(getUser(req).userId)) {
            user.set(updateData); 
            await user.save();

            res.send(user);
        } else {
            return res.status(403).send("You are not authorized to modify this user");
        }
    } catch (error) {
        console.error(error);
        res.status(404).send("An error occurred");
    }
});

app.patch("/users/:id", adminGuard, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(403).send("User not found");
    
            user.isAdmin = !user.isAdmin;
            await user.save();
        
            res.send(user.isAdmin);    
    } catch (error) {
        res.status(404).send(error);
    }
});

app.delete("/users/:id", adminGuard, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(403).send("User not found");

            await User.findByIdAndDelete(req.params.id);
            res.send("User successfully deleted");        
    } catch (error) {
        return res.status(404).send(error);
    }
});
