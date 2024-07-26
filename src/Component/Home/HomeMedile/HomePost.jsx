const HomePost = () => {
    return (
        <div className="mx-10">
            <div className="card  card-compact bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">title</h2>
                    <p>If a dog chews </p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePost;