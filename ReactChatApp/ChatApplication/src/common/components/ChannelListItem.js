import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';

const ChannelListItem = (props) => {
  const { channel: selectedChannel, onClick, channel } = props;
  return (
    <li>
      <a className={classnames({ selected: channel === selectedChannel })} onClick={() => onClick(channel)}>{channel.name}</a>    
    </li>
  );
}

ChannelListItem.propTypes = {
  channel: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ChannelListItem;
