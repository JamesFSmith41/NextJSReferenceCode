import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
var bcrypt = require('bcryptjs');
const { db } = require('@vercel/postgres');



async function getUser(email: string): Promise<User | undefined> {
  try {
    console.log(email)
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
async function checkEmail(email: string) {
  try {
    const emailExists = await sql<User>`SELECT * FROM users WHERE email=${email} EXISTS`
    console.log(emailExists);
    return emailExists;
  } catch (error) {
    console.error("Error finding email", error);
    throw new Error("Error finding email");
  }
}

async function checkUser(username: string) {
  try {
    const userExists = await sql<User>`SELECT * FROM users WHERE name=${username} EXISTS`
    console.log(userExists);
    return userExists;
  } catch (error) {
    console.error("Error finding username", error);
    throw new Error("Error finding username");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z 
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log("line 36: " + passwordsMatch)
          console.log("line 37: " + user.password)
          console.log("line 38: " + password)

          if (passwordsMatch) return user;

        }
        console.log("line 43: " + parsedCredentials)
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});

export async function userSignUp(credentials : FormData) {

  const parsedCredentials = z 
          .object({ username: z.string(), email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)
  if (parsedCredentials.success) {
    const {username, email, password } = parsedCredentials.data;
    const emailExists = await checkEmail(email);
    const userExists = await checkUser(username);
  
    if (emailExists && userExists) {
      const client = await db.connect();
          const hashedPassword = await bcrypt.hash(password, 10);
          const hashedUsername = await bcrypt.hash(username, 10);
  
          return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES (${hashedUsername}, ${username}, ${email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
    }
  }
  
}  