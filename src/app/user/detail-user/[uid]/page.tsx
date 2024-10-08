interface DetailUserPageProps {
  params: {
    uid: string
  }
}

const DetailUserPage: React.FC<DetailUserPageProps> = ({ params }) => {
  const { uid } = params
  return (
    <div className="detail-user-page">
      <h1>DetailUserPage</h1>
      <p>User ID: {uid}</p>
    </div>
  )
}

export default DetailUserPage
