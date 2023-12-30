import './index.css'

const EachItem = props => {
  const {item, showPassword, deleteItem} = props
  const {id, website, username, password, backgroundColor} = item
  const deleteEach = () => {
    deleteItem(id)
  }
  const firstLetter = website.slice(0, 1)
  let passwordElement
  if (showPassword === true) {
    passwordElement = <p className="eachItem">{password}</p>
  } else {
    passwordElement = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="startImg"
      />
    )
  }
  return (
    <li className="listName">
      <div className="WebsiteInfor">
        <div className="onlyContainer">
          <p className={backgroundColor}>{firstLetter}</p>
          <div className="name_password">
            <p className="eachItem">{website}</p>
            <p className="eachItem">{username}</p>
            {passwordElement}
          </div>
        </div>
        <button
          className="deletebutton"
          type="button"
          onClick={deleteEach}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="deleteImg"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default EachItem
