export const NOTIFY = "NOTIFY";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";

export const notify = (message, severity = "info") => ({
  type: NOTIFY,
  notification: {
    message,
    severity,
  },
});

export const showAlert = (message) => {
  return notify(message, "warning");
};

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
});
