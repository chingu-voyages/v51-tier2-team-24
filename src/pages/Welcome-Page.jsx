import { Input } from "@/components/ui/input";

function WelcomePage() {
  return (
    //need to set viewport height in tailwind config
    <div className="welcome-page-container h-screen w-screen flex flex-row ">
      <div className="welcome-images relative   leading-[0] flex flex-wrap">
        <img
          className="unsplash-1  w-80 leading-[0]"
          src="./src/images/unsplash-image1.jpg"
        />
        <img
          className="unsplash-2  leading-[0] w-80"
          src="./src/images/unsplash-pizza-image2.jpg"
        />
        <img
          className="unsplash-3  w-80 leading-[0]"
          src="./src/images/unsplash-image3.jpg"
        />
        <img
          className="unsplash-4  w-80 leading-[0]  "
          src="./src/images/unsplash-image4.jpg"
        />
        <img
          className="unsplash-5  w-80 leading-[0] "
          src="./src/images/unsplash-image5.jpg"
        />
        <img
          className="unsplash-6  leading-[0] w-80 "
          src="./src/images/unsplash-image6.jpg"
        />
        <img
          className="unsplash-7  w-80 leading-[0]"
          src="./src/images/unsplash-image7.jpg"
        />
        <img
          className="unsplash-8 w-80 leading-[0]"
          src="./src/images/unsplash-dinner-image8.jpg"
        />
        <img
          className="unsplash-9 w-80 leading-[0] "
          src="./src/images/unsplash-image9.jpg"
        />
      </div>
      <div className="signup">
        <div className="logo">
          <img
            src="./src/images/splitmate-high-resolution-logo-transparent.png"
            alt="splitmate-logo"
          />
        </div>
        <div className="welcome-intro">
          <h1>Welcome to SplitMate!</h1>
          <p>
            Are you ready to simplify the way you split expenses with friends,
            family, or roommates? Experience the convenience of managing shared
            costs effortlessly.
          </p>
          <p>
            Join now and be among the first to try it out! Just fill out your
            name and email, it’s simple as that!
          </p>
          <div className="form">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
