import React from 'react'
import UserClass from './UserClasses'
import User from './User'
import UserContext from '../utils/UserContext'
// import User from './User'

class About extends React.Component {
  constructor(props) {
    super(props)
    console.log("Parent Constructor called")

    this.state = {
      showUsers: true
    }
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount called")
  }

  toggleUsers = () => {
    this.setState(prevState => ({
      showUsers: !prevState.showUsers
    }))
  }

  render() {
    console.log("Parent Render called")

    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <button
          onClick={this.toggleUsers}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          {this.state.showUsers ? "Hide Users" : "Show Users"}
        </button>


        {this.state.showUsers && (
          <>
            {/* <UserClass name="Roshan" location="Bangalore" /> */}
            <User name="Elon Musk" location="Mars" />
            <div>

              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <div className="text-gray-800 mt-4">
                    Logged in as: <strong>{loggedInUser.name}</strong> ({loggedInUser.email})
                  </div>
                )}
              </UserContext.Consumer>
            </div>

          </>
        )}
      </div>
    )
  }
}

export default About