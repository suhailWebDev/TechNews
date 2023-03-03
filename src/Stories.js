import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, nbPages, isLoading,removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }


  return (
    <>
      <div className="container d-flex align-items-center flex-column gap-5 mt-5">
      <h2 className="fw-bold">My Tech News Post</h2>
      {hits.map((curPost) => {
        const{title,author,objectID,url,num_comments}=curPost;
        return (
              <div className="card p-3 d-flex flex-column bg-light w-50 gap-5" key={objectID}>
                <h2 className="fw-bold">{title}</h2>
                <div className="d-flex justify-content-start">
                <p>By <span>{author}</span> | <span>{num_comments}</span></p>
                </div>
                <div className="d-flex justify-content-between">
                  <a href={url} target='_blank' className="text-decoration-none">
                    Read More
                  </a>
                  <a href="#" className="btn text-danger" onClick={()=>removePost(objectID)}>Remove</a>
                </div>
              </div>
        );
      })}
      </div>
    </>
  );
};

export default Stories;
