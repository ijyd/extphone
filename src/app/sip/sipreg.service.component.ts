/// <reference types="tssip" />

import * as tssip from 'tssip';

import { Injectable } from '@angular/core';


@Injectable()
export class SIPRegService {
  constructor() {
  }

  wsConnect() {
    const socket = new tssip.WebSocketInterface('wss://echo.websocket.org/');

    const configuration = {
      sockets: [socket],
      uri: 'sip:alice@example.com',
      password: 'superpassword'
    };

    socket.connect();
    console.log('websocket connected ' + socket.isConnected);
  }

}
