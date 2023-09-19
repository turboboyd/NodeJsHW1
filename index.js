const { Command } = require("commander");
const contactsApi = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsApi.listContacts();
      return console.table(allContacts);
    case "get":
      const oneContacts = await contactsApi.getContactById(id);
      return console.table(oneContacts);
    case "add":
      const newContacts = await contactsApi.addContact({ name, email, phone });
      return console.table(newContacts);
    case "remove":
      const deleteContacts = await contactsApi.removeContact(id);
      return console.table(deleteContacts);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

