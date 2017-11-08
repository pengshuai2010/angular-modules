import {Injectable} from '@angular/core';
import {Crisis} from './crisis';

const crisises: Crisis[] = [
  {id: 1, location: 'San Francisco'},
  {id: 2, location: 'Seattle'},
  {id: 3, location: 'Portland'},
  {id: 4, location: 'Los Angels'}
];

const NETWORK_LATENCY = 500;

@Injectable()
export class CrisisService {
  public getCrisises(): Promise<Crisis[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(crisises), NETWORK_LATENCY);
    });
  }
}
