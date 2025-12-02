import { useParams, Link } from 'react-router-dom'

const VulnDetail = () => {
  const { id } = useParams()

  return (
    <div>
      <img 
        src={`https://picsum.photos/200/200?random=${id}`} 
        alt="운영체제 아이콘"/>

      <Link to="/">
        돌아가기
      </Link>
    </div>
  )
}

export default VulnDetail