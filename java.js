//contact//
// js/contact.js
// SAVE MESSAGE TO LOCAL STORAGE
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector('[name="name"]').value;
  const email = document.querySelector('[name="email"]').value;
  const message = document.querySelector('[name="message"]').value;

  const newMessage = {
    name,
    email,
    message
  };

  // Get existing messages
  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  // Add new message
  messages.push(newMessage);

  // Save back
  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message saved successfully!");

  this.reset();
});
//admin//
// js/admin.js

// LOAD MESSAGES INTO ADMIN PAGE
function loadMessages() {
  const container = document.getElementById("messagesContainer");

  if (!container) return; // only run on admin page

  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  container.innerHTML = "";

  messages.forEach((msg, index) => {
    container.innerHTML += `
      <div class="message-card">
        <div class="message-info">
          <h3>${msg.name}</h3>
          <p>Email: ${msg.email}</p>
          <p class="msg">${msg.message}</p>
        </div>

        <div class="reply-box">
          <textarea placeholder="Write reply..."></textarea>
          <button class="reply-btn" onclick="replyMessage('${msg.email}')">
            Send Reply
          </button>
        </div>
      </div>
    `;
  });
}

// CALL FUNCTION
//loadMessages();

//reply function//
//function replyMessage(email) {
 // window.location.href = `mailto:${email}`;
//}

//async function sendReply(id){

//const reply = document.getElementById("reply-"+id).value;

//await db.collection("messages").doc(id).update({

//reply: reply

//});

//alert("Reply sent");

//}//
//firebase config//

