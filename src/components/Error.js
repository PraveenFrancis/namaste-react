import { useRouteError } from "react-router-dom"
const Error = () => {
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>This is error page</h1>
            <p>Page not found</p>
            <p>{err.status}</p>
        </div>
    )
}
export default Error