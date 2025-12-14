export default function Condition() {
    const unreadMessages = 2;

    return(
        <div>
            <div className="simple-if">
                <h1>Simple If using &&</h1>
                {unreadMessages > 0 && 
                    <p>you have {unreadMessages} unread messages</p>
                }
            </div>
            <div>
                <h1>Ternary Operations</h1>
                {unreadMessages > 0 ? 
                    <p>You have unread messages</p> :
                    <p>No unread messages</p>
                }
            </div>
        </div>
    )
}