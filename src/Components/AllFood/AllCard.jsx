import { Link } from "react-router-dom";


const AllCard = () => {
    const card = {
        id: 1,
        picture: "https://i.ibb.co/2gbqYTD/health1.png",
        title: "Clean water for children",
        category: "Health",
        category_bg_color: "#0034FF33",
        card_bg_color: "#D9E5FF",
        text_button_bg_color: "#0052FF",
        description:
          "'Healthcare Heroes Needed' is a rallying cry for everyone to stand alongside our frontline medical professionals. By donating to this campaign you empower these heroes with essential resources, equipment and support. Your contribution will strengthen our healthcare system's resilience ensuring that they can continue to save lives and provide top-notch care. Let's show our gratitude and solidarity for these dedicated individuals who work tirelessly to keep us healthy and safe. Together we can be the heroes behind the heroes.",
        price: 199,
      };
      const {
        id,
        picture,
        title,
        category,
        category_bg_color,
        card_bg_color,
        text_button_bg_color,
      } = card || {};
    return (
        <div>
      <Link to={`details/${id}`}>
        <div className="cursor-pointer duration-200 active:scale-95">
          <img className="w-full rounded-t-lg" src={picture} alt="" />
          <div className={"p-4 rounded-b-lg bg-[#D9E5FF]"}>
            <h3
              className={`px-2 bg-[#0034FF33] text-[#0052FF] font-medium w-fit rounded-md`}
            >
              {category}
            </h3>
            <h1 className={`text-lg text-[#0052FF] mt-3 font-semibold`}>
              {title}
            </h1>
          </div>
        </div>
      </Link>
    </div>
    );
};

export default AllCard;