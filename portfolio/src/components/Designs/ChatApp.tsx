import React from 'react'

import NavBar from '../NavBar'

import design from '../../assets/images/chat_app.jpg'

import './Designs.scss'

const ChatApp: React.FC = () => (
  <div>
    <NavBar />
    <br/>
    <br/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="designs-container">
      <div className="designs-card">
        <br />
        <h1> CHAT APP </h1>
        <p><h2>I. Understanding the Goals</h2></p>
            <p>
               The goal of this system is to implement a chat application that can be built upon later to implement an online multiplayer game.
            </p>
            <p>
                The users of this system will likely only reside in the United States, since my friend is mainly building the game just to see if he can pull it off. 
            </p>
            <p>
                This very small part of the system will have similar inputs to that of the game— authenticated user GUIDs, user aliases (at this time, they will be chosen after each authentication since the idea of a user profile isn't in the scope of this design), and chat session id. Said session id can be generated by the system when the user creates a new chat.
            </p>
            <p>
                Outputs of the system will include the session id (which can be shared with other users to join in the chat session.
            </p>
            <p>
                The more obvious inputs and outputs, I haven't yet mentioned, are, of course, the chat messages themselves.
            </p>
            <br />
        <p><h2>II. Scope</h2></p>
            <p>
                The current design will only support web browser clients, since the game will be a browser only game. However, if this game were to support mobile clients, in the future the only change to the design would be the additions of the appropriate client and <a href="https://samnewman.io/patterns/architectural/bff/">BFF</a> codebases.
            </p>
            <p>
                This design will also include a 3rd party OAuth system for authentication and authorization.
            </p>
            <p>
                Although, analytics, logging and monitoring are out of the scope of this design, I will strongly recommend for my friend both 1) to implement Google Analytics to get frontend metrics and 2) to consider the addition of the ELK stack or Splunk for log management and a tool such as DataDog or AWS CloudWatch for monitoring and metrics. 
            </p>
            <br />
        <p><h2>III. Scale</h2></p>
            <p>
                Like most chat applications, this one will likely be both read and write heavy. To mitigate the problems with latency this could cause at scale, I designed the load balancing layer to implement a <a href="https://en.wikipedia.org/wiki/Consistent_hashing#Basic_Technique" rel="noreferrer noopener" target="blank">consistent hashing strategy</a>. This will allow for the addition of a light in-memory cache, such as Memcached, that'll lower the need to go grab message history from the database.
            </p>
            <p>
                At this time, there is no plan to handle DDoS or any attack of that sort, but adding load balancing would be trivial if it were needed in the future. 
            </p>
            <br />
        <p><h2>IV. Design</h2></p>
            <p>
                This is the first pass design for the chat application. Static UI assets will be served by a CDN. Calls to the OAuth external service will be handled by the BFF. 
            </p>
            <p>
                Once a user is authorized, they are sent to a page where they can then initiate a chat session and invite a friend to the session. The initiating of the chat session is handled by the Chat Service by 1) sending back a shareable link to the chat session and session id (both of which the user can share with a friend) and 2) opening a bi-directional communication channel for the client to communicate with the service.
            </p>
            <p>
                Chat logs will be persisted to the database and to the client-side cache.
            </p>
            <img src={design} />
        <br />
        <br />
      </div>
    </div>
  </div>
)

export default ChatApp