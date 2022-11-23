import * as React from 'react';
import Card from '../components/Card';

const Blog = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h2>Mon Blog</h2>

      {JSON.stringify(data)}
      <Card />
      <Card />
    </div>
  );
};

export default Blog;
