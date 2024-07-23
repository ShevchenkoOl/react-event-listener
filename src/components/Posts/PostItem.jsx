import React from "react";

import styles from "./posts.module.css";

const PostItem = ({post, number, remove}) => {
    
    return (
        <div className={styles.container} id={post.id}>
        <h2 className={styles.item}>{number}. {post.title}</h2>
        <span>{post.body}</span>
        <button className={styles.btnDel} onClick={()=> remove(post.id)}>Delete</button>
        </div>
    )
}
export default PostItem;