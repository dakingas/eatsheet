import React from "react";
import styles from "./notifications.module.css";
import Overlay from "./overlay";

type NotificationType = "normal" | "warning" | "danger" | "informative";

const getNotificationClass = (type: NotificationType) => {
  switch (type) {
    default:
    case "normal":
      return styles.colorNormal;
    case "warning":
      return styles.colorWarning;
    case "danger":
      return styles.colorDanger;
    case "informative":
      return styles.colorInformative;
  }
};

type NotificationProps = {
  type: NotificationType;
  onClose?: () => void;
};
const Notification: React.SFC<NotificationProps> = ({
  children,
  type,
  onClose
}) => (
  <div className={`${styles.notification} ${getNotificationClass(type)}`}>
    {onClose && (
      <div className={styles.notificationButton} onClick={onClose}>
        X
      </div>
    )}
    {children}
  </div>
);

const NotificationView: React.FC<NotificationProps> = props => (
  <Overlay>
    <Notification {...props} />
  </Overlay>
);

export default NotificationView;
