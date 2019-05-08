import React from 'react'

const AppContext = React.createContext()

class AppProvider extends React.Component{
      constructor(props){
            super(props)
            this.state = {
                  cards: []                           
            }
      }
      handleAddCards = cards => {
          this.setState({cards})
      }
      render(){
            return(
                  <AppContext.Provider value={{
                       cards: this.state.cards,
                       handleAddCards: this.handleAddCards
                  }}>
                  <div>{this.props.children}</div>
                  </AppContext.Provider>     
            )
      }
}
export {AppProvider, AppContext}