const User = ({user, deleteUser, changeShowModal, setIsUserToUpdate}) => {

    const handleClickDelete = () => {
        deleteUser(user.id)
    }

    const handleClickUpdate = () => {
        changeShowModal()
        setIsUserToUpdate(user)
    }
  return (
    <section className="border-[#E5E5E5] border-2 rounded-md w-[300px] h-[200px] p-2 grid">
        <h4 className="font-semibold text-xl text-center">{user.first_name} {user.last_name}</h4>
            <div>
            <h5 className="text-[#D3D3D3] text-base">Correo:</h5>
            <span>{user.email}</span>
        </div>
        <div>
            <h5 className="text-[#D3D3D3] text-base">Cumpleaños:</h5>
            <span className="text-[#302F2F] text-base "><i className='bx bx-gift'> </i>{user.birthday || "No hay fecha"}</span>
        </div>
        <div className="flex justify-end gap-3 align-bottom ">
        <button className="text-2xl text-white bg-[#D93F3F] w-8 h-8 flex justify-center items-center rounded-[4px]" onClick={handleClickDelete}><i className='bx bx-user-x' ></i></button>
        <button className="text-2xl text-[#BDBDBD] bg-[#F6F6F6] border-gray-400 border-2 w-8 h-8 flex justify-center items-center rounded-[4px] " onClick={handleClickUpdate}><i className='bx bx-edit' ></i></button>
        </div>
    </section>
  )
}
export default User