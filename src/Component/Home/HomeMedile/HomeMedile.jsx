import { FaImages, FaUserTag } from "react-icons/fa";
import HomePost from "./HomePost";
import { useRef, useState } from "react";
import { MdOutlineEmojiEmotions, MdOutlineLocationOn, MdOutlinePublic } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

const HomeMedile = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState(null);

    const handleImagePost = () => {
        imageRef.current.click();
    };

    const handleTextPost = () => {
        textRef.current.click();
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        if (files && files[0]) {
            handleFile(files[0]);
        }
    };

    const handleFile = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFile(file);
        }
    };

    return (
        <div className="bg-slate-50 py-2 shadow-2xl m-4 rounded-xl">
            <div className="flex items-center gap-3 px-8 m-4">
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src="https://i.ibb.co/n6KhZBD/french-bulldogs.jpg" alt="avatar" />
                    </div>
                </div>

                <div onClick={handleTextPost} className="w-full">
                    <label htmlFor="my_modal_8" ref={textRef} className="btn hidden">open modal</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input bg-slate-300 w-full"
                    />
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center px-8 m-4">
                <div className="flex items-center gap-3">
                    <label htmlFor="my_modal_8" className="btn bg-transparent border-none shadow-none">
                        <div className="text-green-400 text-lg"><FaImages /></div>
                        <p> Photo/Video</p>
                    </label>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-lg">😃</p>
                    <p>Feeling/Activity</p>
                </div>
            </div>
            <div className="mx-auto">
                <HomePost />
            </div>
            {/* modal text and image */}
            <div>
                <input type="checkbox" id="my_modal_8" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="text-xl text-center font-bold mb-2">Create Post</h3>
                        <hr />
                        <div className="flex gap-3">
                            <div className="avatar">
                                <div className="w-14 mt-2 rounded-full">
                                    <img src="https://i.ibb.co/n6KhZBD/french-bulldogs.jpg" alt="avatar" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <h3 className="text-xl font-medium">Tramp Dogs</h3>
                                <p className="flex items-center"><MdOutlinePublic /> Public</p>
                            </div>
                        </div>
                        <input
                            className="w-full focus:outline-none focus:border-none mt-2 input"
                            placeholder="What's on your mind, "
                            type="text"
                        />
                        {/* Drag and Drop Section */}
                        {/* File Preview */}
                        {preview ? (
                            <div className={` my-4 text-center rounded-md border ${isDragging ? 'border-green-400 bg-green-100' : 'border-gray-300'}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={handleImagePost}
                        >
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="max-w-full h-auto rounded-md"
                                />
                            </div>
                        ):(
                            <div
                            className={`p-20 my-4 text-center rounded-md border ${isDragging ? 'border-green-400 bg-green-100' : 'border-gray-300'}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={handleImagePost}
                        >
                            <div className="text-lg">
                                <p><IoMdAddCircleOutline /></p>
                                <h3>Add Your photos / video</h3>
                                <p>or drag and drop</p>
                            </div>
                            <input
                                className="hidden"
                                type="file"
                                ref={imageRef}
                                onChange={handleFileInputChange}
                            />
                        </div>
                        )}
                        {/* Add to your post */}
                        <div className="flex justify-between items-center border rounded-md">
                            <div>
                                <p className="p-3">Add to your post</p>
                            </div>
                            <div className="flex items-center px-3">
                                <div onClick={handleImagePost} className="btn bg-transparent border-none shadow-none">
                                    <div className="text-green-400 text-lg"><FaImages /></div>
                                    <input className="hidden" type="file" ref={imageRef} onChange={handleFileInputChange} />
                                </div>
                                <p className="btn bg-transparent border-none shadow-none"><FaUserTag /></p>
                                <p className="btn bg-transparent border-none shadow-none"><MdOutlineEmojiEmotions /></p>
                                <p className="btn bg-transparent border-none shadow-none"><MdOutlineLocationOn /></p>
                            </div>
                        </div>
                        <button className="btn bg-white hover:border-green-50 w-full mt-5">next</button>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_8">Close</label>
                </div>
            </div>
        </div>
    );
};

export default HomeMedile;
