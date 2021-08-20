import Email from './Email'

function EmailsList(props) {
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            key={index}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            email={email}
          />
        ))}
      </ul>
    </main>
  )
}
export default EmailsList
