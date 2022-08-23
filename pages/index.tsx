import Layout from '@/components/Layouts/Layout'
import { userSelector ,resetUsername} from '@/store/slices/userSlices'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Props = {}

export default function index({}: Props) {

  const user = useSelector(userSelector)
  const dispatch = useDispatch();

  return (
    <Layout>
      <div>jump{user.username}</div>
      <button onClick={()=>dispatch(resetUsername({}))}>reset</button>
      </Layout>
  )
}