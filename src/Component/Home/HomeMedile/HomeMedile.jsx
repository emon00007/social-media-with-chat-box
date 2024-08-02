import { FaImages, FaUserTag } from "react-icons/fa";
import HomePost from "./HomePost";
import { useRef, useState } from "react";
import { MdOutlineEmojiEmotions, MdOutlineLocationOn, MdOutlinePublic } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import axios from "axios";

const image_hosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_Key}`;

const HomeMedile = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

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
            handleImageUpload(files[0]);
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
            handleImageUpload(file);
        }
    };

    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await axios.post(image_hosting_api, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setImageUrl(res.data.data.url);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

        const handleAllPost = async (e) => {
        e.preventDefault();
        console.log('object');
        const form = e.target;
        const texte = form.text.value;
        const post = {
            Caption: texte,
            image: imageUrl // Ensure imageUrl is defined somewhere in your code
        };
    
        try {
            const response = await axios.post('http://localhost:5000/PostCollection', post);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
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
            {/* Modal Text and Image */}
            <form onSubmit={handleAllPost} >
                <input name="text" type="checkbox" id="my_modal_8" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="text-xl text-center font-bold mb-2">Create Post</h3>
                        <hr />
                        <div className="flex gap-3">
                            <div className="avatar">
                                <div className="w-14 mt-2 rounded-full">
                                    <img src=" " alt="avatar" />
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
                            name="caption"
                        />
                        {/* Drag and Drop Section */}
                        {/* File Preview */}
                        {preview ? (
                            <div className={`my-4 text-center rounded-md border ${isDragging ? 'border-green-400 bg-green-100' : 'border-gray-300'}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="max-w-full h-auto rounded-md"
                                />
                            </div>
                        ) : (
                            <div
                                className={`p-20 my-4 text-center rounded-md border ${isDragging ? 'border-green-400 bg-green-100' : 'border-gray-300'}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={handleImagePost}
                            >
                                <div className="text-lg">
                                    <p className="flex justify-center text-4xl"><IoMdAddCircleOutline /></p>
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
                        <button className="btn bg-white hover:border-green-50 w-full mt-5">Next</button>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_8">Close</label>
                </div>
            </form>
        </div>
    );
};

export default HomeMedile;
