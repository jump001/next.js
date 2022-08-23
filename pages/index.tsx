import Layout from '@/components/Layouts/Layout'
import { userSelector ,resetUsername} from '@/store/slices/userSlices'
import React from 'react'
import {  useSelector } from 'react-redux'
import {useAppDispatch} from "@/store/store"

type Props = {}

export default function index({}: Props) {

  const user = useSelector(userSelector)
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div>jump{user.username}</div>
      <button onClick={()=>dispatch(resetUsername({newUsername:"jjjj"}))}>reset</button>
      </Layout>
  )
}