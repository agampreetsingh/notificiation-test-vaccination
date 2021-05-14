const notificationsButton = document.getElementById('see-notifications');
notificationsButton.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
        notificationsButton.hidden = true;
      randomNotification();
    }
  });
})

function randomNotification() {
    const notifTitle = "Have you booked your slot yet?";
    const notifBody = "Reminder by Agam";
    const notifImg = `images/touch/homescreen72.png`;
    const options = {
      body: notifBody,
      icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
  }