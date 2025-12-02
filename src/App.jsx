import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VulnList from './pages/VulnList.jsx'
import VulnDetail from './pages/VulnDetail.jsx'
import { getVulnList } from './api/VulnApi.js'
import { useQuery } from '@tanstack/react-query'

function App() {
  const { data: vulns, isLoading, isError, error } = useQuery({
    queryKey: ['vulns'],
    queryFn: getVulnList
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<VulnList vulns={vulns} />} />
      <Route path="/vuln/:id" element={<VulnDetail vulns={vulns} />} />
    </Routes>
  )
}

export default App