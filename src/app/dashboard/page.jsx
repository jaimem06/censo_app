import { all_person } from "@/hooks/service_persona"
import Menu from "../components/menu/menu"

export default function Dashboard() {

  all_person().then((info) => {
    console.log(info);
  });

  return (
    <div>
      <Menu></Menu>
      <main className="form-signin text-center mt-5">
        <h1> BIENVENIDO</h1>
      </main>
    </div>
  )
}