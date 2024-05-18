import { atom } from "recoil";

const userAtom = atom({
  key: 'username', // Changed key to 'user'
  default: (() => {
    try {
      const user = localStorage.getItem('user-threads');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Failed to parse user data:', error);
      return null;
    }
  })()
});

export default userAtom;
