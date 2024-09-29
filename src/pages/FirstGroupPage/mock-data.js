export const EXPENSE_GROUP_CATEGORIES_MOCK = [
  "Food & Drinks",
  "Travel",
  "Entertainment",
  "Utilities & Bills",
  "Shopping",
  "Health & Fitness",
  "Gifts & Donations",
  "Recreation & Leisure",
  "Miscellaneous",
  "Parties & Celebrations",
]

export const EXPENSE_CATEGORIES_MOCK = [
  "Rent & Housing",
  "Transportation",
  "Groceries",
  "Dining & Takeout",
  "Entertainment",
  "Health & Fitness",
  "Shopping",
  "Travel",
  "Subscriptions",
  "Insurance",
  "Education",
  "Loans & Debts",
  "Miscellaneous",
]

export const PARTICIPANTS_MOCK_DATA = [
  { firstName: "John", lastName: "Smith", avatarUrl: "#", id: "some_random-id_1" },
  { firstName: "Thomas", lastName: "Edison", avatarUrl: "#", id: "some_random-id_2" },
  { firstName: "Mickael", lastName: "Jackson", avatarUrl: "#", id: "some_random-id_3" },
  { firstName: "Darren", lastName: "McGregor", avatarUrl: "#", id: "some_random-id_4" },
]

export const EXPENSES_MOCK_DATA = [
  {
    name: "Office Supplies",
    description: "Purchased office supplies including pens, notebooks, and printer ink.",
    category: "Office",
    amount: 150,
    purchaser: "John Doe",
    contributionWeight: 10,
    date: new Date(),
    receiptUrl: "https://picsum.photos/seed/picsum/1080/1350",
    id: "some_unique_id_1",
  },
  {
    name: "Team Lunch",
    description: "Team lunch at a local restaurant to celebrate project completion.",
    category: "Entertainment",
    amount: 300,
    purchaser: "Jane Smith",
    contributionWeight: 20,
    date: new Date(),
    receiptUrl: null,
    id: "some_unique_id_2",
  },
  {
    name: "Software Subscription",
    description: "Annual subscription for project management software.",
    category: "Software",
    amount: 1200,
    purchaser: "Alice Johnson",
    contributionWeight: 50,
    date: new Date(),
    receiptUrl: "https://picsum.photos/seed/picsum/1080/1350",
    id: "some_unique_id_3",
  },
]