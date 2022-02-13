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
    if(action.type === 'ADD-POST')
    {
      let newPost = {
        id: 5,
        message: action.postMessage,
        likes: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._rerenderEntireTree(this._state);
    }
    else if(action.type === 'ADD-MESSAGE')
    {
      let newMessage = {
        id: 5,
        message: action.message,
        name: "Me"
      }
      this._state.messagesPage.dialogsData.push(newMessage);
      this._rerenderEntireTree(this._state);
    }
  }
}

export const addPostActionCreator = (text) => {
  return {
    type: 'ADD-POST',
    postMessage: text
  }
}

export const addMessageActionCreator = (text) => {
  return {
    type: 'ADD-MESSAGE',
    message: text
  }
}

export default store;
