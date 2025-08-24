export const metadata = {
  title: "Clients | Myleading Campus ERP",
  description:
    "Discover the schools and educational institutions that trust Myleading Campus ERP for their school management needs. See how our software empowers clients to streamline operations and enhance communication.",
};

import React from 'react'
import Clientbanner from '../../components/clients/Clientbanner'
import ClienrtSection2 from '../../components/clients/ClienrtSection2'

const page = () => {
  return (
    <>
      {/* bannerSec */}
      <Clientbanner />
      {/* section2 */}
      <ClienrtSection2 />
    </>
  )
}

export default page