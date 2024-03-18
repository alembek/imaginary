import Image from 'next/image'
import Link from 'next/link'


const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="flex size-full flex-column gap-4">
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/images/logo-imaginary.svg" alt="logo" width={500} height={40} />
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar