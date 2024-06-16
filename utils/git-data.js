import { personalData } from "./data/personal-data";

export async function getGitProfile() {
    const res = await fetch(`https://api.github.com/users/${personalData.githubUser}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return await res.json();
  };
  
export  async function getGitProjects() {
    const res = await fetch(`https://api.github.com/search/repositories?q=user:${personalData.githubUser}+fork:false&sort=updated&type=Repositories`)
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return await res.json();
  };