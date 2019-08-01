import { Contact } from './contact.model';

export class Chat {
  id?: number;
  type: string;
  when: number;
  muted: boolean;
  unread: number;
  text: string;
  contact: Contact;
}
