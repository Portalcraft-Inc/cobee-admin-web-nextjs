interface DetailGroupPageProps {
  params: {
    gid: string
  }
}

const DetailGroupPage: React.FC<DetailGroupPageProps> = ({ params }) => {
  const { gid } = params
  return (
    <div className="detail-group-page">
      <h1>DetailGroupPage</h1>
      <p>Group ID: {gid}</p>
    </div>
  )
}

export default DetailGroupPage
