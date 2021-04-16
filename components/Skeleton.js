import React from 'react'

function Skeleton() {
    return (
        <div className="skeleton">
            <div className="s-title"></div>
            <div className="s-date"></div>
            <div className="s-banner"></div>
            <div className="s-description"></div>
            <div className="s-description"></div>
            <div className="s-description"></div>
            <div className="s-description"></div>
            <style jsx>{`
        .skeleton {
          max-width: 1200px;
          margin: 20px auto;
        }
        .s-title, s-date{
          background: grey;
          border-radius: 4px;
          margin: 20px 0;
        }
        .s-banner {
          padding: 12% 0;
        }
        .s-description {
          padding: 8px 0;
          max-width: 1000px;
        }
      `}</style>
        </div>
    )
}

export default Skeleton
