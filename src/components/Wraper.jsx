const Wraper = (news, index) => {
  return (
    <div key={index} className="feed">
      <div className="flex-none lg:w-60 md:w-60 relative">
        <img src={news.img} alt="news" />
      </div>
      <h2>{news.headline}</h2>
    </div>
  );
};

export default Wraper;
