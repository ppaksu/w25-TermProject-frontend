import { Link } from 'react-router-dom'

export default function VulnCard({ vuln }) {
  return (
    <Link 
    to={`/vuln/${vuln.id}`} 
    className="cursor-pointer bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
        <div className="flex-shrink-0 mr-4">
            <img 
            src={`https://picsum.photos/100/100?random=${vuln.id}`} //여기에 os 아이콘 넣기
            alt={`${vuln.number}`}
            className="w-32 h-32 mb-2"
            />
        </div>
        <div className="flex-grow min-w-0">
            <div className="text-lg font-semibold text-gray-800 truncate">{vuln.number}</div>
            <div className="text-sm text-gray-500 truncate">{vuln.os}</div>
        </div>
    </Link>
  )
}