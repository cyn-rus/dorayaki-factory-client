import { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { axios } from '../../api'
import { RequestType } from '../../types'
import { capitalize } from '../../helper'
import { getGeolocation } from '../../api/geolocation'

const RequestTable = () => {
  const [requests, setRequests] = useState<RequestType[]>([])
  const [requestsHandled, setRequestsHandled] = useState(0)
  const [IP, setIP] = useState('')

  async function acceptRequest(request: RequestType) {
    try {
      await axios.post('/acceptRequest', {
        request_name: request.request_name,
        current_timestamp: new Date().toISOString(),
        ip: IP,
        endpoint: request.endpoint,
      })
      setRequestsHandled(requestsHandled+1)
    } catch (err) {
      console.log(err)
    }
  }

  async function rejectRequest(request: RequestType) {
    try {
      await axios.post('/rejectRequest', {
        request_name: request.request_name
      })
      setRequestsHandled(requestsHandled+1)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function getIP() {
      const ip = await getGeolocation()
      setIP(ip)
    }
    getIP()
  }, [])

  useEffect(() => {
    axios.get('/getAllRequest')
      .then(function (res) {
        const data = res.data
        data.forEach(function (req: RequestType) {
          req.nama_dorayaki = capitalize(req.nama_dorayaki) as string
          req.timestamp = new Date(req.timestamp).toLocaleString()
          if (req.status === 220) {
            req.status = 'Rejected'
          } else if (req.status === 320) {
            req.status = 'Pending'
          } else if (req.status === 420) {
            req.status = 'Accepted'
          }
        })
        setRequests(data)
      })  
  }, [requestsHandled])

  return (
    <MaterialTable
      title="Requests"
      columns={[
        { title: 'Timestamp', field: 'timestamp' },
        { title: 'Dorayaki', field: 'nama_dorayaki' },
        { title: 'Total', field: 'jumlah' },
        { title: 'Status', field: 'status' },
      ]}
      data={requests}
      actions={[
        rowData => ({
          icon: 'check',
          tooltip: 'Accept Request',
          onClick: (_, rowData) => acceptRequest(rowData as RequestType),
          disabled: rowData.status !== 'Pending'
        }),
        rowData => ({
          icon: 'clear',
          tooltip: 'Reject Request',
          onClick: (_, rowData) => rejectRequest(rowData as RequestType),
          disabled: rowData.status !== 'Pending'
        }),
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