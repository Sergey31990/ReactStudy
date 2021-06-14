let store ={
    _state: {
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
    },
    getState(){
      return this._state;
    },
    //Становиться renderEntireTree из index
    renderEntireTree(){},
    //Присваиваем местной renderEntireTree п-р observer(renderEntireTree из index)
    subscribe(observer) {
      this.renderEntireTree = observer;
    },
    dispatch(action){
      if(action.type === 'ADD-POST'){
        //Добавляет новый post
        let newPost = {
          ava:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Portrait_Placeholder.png/360px-Portrait_Placeholder.png",
          text: this._state.content.newPost,
        };
        this._state.content.post.push(newPost);
        this.renderEntireTree(this._state);
      }else if(action.type === 'CHANGE-NEW-POST-TEXT'){
        //Записываем пост в state
        this._state.content.newPost = action.postMessage;
        // Перерисовываем посты с новым state
          this.renderEntireTree(this._state);
      }
    }
}

export default store;
window.store = store;







