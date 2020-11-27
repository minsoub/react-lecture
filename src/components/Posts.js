import React from 'react';
import queryString from 'query-string';   // query-string npm 패키지 import

const Posts = (props) => {
    const result = queryString.parse(props.location.search);
    const {approved, sortBy } = result;    // query-string을 이용한 접근
    const { year, month } = props.match.params;

    return (
        <div>
            <h1>Posts</h1>
            <p>Year : {year}, Month : {month}</p>
            <p>Approved: {approved}</p>
            <p>SortBy: {sortBy}</p>
        </div>
    )
}
export default Posts;