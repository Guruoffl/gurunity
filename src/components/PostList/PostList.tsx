import React from 'react';
import PostCard from '../PostCard/PostCard';
import './PostList.css';

// Static data for posts
const staticPosts = [
  {
    id: 1,
    author: {
      name: 'JAY PURI',
      title: 'worldwide field operations at NVIDIA',
      avatar: 'Image 20-07-25 at 12.09 AM.jpg',
      isFollowing: true,
    },
    content: {
      text: 'Excited to share that our team just launched a new feature that will help thousands of users streamline their workflow! 🚀\n\nBuilding products that make a real difference in people\'s daily lives is what drives me every day. Grateful to work with such an amazing team.',
      image: 'post1image.jpeg',
    },
    engagement: {
      likes: 127,
      comments: 23,
      shares: 8,
    },
    timeAgo: '2h',
  },
  {
    id: 2,
    author: {
      name: 'MARK ZUCKEMBERG',
      title: 'Founder of facebook',
      avatar: 'Image 20-07-25 at 12.16 AM.jpg',
    },
    content: {
      text: 'Just finished reading "Clean Code" by Robert Martin for the third time. Every time I read it, I discover something new that makes me a better developer.\n\nWhat\'s your favorite programming book? Drop your recommendations in the comments! 📚',
    },
    engagement: {
      likes: 89,
      comments: 15,
      shares: 5,
    },
    timeAgo: '4h',
  },
  {
    id: 3,
    author: {
      name: 'sam altman',
      title: 'CEO at OPENAI',
      avatar: 'Image 19-07-25 at 11.41 PM.jpg',
      isFollowing: true,
    },
    content: {
      text: 'User research session today revealed some fascinating insights about how people interact with our mobile app. Sometimes the smallest design changes can have the biggest impact on user experience.\n\n#UXDesign #UserResearch #MobileDesign',
      image: 'e3267448bd7fe31b55ef848c190f47e656c7811e859c38e626af55bbfb06510c.png',
    },
    engagement: {
      likes: 156,
      comments: 31,
      shares: 12,
    },
    timeAgo: '6h',
  },
  {
    id: 4,
    author: {
      name: 'colette kress',
      title: 'chief financial officer',
      avatar: 'Image 19-07-25 at 11.54 PM.jpg',
    },
    content: {
      text: 'Machine learning models are only as good as the data they\'re trained on. Spent the last week cleaning and preprocessing a dataset, and the results speak for themselves - 15% improvement in model accuracy!\n\nData quality > Fancy algorithms',
    },
    engagement: {
      likes: 203,
      comments: 42,
      shares: 18,
    },
    timeAgo: '8h',
  },
  {
    id: 5,
    author: {
      name: 'krithivasan',
      title: 'ceo at TCS',
      avatar: '68.jpg',
      isFollowing: true,
    },
    content: {
      text: 'Attending the Digital Marketing Summit next week! Looking forward to learning about the latest trends in content marketing and social media strategy.\n\nAnyone else going? Would love to connect! 🤝',
    },
    engagement: {
      likes: 67,
      comments: 18,
      shares: 6,
    },
    timeAgo: '12h',
  },
  {
    id: 6,
    author: {
      name: 'Arvind krishna',
      title: 'ceo at IBM',
      avatar: '69.jpg',
    },
    content: {
      text: 'Two years ago, we started with just an idea and a laptop. Today, we\'re proud to announce our Series A funding round! 🎉\n\nNone of this would have been possible without our incredible team, supportive investors, and amazing customers. Thank you for believing in our vision.\n\n#Startup #Entrepreneurship #Grateful',
      image: '67.png',
    },
    engagement: {
      likes: 342,
      comments: 67,
      shares: 29,
    },
    timeAgo: '1d',
  },
];

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      {staticPosts.map((post) => (
        <PostCard
          key={post.id}
          author={post.author}
          content={post.content}
          engagement={post.engagement}
          timeAgo={post.timeAgo}
        />
      ))}
      
      {/* Load More Section */}
      <div className="load-more-section">
        <button className="load-more-btn">
          <div className="load-more-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 4.16667V15.8333M4.16667 10H15.8333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>Load more posts</span>
        </button>
      </div>
    </div>
  );
};

export default PostList;

