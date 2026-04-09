import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(persist((set) => ({
  // Posts
  posts: [],
  setPosts: (data) => set({ posts: data }),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  deletePost: (id) => set((state) => ({ posts: state.posts.filter(p => p.id !== id) })),

  // Users
  users: [],
  setUsers: (data) => set({ users: data }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  deleteUser: (id) => set((state) => ({ users: state.users.filter(u => u.id !== id) })),

  // Settings
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
})
, {
  name: "my-app-store", // name of the item in storage
  getStorage: () => localStorage, // use localStorage
}));