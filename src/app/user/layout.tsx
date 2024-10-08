interface UserLayoutProps {
  children: React.ReactNode
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="user-layout">
      <h1>User Layout</h1>
      {children}
    </div>
  )
}

export default UserLayout
