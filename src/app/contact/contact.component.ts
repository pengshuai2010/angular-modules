import {Component, OnInit} from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {UserService} from '../user.service';

const MSG_DISP_INTERVAL = 1500;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];
  msg = 'Loading contacts...';
  userName = '';

  constructor(private contactService: ContactService, private userService: UserService) {
    this.userName = this.userService.username;
  }

  ngOnInit(): void {
    this.contactService.getContacts().then(contacts => {
      this.contacts = contacts;
      this.contact = contacts[0];
      this.msg = ''; // change msg after finished loading contacts
    });
  }

  next(): void {
    let index = this.contacts.indexOf(this.contact) + 1;
    if (index >= this.contacts.length) {
      index = 0;
    }
    this.contact = this.contacts[index];
  }

  onSubmit(): void {
    this.displayMessage('saved ' + this.contact.name);
    // TODO save the contact
  }

  displayMessage(msg: string): void {
    this.msg = msg;
    setTimeout(() => this.msg = '', MSG_DISP_INTERVAL);
  }

  newContact(newConatct: Contact) {
    this.displayMessage('New contact');
    this.contacts.push(newConatct);
  }
}
