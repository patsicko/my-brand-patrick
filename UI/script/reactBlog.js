function App() {
  const [blogs, setBlogs] = React.useState({});
  const [arr, setArr] = React.useState([]);
  const [selectedBlog, setSelectedBlog] = React.useState(null);

  const fetchData = () => {
    return fetch("https://my-brand-backend.cyclic.app/api/getBlogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (blogs.status === "success") {
      setArr(blogs.data.posts);
    }
  }, [blogs]);

  const handleReadMoreClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <React.Fragment>
      {arr.map((blog) => (
        <div key={blog._id} className={`blog blog${blog._id}`}>
          <div className="blog-image">
            <img src={blog.blogImage} alt="" />
          </div>
          <div className="blog-content">
            <div className="blog-title">
              <a href="blog.html">{blog.blogTitle}</a>
            </div>
            <br />
            <div className="blog-author">{blog.blogAuthor}</div>
            <br />
            <div className="blog-date">September 23 2022</div>
            <br /> <br />
            {selectedBlog === blog ? (
              <div className="blog-text">{blog.blogText}</div>
            ) : (
              <div className="blog-text">{blog.blogText.slice(0, 100)}...</div>
            )}
            {!selectedBlog || selectedBlog._id !== blog._id ? (
              <span className="read-more" onClick={() => handleReadMoreClick(blog)}>
                Read more...
              </span>
            ) : null}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}






const domContainer = document.querySelector("#blogs-main");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);


