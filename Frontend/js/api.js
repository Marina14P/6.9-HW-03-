async function fetchChats() {
    const response = await fetch('/api/chats/');
    const data = await response.json();
    return data;
}
