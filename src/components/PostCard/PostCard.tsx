import React from 'react';
import './PostCard.css';

interface PostCardProps {
  author: {
    name: string;
    title: string;
    avatar: string;
    isFollowing?: boolean;
  };
  content: {
    text: string;
    image?: string;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  timeAgo: string;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  content,
  engagement,
  timeAgo,
}) => {
  return (
    <div className="post-card card">
      {/* Post Header */}
      <div className="post-header">
        <div className="author-info">
          <div className="author-avatar">
            <img
              src={author.avatar}
              alt={author.name}
              className="avatar-image"
            />
          </div>
          <div className="author-details">
            <h4 className="author-name">
              {author.name}
              {author.isFollowing && (
                <span className="following-badge">• Following</span>
              )}
            </h4>
            <p className="author-title">{author.title}</p>
            <p className="post-time">{timeAgo}</p>
          </div>
        </div>
        
        <div className="post-menu">
          <button className="menu-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 10.8333C10.4603 10.8333 10.8333 10.4603 10.8333 10C10.8333 9.53976 10.4603 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10C9.16667 10.4603 9.53976 10.8333 10 10.8333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4603 16.6667 10C16.6667 9.53976 16.2936 9.16667 15.8333 9.16667C15.3731 9.16667 15 9.53976 15 10C15 10.4603 15.3731 10.8333 15.8333 10.8333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.16667 10.8333C4.62691 10.8333 5 10.4603 5 10C5 9.53976 4.62691 9.16667 4.16667 9.16667C3.70643 9.16667 3.33333 9.53976 3.33333 10C3.33333 10.4603 3.70643 10.8333 4.16667 10.8333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="post-content">
        <p className="post-text">{content.text}</p>
        {content.image && (
          <div className="post-image">
            <img src={content.image} alt="Post content" />
          </div>
        )}
      </div>

      {/* Engagement Stats */}
      <div className="engagement-stats">
        <div className="stats-left">
          <div className="reaction-icons">
            <div className="reaction-icon like-icon">👍</div>
            <div className="reaction-icon love-icon">❤️</div>
            <div className="reaction-icon celebrate-icon">🎉</div>
          </div>
          <span className="stats-text">{engagement.likes} reactions</span>
        </div>
        
        <div className="stats-right">
          <span className="stats-text">{engagement.comments} comments</span>
          <span className="stats-separator">•</span>
          <span className="stats-text">{engagement.shares} shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="post-actions">
        <button className="action-btn">
          <div className="action-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(90 10 10)"
              />
              <path
                d="M3.33333 8.33333C3.33333 7.89131 3.50893 7.46738 3.82149 7.15482C4.13405 6.84226 4.55797 6.66667 5 6.66667H15C15.442 6.66667 15.866 6.84226 16.1785 7.15482C16.4911 7.46738 16.6667 7.89131 16.6667 8.33333V15C16.6667 15.442 16.4911 15.866 16.1785 16.1785C15.866 16.4911 15.442 16.6667 15 16.6667H5C4.55797 16.6667 4.13405 16.4911 3.82149 16.1785C3.50893 15.866 3.33333 15.442 3.33333 15V8.33333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.6667 8.33333L10 13.3333L3.33333 8.33333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="action-text">Like</span>
        </button>

        <button className="action-btn">
          <div className="action-icon">
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
          <span className="action-text">Comment</span>
        </button>

        <button className="action-btn">
          <div className="action-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 1.66667L9.16667 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3333 5.83333L15 1.66667L10.8333 3.33333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16667 7.5L1.66667 15V18.3333H5L12.5 10.8333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="action-text">Share</span>
        </button>

        <button className="action-btn">
          <div className="action-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.66667 8.33333L13.3333 1.66667L18.3333 6.66667L11.6667 13.3333H6.66667V8.33333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 4.16667L16.6667 5.83333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.6667 13.3333V16.6667C16.6667 17.1087 16.4911 17.5326 16.1785 17.8452C15.866 18.1577 15.442 18.3333 15 18.3333H3.33333C2.89131 18.3333 2.46738 18.1577 2.15482 17.8452C1.84226 17.5326 1.66667 17.1087 1.66667 16.6667V5C1.66667 4.55797 1.84226 4.13405 2.15482 3.82149C2.46738 3.50893 2.89131 3.33333 3.33333 3.33333H6.66667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="action-text">Send</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;

