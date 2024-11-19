import { User } from "../handlers/users/users.model.mjs";
import { Product } from "../handlers/products/products-model.mjs";
import { initialData } from "./initial-data.mjs"
import bcrypt from "bcrypt";


(async () => {
    const userAmount = await User.find().countDocuments();
    
    if (!userAmount) {
        const userIds = []

        for (const user of initialData.users) {
            const u = new User(user);

            u.password = await bcrypt.hash(u.password, 10);


            const obj = await u.save();
            userIds.push(obj._id);
        }

        for (const product of initialData.products) {
            const p = new Product(product);
            const i = Math.floor(Math.random() * userIds.length);
            p.seller = userIds[i];
            await p.save();
        }
    }
})();