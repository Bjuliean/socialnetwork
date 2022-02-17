import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

let store  = {
  _state: {
    messagesPage: {
      messageData: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Maxim"},
        {id: 3, name: "Vitaly"},
        {id: 4, name: "Nastya"}
      ],
      dialogsData: [
        {id: 1, name: "Andrew", message: "Hello"},
        {id: 2, name: "Maxim", message: "Hey"},
        {id: 3, name: "Vitaly", message: "Hi"},
        {id: 4, name: "Nastya", message: "lol"}
      ]
    },

    profilePage: {
      postsData: [
        {id: 1, message: "Hi!", likes: "12"},
        {id: 2, message: "Hello!", likes: "34"},
        {id: 3, message: "Yo!", likes: "2"},
        {id: 4, message: "Wazzup!", likes: "10"}
        ]
      }
    },

  getState() {
    return this._state;
  },

  _rerenderEntireTree() {
    console.log('Changed');
    },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    
    this._rerenderEntireTree(this._state);
  }
}

export default store;
