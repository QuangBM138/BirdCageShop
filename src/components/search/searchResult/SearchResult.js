import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './SearchResult.css';
import { Grid, ListItem } from '@mui/material';

export default function SearchResults({ results, input, clearSearch }) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    if (results && results.images) {
      const regx = /:\[\d{3},\d{3}]/g;
      const regxQuotes = /(\"{|\\|}")/g;
      const regxCurlyBraces = /(\{)/g;
      const regxCurlyBraces2 = /(\})/g;

      const formattedImages = results.images
        .replace(regx, '')
        .replace(regxQuotes, '[')
        .replace(regxCurlyBraces2, ']')
        .replace(regxCurlyBraces, '[');

      setImg(JSON.parse(formattedImages));
    }
  }, [results]);

  if (!results) {
    return <div>Product not found</div>;
  }


  return (
    <div style={{ position: "absolute", left: "0", top: "70px" }}>
      {input !== null && results !== null && (
        <div >
          {results.length === 0 ? (
            <div className='search_no_result_box'>
              <span> </span>
            </div>
          ) : (
            <div className="search_result_box">
              <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {results.slice(0, 4).map((result) => (
                  <Grid item xs={6}>
                    <ListItem>
                      <Link to={`/detail/${result.id}`} onClick={clearSearch}>
                        <div className="search_result_box_detail">
                          {JSON.parse(result.images).slice(0, 1).map((img, index) =>
                            <img className='search_result_box_image' src={img} alt={`Image ${index}`} />
                          )}
                          <div class='search_result_box_info'>
                            <div class='search_result_box_name'>{result.name.slice(0, 29)}...</div>
                            <div class='search_result_box_price'>$ {result.price}</div>
                          </div>
                        </div>
                        <br></br>
                      </Link>
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
