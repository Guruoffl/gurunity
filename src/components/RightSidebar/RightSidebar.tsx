import React from 'react';
import './RightSidebar.css';

const RightSidebar: React.FC = () => {
  return (
    <div className="right-sidebar">
      {/* Gurunity News */}
      <div className="news-section card">
        <div className="section-header">
          <h4>Gurunity News</h4>
          <div className="info-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10.6667V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 5.33333H8.00667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div className="news-list">
          <div className="news-item">
            <h5 className="news-title">Tech industry sees 25% growth in remote work</h5>
            <p className="news-meta">2h ago • 1,234 readers</p>
          </div>
          
          <div className="news-item">
            <h5 className="news-title">AI and machine learning jobs surge</h5>
            <p className="news-meta">4h ago • 2,567 readers</p>
          </div>
          
          <div className="news-item">
            <h5 className="news-title">Startup funding reaches new heights</h5>
            <p className="news-meta">6h ago • 1,890 readers</p>
          </div>
          
          <div className="news-item">
            <h5 className="news-title">New programming languages gaining popularity</h5>
            <p className="news-meta">8h ago • 3,456 readers</p>
          </div>
          
          <div className="news-item">
            <h5 className="news-title">Digital transformation accelerates</h5>
            <p className="news-meta">12h ago • 987 readers</p>
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

      {/* People You May Know */}
      <div className="suggestions-section card">
        <div className="section-header">
          <h4>People you may know</h4>
        </div>
        
        <div className="suggestions-list">
          <div className="suggestion-item">
            <div className="suggestion-avatar">
              <img
                src="Image 20-07-25 at 12.16 AM.jpg"
                alt="Mark zuckemberg"
                className="avatar-image"
              />
            </div>
            <div className="suggestion-info">
              <h5 className="suggestion-name">Mark zuckemberg</h5>
              <p className="suggestion-title">CEO at facebook</p>
              <p className="suggestion-mutual">2 mutual connections</p>
            </div>
            <button className="connect-btn">Connect</button>
          </div>
          
          <div className="suggestion-item">
            <div className="suggestion-avatar">
              <img
                src="hp.jpeg"
                alt="hari"
                className="avatar-image"
              />
            </div>
            <div className="suggestion-info">
              <h5 className="suggestion-name">Hari</h5>
              <p className="suggestion-title">ceo at crpx</p>
              <p className="suggestion-mutual">5 mutual connections</p>
            </div>
            <button className="connect-btn">Connect</button>
          </div>
          
          <div className="suggestion-item">
            <div className="suggestion-avatar">
              <img
                src="68.jpg"
                alt="Robert Lee"
                className="avatar-image"
              />
            </div>
            <div className="suggestion-info">
              <h5 className="suggestion-name">jay puri</h5>
              <p className="suggestion-title">Data Analyst at DataTech</p>
              <p className="suggestion-mutual">1 mutual connection</p>
            </div>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        
        <div className="show-more">
          <span>Show all</span>
        </div>
      </div>

      {/* Promoted Content */}
      <div className="promoted-section card">
        <div className="promoted-header">
          <span className="promoted-label">Promoted</span>
        </div>
        
        <div className="promoted-content">
          <div className="promoted-image">
            <img
              src="/api/placeholder/280/140"
              alt="Promoted content"
              className="promo-image"
            />
          </div>
          <div className="promoted-info">
            <h5 className="promoted-title">Advance Your Career with Premium</h5>
            <p className="promoted-description">
              Get exclusive insights, see who viewed your profile, and access premium features.
            </p>
            <button className="promoted-cta">Try Premium for free</button>
          </div>
        </div>
      </div>

      {/* Today's Most Viewed Courses */}
      <div className="courses-section card">
        <div className="section-header">
          <h4>Today&apos;s most viewed courses</h4>
        </div>        
        <div className="courses-list">
          <div className="course-item">
            <div className="course-number">1</div>
            <div className="course-info">
              <h5 className="course-title">React Development Fundamentals</h5>
              <p className="course-instructor">by Sarah Johnson</p>
              <div className="course-stats">
                <span className="course-viewers">12,345 viewers</span>
              </div>
            </div>
          </div>
          
          <div className="course-item">
            <div className="course-number">2</div>
            <div className="course-info">
              <h5 className="course-title">Advanced TypeScript Patterns</h5>
              <p className="course-instructor">by Michael Chen</p>
              <div className="course-stats">
                <span className="course-viewers">8,967 viewers</span>
              </div>
            </div>
          </div>
          
          <div className="course-item">
            <div className="course-number">3</div>
            <div className="course-info">
              <h5 className="course-title">UI/UX Design Principles</h5>
              <p className="course-instructor">by Emily Rodriguez</p>
              <div className="course-stats">
                <span className="course-viewers">7,234 viewers</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="show-more">
          <span>Show all courses</span>
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="footer-links">
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Accessibility</a>
          <a href="#" className="footer-link">Help Center</a>
          <a href="#" className="footer-link">Privacy & Terms</a>
          <a href="#" className="footer-link">Ad Choices</a>
          <a href="#" className="footer-link">Advertising</a>
          <a href="#" className="footer-link">Business Services</a>
          <a href="#" className="footer-link">Get the Gurunity app</a>
          <a href="#" className="footer-link">More</a>
        </div>
        <div className="footer-copyright">
          <div className="gurunity-logo">
            <span>Gurunity</span>
          </div>
          <span className="copyright-text">Gurunity Corporation © 2024</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

