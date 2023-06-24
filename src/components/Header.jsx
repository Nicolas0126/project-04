const Header = ({changeShowModal}) => {

    const handleShowModal = () => {
        changeShowModal()
    }

  return (
    <section className=" grid justify-center items-center text-center p-6 gap-4 xs:flex xs:justify-between ">

        <h1 className="font-bold text-3xl">Usuarios</h1>

        <button onClick={handleShowModal} className="btn-primary rounded-md"><i className='bx bx-plus'></i> Crear nuevo usuario</button>

    </section>
  )
}


