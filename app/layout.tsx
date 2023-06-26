import 'scss/printer.scss'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { ReduxProvider } from 'redux/provider'

export const metadata: Metadata = {
  title: 'Printer | To Do App',
  description: 'A quick minimalist to do app to demonstrate Printer functionality',
  icons: {
    icon: ''
  }
}

export interface LayoutI {
  children: ReactNode
}

export default function LayoutComponent({ children }: LayoutI) {
  return (
    <html>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
