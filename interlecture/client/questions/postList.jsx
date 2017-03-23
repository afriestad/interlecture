import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import 'static/css/font-awesome.css';
import QuestionItem from './questionItem';
import InputForm from './inputForm';

const listGroupItemStyle = {
  borderRadius: 5,
  border: '1px solid #888',
  boxShadow: '0px 5px 35px rgba(0, 0, 0, .7)',
  padding: '0px 0px',
  marginLeft: '30px',
  marginRight: '30px',
  marginBottom: '30px',
  paddingBottom: '5px',
};

const PostList = ({ posts, parent_id, submitReply }) => (
  <ListGroup>
    {
      posts.filter(post => (post.parent_post === parent_id))
        .map(post => (
          <ListGroupItem key={post.id} style={listGroupItemStyle}>
            <QuestionItem question={post} />
            <InputForm
              onSubmit={submitReply}
              id={`replyTo${post.id}`}
              placeholder={'Enter reply'}
              submitButtonText={'Submit Reply'}
              onSubmitExtras={{ postId: post.id }}
            />
            <PostList posts={posts} parent_id={post.id} submitReply={submitReply} />
          </ListGroupItem>
        ))
    }
  </ListGroup>
);

PostList.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  parent_id: React.PropTypes.number,
  submitReply: React.PropTypes.func.isRequired,
};

PostList.defaultProps = {
  parent_id: null,
};


export default PostList;
