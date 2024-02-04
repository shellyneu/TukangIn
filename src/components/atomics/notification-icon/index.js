import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Badge} from 'react-native-elements'
import {IcAlarmBell, IcNotification} from '../../../assets/icons'
import {FontSize, Color, Fonts} from '../../../constants'

const NotificationIcon = ({isNotification, notifValue, onPress}) => {
  const iconChange = isNotification ? 'notifications-unread' : 'notifications'

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor: Color.WHITE, padding: 10, borderRadius: 100}}>
      <IcNotification width={30} height={30} />
      {notifValue && (
        <Badge
          status='error'
          containerStyle={{
            position: 'absolute',
            left: 13,
            top: 2,
          }}
          textStyle={{fontSize: FontSize.dp_8}}
          value={notifValue}
        />
      )}
    </TouchableOpacity>
  )
}

export default NotificationIcon
