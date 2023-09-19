# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list

![screenshot-action-list](https://ibb.co/Mcz3ntX)
[Link to photo](https://ibb.co/Mcz3ntX)

https://ibb.co/Mcz3ntX

# Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
https://ibb.co/gDKtLBd

# Добавляем контакт и выводим в консоль созданный контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://ibb.co/vmLsVsC

# Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
https://ibb.co/W6HLqKX