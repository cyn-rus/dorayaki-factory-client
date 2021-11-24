import React from 'react'
import { useHistory } from "react-router-dom"
import useContext from '../../context'

interface Props {
  children: React.ReactNode
}

const Template = ({ children }: Props) => {
  const history = useHistory()
  const { data, removeData } = useContext()

  function changePage(dest: string) {
    history.push(`/${dest}`)
  }

  function logOut() {
    removeData()
    history.push('/login')
  }

  return (
    <div className='template'>
      <nav className='navbar'>
        <div className='left-navbar'>
          <svg style={{width: '3em', height: '3em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden'}} 
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M82.9 593.8S45.3 763.1 318.2 830.7c114.7 32.2 335.5-27.7 385.4-124.2 44.6-82.3 24.4-169.7 11.7-170.8s-609.7-64.6-632.4 58.1z" fill="#C9751B" />
            <path d="M391.1 851.5c-27.8 0-53.8-2.9-76-9.2-63.7-15.8-116.1-38.5-155.9-67.5-32.4-23.6-56.6-51.5-71.8-82.7-25.5-52.5-17.1-96.6-16.3-100.7 6.2-32.8 42.2-55.4 110-69.2 50.8-10.3 120.1-15.7 206-15.9 134.4-0.4 272.8 11.9 326 17.2 1.7 0.2 2.7 0.3 3.1 0.3 6.2 0.5 11.4 4.7 15.5 12.2 7.8 14.4 12.1 42 11.1 70.2-0.9 25.9-6.7 65.3-28.7 105.9-43 83.1-201.1 139.4-323 139.4zM94.6 596.4c-0.2 0.8-8.1 40.3 15 86.7 31.1 62.4 104.2 109.5 211.4 136.1l0.4 0.1c52.9 14.8 133.4 9.5 210.3-13.8 79.7-24.2 140-63.2 161.3-104.4l0.1-0.2c21.2-39.1 25.8-76.9 26-101.7 0.2-28.4-5.4-46.1-8.4-51.7-53-5.3-190.3-17.4-323.5-17-84.3 0.2-152 5.4-201.3 15.4-55.7 11.3-87.2 28.7-91.2 50.2l-0.1 0.3z" />
            <path d="M132.1 650.1s11.9 122 245.5 137.5 315.3-141 315.3-141l-415.1-34.2-140.2 21.1-5.5 16.6z" fill="#6D2C16" />
            <path d="M409.5 800.6c-10.8 0-21.7-0.4-32.7-1.1-54.5-3.6-101.8-13.3-140.6-28.9-31.6-12.7-57.6-29.2-77.5-49.2-34.8-35.1-38.4-68.8-38.6-70.2l-0.2-2.5 8.6-26.1 148.8-22.4 1.4 0.1L711.9 636l-8.4 16c-0.9 1.7-22.3 42-73.5 80.4-29.9 22.4-63.9 39.6-101.1 51.1-36.8 11.4-76.9 17.1-119.4 17.1zM144.4 651c1.5 7.2 7.9 30.6 32.8 54.9 28 27.5 85.7 61.9 201.2 69.6 117 7.8 193.6-29.6 237.3-62.3 27.9-20.9 46.1-42.3 56.3-56.4l-393.8-32.5-131.5 19.8-2.3 6.9z" />
            <path d="M536.8 331.3s-170.4-71.5-395 69.9c-58.9 43.2-154.5 178 84.4 292.8 41 20.5 243.8 67 416.8-27.2s92.9-273.9-106.2-335.5z" fill="#FFFFFF" />
            <path d="M559.2 352.2s-170.4-71.5-395 69.9c-58.9 43.2-150.8 169.7 88.1 284.5 40.9 20.5 272 39 397.5-39.8 166.8-104.9 108.4-253.1-90.6-314.6z" fill="#C9751B" />
            <path d="M403.6 735.7c-6.5 0-12.8-0.1-18.9-0.3-80.2-2.5-141.8-19.7-163.7-30.7-52.6-25.3-92.9-53.4-119.7-83.6-24-27-37.6-55.9-40.4-85.9-5.7-61.9 36.2-116.1 73.9-143.8l0.7-0.5c52.2-32.9 105.9-57.1 159.6-72 43.1-12 86.4-17.9 128.5-17.8 68.6 0.2 111.6 16.5 117.3 18.8 58 18 108.3 46.5 145.5 82.3 37 35.7 58.8 76.3 62.9 117.3 6.3 62.9-29.4 118.9-100.5 157.7-86.8 47.4-178.3 58.5-245.2 58.5z m-255-324.6c-32.5 24-68.7 70.3-63.8 122 2.3 24.8 13.9 49 34.4 72.1 24.7 27.8 62.5 54 112.3 77.9l0.2 0.1c19.2 9.6 77.9 25.8 153.8 28.2 64.9 2 161.3-5.9 251.8-55.2 62.1-33.8 93.4-81.5 88.1-134.2-3.5-35.3-22.8-70.7-55.6-102.4-34.6-33.4-81.8-59.9-136.5-76.8l-0.6-0.2-0.5-0.2c-1-0.4-42.6-17.2-109.9-17.2h-0.1c-62.5 0.1-160.7 15-273.6 85.9z" />
            <path d="M474.2 235.9s-32.3-7.9-43.9 43.8c-11.8 52.8 67.8 370.9 260.5 509.9 50.2 33.3 144.9-2.5 186.3-57.4s-290.6-482-402.9-496.3z" fill="#C9751B" />
            <path d="M738.9 814.4c-21 0-39.9-5-54.7-14.8l-0.4-0.3c-45.7-33-88.3-78-126.5-133.8-32-46.8-60.5-100.1-84.5-158.6-42.2-102.8-61-199.3-54.1-229.8 5.1-22.8 14.7-38.6 28.4-47.1 13.2-8.2 25.6-6.6 29.2-5.9 64.4 8.7 174.8 129.1 219.3 180.5 83.9 96.8 158.3 204.8 185.2 268.7 13.7 32.4 15.6 53.5 6 66.2-21.5 28.6-57.3 53.2-95.7 65.9-18.2 6-35.9 9-52.2 9z m-41.2-34.7c20.1 13.2 51.4 14.3 85.9 2.9 33.9-11.2 65.4-32.8 84.1-57.6 0.2-0.3 5.6-8-8.9-42.4-26-61.8-98.9-167.2-181.3-262.3-87.9-101.5-166.3-167.6-204.7-172.5l-1-0.1-0.3-0.1c-2.8-0.5-21.1-2.1-29.4 34.8-5.1 22.9 10.8 112.8 52.9 215.5 36.1 87.9 100.6 208.1 202.7 281.8z" />
            <path d="M473.5 287.6c25.4 81.8 74.1 273.4 222.3 437.3 20.9 23.1 49.2 17.3 53.4-0.2 8.5-35.9-18.1-108.9-20.3-122.7-0.3-1.7-0.7-3.4-1.4-5-10.7-25.9-54.6-272.1-223.1-334.2-18.3-6.8-36.9 5.4-30.9 24.8z" fill="#6D2C16" />
            <path d="M726.6 752.1c-14 0-28.5-6.9-39.6-19.2-59.6-65.9-110.3-144.3-150.7-233-33.8-74.4-54.1-141.9-67.6-186.7-2.4-8-4.6-15.5-6.7-22.1-3.8-12.4-0.9-24.7 7.8-33 9.7-9.2 24.9-11.8 38.8-6.6 65.1 24 119.8 76.8 162.6 156.9 34.3 64.3 52 129.1 61.6 164 2.5 9.2 4.7 17.2 5.9 20 1 2.5 1.8 5.1 2.2 7.7 0.4 2.5 2.4 9.4 4.5 16.7 8.6 30 22.9 80.1 15.6 110.6-2.7 11.4-11.7 20.2-24.1 23.3-3.4 1-6.8 1.4-10.3 1.4zM485 284.1c2.1 6.7 4.4 14.3 6.8 22.3 27.5 91.6 78.7 262 213 410.5 9.4 10.4 19.7 12.4 26.1 10.8 1.7-0.4 5.8-1.9 6.7-5.6 5.8-24.4-8-72.6-15.4-98.5-2.7-9.4-4.5-15.6-5.1-19.5-0.1-0.8-0.3-1.6-0.7-2.3-1.7-4.2-3.8-11.6-6.8-22.8-17.1-62.6-69.2-253.1-209.3-304.7-6.2-2.3-11.5-0.9-14 1.5-2 1.7-2.5 4.6-1.3 8.3z" />
            <path d="M498.1 213.5s-18-1.8-23.9 22.4c-3.9 16.3 51.7 50 102.6 101.9 33.6 34.3 59 76.3 75 122.4 26.1 75.5 56.6 153.4 85.8 260.3 6 21.9 22.4 39 43.5 45 37.4 10.5 93.8 1.5 138.3-69.6 62.6-100 9.2-207.9-56.2-289.8-10.2-12.8-21.2-24.8-33-36-37.2-35.3-151-147.8-332.1-156.6z" fill="#C9751B" />
            <path d="M807.7 781.1c-10.1 0-20.2-1.3-29.8-4.1-24.9-7-44.7-27.4-51.8-53.4-22.2-81.4-44.8-144.6-66.6-205.7-6.6-18.6-12.9-36.1-19-53.8-15.5-44.8-40.5-85.6-72.2-118-20.1-20.5-40.7-37.9-58.8-53.2-32.9-27.8-51-43-46.9-60 6.5-26.8 26.4-32.4 36.4-31.5 77.5 3.8 152 26.6 221.4 67.7 56.4 33.4 94.8 70 115.4 89.7l2.7 2.6c12.2 11.6 23.7 24.1 34.1 37.2 39.6 49.5 65.9 97.4 78.3 142.4 16.2 58.6 9 112.9-21.3 161.2-21.6 34.5-47.7 58.1-77.5 70.2-14.4 5.8-29.5 8.7-44.4 8.7zM486.2 237.5c0.6 1.3 2.8 4.9 10.3 12.2 7.2 7 17 15.3 28.4 24.9 17.6 14.9 39.5 33.4 60.5 54.7 34.2 34.9 61.1 78.8 77.7 126.9 6.1 17.6 12.3 35.1 18.9 53.6 20.9 58.6 44.6 125.1 67.1 207.4 4.9 17.8 18.3 31.9 35.1 36.6 18.8 5.3 39.6 3.9 58.7-3.8 25-10.1 47.3-30.5 66.1-60.7 48.1-76.9 29.4-169.7-55.4-275.9-9.7-12.2-20.5-23.9-31.9-34.8L819 376c-40.6-38.7-149-142.2-321.5-150.5h-0.4c-2 0-7.9 1-10.9 12z" />
            <path d="M320.2 662.6c-10.3-3.3-21.3-5.8-29.6-10.9" fill="#C9751B" />
            <path d="M320.2 672.6c-1 0-2-0.1-3-0.5-2.1-0.7-4.3-1.3-6.4-1.9-8.7-2.6-17.7-5.3-25.5-10-4.7-2.9-6.2-9.1-3.3-13.8 2.9-4.7 9.1-6.2 13.8-3.3 5.5 3.4 12.9 5.6 20.7 7.9 2.2 0.7 4.5 1.3 6.7 2 5.3 1.7 8.2 7.3 6.5 12.5-1.3 4.4-5.2 7.1-9.5 7.1z" />
            <path d="M521.8 645.3c-63 33.6-115.8 30.6-161.5 24.6" fill="#C9751B" />
            <path d="M410.3 683.8c-18.2 0-35.3-1.8-51.3-3.9-5.5-0.7-9.3-5.8-8.6-11.2 0.7-5.5 5.8-9.3 11.2-8.6 43.2 5.7 94.4 9.1 155.5-23.5 4.9-2.6 10.9-0.8 13.5 4.1 2.6 4.9 0.8 10.9-4.1 13.5-43.3 23.1-81.8 29.6-116.2 29.6z" />
            <path d="M855.1 702.8c-6.1 6.7-10.4 10.6-18.3 17.4" fill="#C9751B" />
            <path d="M836.8 730.2c-2.8 0-5.6-1.2-7.6-3.5-3.6-4.2-3.1-10.5 1-14.1 8-6.9 11.8-10.4 17.4-16.6 3.7-4.1 10-4.4 14.1-0.7s4.4 10 0.7 14.1c-6.4 7-10.9 11.1-19.2 18.3-1.7 1.7-4 2.5-6.4 2.5z" />
            <path d="M895.2 580.3s23.8 39.7-20.1 98" fill="#C9751B" />
            <path d="M875.1 688.3c-2.1 0-4.2-0.7-6-2-4.4-3.3-5.3-9.6-2-14 39.4-52.3 19.7-86.5 19.5-86.8-2.8-4.7-1.3-10.9 3.4-13.7 4.7-2.8 10.9-1.3 13.7 3.4 1.1 1.9 26.8 46.2-20.7 109.1-1.9 2.6-4.9 4-7.9 4z" />
          </svg>
          <h1 className='navbar-recipe' onClick={() => changePage('recipes')}>Recipes</h1>
          <h1 className='ml-2 navbar-material' onClick={() => changePage('materials')}>Materials</h1>
          <h1 className='ml-2 navbar-request' onClick={() => changePage('requests')}>Requests</h1>
        </div>
        <div className='right-navbar'>
          <h1 className='navbar-logout' onClick={logOut}>Log Out</h1>
        </div>
      </nav>
      {/* <h2 className='username'>Hello, {data}!</h2> */}
      {children}
    </div>
  )
}

export default Template