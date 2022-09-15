import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
          <img
            src={props.img}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{props.user}</span>
            <br />
            <span>{props.text}</span>
            { 
              props.like > 0 ? 
              <div className="d-flex align-items-center gap-1">
                <img src="/like.svg" width={20}></img>
                <span className="text-muted">{props.like} คน</span>
              </div>
              : <div></div>
            }
          </div>
        </div>

      {/*render Reply here... */}
      {props.replies.map((x) => (<Reply 
        user={x.username} 
        img={x.userImagePath} 
        text={x.replyText} 
        like={x.likeNum} 
        />))}
    </div>
  );
}
