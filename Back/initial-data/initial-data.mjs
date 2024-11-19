export const initialData = {
    "users": [
        {
            "name": {
                "first": "John",
                "middle": "",
                "last": "Doe"
            },
            "phone": "1234567890",
            "email": "john.doe@example.com",
            "password": "hashed_password_1",
            "address": {
                "state": "California",
                "country": "USA",
                "city": "Los Angeles",
                "street": "Sunset Blvd",
                "houseNumber": "123",
                "zip": "90001"
            },
            "image": {
                "url": "https://example.com/john.jpg",
                "alt": "John Doe"
            },
            "isAdmin": true
        },
        {
            "name": {
                "first": "Jane",
                "middle": "A.",
                "last": "Smith"
            },
            "phone": "0987654321",
            "email": "jane.smith@example.com",
            "password": "hashed_password_2",
            "address": {
                "state": "New York",
                "country": "USA",
                "city": "New York City",
                "street": "5th Ave",
                "houseNumber": "456",
                "zip": "10001"
            },
            "image": {
                "url": "https://example.com/jane.jpg",
                "alt": "Jane Smith"
            },
            "isAdmin": false
        },
        {
            "name": {
                "first": "Alice",
                "middle": "B.",
                "last": "Johnson"
            },
            "phone": "1122334455",
            "email": "alice.johnson@example.com",
            "password": "hashed_password_3",
            "address": {
                "state": "Texas",
                "country": "USA",
                "city": "Houston",
                "street": "Main St",
                "houseNumber": "789",
                "zip": "77001"
            },
            "image": {
                "url": "https://example.com/alice.jpg",
                "alt": "Alice Johnson"
            },
            "isAdmin": false
        },
        {
            "name": {
                "first": "Bob",
                "middle": "C.",
                "last": "Williams"
            },
            "phone": "2233445566",
            "email": "bob.williams@example.com",
            "password": "hashed_password_4",
            "address": {
                "state": "Florida",
                "country": "USA",
                "city": "Miami",
                "street": "Ocean Drive",
                "houseNumber": "321",
                "zip": "33101"
            },
            "image": {
                "url": "https://example.com/bob.jpg",
                "alt": "Bob Williams"
            },
            "isAdmin": false
        },
        {
            "name": {
                "first": "Charlie",
                "middle": "D.",
                "last": "Brown"
            },
            "phone": "3344556677",
            "email": "charlie.brown@example.com",
            "password": "hashed_password_5",
            "address": {
                "state": "Illinois",
                "country": "USA",
                "city": "Chicago",
                "street": "Lake Shore Dr",
                "houseNumber": "654",
                "zip": "60601"
            },
            "image": {
                "url": "https://example.com/charlie.jpg",
                "alt": "Charlie Brown"
            },
            "isAdmin": false
        }
    ],
        "products": [
            {
                "name": "Men's Leather Jacket",
                "price": "120",
                "description": "A premium quality leather jacket for men, perfect for winter. It comes with multiple inner pockets and a durable outer layer, giving it a rugged yet stylish appearance. Ideal for outdoor use or as a fashion statement.",
                "phone": "555-987-1234",
                "category": "Men",
                "image": {
                "url": ["https://i.pinimg.com/236x/be/04/dd/be04dd50fbeb3b6b1a665a3dc18cdb53.jpg", "https://i.pinimg.com/236x/e3/2b/a6/e32ba669004ea9b788c46be8d0c693cd.jpg"],
                "alt": "Men's Leather Jacket"
                },
                "address": {
                "state": "California",
                "country": "USA",
                "city": "San Francisco",
                "street": "Sunset Blvd",
                "houseNumber": "101",
                "zip": "94122"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Women's Handbag",
                "price": "80",
                "description": "This luxurious women's handbag is made from premium leather. It features a spacious interior with multiple compartments for organizing personal items. Perfect for formal events or everyday use.",
                "phone": "555-234-5678",
                "category": "Women",
                "image": {
                "url": ["https://i.pinimg.com/236x/b6/db/92/b6db92c93f2826cf8caf39f0e2615750.jpg", "https://i.pinimg.com/236x/a5/69/64/a56964c8c7f01c0d8721fbdc2dd503eb.jpg"],
                "alt": "Women's Handbag"
                },
                "address": {
                "state": "New York",
                "country": "USA",
                "city": "New York",
                "street": "5th Ave",
                "houseNumber": "789",
                "zip": "10022"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Kids' Toy Car",
                "price": "35",
                "description": "A fun and colorful toy car for kids. Built with durable materials and safe for children of all ages. This toy car features realistic detailing and interactive buttons for sounds and lights.",
                "phone": "555-876-1234",
                "category": "Kids",
                "image": {
                "url": ["https://i.pinimg.com/236x/bb/f3/d4/bbf3d41a2e164eeb6aadd7ec6c426118.jpg", "https://i.pinimg.com/236x/e9/af/39/e9af399213b9e3c56346367d53122a22.jpg"],
                "alt": "Kids' Toy Car"
                },
                "address": {
                "state": "Texas",
                "country": "USA",
                "city": "Dallas",
                "street": "Elm St",
                "houseNumber": "456",
                "zip": "75201"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Smart Watch",
                "price": "250",
                "description": "This advanced smart watch comes with multiple health and fitness tracking features, a sleek design, and compatibility with both Android and iOS. The watch also supports notifications, GPS, and heart rate monitoring.",
                "phone": "555-765-4321",
                "category": "Accessories",
                "image": {
                "url": ["https://i.pinimg.com/236x/20/29/d5/2029d51d3f51b028d6f0d4b7bab3c44d.jpg", "https://i.pinimg.com/236x/0b/44/0c/0b440ca1bee296393612fab487b6ee53.jpg"],
                "alt": "Smart Watch"
                },
                "address": {
                "state": "Florida",
                "country": "USA",
                "city": "Orlando",
                "street": "Pine St",
                "houseNumber": "789",
                "zip": "32801"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Vintage Record Player",
                "price": "150",
                "description": "A classic vintage record player from the 1960s, fully restored and in working condition. It plays vinyl records with exceptional sound quality and adds a retro vibe to any room.",
                "phone": "555-123-9876",
                "category": "Home",
                "image": {
                "url": ["https://i.pinimg.com/236x/74/d8/53/74d853c51f7aa86adb214843d8074222.jpg", "https://i.pinimg.com/236x/40/ba/9e/40ba9e175757df9204d91a20fdc882b2.jpg"],
                "alt": "Vintage Record Player"
                },
                "address": {
                "state": "Washington",
                "country": "USA",
                "city": "Seattle",
                "street": "Broadway",
                "houseNumber": "120",
                "zip": "98101"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Wireless Headphones",
                "price": "100",
                "description": "These wireless headphones provide an immersive sound experience with noise-cancellation and long battery life. They are lightweight, comfortable, and compatible with all Bluetooth devices.",
                "phone": "555-543-2109",
                "category": "Electronics",
                "image": {
                "url": ["https://i.pinimg.com/236x/1a/11/02/1a1102b3237a99cc31b40d6c88c67cc6.jpg", "https://i.pinimg.com/236x/4f/c1/7a/4fc17ae50e210e0dd9f3f86347d1eb71.jpg"],
                "alt": "Wireless Headphones"
                },
                "address": {
                "state": "Nevada",
                "country": "USA",
                "city": "Las Vegas",
                "street": "Main St",
                "houseNumber": "300",
                "zip": "89101"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Women's Summer Dress",
                "price": "45",
                "description": "A flowy, elegant summer dress made from lightweight fabric. It is perfect for beach outings, summer parties, or casual wear. Available in various colors and sizes.",
                "phone": "555-654-3210",
                "category": "Women",
                "image": {
                "url": ["https://i.pinimg.com/236x/2d/cb/c1/2dcbc16b640eb8798b76777d6b1e9568.jpg", "https://i.pinimg.com/236x/1a/f4/1a/1af41a012d2df46f68fbed9345f070cc.jpg"],
                "alt": "Women's Summer Dress"
                },
                "address": {
                "state": "Hawaii",
                "country": "USA",
                "city": "Honolulu",
                "street": "Waikiki St",
                "houseNumber": "75",
                "zip": "96815"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Gaming Laptop",
                "price": "950",
                "description": "A high-performance gaming laptop with a powerful GPU, 16GB RAM, and 1TB SSD storage. Ideal for gaming, video editing, and graphic design.",
                "phone": "555-321-6549",
                "category": "Electronics",
                "image": {
                "url": ["https://i.pinimg.com/236x/1d/9e/34/1d9e347684c6be3f86b7058fecb6b47e.jpg", "https://i.pinimg.com/236x/db/1f/e2/db1fe2a55af18c48840879f755de0736.jpg"],
                "alt": "Gaming Laptop"
                },
                "address": {
                "state": "Arizona",
                "country": "USA",
                "city": "Phoenix",
                "street": "Cactus Rd",
                "houseNumber": "454",
                "zip": "85001"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Children's Puzzle Set",
                "price": "25",
                "description": "A fun and educational puzzle set for children. It features bright colors and easy-to-grasp pieces, encouraging cognitive development and problem-solving skills.",
                "phone": "555-765-1234",
                "category": "Kids",
                "image": {
                "url": ["https://i.pinimg.com/236x/ae/5b/52/ae5b526ff9a71e96050c0a3ed09204b6.jpg"],
                "alt": "Children's Puzzle Set"
                },
                "address": {
                "state": "Oregon",
                "country": "USA",
                "city": "Portland",
                "street": "Hawthorne Blvd",
                "houseNumber": "131",
                "zip": "97214"
                },
                "sold": false,
                "buyer": null
            },
            {
                "name": "Men's Sneakers",
                "price": "75",
                "description": "These men's sneakers combine comfort and style, with a breathable design and cushioned sole. Perfect for everyday wear or athletic activities.",
                "phone": "555-678-5432",
                "category": "Men",
                "image": {
                "url": ["https://i.pinimg.com/236x/d6/a5/09/d6a509eb16921a12386e7801f10e06c4.jpg", "https://i.pinimg.com/236x/89/42/2e/89422e911cdb2183606a44edf70d4091.jpg"],
                "alt": "Men's Sneakers"
                },
                "address": {
                "state": "Illinois",
                "country": "USA",
                "city": "Chicago",
                "street": "Clark St",
                "houseNumber": "543",
                "zip": "60601"
                },
                "sold": false,
                "buyer": null
                }
        ]
    };

export default initialData;
