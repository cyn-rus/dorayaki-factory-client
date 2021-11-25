import { Redirect } from "react-router-dom"
import { IsAuth } from "../../helper"
import { Template, RequestTable } from "../../components"

const Requests = () => {
  const auth = IsAuth()

  return (
    <>
      {!auth && auth !== undefined && <Redirect to='/login' />}
      <Template>
        <div className='request-page'>
          <RequestTable />
        </div>
      </Template>
    </>
  )
}

export default Requests