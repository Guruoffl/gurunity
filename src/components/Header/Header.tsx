import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section - Logo and Search */}
        <div className="header-left">
          {/* Logo */}
          <div className="logo">
            <div className="logo-placeholder">
             <img src="/logo.jpg" alt="Gurunity Logo" className="logo-image" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 14.5L12.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>
        </div>

        {/* Right Section - Navigation */}
        <nav className="header-nav">
          <div className="nav-items">
            {/* Home */}
            <div className="nav-item active">
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2.5 7.5L10 2.5L17.5 7.5V16.25C17.5 16.5815 17.3683 16.8995 17.1339 17.1339C16.8995 17.3683 16.5815 17.5 16.25 17.5H3.75C3.4185 17.5 3.10054 17.3683 2.86612 17.1339C2.6317 16.8995 2.5 16.5815 2.5 16.25V7.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 17.5V10H12.5V17.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="nav-label">Home</span>
            </div>

            {/* My Network */}
            <div className="nav-item">
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5653 12.8512 11.7174 12.5 10.8333 12.5H4.16667C3.28261 12.5 2.43476 12.8512 1.80964 13.4763C1.18452 14.1014 0.833336 14.9493 0.833336 15.8333V17.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 9.16667C9.34095 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34095 2.5 7.5 2.5C5.65905 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65905 9.16667 7.5 9.16667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.1667 17.5V15.8333C19.1661 15.0948 18.9204 14.3773 18.4679 13.7936C18.0154 13.2099 17.3819 12.793 16.6667 12.6083"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3333 2.60833C14.0503 2.79192 14.6858 3.20892 15.1396 3.7936C15.5935 4.37827 15.8398 5.09736 15.8398 5.8375C15.8398 6.57764 15.5935 7.29673 15.1396 7.8814C14.6858 8.46608 14.0503 8.88308 13.3333 9.06667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="nav-label">My Network</span>
            </div>

            {/* Jobs */}
            <div className="nav-item">
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M13.3333 5.83333V4.16667C13.3333 3.72464 13.1577 3.30072 12.8452 2.98816C12.5326 2.67559 12.1087 2.5 11.6667 2.5H8.33333C7.89131 2.5 7.46738 2.67559 7.15482 2.98816C6.84226 3.30072 6.66667 3.72464 6.66667 4.16667V5.83333M13.3333 5.83333H16.6667C17.1087 5.83333 17.5326 6.00893 17.8452 6.32149C18.1577 6.63405 18.3333 7.05797 18.3333 7.5V15.8333C18.3333 16.2754 18.1577 16.6993 17.8452 17.0118C17.5326 17.3244 17.1087 17.5 16.6667 17.5H3.33333C2.89131 17.5 2.46738 17.3244 2.15482 17.0118C1.84226 16.6993 1.66667 16.2754 1.66667 15.8333V7.5C1.66667 7.05797 1.84226 6.63405 2.15482 6.32149C2.46738 6.00893 2.89131 5.83333 3.33333 5.83333H6.66667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="nav-label">Jobs</span>
            </div>

            {/* Messaging */}
            <div className="nav-item">
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18.3333 9.23333C18.3383 10.7102 17.9344 12.1618 17.1667 13.4333C16.2357 14.9687 14.8463 16.1592 13.2013 16.8013C11.5562 17.4434 9.73618 17.5016 8.05 16.9667C7.48333 16.7833 6.93333 16.55 6.41667 16.2667L1.66667 17.5L3.25 13.4333C2.75 12.6667 2.41667 11.8 2.25 10.9C2.08333 10 2.08333 9.08333 2.25 8.18333C2.58333 6.38333 3.5 4.75 4.91667 3.58333C6.33333 2.41667 8.15 1.75 10 1.75C11.85 1.75 13.6667 2.41667 15.0833 3.58333C16.5 4.75 17.4167 6.38333 17.75 8.18333C17.9167 8.53333 18 8.88333 18.0833 9.23333H18.3333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="nav-label">Messaging</span>
            </div>

            {/* Notifications */}
            <div className="nav-item">
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13115C12.5979 2.19349 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19349 6.46447 3.13115C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70803 18.3304 9.42117 18.2537 9.16816 18.1079C8.91514 17.9622 8.70485 17.7526 8.55835 17.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="nav-label">Notifications</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

