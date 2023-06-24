import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalForm = ({ isShowModal, createUser, isUserToUpdate, updateUser, resetModalForm }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
      if(!data.birthday) data.birthday = null

      if(isUserToUpdate) {
        updateUser(data, reset)
      } else {
        createUser(data, reset)  
      }
  };

  const handleCloseModal = () => {
    resetModalForm(reset)
  };

  useEffect(() => {
    if(isUserToUpdate) {
        reset(isUserToUpdate)
    }
  }, [isUserToUpdate])

  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${
        isShowModal
          ? "visible opacity-100"
          : "invisible opacity-0 transition-opacity"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white w-[280px] p-4 grid gap-6 relative"
        action=""
      >
        <h3 className="font-bold text-3xl">{isUserToUpdate ? "Editar Usuario" : "Nuevo Usuario"}</h3>

        {/* //? Nombre */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Nombre
          </label>
          <input className="bg-gray-100 outline-none p-2" type="text" {...register("first_name")}/>
        </div>

        {/* //? Apellidos */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Apellidos
          </label>
          <input className="bg-gray-100 outline-none p-2" type="text" {...register("last_name")} />
        </div>

        {/* //? Correo */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Correo
          </label>
          <input className="bg-gray-100 outline-none p-2" type="email" {...register("email")} />
        </div>

        {/* //? Contraseña */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Contraseña
          </label>
          <input className="bg-gray-100 outline-none p-2" type="password" {...register("password")}/>
        </div>

        {/* //? Cumpleaños */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Cumpleaños
          </label>
          <input className="bg-gray-100 outline-none p-2" type="date" {...register("birthday")}/>
        </div>

        <button className="btn-primary">{isUserToUpdate ? "Confirmar cambios" : "Agregar nuevo usuario" }</button>
        <button
          onClick={handleCloseModal}
          type="button"
          className="absolute right-0 p-2 text-2xl hover:text-secondary"
        >
          <i className="bx bx-x-circle"></i>
        </button>
      </form>
    </section>
  );
};
export default ModalForm;
