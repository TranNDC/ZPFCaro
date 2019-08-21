export const ADD_MESSAGE = "chat.ADD_MESSAGE";
export const INIT_MESSAGES = "chat.INIT_MESSAGES";

//type: response
export function addMessage(message, avatar, displayedName, type) {
  return {
    type: ADD_MESSAGE,
    message: message,
    avatar: avatar,
    displayedName: displayedName,
    types: type
  };
}

export function initMessages() {
  return {
    type: INIT_MESSAGES
  };
}
