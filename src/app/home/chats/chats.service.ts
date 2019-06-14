import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  public get chats() {
    return Array(200).fill('').map((ele, idx) => ({
      contact: {
        avatar: `https://randomuser.me/api/portraits/med/${idx % 2 === 0 ? 'women' : 'men'}/${idx}.jpg`,

        name: idx % 2 === 0 ?
          (['Leeanna Munoz', 'Yolanda Karlin', 'Trish Peer'][idx % 3])
          : (['Chuck Pulver', 'Oscar Blundell', 'Irwin Weathersby'][idx % 3])
      },

      type: 'DIRECT',
      when: Date.now() - ((idx + 1) * 7 * 60 * 1000),
      muted: idx % 7 === 0,
      unread: parseInt(Math.random() * 10 + '', 10) - 3,

      text: [
        'Sixty-four doesn\'t like paying taxes. \u263A',
        'A river a thousand paces wide ever stuns the onlooker.',
        'That stolen figurine is often one floor above you.',
        '\u270C Spam sat down once more.',
        'Whiskey on the table set a treehouse on fire.'
      ][idx % 7],
    }));
  }

}
