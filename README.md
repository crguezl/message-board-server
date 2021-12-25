# Super Repo

<https://github.com/crguezl/message-board-fullstack>
∫
# Full Stack Message Board

* [ ] Create Server Folder
  * [ ] Init npm
  * [ ] Add express morgan cors body-parser
  * [ ] Create Hello World Route
* [ ] Create Client Folder
  * [ ] vue create client
  * [ ] Add bootswatch CSS
  * [ ] Homepage Layout
* [ ] Add DB to server
  * [ ] Add monk joi
  * [ ] Create message model
  * [ ] Create route to add message to db
    * [ ] validate message with joi
      * username - default to anonymous
      * subject
      * message
      * imageURL
      * created_at
    * [ ] insert message into db
    * [ ] respond with inserted message
* [ ] When page loads show all messages on page
  * [ ] Server route to GET all messages
* [ ] Create new message form on client
  * [ ] Submit form - fetch POST to server
  * [ ] Show any errors
  * [ ] Show new message on page
* [ ] User can reply to a message
  * [ ] Reply appears under original message
* [ ] Group messages into categories
* [ ] Deploy!