import { Outlet } from "react-router-dom"
import Footer from "../Common/Footer"
import Header from "../Common/Header"

const UserLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      {/* Main Content */}
      <main>
        <Outlet></Outlet>
      </main>
      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

export default UserLayout