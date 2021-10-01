db.product.find({category: "Alcohol"}, { upc: 1, _id: 0})

db.customer.find({zip_code: "22030"}, {_id: 0, customer_ID: 1})

db.product.aggregate([ { $match: { marked_price: { $lt: "10" } } }, { $count: "count"}])

db.customer.aggregate([ {$lookup: { from: "transactions", let: {"cust_ID": "$customer_ID" }, pipeline: [{$match: {$expr: {$eq:  ["$customer_ID", "$$cust_ID"] } } }, {$project: {"customer_ID": 0, "_id": 0}}], as: "stuff" }}, {$match: {stuff: {$eq: []}}}, {$count: "count"} ])


db.product.aggregate([{$match: {"category": "Alcohol"}}, {$lookup: { from: "transaction_contains", let: {"upc": "$upc"}, pipeline: [  {$match: {$expr: {  $eq: ["$upc", "$$upc"]}  }}], as: "found" }}, {$unwind: "$found"}, {$project: {"found.transaction_ID": 1, "product_name": 1, "_id": 0}}  ])

