const Wraper = (news, index) => {
  return (
    <div key={index} className="feed">
      <div className="flex-none lg:w-60 md:w-60 relative">
        <a href={news.link} target="_blank" rel="noopener noreferrer nofollow">
          <img src={news.img} alt="news" />
        </a>
      </div>
      <h2>{news.headline}</h2>
    </div>
  );
};

export default Wraper;
