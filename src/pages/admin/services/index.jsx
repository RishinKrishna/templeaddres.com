import Layout from '@/Layout/admin';
import TempleInfo from '@/components/admin/TempleInfo';
import React from 'react'

const Services = () => {
  return (
    <div className='bg-white p-3 rounded-lg'>
        <TempleInfo/>
    </div>
  )
}

Services.getLayout = (page) => <Layout>{page}</Layout>;

export default Services