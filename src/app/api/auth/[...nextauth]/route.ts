import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Identifiants",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "admin@teste.fr" && credentials?.password === "teste.fr") {
          return { id: "1", name: "Admin Certificat", email: credentials.email, role: "admin" };
        }
        return null;
      },
    })
  ],
  pages: { signIn: "/auth/signin" },
  secret: process.env.NEXTAUTH_SECRET,
});
export { handler as GET, handler as POST };