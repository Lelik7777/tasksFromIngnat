import React from 'react'
import {MessageDateType} from './HW1';
import s from './Message.module.css';

export const Message: React.FC<MessageDateType> = ({avatar, message, name, time}) => {
    return (
      <div className={s.post}>
            <div className={s.img}><img src={avatar} alt="avatar"/></div>
          <div className={s.corner}>corner</div>
          <div className={s.message}>message</div>
      </div>
    )
}

