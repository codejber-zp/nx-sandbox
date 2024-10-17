export type Message = {
  text: string;
}

export const API_URL = '/api';

export enum MessageRoute {
  GET_INIT_MESSAGE = `/initMessage`,
}
