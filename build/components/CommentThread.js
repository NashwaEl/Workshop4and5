import React from 'react';
import CommentEntry from './CommentEntry';

export default class CommentThread extends React.Component{
  render() {
    return(
      <ul className="media-List">
        {React.Children.map(this.props.Children, function(child){
          return(
            <li className="media">
              {child}
            </li>
          )
        })}
        <li className='media'>
          <CommentEntry />
        </li>
      </ul>
    )
  }
}
