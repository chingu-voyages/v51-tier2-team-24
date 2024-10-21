import AdminForm from "@/components/forms/AdminForm"
import { LOCAL_STORAGE_KEYS } from "@/lib/constants"
import { useLocalStorage } from "@uidotdev/usehooks"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

function WelcomePage() {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [admin, setAdmin] = useLocalStorage(LOCAL_STORAGE_KEYS.ADMIN, null)
  // eslint-disable-next-line no-unused-vars
  const [participants, setParticipants] = useLocalStorage(LOCAL_STORAGE_KEYS.PARTICIPANTS, null)

  function handleSubmit(e) {
    e.preventDefault()

    const adminData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      balance: 0,
      avatarUrl: null,
      email: e.target.email.value,
      role: "admin",
      id: uuidv4(),
    }

    setAdmin(adminData)
    setParticipants([adminData])
    navigate("/app/first-group")
  }

  return (
    <div className="welcome-page-container h-screen w-full flex flex-row gap-2  ">
      {/* TODO images need to be optimized */}
      <div className="welcome-images relative hidden lg:flex  lg:w-[50%] flex-wrap ">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img
            key={num}
            className="w-1/2 h-auto object-cover"
            src={`/images/unsplash-image${num}.jpg`}
            alt={`Unsplash image ${num}`}
          />
        ))}
      </div>

      {/* sign up section */}
      <div className="flex-1 justify-items-center p-10 w-[50%] md:flex md:flex-col md:items-center md:justify-center">
        <img
          className="pb-10 sm:pb-4 md:pb-4"
          src="/images/splitmate-high-resolution-logo-transparent.png"
          alt="splitmate-logo"
        />
        <div className="welcome-intro">
          <h1 className="my-8 font-bold text-3xl sm:my-4 sm:text-2xl md:my-6">
            Welcome to SplitMate!
          </h1>
          <p className="text-lg md:text-sm ">
            Are you ready to simplify the way you split expenses with friends, family, or roommates?
            Experience the convenience of managing shared costs effortlessly.
          </p>
          <p className="text-lg md:text-sm mt-4 mb-8">
            Join now and be among the first to try it out! Just fill out your name and email, it’s
            simple as that!
          </p>
          <AdminForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
