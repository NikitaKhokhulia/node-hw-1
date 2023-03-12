const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.parse(data));
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId);
    console.log(contact);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let contacts = JSON.parse(data);
    contacts = contacts.filter((c) => c.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(contacts), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Contact with ID ${contactId} has been removed.`);
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    const newContact = { id: `${contacts.length + 1}`, name, email, phone };
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`${newContact.name} has been added to contacts.`);
    });
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
