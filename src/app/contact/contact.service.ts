import {Injectable} from '@angular/core';
import {Contact} from './contact';

const CONTACTS: Contact[] = [
  new Contact(21, 'Same'),
  new Contact(22, 'Nick'),
  new Contact(23, 'Nancy')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {
  getContacts(): Promise<Contact[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(CONTACTS), FETCH_LATENCY);
    });
  }

  getContact(id: number | string) {
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.id === +id));
    // the unary plus operator will try to cast it's operand to a numeric value if it isn't already
    // e.g. +'3' will evaluate to 3
  }
}
