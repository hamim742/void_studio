import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function CommponLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
