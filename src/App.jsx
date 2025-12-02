import { Routes, Route } from 'react-router-dom'
import VulnList from './pages/VulnList.jsx'
import VulnDetail from './pages/VulnDetail.jsx'

const vulns = [
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<VulnList vulns={vulns} />} />
      <Route path="/vuln/:id" element={<VulnDetail vulns={vulns} />} />
    </Routes>
  )
}

export default App