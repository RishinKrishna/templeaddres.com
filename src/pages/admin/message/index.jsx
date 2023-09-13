import Layout from '@/Layout/admin';
import React from 'react'

const Message = () => {
  return (
    <div>Message</div>
  )
}

Message.getLayout = (page) => <Layout>{page}</Layout>;

export default Message