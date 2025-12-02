import { useParams, Link } from 'react-router-dom'

const defaultVulns = [
  {
    "id": "692e36f693dff2a4871079d8",
    "number": "CVE-2024-3094",
    "title": "XZ Utils Supply Chain Attack (Backdoor)",
    "os": "Linux",
    "description": "리눅스 압축 라이브러리인 liblzma에 악성 백도어가 심어져, 특정 조건 하에 SSH 인증을 우회하고 원격에서 시스템 제어권을 탈취할 수 있는 치명적인 공급망 공격입니다.",
    "writeup": "https://www.openwall.com/lists/oss-security/2024/03/29/4",
    "poc": "https://github.com/amlweems/xzbot"
  },
  {
    "id": "692e36f693dff2a4871079d9",
    "number": "CVE-2024-1086",
    "title": "Linux Kernel Netfilter Use-After-Free LPE",
    "os": "Linux",
    "description": "리눅스 커널의 nf_tables 컴포넌트에서 발생하는 Use-After-Free 취약점으로, 로컬 공격자가 이를 악용하여 루트(Root) 권한을 획득할 수 있습니다.",
    "writeup": "https://pwning.tech/nftables/",
    "poc": "https://github.com/Notselwyn/CVE-2024-1086"
  },
  {
    "id": "692e36f693dff2a4871079da",
    "number": "CVE-2025-38678",
    "title": "Vulnerability in 416baaa9-dc9f-4396-8d5f-8c081fb06d67",
    "os": "Linux",
    "description": "In the Linux kernel, the following vulnerability has been resolved:\n\nnetfilter: nf_tables: reject duplicate device on updates\n\nA chain/flowtable update with duplicated devices in the same batch is\npossible. Unfortunately, netdev event path only removes the first\ndevice that is found, leaving unregistered the hook of the duplicated\ndevice.\n\nCheck if a duplicated device exists in the transaction batch, bail out\nwith EEXIST in such case.\n\nWARNING is hit when unregistering the hook:\n\n [49042.221275] WARNING: CPU: 4 PID: 8425 at net/netfilter/core.c:340 nf_hook_entry_head+0xaa/0x150\n [49042.221375] CPU: 4 UID: 0 PID: 8425 Comm: nft Tainted: G S                  6.16.0+ #170 PREEMPT(full)\n [...]\n [49042.221382] RIP: 0010:nf_hook_entry_head+0xaa/0x150",
    "writeup": "https://git.kernel.org/stable/c/3f358a66a04513311668ea4b40f5064e253d8386",
    "poc": null
  },
]

const VulnDetail = ({ vulns = defaultVulns }) => {
  const { id } = useParams()
  const vuln = vulns.find(v => v.id === id)

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