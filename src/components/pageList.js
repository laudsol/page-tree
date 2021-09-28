import React from "react";
import "../styles/arrow.css";

function PageList(props) {
  if (props.pages && props.pages.length > 0) {
    return (
        props.pages.map((page) => {
          const hasChildren = page.hasOwnProperty("children");
            return <div>
              <Page
                id={page.id}
                name={page.name}
                hasChildren={hasChildren}
                />
              {hasChildren && <ul>
                <PageList pages={page.children}/>
              </ul>} 
            </div>
        })
    )
  } else {
    return (<div></div>);
  }
}

function Page({id, name, hasChildren}) {
  return <li key={id}>
        <div className={hasChildren? 'arrow-down' : 'list-bullet'}></div>
        <div className="pageText">{name}</div>
    </li>
}

export default PageList;