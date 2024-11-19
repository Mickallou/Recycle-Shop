import { app } from "../../app.mjs";
import { guard, getUser } from "../../guard.mjs";
import { Product } from "./products-model.mjs";
import { ProductSchema } from "./products-joi.mjs";

app.get("/products", async (req, res) => {
    res.send(await Product.find());
});

app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.send(product);
    } catch (error) {
        res.status(404).send("Product not found");
    }
});

app.post("/products", guard, async (req, res) => {
    const { error } = ProductSchema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const product = new Product(req.body);
    product.seller = getUser(req).userId;

    await product.save();
    res.send(product);
});

app.put("/products/:id", guard, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        if (!product.seller.equals(getUser(req).userId || !getUser(req).isAdmin)) {
            return res.status(403).send("You are not authorized to modify this product");
        }

        const { error } = ProductSchema.validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        product.set(req.body);
        await product.save();

        res.send(product);
    } catch (error) {
        res.status(404).send("Product not found");
    }
});

app.delete("/products/:id", guard, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        if (!product.seller.equals(getUser(req).userId || !getUser(req).isAdmin)) {
            return res.status(403).send("You are not authorized to delete this product");
        }

        await Product.findByIdAndDelete(req.params.id);

        res.send(product);
    } catch (error) {
        res.status(404).send("Products not found");
    }
});

app.patch("/products/:id/sold", guard, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        if (product.seller.equals(getUser(req).userId)) {
            product.sold = true;
            product.buyer = getUser(req).userId;
        } else if (getUser(req).isAdmin) {
            product.sold = true;
        } else {
            return res.status(403).send("You are not authorized to mark this product as sold");
        }

        await product.save();

        res.send(product);
    } catch (error) {
        res.status(404).send("Product not found");
    }
});