import React, { useState, useEffect } from 'react';

function ArticleSingle({match}) {
  
  useEffect(() => {
    fetchItems();
  }, [])

  const [dataJson, setItems] = useState([]);
  
  const fetchItems = async() => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
    const dataJson = await data.json();
    // console.log(dataJson);
    setItems(dataJson);
  }

  return (
    <div>
      <div className="container">
        <h1 className="mt-4">{dataJson.title}</h1>

        <div className="row">
          <div className="col-12">
            <p>
              {dataJson.body}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ArticleSingle;