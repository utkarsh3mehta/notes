# Redis important commands

## Basic

SET foo 10 => sets variable foo to 10
GET foo => get the value of foo
INCR foo => increase the value of an integer by 1
DECR foo => decrease the value of an integer by 1
EXISTS foo => check if variable foo exists
DEL foo => delete a variable
FLUSHALL =>  delete all
EXPIRE foo 10 => expire the variable foo in 10 seconds
TTL foo => check the time left for foo to expire
SETEX foo 10 'hi there' => set foo to 'hi there' and expire it in 10 seconds
PERSIST foo => remove the expiry from foo
MSET foo 10 bar 20 => set multiple variables at the same time
APPEND foo " there" => append value to an existing variable
RENAME foo fuu => rename variable foo to fuu

## Lists

LPUSH people "Utkarsh" => create a list or push "Utkarsh" from left to the list called "people"
RPUSH people "Meghna" =>  create a list or push "Meghna" from right to the list called "people"
LRANGE people 0 3 => list the list from position 0 to 3.
LRANGE people 0 -1 =>  list the list from position 0 to the end
LPOP people => remove one item from the left of the list
RPOP people => remove one item from the right of the list
LINSERT people BEFORE "Meghna" "Prabjyot" => insert "Prabjyot" to the list of people before Meghna

## Sets

SADD cars "Ford" => add Ford to a set of cars
SISMEMBER cars "Honda" => check if Honda is a member of the set cars
SMEMBERS cars => list the entire set of cars
SCARD cars => return the number of elements in a set
SMOVE cars mycars "Ford" => move a set member to another set
SREM cars "BMW" => remove an element from a set

## Sorted sets (Sort by score in ascending order)

ZADD users 1000 'Utkarsh Mehta' => create or update a sorted set "users" with Utkarsh Mehta with a score of 1000
ZRANK users 'Meghna Khaitan' => find the rank of Meghna in the sorted set "users"
ZRANGE users 0 -1 => list the sorted set elements
ZINCRBY users 10 "Utkarsh Mehta" => increase the score of Utkarsh by 10

## Hash (JS objects, dictionaries)

HSET user:utkarsh name 'Utkarsh Mehta' => create a hash user:utkarsh with the key 'name' and value 'Utkarsh Mehta'
HSET user:utkarsh email 'wassup@gmail.com' => add a key 'email' to user:utkarsh
HGET user:utkarsh name => get the value of the key 'name' from the hash user:utkarsh
HGETALL user:utkarsh => get every thing in the hash
HMSET user:pubby name 'Prabjyot' email 'pubby@gmail.com' age 25 => create a new hash with multiple key values
HKEYS user:pubby => list all keys in the hash
HVALS user:pubby => list all values in the hash
HINCRBY user:pubby age 10 => increase the value of key age by 10
HDEL user:pubby age => delete a key value pair from the hash
HLEN user:pubby => list the number of key-value pairs in the hash
