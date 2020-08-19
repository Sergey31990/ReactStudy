import { renderEntireTree } from "../render";
let state = {
  dialog: {
    users: [
      { name: "Andry", id: 1 },
      { name: "Kate", id: 2 },
      { name: "Dima", id: 3 },
      { name: "Ron", id: 3 },
    ],
    messages: [
      { id: 1, messageText: "Hi" },
      { id: 2, messageText: "How are you" },
      { id: 3, messageText: "am fine and you?" },
      { id: 4, messageText: "great!" },
    ],
  },
  content: {
    post: [
      {
        ava:
          "https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200?webp=false",
        text: "text 1",
      },
      {
        ava:
          "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f0/f091c95d474a077ba3b5edccd3f0302bd52739e5.jpg",
        text: "text 2",
      },
      {
        ava:
          "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/28/286d76e16bc975499fcd20c4a57793c5408c1dba.jpg",
        text: "text 3",
      },
    ],
    newPost: "",
  },
};

export let addPost = () => {
  let newPost = {
    ava:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Portrait_Placeholder.png/360px-Portrait_Placeholder.png",
    text: state.content.newPost,
  };
  state.content.post.push(newPost);
  renderEntireTree(state);
};

export let changeNewPostText = (postMessage) => {
  let newPost = postMessage;
  state.content.newPost = postMessage;
  renderEntireTree(state);
};

export default state;
