import React from 'react'

const AppContext = React.createContext()

class AppProvider extends React.Component{
      constructor(props){
            super(props)
            this.state = {
                  cards: [],
                  post: '',
                  search: ''                          
            }
      }
      handleAddCards = cards => {
          this.setState({cards})
      }
      handleAddPost = post => {
            this.setState({post})
      }
      handleSearch = search => {
            this.setState({search})
      }
      render(){
            return(
                  <AppContext.Provider value={{
                       cards: this.state.cards,
                       handleAddCards: this.handleAddCards,
                       handleAddPost: this.handleAddPost,
                       post: this.state.post,
                       search: this.state.search,
                       handleSearch: this.handleSearch
                  }}>
                  <div>{this.props.children}</div>
                  </AppContext.Provider>     
            )
      }
}
export {AppProvider, AppContext}