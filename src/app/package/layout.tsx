interface PackageLayoutProps {
  children: React.ReactNode
}

const PackageLayout: React.FC<PackageLayoutProps> = ({ children }) => {
  return (
    <div className="package-layout">
      <h1>Package Layout Page</h1>
      {children}
    </div>
  )
}

export default PackageLayout
