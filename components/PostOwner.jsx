import React from "react";
import Comment from "./Comment";

export default function PostOwner(props) {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/profileImages/popcat.png"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">Jedsadakorn Kritsadakul 640610623</span>
        </div>
        <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>
        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">111 คน</span>
        </div>
        <hr className="m-0" />
      </div>
      {props.comments.map((x) => (<Comment 
        user={x.username} 
        img={x.userImagePath} 
        text={x.commentText} 
        like={x.likeNum} 
        replies={x.replies} 
        />))}
    </div>
  )
}
