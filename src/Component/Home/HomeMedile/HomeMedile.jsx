import { FaImages } from "react-icons/fa";
import HomePost from "./HomePost";

const HomeMedile = () => {
    return (
        <div className="bg-slate-50 py-2 shadow-2xl m-4 rounded-xl">
            <div className="flex items-center gap-3 px-8 m-4">
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src="https://i.ibb.co/n6KhZBD/french-bulldogs.jpg" />
                    </div>
                </div>
             
                
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered  bg-slate-300 w-full " />
                
            </div>
            <hr />
            <div className="flex justify-between items-center  px-8  m-4 ">

                <div className=" flex items-center  gap-3">
                    <div className="text-green-400 text-lg "><FaImages /></div>
                    <p>Photo/Video</p>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-lg ">😃</p>
                    <p>Feeling/Activity</p>
                </div>
            </div>
            <HomePost></HomePost>
        </div>
    );
};

export default HomeMedile;