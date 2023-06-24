import User from "./User"

const UserList = ({users, deleteUser, changeShowModal, setIsUserToUpdate}) => {
    console.log(users); 
  return (
    <section className="flex gap-6 flex-wrap place-content-center">

        {
            users.map((user) => <User 
             user={user} key={user.id}
             deleteUser= {deleteUser} 
             changeShowModal= {changeShowModal}
             setIsUserToUpdate= {setIsUserToUpdate}
             />)
        }

    </section>
  )
}
export default UserList