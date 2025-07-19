import React from 'react';
import './PostCreator.css';

const PostCreator: React.FC = () => {
  return (
    <div className="post-creator card">
      <div className="post-creator-header">
        <div className="post-input-container">
          <button className="post-input-button">
            Start a post...
          </button>
        </div>
      </div>
      
      <div className="post-actions">
        <button className="action-button">
          <div className="action-icon photo-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4.16667 2.5H15.8333C16.75 2.5 17.5 3.25 17.5 4.16667V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 8.33333C8.42047 8.33333 9.16667 7.58714 9.16667 6.66667C9.16667 5.74619 8.42047 5 7.5 5C6.57953 5 5.83333 5.74619 5.83333 6.66667C5.83333 7.58714 6.57953 8.33333 7.5 8.33333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 12.5L13.3333 8.33333L4.16667 17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="action-text">Photo</span>
        </button>
        
        <button className="action-button">
          <div className="action-icon video-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M13.3333 2.5H6.66667C3.90524 2.5 1.66667 4.73858 1.66667 7.5V12.5C1.66667 15.2614 3.90524 17.5 6.66667 17.5H13.3333C16.0948 17.5 18.3333 15.2614 18.3333 12.5V7.5C18.3333 4.73858 16.0948 2.5 13.3333 2.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33333 7.5L12.5 10L8.33333 12.5V7.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="action-text">Video</span>
        </button>
        
        <button className="action-button">
          <div className="action-icon event-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15.8333 3.33333H4.16667C3.24619 3.33333 2.5 4.07953 2.5 5V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V5C17.5 4.07953 16.7538 3.33333 15.8333 3.33333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 1.66667V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66667 1.66667V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 8.33333H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="action-text">Event</span>
        </button>
        
        <button className="action-button">
          <div className="action-icon article-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M11.6667 1.66667H5C4.55797 1.66667 4.13405 1.84226 3.82149 2.15482C3.50893 2.46738 3.33333 2.89131 3.33333 3.33333V16.6667C3.33333 17.1087 3.50893 17.5326 3.82149 17.8452C4.13405 18.1577 4.55797 18.3333 5 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V6.66667L11.6667 1.66667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6667 1.66667V6.66667H16.6667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 10.8333H6.66667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 14.1667H6.66667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33333 7.5H6.66667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="action-text">Write article</span>
        </button>
      </div>
    </div>
  );
};

export default PostCreator;

