import React, { FC, useMemo } from 'react'

interface State {
  username: string
}

const initialState = {
  username: ''
}

type Action = 
  | {
    type: 'SET_USERNAME',
    username: string
  }

function appReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_USERNAME': {
      return {
        ...state,
        username: action.username
      }
    }
  }
}

const AppContext = React.createContext<State | any>(initialState)
AppContext.displayName = 'AppContext'

const AppProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  const setUsername = (username: string) => dispatch({type: 'SET_USERNAME', username})

  const value = useMemo(() => ({
    ...state,
    setUsername
  }), [state])

  return <AppContext.Provider value={value} {...props} />
}

export const useApp = () => {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const ManagedAppContext: FC = ({ children }) => {
  return <AppProvider children={children} />
}