class Contact {
    constructor(FirstName, LastName, Address, City, State, Zip, PhoneNumber, Email) {

        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
        this.PhoneNumber = PhoneNumber;
        this.Email = Email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];}
    
    addNewContact(contact) {
    this.contacts.push(contact);
    console.log("Contact Added " + contact.FirstName);}

    displayContactDetails() {
    this.contacts.forEach(element => {
        console.log("Full Name: "+element.FirstName + " " + element.LastName);
    });}
}



const addressbook=new AddressBook();
const Contact1 = new Contact(
    FirstName= "Rithika",
    LastName= "L",
    Address= "Madhavaram",
    City= "Chennai",
    State= "TamilNadu",
    Zip ="600051",
    PhoneNumber= "9789286965",
    Email= "rithi@gmail.com");
const Contact2 = new Contact(
    FirstName="Riya",
    LastName= "R",
    Address= "Bhavan",
    City= "Pathanamthitta",
    State= "Kerala",
    Zip= "123456",
    PhoneNumber= "1023445678",
    Email= "riya@gmail.com");

addressbook.addNewContact(Contact1);
addressbook.addNewContact(Contact2);
addressbook.displayContactDetails();