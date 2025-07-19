import React from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  sidebar: React.ReactNode;
  rightSidebar: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  header,
  sidebar,
  rightSidebar,
}) => {
  return (
    <div className="main-layout">
      {/* Header */}
      <header className="main-header">
        {header}
      </header>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Left Sidebar */}
            <aside className="left-sidebar">
              {sidebar}
            </aside>

            {/* Main Feed */}
            <main className="main-feed">
              {children}
            </main>

            {/* Right Sidebar */}
            <aside className="right-sidebar">
              {rightSidebar}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

