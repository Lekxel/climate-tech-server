const defaultConfiguration = {
  chatConfiguration: {
    preChat: `{
      "display":true,
      "introductionMessage":"Please introduce yourself:",
      "surveyFields": {
        "name": {
          "enabled":true,
          "placeholder":"Enter your name..."
        },
        "email": {
          "enabled":true,
          "placeholder":"Enter your email..."
        },
        "phoneNumber":{
          "enabled":false,
          "placeholder":"Enter your phone number..."
        }
      }
    }`,
    sidebar: `{
"enable":false,
"color":"#2D96D6",
"label":"Chat with us",
"position":"right"
}`,
    appearance: `{
"showButtonLabel":false,
"buttonLabelText":"Support Here",
"enableSound":true,
"widgetPosition":"right",
"backgroundColor":"#2D96D6",
"onlineStatus":"We reply immediately.",
"displayWhenOffline":true,
"offlineStatus":"We typically reply within a few minutes.",
"gettingStartedStatus":"Chat with us",
"gettingStartedMessage":"Welcome. Ask us anything 🎉"
}`,
  },
  quickResponse: ["Hi, welcome to our channel"],
  emailAutoResponse: `Your request with ticket __ticketID__ has been received and is being reviewed by our support staff.
      To add additional comments, reply to this email.`,
  operatingHours: ["01:00", "12:00"],
  todolist: {
    livechatConfigured: false,
    emailTicketConfigured: false,
    calendarConfigured: false,
    messengerConfigured: false,
    operatingHoursConfigured: false,
    contactsConfigured: false,
  },
  notifications: {
    incomingVisitor: true,
    newMessage: true,
    assignChat: true,
    newEventSchedule: true,
    newTicket: true,
  },
};

export default defaultConfiguration;
