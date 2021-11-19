import { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { axios } from '../../api'

interface Request {
  timestamp: string
  dorayaki: string
  total: number
  status: string
}

const RequestTable = () => {
  const [requests, setRequests] = useState<Request[]>([])

  async function acceptRequest(request: Request | Request[]) {
    try {
      await axios.post('/request', request)
    } catch (err) {
      console.log(err)
    }
  }

  async function rejectRequest(request: Request | Request[]) {
    try {
      await axios.post('/request', request)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    axios.get('/requests')
      .then(function (res) {
        setRequests(res.data)
      })  
  }, [acceptRequest, rejectRequest])

  return (
    <MaterialTable
      title="Requests"
      columns={[
        { title: 'Timestamp', field: 'timestamp' },
        { title: 'Dorayaki', field: 'recipe' },
        { title: 'Total', field: 'total' },
        { title: 'Status', field: 'status' },
      ]}
      data={requests}
      actions={[
        { icon: 'check', tooltip: 'Accept', onClick: (_, rowData) => acceptRequest(rowData) },
        { icon: 'clear', tooltip: 'Reject', onClick: (_, rowData) => rejectRequest(rowData)},
      ]}
      options={{
        sorting: true,
        search: true,
        actionsColumnIndex: -1,
      }}
    />
  )
}

export default RequestTable