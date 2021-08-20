function Email(props) {
  console.log('Email Props: ', props)

  const email = props.email

  return (
    <li key={props.index} className={`email ${email.read ? 'read' : 'unread'}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={() => props.toggleRead(email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={() => props.toggleStar(email)}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  )
}
export default Email
