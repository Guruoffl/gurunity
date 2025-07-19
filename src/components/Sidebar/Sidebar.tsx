import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Profile Card */}
      <div className="profile-card card">
        <div className="profile-header">
          <div className="profile-cover"></div>
          <div className="profile-avatar">
            <img
              src="guru.jpg"
              alt="Profile"
              className="avatar-image"
            />
          </div>
        </div>
        
        <div className="profile-info">
          <h3 className="profile-name">GURU C</h3>
          <p className="profile-title">JUNIOR PYTHON DEVELOPER</p>
          
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-label">Profile viewers</span>
              <span className="stat-value">127</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Post impressions</span>
              <span className="stat-value">1,234</span>
            </div>
          </div>
          
          <div className="premium-section">
            <div className="premium-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1L10.09 5.26L15 6L11 9.74L11.91 14.5L8 12.27L4.09 14.5L5 9.74L1 6L5.91 5.26L8 1Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="premium-text">Access exclusive tools & insights</span>
            <a href="#" className="premium-link">Try Premium for free</a>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity card">
        <div className="section-header">
          <h4>Recent</h4>
        </div>
        
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 5V8L10.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="activity-text">React Development</span>
          </div>
          
          <div className="activity-item">
            <div className="activity-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 5V8L10.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="activity-text">TypeScript</span>
          </div>
          
          <div className="activity-item">
            <div className="activity-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 5V8L10.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="activity-text">Frontend Development</span>
          </div>
          
          <div className="activity-item">
            <div className="activity-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2L10.09 6.26L15 7L11 10.74L11.91 15.5L8 13.27L4.09 15.5L5 10.74L1 7L5.91 6.26L8 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="activity-text">JavaScript Developers</span>
          </div>
        </div>
        
        <div className="show-more">
          <span>Show more</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Groups */}
      <div className="groups-section card">
        <div className="section-header">
          <h4>Groups</h4>
        </div>
        
        <div className="groups-list">
          <div className="group-item">
            <div className="group-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M11 7C12.1046 7 13 6.10457 13 5C13 3.89543 12.1046 3 11 3C9.89543 3 9 3.89543 9 5C9 6.10457 9.89543 7 11 7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 9V13H13V9C13 8.46957 12.7893 7.96086 12.4142 7.58579C12.0391 7.21071 11.5304 7 11 7H9C8.46957 7 7.96086 7.21071 7.58579 7.58579C7.21071 7.96086 7 8.46957 7 9V13H9V9H11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 9V13H7V9C7 8.46957 6.78929 7.96086 6.41421 7.58579C6.03914 7.21071 5.53043 7 5 7H3C2.46957 7 1.96086 7.21071 1.58579 7.58579C1.21071 7.96086 1 8.46957 1 9V13H3V9H5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="group-text">React Developers Community</span>
          </div>
          
          <div className="group-item">
            <div className="group-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M11 7C12.1046 7 13 6.10457 13 5C13 3.89543 12.1046 3 11 3C9.89543 3 9 3.89543 9 5C9 6.10457 9.89543 7 11 7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 9V13H13V9C13 8.46957 12.7893 7.96086 12.4142 7.58579C12.0391 7.21071 11.5304 7 11 7H9C8.46957 7 7.96086 7.21071 7.58579 7.58579C7.21071 7.96086 7 8.46957 7 9V13H9V9H11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 9V13H7V9C7 8.46957 6.78929 7.96086 6.41421 7.58579C6.03914 7.21071 5.53043 7 5 7H3C2.46957 7 1.96086 7.21071 1.58579 7.58579C1.21071 7.96086 1 8.46957 1 9V13H3V9H5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="group-text">Software Engineering</span>
          </div>
        </div>
        
        <div className="show-more">
          <span>Show all groups</span>
        </div>
      </div>

      {/* Events */}
      <div className="events-section card">
        <div className="section-header">
          <h4>Events</h4>
          <div className="add-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3V13M3 8H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div className="events-list">
          <div className="event-item">
            <div className="event-date">
              <span className="event-day">25</span>
              <span className="event-month">JUL</span>
            </div>
            <div className="event-info">
              <h5 className="event-title">React Conference 2024</h5>
              <p className="event-details">Online Event</p>
            </div>
          </div>
        </div>
        
        <div className="show-more">
          <span>Show all events</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

