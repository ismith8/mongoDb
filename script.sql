#SELECT 'db.product.drop()' FROM product;
#SELECT 'db.customer.drop()' FROM customer;
#SELECT 'db.transactions.drop()' FROM transactions;
#SELECT 'db.transaction_contains.drop()' FROM transaction_contains; 

SELECT 'db.product.insert({upc:"'||upc||'", brand: "'||brand||'", product_name: "'||product_name||'", product_description: "'||product_description||'", category: "'||category||'", marked_price: "'||marked_price||'", quantity: "'||quantity||'"});' FROM product;

SELECT 'db.customer.insert({customer_ID: "'||customer_ID||'", first_name: "'||first_name||'", last_name: "'||last_name||'", age: "'||age||'", gender: "'||gender||'", zip_code: "'||zip_code||'"});' FROM customer;

SELECT 'db.transactions.insert({transaction_ID: "'||transaction_ID||'", customer_ID: "'||customer_ID||'", transaction_date: "'||transaction_date||'", payment_method: "'||payment_method||'", total: "'||total||'"});' FROM transactions;

SELECT 'db.transaction_contains.insert({transaction_ID: "'||transaction_ID||'", upc: "'||upc||'", quantity: "'||quantity||'"});' FROM transaction_contains;

SELECT COUNT('db.product') from PRODUCT;
SELECT COUNT('db.customer') from customer;
SELECT COUNT('db.transactions') from transactions;
SELECT COUNT('db.transaction_contains') from transaction_contains;


