import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_UZlYOAh8X",
      userPoolClientId: "76sm7n450e3jkrm12m121345k5",
      loginWith: {
        email: true,
      },
      userAttributes: {
        phone_number: {
          required: true,
        },
      },
    },
  },
});
