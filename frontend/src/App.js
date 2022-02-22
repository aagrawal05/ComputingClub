import { Editor } from "./pages/js/Editor"
import { Join } from "./pages/js/Join"
import { Admin } from "./pages/js/Admin"

export default function App(){
  switch (window.location.pathname) {
    case "/":
      return (<Join/>)
    case "/admin":
      return (<Admin/>)
/*    case "/users":
        return (<Users/>)
      case "/submissions": --> problem number and stuff in url
        return (<Submissions/>)
      case "/profile/":
        return (<Profile/>)
      case "/GodDog":
        return (<GodDog/>)*/

    case "/game":
      return(<Editor/>)
  }
}