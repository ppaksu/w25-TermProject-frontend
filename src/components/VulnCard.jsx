import { Link } from 'react-router-dom'

export default function VulnCard({ vuln }) {
  return (
    <Link 
    to={`/vuln/${vuln.id}`} 
    className="cursor-pointer bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
      <img 
        src={`https://picsum.photos/100/100?random=${vuln.id}`} 
        alt={`${vuln.number}`}
        className="w-32 h-32 mb-2"
      />
      <div>{vuln.number}</div>
      <div>{vuln.os}</div>
    </Link>
  )
}