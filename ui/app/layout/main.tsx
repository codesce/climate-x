import { Outlet } from "react-router"
import "./main.css"

export default function MainLayout() {
    return <>
        <header>
            <div className="contents">
                <h1>Climate X</h1>
            </div>
        </header>
        <main>
            <div className="contents">
                <Outlet/>
            </div>
        </main>
    </>
}