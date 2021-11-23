import { useHistory } from "react-router-dom"
import { isAuth } from "../../helper"
import { Template, RequestTable } from "../../components"

const Requests = () => {
  const history = useHistory()
  const auth = isAuth()

  return (
    <>
      {!auth && history.push('/login')}
      <Template>
        <div className='request-page'>
          <RequestTable />
        </div>
      </Template>
    </>
  )
}

export default Requests