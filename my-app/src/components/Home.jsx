import React from "react";
const Home = () => {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-white">
            <main className="flex flex-col items-center p-8bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center max-w-2xl">
                <h1 className="text-4xl font-extrabold text-indigo-700">
                    Welcome!
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    This is a coding platform where you can create coding problems and solve created by others.
                </p>

                <p className="mt-2 text-gray-700">
                    You can Run it in!!!
                </p>

                <p className="mt-2 text-gray-700">
                    Enter to explore the realm of coders
                </p>
            </main>
        </div>
    );
};

export default Home;