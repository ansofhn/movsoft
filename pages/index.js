import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getMovieList, searchMovie } from "../repository/api";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { AiFillLike } from "react-icons/ai";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="pb-10 text-white xl:w-72 2xl:w-80" key={i}>
          <div className="overflow-hidden rounded-lg ">
            <img
              className="h-full"
              src={`${process.env.NEXT_PUBLIC_BASEIMGURL}${movie.poster_path}`}
            />
          </div>
          <div className="px-1 py-4">
            <div className="flex items-center h-10 font-semibold">
              {movie.title}
            </div>
          </div>
          <div className="flex items-center justify-between px-1">
            <div className="text-xs font-medium text-softCream">
              {movie.release_date}
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <AiFillLike className="text-sm text-softCream" />
              {movie.vote_average}
            </div>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query);
    }
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="bg-backGround">
      <Head>
        <title>Home | AnsMovie</title>
      </Head>

      {/* Appearance Website*/}

      <Navbar onSearch={({ target }) => search(target.value)} />
      <Hero />
      <ScrollToTop />

      {/* Popular Movies */}

      <div className="py-24 bg-black/20">
        <div className="container space-y-10">
          <div className="grid grid-cols-2">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
                Online Streaming
              </div>
              <div className="text-4xl font-bold text-white">
                Popular Movies
              </div>
            </div>
            <div className="flex items-end justify-end">
              <div className="px-3 py-2 text-xs font-medium text-white transition duration-300 border-2 cursor-pointer border-softCream rounded-2xl sm:py-2 sm:text-sm sm:px-10 bg-backGround">
                Movies
              </div>
              <div className="px-3 py-2 ml-3 text-xs font-medium text-white transition duration-300 border-2 cursor-pointer border-softCream rounded-2xl sm:py-2 sm:text-sm sm:px-10 bg-backGround">
                TV Show
              </div>
              <div></div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 2xl:gap-16">
            <PopularMovieList />
          </div>
        </div>
      </div>

      {/* Our Service */}

      <div className="h-[80vh] bg-backGround flex items-center">
        <div className="container grid grid-cols-2">
          <div>asdf</div>
          <div className="flex items-center text-white">
            <div className="space-y-4">
              <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
                Our Services
              </div>
              <div className="w-5/6 text-4xl font-bold text-white">
                Download Your Movies Watch Offline.
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. LoremIpsumhas been the industry's standard dummy text
                ever since the 1500s. adskf;aimsdfjas
                ;dlkfiasd;flaksd;flka.dfgsdfgsdfgs
              </div>
              <div className="grid w-5/6 grid-cols-6 gap-4 pt-6">
                <div className="flex items-center justify-center col-span-2">
                  <div className="p-4 text-5xl text-white border-2 rounded-full border-softCream">
                    <BiMoviePlay />
                  </div>
                </div>
                <div className="col-span-4 col-start-3 my-auto space-y-3">
                  <div className="text-lg font-bold">Enjoy on Your Movie.</div>
                  <div>ljasdlfkjalsdfkjalskdjflaskjdfl</div>
                </div>
                <div className="flex items-center justify-center col-span-2 row-start-3">
                  <div className="p-4 text-5xl text-white border-2 rounded-full border-softCream">
                    <BiCameraMovie />
                  </div>
                </div>
                <div className="col-span-4 col-start-3 row-start-3 my-auto space-y-3">
                  <div className="text-lg font-bold ">Watch Everywhere.</div>
                  <div>lkdsajflsdjkflajsdlfjalsdkjfla</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Rated Movies */}

      <div className="py-24 bg-black/20">
        <div className="container">
          <div className="space-y-2 text-center">
            <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
              Online Streaming
            </div>
            <div className="text-4xl font-bold text-white">
              Top Rated Movies
            </div>
          </div>
          <div className="flex items-center justify-center py-10">
            <div className="px-3 py-2 text-xs font-medium text-white transition duration-300 rounded-sm cursor-pointer border-x-2 border-x-softCream sm:py-2 sm:text-sm sm:px-10 bg-backGround">
              Movies
            </div>
            <div className="px-3 py-2 ml-3 text-xs font-medium text-white transition duration-300 rounded-sm cursor-pointer border-x-2 border-x-softCream sm:py-2 sm:text-sm sm:px-10 bg-backGround">
              TV Show
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 2xl:gap-16">
            <PopularMovieList />
          </div>

        </div>
      </div>

      <Footer onSearch={({ target }) => search(target.value)} />
    </div>
  );
};

export default Home;
