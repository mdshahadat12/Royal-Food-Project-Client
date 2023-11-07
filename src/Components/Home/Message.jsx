const Message = () => {
  return (
    <div>
      <div className="md:w-1/2 my-10 mx-auto">
        <h1 className="text-2xl text-center font-bold my-10">Contact Us</h1>
        <form action="">
          <input
            size=""
            placeholder="Your name"
            type="text"
            name=""
            className="p-4 mb-8 w-full border-4 rounded-md"
          />
          <br />
          <input
            placeholder="Your email"
            type="text"
            name=""
            className="p-4 mb-8 w-full border-4 rounded-md"
          />
          <br />
          <textarea
            className="p-4 w-full border-4 rounded-md"
            placeholder="Message"
            rows="7"
          ></textarea>
          <br />
          <input
            className="p-2 w-full cursor-pointer bg-blue-500 rounded-lg mt-6 text-white font-semibold"
            value="SEND"
            type="button"
          />
        </form>
      </div>
    </div>
  );
};

export default Message;
