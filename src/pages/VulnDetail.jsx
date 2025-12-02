import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getVulnDetail } from '../api/VulnApi.js'

const VulnDetail = ({ vulns = defaultVulns }) => {
  const { id } = useParams()
    const { data: vuln, isLoading, isError, error } = useQuery({
    queryKey: ['vuln', id],
    queryFn: () => getVulnDetail(id),
    enabled: !!id,
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  if (!vuln) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">취약점을 찾을 수 없습니다.</p>
          <Link to="/" className="text-indigo-600 hover:underline">리스트로 돌아가기</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full">

        <div className="flex justify-center mb-6">
          <img 
            src={`https://picsum.photos/192/192?random=${vuln.id}`} //여기에 os 아이콘 넣기
            alt={`${vuln.os} 운영체제 아이콘`}
            className="w-32 h-32 object-cover rounded-2xl shadow-xl border-4 border-indigo-100 transform hover:scale-105 transition duration-300"
          />
        </div>

        <div className="text-center mb-8 border-b pb-4 border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1 leading-tight">
            {vuln.number}
          </h1>
          <p className="text-xl font-medium text-indigo-600 mb-3">
            {vuln.os}
          </p>
          <div className="flex gap-4 justify-center mt-3">
            <a
              href={vuln.writeup ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-150"
            >
              Write-up
            </a>

            {vuln.poc ? (
              <a
                href={vuln.poc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-150"
              >
                PoC
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center px-5 py-2 bg-gray-200 text-gray-500 rounded-full shadow-md cursor-not-allowed"
              >
                PoC 없음
              </button>
            )}
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="text-gray-600 whitespace-pre-wrap leading-relaxed italic">
              <p>취약점 요약: {vuln.title}</p>
              <div></div>
              <p>시나리오 요약: {vuln.description}</p>
              </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
            리스트
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default VulnDetail