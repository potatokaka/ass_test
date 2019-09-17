import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/articles.css';

function Articles() {

  useEffect(() => {
    fetchItems();
  }, [])

  const [dataJson, setItems] = useState([]);

  const fetchItems = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataJson = await data.json();
    setItems(dataJson);
  }

  return (
    <div>
      <div className="container">
        <h1 className="mt-3 mb-5">Articles</h1>

        <div className="row">
          <div className="col-12">
            {dataJson.map(item => (
              <h4 key={item.id} className="articles__title">
                <div className="articles__desc">Article {item.id}</div>
                  <Link to={`/articles/${item.id}`}>
                    {item.title}
                  </Link>
              </h4>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Articles;