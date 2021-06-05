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
               The goal of this post is to desribe the design of a chat application that can be used by an online multiplayer game that my friend is building. Although, the following design is for scale, I mostly designed this for the mental challenge, and we will build this on a much smaller (and less distributed) scale.
            </p>
            <p>
                For the purposes of this post, pretend that we have a cool $100 mil burning a hole in our collective pockets, and I was charged with designing the infra for a massively popular game that'll be hot only in the US.
            </p>
            <p>
                The chat system will have similar inputs to that of the game— authenticated user GUIDs, user aliases, and session ids. Said session ids will be generated by the system when the user initiates a new chat.
            </p>
            <p>
                Outputs of the system will include the session id (which can be shared, via link, with other users to join in the chat session).
            </p>
            <p>
                The inputs and outputs, I haven't yet mentioned, are, of course, the chat messages themselves.
            </p>
            <br />
        <p><h2>II. Scope</h2></p>
            <p>
                The current design will only support web browser clients, since the game will be a browser only game. However, if this game were to support mobile clients in the future, the only change to the design would be the additions of the appropriate client and <a href="https://samnewman.io/patterns/architectural/bff/" rel="noreferrer noopener" target="blank">backend-for-frontend (BFF)</a> codebases.
            </p>
            <p>
                This design will also include a 3rd party OAuth system for authentication and authorization.
            </p>
            <p>
                Although, analytics, logging, and monitoring are not explained in detail this design, I would use 1) <a href="https://analytics.google.com/analytics/" rel="noreferrer noopener" target="blank">Google Analytics</a> to get frontend metrics, 2) the <a href="https://www.elastic.co/what-is/elk-stack" rel="noreferrer noopener" target="blank">ELK</a> stack or <a href="https://www.splunk.com/" rel="noreferrer noopener" target="blank">Splunk</a> for log management, and 3) a tool such as <a href="https://www.datadoghq.com/" rel="noreferrer noopener" target="blank">DataDog</a> or <a href="https://aws.amazon.com/cloudwatch/" rel="noreferrer noopener" target="blank">AWS CloudWatch</a> for monitoring and metrics. 
            </p>
            <br />
        <p><h2>III. Scale</h2></p>
            <p>
                Like most chat applications, this one will likely be both read and write heavy.
            </p>
            <br />
        <p><h2>IV. Design</h2></p>
            <br />
            <img src={design} />
            <br />
            <p><h3>Frontend</h3></p>
                <p>
                    I've designed for the static assets of the system to be deployed to blob storage. This will be delivered to end users via a CDN distribution.
                </p>
                <p>
                    Additionally, I've decided to abstract UI logic from data fetching by implementing a BFF behind the static assets. The BFF will be in charge of both interacting with the service layer and calling the external OAuth provider. Once a user is authorized, they are sent to a page where they can then initiate a chat session, and invite a friend to the session.
                </p>
                <br />
            <p><h3>Load Balancers</h3></p>
                <p>
                    The load balancing layer acts as a reverse proxy for the chat service. To prevent the chat service from becoming a point of failure at scale, I've designed for it to be horizontally scalable. Furthermore, I designed the load balancing layer to implement a <a href="https://en.wikipedia.org/wiki/Consistent_hashing#Basic_Technique" rel="noreferrer noopener" target="blank">consistent hashing strategy</a>, so that users with the same session id will be routed to the same server. Since said hashing strategy helps us avoid the problem of users being reassigned to new servers as servers are added to (and removed from) the cluster, we can also add an in-memory cache that'll lower the need to go grab message history from the database.
                </p>
                <br />
            <p><h3>More about Chat Service</h3></p>
            <p>
                After a user initiates a new chat via their browser, the chat service opens a bi-directional communication channel for the BFF to communicate with the service. I chose this method instead of <a href="https://ably.com/blog/websockets-vs-long-polling" rel="noreferrer noopener" target="blank">long polling</a>, because the latter would put considerable load on our servers at scale. Additionally, by keeping an open connection, we will likely experience lower latencies for the transfer of messages.
            </p>
            <p>
                Once a friend joins the chat session, chat service will also open a bi-di channel for them. After one user types "hello world!" and clicks send, the message will go through the LB proxy, to user's bi-di channel, to the server, and then through the friend's bi-di channel, through the LB proxy to finally reach their client. The chat service servers will also cache the messages in memory (for chat participants coming in later), as will the BFF.
            </p>
            <br />
        <p><h3>Database</h3></p>
            <p>
                The database stores chat logs by session id. Since this isn't overly relational data, NoSQL document-type databases would be useful here. Additionally, since it is good practice to design NoSQL solutions to conform to the application's data access patterns, lookups will be faster, as well.
            </p>
            <p>
                One problem I wanted to be mindful of should we go with a self-managed database solution (to save money, haha) is how we'll handle both scaling reads and making our database solution fault-tolerant and highly available. In this regard, having a leader-replica configuration should work. For a single region deployment, one leader with two replicas in different availability zones is more than sufficient. We could even add in a NoSQL tool equivalent to that of <a href="https://proxysql.com/" rel="noreferrer noopener" target="blank">ProxySQL</a> to handle delegating all writes to the leader and reads to the replicas, but adding that in the service configs/logic would likely be a smaller lift.
            </p>
            <p>
                For managing failover, I would either use a key-value store like <a href="https://zookeeper.apache.org/" rel="noreferrer noopener" target="blank">Zookeeper</a> or <a href="https://etcd.io/" rel="noreferrer noopener" target="blank">etcd</a>, or a NoSQL equivalent to <a href="https://www.percona.com/blog/2016/03/08/orchestrator-mysql-replication-topology-manager/" rel="noreferrer noopener" target="blank">orchestrator</a> to manage leader election. 
            </p>
        <br />
        <p><h2>V. Concluding Thoughts</h2></p>
                <p>
                   My friend and I are actually going to build this. Friend is going to develop the game. I'll port in chat functionality and design the rest of the infratructure. We don't have $100 mil, so I'm probably going to nix the database in favor of a more ephemeral chat experience. Additionally, I'll likely switch out the load balancers for an Envoy reverse proxy if I decide to use <a href="https://grpc.io/" rel="noreferrer noopener" target="blank">gRPC</a> for the chat service. But everything else will still be handled as I described! STAY TUNED.
                </p>
        <br />
      </div>
    </div>
  </div>
)

export default ChatApp