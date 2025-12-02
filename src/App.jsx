import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VulnList from './pages/VulnList.jsx'
import VulnDetail from './pages/VulnDetail.jsx'

function App() {
  const [vulns, setVulns] = useState([])

  useEffect(() => {
    const fetchVulns = async () => {
      try {
        const data = await getVulnList()
        setVulns(data)
      } catch (err) {
        console.error("Failed to fetch vuln data:", err)
      }
    }
    fetchVulns()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<VulnList vulns={vulns} />} />
      <Route path="/vuln/:id" element={<VulnDetail vulns={vulns} />} />
    </Routes>
  )
}

export default App