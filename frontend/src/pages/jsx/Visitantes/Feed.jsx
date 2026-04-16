import React from 'react';
import '../../css/Visitantes/Feed.css';

const Feed = () => {
  const posts = [1, 2];
  const miniCards = [1, 2, 3];

  return (
    <div className="feed-container">
      {/* Header Verde */}
      <header className="feed-header">
        <div className="header-content">
          <div className="user-profile">
            <div className="avatar-placeholder"></div>
            <div className="user-info">
              <div className="name-row">
                <span className="user-name">Lore ipsum</span>
                <span className="badge-tag">TAG</span>
              </div>
              <span className="user-handle">@loreipsum</span>
            </div>
          </div>
          <div className="header-actions">
            <div className="search-bar-placeholder"></div>
            <div className="action-circle"></div>
            <div className="action-circle"></div>
          </div>
        </div>
      </header>

      {/* Área Principal do Feed*/}
      <main className="feed-main">
        {posts.map((post) => (
          <div key={post} className="post-card">
            <div className="post-header">
              <div className="post-user">
                <div className="avatar-placeholder-small"></div>
                <div className="post-user-info">
                  <div className="name-row">
                    <span className="post-name">Lore ipsum</span>
                    <span className="post-tag">TAG</span>
                  </div>
                  <span className="post-handle">@loreipsum</span>
                </div>
              </div>
              <div className="post-menu-dot"></div>
            </div>

            {/* Placeholder da Imagem Principal do Post */}
            <div className="post-image-placeholder">
               {/* <img src="sua-imagem.jpg" alt="Post content" /> */}
            </div>

            <div className="post-footer">
              <div className="post-interactions">
                <div className="interaction-item">
                  <div className="interaction-icon"></div>
                  <span>LORE</span>
                </div>
                <div className="interaction-item">
                  <div className="interaction-icon"></div>
                  <span>LORE</span>
                </div>
                <div className="interaction-item">
                  <div className="interaction-icon"></div>
                  <span>LORE</span>
                </div>
              </div>
              <div className="save-icon"></div>
            </div>
          </div>
        ))}

        <div className="mini-cards-grid">
          {miniCards.map((card) => (
            <div key={card} className="mini-card">
              <div className="mini-card-image"></div>
              <div className="mini-card-info">
                <div className="mini-card-header">
                  <span className="mini-name">Lore ipsum</span>
                  <span className="mini-tag">TAG</span>
                </div>
                <span className="mini-handle">@loreipsum</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Feed;