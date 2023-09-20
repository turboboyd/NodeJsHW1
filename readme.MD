# Receive and display all contacts in the list of video tables (console.table)

node index.js --action list

![screenshot-list](https://i.ibb.co/xCcyYHs/1.png)

[Link to photo](https://ibb.co/Mcz3ntX)

# We get a contact by id - we output the contact object to the console or null if a contact with such id does not exist.

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

![screenshot-get](https://i.ibb.co/f42wR3k/1.png)

[Link to photo](https://ibb.co/sy2YSTK)

# Add a contact and display the created contact in the console

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

![screenshot-get](https://i.ibb.co/zGzc9VB/1.png)

[Link to photo](https://ibb.co/qkvGqYc)

# Delete the contact and display the deleted contact or null in the console if a contact with this id does not exist.

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

![screenshot-action-get](https://i.ibb.co/cbF1NN0/1.png)

[Link to photo](https://ibb.co/CJ7znng)
