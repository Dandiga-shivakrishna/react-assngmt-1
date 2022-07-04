import './index.css'

const HistoryItem = props => {
  const {userDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="user-card-container">
      <p>{timeAccessed}</p>
      <div className="inner-style">
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" className="img-size" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
