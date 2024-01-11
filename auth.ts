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
    const emailExists = await sql<User>`SELECT 1 FROM users WHERE email=${email}`
    if (emailExists != null) {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error finding email", error);
    throw new Error("Error finding email");
  }
}

async function checkUser(username: string) {
  try {
    const userExists = await sql<User>`SELECT 1 FROM users WHERE name=${username}`
    if (userExists != null) {
      return false;
    }
    return true;

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

export async function userSignUp(formdata : FormData) {

    const username = formdata.get("username")?.toString();
    const email = formdata.get("email")?.toString();
    const password = formdata.get("password")?.toString();
    if (typeof email == 'string' && typeof username === 'string') {
      console.log(email)
      console.log(username)

      const emailExists = await checkEmail(email);
      const userExists = await checkUser(username);
      console.log(emailExists);
      console.log(userExists)
      if (!emailExists && !userExists) {
        const client = await db.connect();
            const hashedPassword = await bcrypt.hash(password, 10);
            const hashedUsername = await bcrypt.hash(username, 10);
            console.log(username);
            console.log(email);
            console.log(hashedPassword);
            console.log(hashedUsername);
  
            return client.sql`
            INSERT INTO users (id, name, email, password)
            VALUES (${uuidv4()}, ${username}, ${email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
          `;
      }
    }
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}