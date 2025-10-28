declare module 'login/LoginForm' {
  const LoginForm: React.ComponentType;
  export default LoginForm;
}

declare module 'profile/UserProfile' {
  interface User {
    name: string;
    email: string;
  }

  interface UserProfileProps {
    user: User;
  }

  const UserProfile: React.FC<UserProfileProps>;
  export default UserProfile;
}