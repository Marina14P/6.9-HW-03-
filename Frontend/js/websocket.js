const chatSocket = new WebSocket(
    'ws://' + window.location.host + '/ws/chat/' + chatId + '/'
);

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    console.log('Message: ', data.message);
};
