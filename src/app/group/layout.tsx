import React from 'react'

interface GroupLayoutProps {
  children: React.ReactNode
}

const GroupLayout: React.FC<GroupLayoutProps> = ({ children }) => {
  return (
    <div className="group-layout">
      <h1>Group Layout</h1>
      {children}
    </div>
  )
}

export default GroupLayout
