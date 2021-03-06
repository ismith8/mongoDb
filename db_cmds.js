// Drop current collections
db.product.drop();

db.customer.drop();

db.transactions.drop();

db.transaction_contains.drop();

print("Dropped tables");

print("Adding products");

// Product
db.product.insert({upc:"10001", brand: "Welsh Farms", product_name: "Whole Milk 1 Gal", product_description: "Welsh Farms Whole Milk Size 1 Gallon", category: "Dairy", marked_price: "3.5", quantity: "30"});                                  
                                                                                
db.product.insert({upc:"10002", brand: "Eggland", product_name: "Eggs L 12ct", product_description: "Large Eggs - 12 count", category: "Dairy", marked_price: "2.25", quantity: "19"});                                                         
                                                                                
db.product.insert({upc:"10003", brand: "Kraft", product_name: "Kraft Mac n Cheese", product_description: "Kraft Macaroni and Cheese Original Flavor Individual Box", category: "Food", marked_price: "1.69", quantity: "38"});                  
                                                                                
db.product.insert({upc:"10004", brand: "Rice-a-Roni", product_name: "Rice-A-Roni Cajun", product_description: "Rice-A-Roni Rice Dishes - Flavor Cajun Chicken", category: "Food", marked_price: "1.3", quantity: "49"});                        
                                                                                
db.product.insert({upc:"10005", brand: "Pringles", product_name: "Pringles Sour Cream and Onion", product_description: "Pringles Potato Chips - Sour Cream and Onion Flavor - 6 oz", category: "Snack", marked_price: "4.5", quantity: "28"});  
                                                                                
db.product.insert({upc:"10006", brand: "Tostitos", product_name: "Tostitos Family Size", product_description: "Tostitos Corn Chips - Family Size 1 lb", category: "Snack", marked_price: "6", quantity: "18"});                                 
                                                                                
db.product.insert({upc:"10007", brand: "Store Brand", product_name: "Lettuce", product_description: "Lettuce - 1 head", category: "Produce", marked_price: "2.5", quantity: "24"});                                                             
                                                                                
db.product.insert({upc:"10008", brand: "Store Brand", product_name: "Tomatoes", product_description: "Tomatoes - 1 lb", category: "Produce", marked_price: "1.99", quantity: "12"});                                                            
                                                                                
db.product.insert({upc:"10009", brand: "Florida Natural", product_name: "Oranges", product_description: "Oranges - Large Size - 1 lb", category: "Produce", marked_price: "3.5", quantity: "38"});                                              
                                                                                
db.product.insert({upc:"10010", brand: "Store Brand", product_name: "Broccoli", product_description: "Fresh Broccoli Crowns - 1 lb", category: "Produce", marked_price: "3.5", quantity: "17"});                                                
                                                                                
db.product.insert({upc:"10011", brand: "Tropicana", product_name: "Tropicana Pure Premium OJ 1 Gal", product_description: "Tropicana Pure Premium Orange Juice - Size 1 Gallon", category: "Beverages", marked_price: "3.99", quantity: "48"}); 

db.product.insert({upc:"10012", brand: "Coca-Cola", product_name: "Coca-Cola 2L", product_description: "Coca-Cola Regular - Size 2 Liters", category: "Beverages", marked_price: "1.99", quantity: "94"});                                      
                                                                                
db.product.insert({upc:"10013", brand: "Pepsi", product_name: "Pepsi 2L", product_description: "Pepsi Regular - Size 2 Liters", category: "Beverages", marked_price: "1.99", quantity: "50"});                                                  
                                                                                
db.product.insert({upc:"10014", brand: "Pepsi", product_name: "Diet Pepsi 2L", product_description: "Diet Pepsi - Size 2 Liters", category: "Beverages", marked_price: "1.99", quantity: "30"});                                                
                                                                                
db.product.insert({upc:"10015", brand: "Colgate", product_name: "Colgate Winterfresh", product_description: "Colgate Toothpaste Winterfresh Flavor 3.8 oz", category: "Pharmacy", marked_price: "4", quantity: "26"});                          
                                                                                
db.product.insert({upc:"10016", brand: "Crest", product_name: "Crest Whitening Mint", product_description: "Crest Whitening Toothpaste - Mint Flavor 3.6 oz", category: "Pharmacy", marked_price: "3.79", quantity: "28"});                     
                                                                                
db.product.insert({upc:"10017", brand: "Claritin", product_name: "Claritin 24 Hour", product_description: "Claritin 24 Hour Allergy Relief - 90 ct", category: "Pharmacy", marked_price: "13.59", quantity: "18"});                             
                                                                                
db.product.insert({upc:"10018", brand: "Store Brand", product_name: "Beef Top Sirloin", product_description: "Fresh Beef - Cut Top Sirloin - 1 lb", category: "Meat", marked_price: "8.99", quantity: "27"});                                   
                                                                                
db.product.insert({upc:"10019", brand: "Store Brand", product_name: "Pork Shoulder", product_description: "Fresh Pork - Cut Shoulder - 1 lb", category: "Meat", marked_price: "6.59", quantity: "9"});                                          
                                                                                
db.product.insert({upc:"10020", brand: "Store Brand", product_name: "Ground Chuck", product_description: "Beef - Ground Chuck 94 percent Lean - 1 lb", category: "Meat", marked_price: "6", quantity: "22"});                                   
                                                                                
db.product.insert({upc:"10021", brand: "Boars Head", product_name: "Honed Glazed Ham", product_description: "Deli Meat - Honey Glazed Ham - 1 lb", category: "Deli", marked_price: "7.5", quantity: "51"});                                     
                                                                                
db.product.insert({upc:"10022", brand: "Boars Head", product_name: "Oven Smoked Turkey", product_description: "Deli Meat - Oven Smoked Turkey - 1 lb", category: "Deli", marked_price: "7.5", quantity: "15"});                                 
                                                                                
db.product.insert({upc:"10023", brand: "Kraft", product_name: "Sliced Provolone", product_description: "Deli Cheese - Sliced Provolone - 1 lb", category: "Deli", marked_price: "5.5", quantity: "29"});                                        
                                                                                
db.product.insert({upc:"10024", brand: "Kraft", product_name: "Sliced Jarlsberg", product_description: "Deli Cheese - Sliced Jarlsberg - 1 lb", category: "Deli", marked_price: "5.5", quantity: "21"});                                        
                                                                                
db.product.insert({upc:"10025", brand: "Arnold", product_name: "Hot Dog Buns", product_description: "Arnold Hot Dog Buns - 6 ct", category: "Bakery", marked_price: "2", quantity: "92"});                                                      
                                                                             
db.product.insert({upc:"10026", brand: "Arm and Hammer", product_name: "Baking Soda", product_description: "Arm and Hammer Baking Soza - 1 lb", category: "Household", marked_price: "9", quantity: "39"});                                     
                                                                                
db.product.insert({upc:"10027", brand: "Charmin", product_name: "Charmin Extra Soft Family Pack", product_description: "Charmin Extra Soft Bathroom Tissue - 16 ct", category: "Household", marked_price: "15", quantity: "15"});               
                                                                                
db.product.insert({upc:"10028", brand: "Kleenex", product_name: "Kleenex 250", product_description: "Kleenex Tissue - 250 ct - floral box", category: "Household", marked_price: "3", quantity: "41"});                                         
                                                                                
db.product.insert({upc:"10029", brand: "Budweiser", product_name: "Bud Light 24-pk", product_description: "Bud Light Case of Beer - 24 count", category: "Alcohol", marked_price: "29.99", quantity: "10"});                                    
                                                                                
db.product.insert({upc:"10030", brand: "Budweiser", product_name: "Budweiser 24-pk", product_description: "Original Budweiser Case of Beer - 24 count", category: "Alcohol", marked_price: "29.99", quantity: "20"});                           
                                                                                
db.product.insert({upc:"10031", brand: "Coors", product_name: "Coors Light 12-pk", product_description: "Original Coors The Banquet Beer 12 Pack", category: "Alcohol", marked_price: "16.5", quantity: "73"});                                 
                                                                                
db.product.insert({upc:"10032", brand: "Miller", product_name: "MGD 12-pk", product_description: "Miller Genuine Draft Beer 12 Pack", category: "Alcohol", marked_price: "16.5", quantity: "27"});                                              


// Customer

print("Adding customer");

db.customer.insert({customer_ID: "1", first_name: "David", last_name: "Smith", age: "30", gender: "M", zip_code: "22030"});                                     
                                                                                
db.customer.insert({customer_ID: "2", first_name: "Candice", last_name: "Bolton", age: "27", gender: "F", zip_code: "22030"});                                  
                                                                                
db.customer.insert({customer_ID: "3", first_name: "David", last_name: "Goldenberg", age: "65", gender: "M", zip_code: "22030"});                                
                                                                                
db.customer.insert({customer_ID: "4", first_name: "Greg", last_name: "Jennings", age: "25", gender: "M", zip_code: "22030"});                                   
                                                                                
db.customer.insert({customer_ID: "5", first_name: "Aaron", last_name: "Rodgers", age: "32", gender: "M", zip_code: "20121"});                                   
                                                                                
db.customer.insert({customer_ID: "6", first_name: "Lindsey", last_name: "Lohan", age: "24", gender: "F", zip_code: "20121"});                                   
                                                                                
db.customer.insert({customer_ID: "7", first_name: "Alec", last_name: "Baldwin", age: "62", gender: "M", zip_code: "20121"});                                    
                                                                                
db.customer.insert({customer_ID: "8", first_name: "John", last_name: "Wayne", age: "37", gender: "M", zip_code: "22030"});                                      
                                                                                
db.customer.insert({customer_ID: "9", first_name: "John", last_name: "Wayne", age: "31", gender: "M", zip_code: "22015"});                                      
                                                                                
db.customer.insert({customer_ID: "10", first_name: "Jennifer", last_name: "Johnson", age: "19", gender: "F", zip_code: "22030"});                               


// Transactions

print("Adding transactions");

db.transactions.insert({transaction_ID: "101", customer_ID: "4", transaction_date: "10-FEB-13", payment_method: "1", total: "28.17"});                          
                                                                                
db.transactions.insert({transaction_ID: "102", customer_ID: "9", transaction_date: "12-FEB-13", payment_method: "2", total: "36.48"});                          
                                                                                
db.transactions.insert({transaction_ID: "103", customer_ID: "1", transaction_date: "15-FEB-13", payment_method: "2", total: "96.15"});                          
                                                                                
db.transactions.insert({transaction_ID: "104", customer_ID: "10", transaction_date: "20-FEB-13", payment_method: "3", total: "84.74"});                         
                                                                                
db.transactions.insert({transaction_ID: "105", customer_ID: "3", transaction_date: "15-FEB-13", payment_method: "2", total: "12.5"});                           
                                                                                
db.transactions.insert({transaction_ID: "106", customer_ID: "1", transaction_date: "15-FEB-13", payment_method: "2", total: "39.38"});                          


// Transaction_contains

print("Adding transaction_contains");


db.transaction_contains.insert({transaction_ID: "101", upc: "10003", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "101", upc: "10005", quantity: "3"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "101", upc: "10012", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "101", upc: "10013", quantity: "5"});                                                                           

db.transaction_contains.insert({transaction_ID: "102", upc: "10001", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "102", upc: "10002", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "102", upc: "10003", quantity: "5"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "102", upc: "10005", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "102", upc: "10009", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "102", upc: "10014", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "102", upc: "10015", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10010", quantity: "4"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10011", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10012", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10014", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10015", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10017", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10018", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10020", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10023", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10025", quantity: "3"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "103", upc: "10032", quantity: "2"});                                                                           

db.transaction_contains.insert({transaction_ID: "104", upc: "10012", quantity: "4"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "104", upc: "10030", quantity: "3"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "104", upc: "10010", quantity: "5"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "104", upc: "10002", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "104", upc: "10031", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "105", upc: "10005", quantity: "2"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "105", upc: "10004", quantity: "3"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "106", upc: "10021", quantity: "1"});                                                                           
                                                                                
db.transaction_contains.insert({transaction_ID: "106", upc: "10027", quantity: "2"});                                                                           


// Count
print(db.product.count());

print(db.customer.count());

print(db.transactions.count());

print(db.transaction_contains.count());
