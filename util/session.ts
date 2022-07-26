export const password =
  '37d02fccb8d6a3ab3d48b68c517b50e65cb56ce7a246223259fa6102f87f0147'

export const Session = {
  cookieName: 'printer',
  password,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}
