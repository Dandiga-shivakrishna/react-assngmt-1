import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

// const HistoryList = this.props.initialHistoryList

class HistoryChat extends Component {
  state = {
    searchInput: '',
    // inHistoryList: HistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  //   deleteUser = id => {
  //     const {inHistoryList} = this.state
  //     const filteredUsersData = inHistoryList.filter(each => each.id !== id)
  //     this.setState({
  //       inHistoryList: filteredUsersData,
  //     })
  //   }

  render() {
    const {initialHistoryList} = this.props

    const {searchInput} = this.state
    const searchResults = initialHistoryList.filter(eachUser =>
      eachUser.title.includes(searchInput),
    )
    return (
      <div className="app-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="img-style"
          />
          <div className="header-bg ml-5">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="img-style"
            />
          </div>
          <div className="header-bg m-2">
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>

        <ul className="list-container">
          {searchResults.map(eachUser => (
            <HistoryItem
              userDetails={eachUser}
              key={eachUser.id}
              // deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default HistoryChat
