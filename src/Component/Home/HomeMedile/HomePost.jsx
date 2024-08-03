import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const HomePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const res = await axios.get(`http://localhost:5000/PostCollection`);
                const sortedPosts = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setPosts(sortedPosts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="mx-10">
            {posts.map((post) => (
                <div key={post.id} className="card card-compact bg-base-100 shadow-xl mb-4">
                    <figure>
                        <img
                            src={post?.image}
                            alt={post?.caption || "Post Image"} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{post?.caption}</h2>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePost;
