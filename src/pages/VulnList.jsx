import { Link } from 'react-router-dom'
import VulnCard from '../components/VulnCard.jsx'

export default function VulnList({ vulns }) {
  return (
    <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {vulns.map(vuln => (
            <VulnCard key={vuln.id} vuln={vuln} />
        ))}
        </div>
    </div>
  )
}