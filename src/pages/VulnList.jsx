import { Link } from 'react-router-dom'
import VulnCard from '../components/VulnCard.jsx'

export default function VulnList({ vulns }) {
  return (
    <>
      {vulns.map(vuln => (
        <VulnCard key={vuln.id} vuln={vuln} />
      ))}
    </>
  )
}