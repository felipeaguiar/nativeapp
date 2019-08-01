import { Message } from './message';

export class ImageMessage extends Message {
  public url = '';
  public thumbnail = '';

  public toString() {
    return `Photo${super.toString()} - Url: ${this.url} - Thumbnail: ${this.thumbnail}`;
  }
}

