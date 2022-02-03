import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likes: 0
  }
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree();
}

export default state;
