import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/layout";
import mail from "./assets/mail.png"
import number from "./assets/number.png";
import Nav from "./components/nav/nav";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/signUpPage";
import DetailsPage from "./pages/DetailsPage";
// import EmailPage from "./pages/VerificationPage";
import VerifiedPage from "./pages/VerifiedPage";
import VerificationPage from "./pages/VerificationPage";

function App() {
  const location = useLocation();
  console.log(location);

  const str = location.pathname;

  let content = {
    halfName: "",
    fullName: "",
    altHalfName: "",
    altFullName: "",
    logo: '',
  };

  if (str.includes("email")) {
    content = {
      halfName: "Email",
      fullName: "Email Address",
      altHalfName: "Phone",
      altFullName: "Phone Number",
      logo: mail,
    };
    console.log("The word is present.");
  }
  if (str.includes("phone")) {
    content = {
      halfName: "Phone",
      fullName: "Phone Number",
      altHalfName: "Email",
      altFullName: "Email Address",
      logo: number,
    };
    console.log("The number is present.");
  }
  console.log(content)

  return (
    <>
      <Layout>
        <Nav />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup/signup-details/" element={<DetailsPage />} />
          <Route
            path={`/signup/signup-details/${content.halfName.toLowerCase()}`}
            element={<VerificationPage content={content} />}
          />
          {/* <Route path="/signup/signup-details/phone" element={<VerificationPage content={content} />} /> */}
          <Route
            path={`/signup/signup-details/${content.halfName.toLowerCase()}/verified`}
            element={<VerifiedPage content={content} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
