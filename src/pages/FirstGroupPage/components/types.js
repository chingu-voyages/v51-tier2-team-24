import PropTypes from "prop-types"

export const StepsContentCommonTypes = {
  includeActions: PropTypes.bool,
}


export const GroupItem = {
  id: PropTypes.string,
  name: PropTypes.string,
  totalBudget: PropTypes.number,
  totalSpent: PropTypes.number,
  category: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  updatedAt: PropTypes.instanceOf(Date),
  participantsIds: PropTypes.array,
  expensesIds: PropTypes.array,
  receiptIds: PropTypes.array,
}