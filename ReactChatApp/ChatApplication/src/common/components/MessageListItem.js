import React, { PropTypes } from 'react';

export default class MessageListItem extends React.Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    currentuser :PropTypes.object.isRequired,
  };
  handleClick(user) {
    this.props.handleClickOnUser(user);
  }
  render() {
    const { message } = this.props;    
    return (
      <li className="w-100">
        <div className={this.props.currentuser === message.user.username ? "right_user" : "left_user"}>
        {/* <a onClick={this.handleClick.bind(this, message.user)} className="usr_msg">{message.user.username}</a> */}
          <a  className="usr_msg">{message.user.username}</a>
          <div className="msg_txt">{message.text}</div>
          <span className="usr_time">{message.time}</span>        
        </div>
      </li>
    );
  }
}
