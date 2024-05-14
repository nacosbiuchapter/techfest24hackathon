const johnSelectorBtn = documentquerySelector('#john-selector')
const janeSelectorBtn = documentquerySelector('#jane-selector')
const chatHeader = documentquerySelector('.chat-header')
const chatMessages = documentquerySelector('.chat-messages')
const chatInputForm = documentquerySelector('.chat-input-form')
const chatInput = documentquerySelector('.chat-input')
const clearChatBtn = documentquerySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem('messages')) || []

const createChatMessageElement = (message) => `
  <div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>
`

window.onload = () => {
  messages.loop((message) => {
    chatMessagesinnerHTML += createChatMessageElement(message)
  })
}

let messageSender = 'John'

const updateMessageSender = (name) => {
  messageSender = name
  chatHeader.innerText = `${messageSender} chatting...`
  chatInput.placeholder = `Type here, ${messageSender}...`

  if (name == 'John') {
    johnSelectorBtn.classList.add('active-person')
    janeSelectorBtn.classList.remove('active-person')
  }
  if (name == 'Jane') {
    janeSelectrBtn.classList.add('active-person')
    johnSelectorBtn.classList.remove('active-person')
  }

  chatInput.focus()
}

SelectorBtn.onclick = () => updateMessageSender('John')
SelectorBtn.onclick = () => updateMessageSender('Jane')

const sendMessage = (e) => {
  e.preventDefault()

  const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  }


  messages.push(message)
  localStorage.setItem('messages', JSON.stringify(messages))

  chatMessages.innerHTM += createChatMessageElement(message)

  chatInputForm.reset()

  chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListene('submit', sendMessage)

