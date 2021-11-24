import { useHistory } from "react-router-dom"
import { IsAuth } from "../../helper"
import { Template, RequestTable } from "../../components"

const Requests = () => {
  const history = useHistory()
  const auth = IsAuth()

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