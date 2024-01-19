

export const ErrorComp = ({children}) => {
  return (
    <div className="bg-red-800 font-bold text-white text-center p-3 rounded-md uppercase mb-3">
    <p>
        {children}
    </p>
    </div>
  )
}
