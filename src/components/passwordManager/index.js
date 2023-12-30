import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import EachItem from '../passwordItem'

class PasswordManager extends Component {
  state = {
    initialPasswordList: [],
    showPassword: false,
    count: 0,
    websiteInput: '',
    usernameInput: '',
    searchInput: '',
    passwordInput: '',
  }

  SubmitButton = event => {
    event.preventDefault()
    const {websiteInput, passwordInput, usernameInput} = this.state
    const newPassword = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      initialPasswordList: [...prevState.initialPasswordList, newPassword],
      websiteInput: '',
      passwordInput: '',
      usernameInput: '',
      count: prevState.count + 1,
    }))
    console.log(this.state)
  }

  passwordShow = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  deleteItem = id => {
    this.setState(prevState => ({
      initialPasswordList: prevState.initialPasswordList.filter(
        each => each.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  webSiteChange = event => {
    this.setState({websiteInput: event.target.value})
  }

  userNameChange = event => {
    this.setState({usernameInput: event.target.value})
  }

  passwordChange = event => {
    this.setState({passwordInput: event.target.value})
  }

  searchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      initialPasswordList,
      showPassword,
      searchInput,
      websiteInput,
      passwordInput,
      usernameInput,
    } = this.state

    const filteredList = initialPasswordList.filter(each => {
      const value = each.website.toLowerCase()
      const search = searchInput.toLowerCase()
      return value.includes(search)
    })
    const len = filteredList.length
    let bottomElement
    if (len === 0) {
      bottomElement = (
        <div className="noPasswordContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="noPasswordImg"
          />
          <p className="yourPara noPara">No Passwords</p>
        </div>
      )
    } else {
      bottomElement = (
        <ul className="unordered">
          {filteredList.map(each => (
            <EachItem
              item={each}
              key={each.id}
              showPassword={showPassword}
              deleteItem={this.deleteItem}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="MainContainer">
        <div className="bgContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="LogoIMG"
          />
          <div className="secondContainer">
            <div className="inputsContainer">
              <h1 className="inputHeading">Add New Password</h1>
              <form onSubmit={this.SubmitButton}>
                <div className="inputs">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="inputImg"
                  />
                  <input
                    type="text"
                    value={websiteInput}
                    onChange={this.webSiteChange}
                    placeholder="Enter Website"
                    className="inputValues color"
                  />
                </div>
                <div className="inputs">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="inputImg"
                  />
                  <input
                    value={usernameInput}
                    type="text"
                    onChange={this.userNameChange}
                    placeholder="Enter Username"
                    className="inputValues color"
                  />
                </div>
                <div className="inputs">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="inputImg"
                  />
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={this.passwordChange}
                    placeholder="Enter Password"
                    className="inputValues color"
                  />
                </div>
                <div className="addButtonContainer">
                  <button type="submit" className="addButton">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="passwordsImg"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="passwordsImgSm"
            />
          </div>
          <div className="bottomContainer">
            <div className="thirdContainer">
              <div className="searchContainer">
                <div className="count_para">
                  <h1 className="yourPara">Your Passwords</h1>
                  <p className="passwordCount">{len}</p>
                </div>
                <div className="Searchinput">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="inputImg"
                  />
                  <input
                    onChange={this.searchChange}
                    type="search"
                    value={searchInput}
                    placeholder="Search"
                    className="inputValues1"
                  />
                </div>
              </div>
            </div>
            <hr className="horizontalLine" />
            <div className="CheckBoxContainer">
              <input
                type="checkbox"
                id="showPassword"
                onClick={this.passwordShow}
              />
              <label htmlFor="showPassword" className="lableElement">
                Show Passwords
              </label>
            </div>
            {bottomElement}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
