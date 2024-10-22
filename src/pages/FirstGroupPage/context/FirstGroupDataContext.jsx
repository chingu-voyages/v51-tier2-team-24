import { createContext, useState } from "react"
import PropTypes from "prop-types"
import { LOCAL_STORAGE_KEYS } from "@/lib/constants"
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"

export const FirstGroupDataContext = createContext()

export const FirstGroupDataContextProvider = ({ children }) => {
  const [groupDetails, setGroupDetails] = useState(null)
  const [participants, setParticipants] = useState(() => {
    return [JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.ADMIN))]
  })
  const [expenses, setExpenses] = useState([])
  const [friends, setFriends] = useState([])

  const navigate = useNavigate()

  const handleGroupDetailsStep = (groupDetails) => {
    setGroupDetails(groupDetails)
  }

  const handleAddParticipant = (particpant) => {
    setParticipants((prevParticipants) => [...prevParticipants, particpant])
  }

  const handleDeleteParticipant = (id) => {
    setParticipants((prevParticipants) =>
      prevParticipants.filter((participant) => participant.id !== id)
    )
    setFriends((prevFriends) => prevFriends.filter((friend) => friend.id !== id))
  }

  const handleAddFriend = (friend) => {
    setFriends((prevFriends) => [...prevFriends, friend])
  }

  const handleAddExpense = (expense) => {
    setExpenses([expense])
  }

  const createFirstGroup = () => {
    const groupInfo = { groupDetails, participants, expenses, id: uuidv4() }
    localStorage.setItem(LOCAL_STORAGE_KEYS.GROUPS, JSON.stringify([groupInfo]))
    localStorage.setItem(LOCAL_STORAGE_KEYS.FRIENDS, JSON.stringify(friends))
    navigate(`/app/groups/${groupInfo.id}`)
  }

  const values = {
    groupDetails,
    participants,
    expenses,
    friends,
    handleGroupDetailsStep,
    handleAddParticipant,
    handleDeleteParticipant,
    handleAddFriend,
    handleAddExpense,
    createFirstGroup,
  }

  return <FirstGroupDataContext.Provider value={values}>{children}</FirstGroupDataContext.Provider>
}

FirstGroupDataContextProvider.propTypes = { children: PropTypes.node.isRequired }
