import Layout from '@/components/Layouts/Layout'
import { userSelector } from '@/store/slices/userSlices'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

export default function index({}: Props) {
  const user = useSelector(userSelector)
  return (
    <Layout><div>jump{user.username}</div></Layout>
  )
}