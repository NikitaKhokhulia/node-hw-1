const { program } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

// Define the available commands using commander
program
  .command("list")
  .description("List all contacts")
  .action(() => {
    listContacts();
  });

program
  .command("get <id>")
  .description("Get a contact by ID")
  .action((id) => {
    getContactById(id);
  });

program
  .command("add <name> <email> <phone>")
  .description("Add a new contact")
  .action((name, email, phone) => {
    addContact(name, email, phone);
  });

program
  .command("remove <id>")
  .description("Remove a contact by ID")
  .action((id) => {
    removeContact(id);
  });

program.parse(process.argv);