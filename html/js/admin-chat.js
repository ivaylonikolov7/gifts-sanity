var socket = io();
let chats = document.querySelector('#chats')
let chatId,messages;

socket.on('admin please join room', (room)=>{
    socket.emit('make admin join room', room);
    console.log('Admin will join ' + room);
})

socket.on('user send admin', (data)=>{
    addMessageToDom('user', data.message, data.room);
})
socket.on('add a room to frontend', (roomId)=>{
    if(isTheRoomUnique(roomId)){
        addNewChatroomToDom(roomId);
        let currentChatId = document.querySelector(`#${roomId}`);
        currentChatId.querySelector('input[type=submit]').addEventListener('click', (e)=>{
            let message = currentChatId.querySelector('textarea').value
            addMessageToDom('admin', message, roomId);
            socket.emit('send user message', message);
            let parentDiv = e.target.parentNode.parentNode;
            let textarea = parentDiv.querySelector('textarea');
            textarea.value = '';        
            
        });
    }

})

function addNewChatroomToDom(roomId) {
    let templateUser = `
    <div class="chat-id user" id=${roomId}>
        <h1>${roomId}</h1>
        <div id="messages">
        </div>
        <textarea></textarea>
        <div id="submit">
            <input type="submit">
        </div>
    </div>`;
    chats.innerHTML += templateUser;
}

function addMessageToDom(role, message, data) {
    let messageTemplate = `<div id=${role} class="message">${message}</div>`;
    chatId = document.querySelector(`#${data}`);
    messages = chatId.querySelector('#messages');
    messages.innerHTML += messageTemplate;
}
function isTheRoomUnique(roomId){
    let unique = true;
    let allRoomsDOOM = document.querySelector(`#${roomId}`)        
    if(allRoomsDOOM){
        unique=false
    }    
    return unique;
}