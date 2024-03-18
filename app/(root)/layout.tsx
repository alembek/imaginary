import Sidebar from '@/components/shared/Sidebar'

const Root = ({children}: {children:React.ReactNode}) => {
  return (
    <main className="auth">
      <Sidebar />
        <div className="root-container">
            <div className="wrapper">
                
                {children}
            </div>
        </div>
        </main>
  )
}

export default Root