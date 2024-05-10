export default function Form() {
  return (
    <>
      <h1 className="text-2xl">Task Tracker</h1>
      <form>
        <input
          name="task"
          type="text"
          placeholder="Input New Task"
          className="p-2 pl-5 rounded-l-full"
        />
        <button
          type="submit"
          className="hover:bg-[#cf7f7f] bg-[#ff7575] text-white font-bold py-2 px-4 rounded-r-full"
        >
          Add Task
        </button>
      </form>
    </>
  );
}
