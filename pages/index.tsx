import type { NextPage } from "next";
import Timer from "../components/timer";
import { FormEvent, useState } from "react";

const Home: NextPage = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [forum, setForum] = useState("");
  const [time, setTime] = useState("");

  const getTime = () => {
    return new Date().toLocaleString();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let form = {
      nama,
      nim,
      forum,
      time,
    };

    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await rawResponse.json();

    // print to screen
    // alert(content.data.tableRange);

    alert("Data berhasil dikirim");

    // Reset the form fields
    setNama("");
    setNim("");
    setForum("");
    setTime("");
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto py-16">
        <div className="flex items-center justify-center">
          <Timer />
        </div>

        <form className="py-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <label htmlFor="name" className="sr-only">
              Nama
            </label>
            <input
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              type="text"
              name="nama"
              id="nama"
              className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
              placeholder="Nama anda"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="email" className="sr-only">
              NIM
            </label>
            <input
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              type="text"
              name="nim"
              id="nim"
              className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
              placeholder="NIM anda"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="phone" className="sr-only">
              Forum
            </label>
            <input
              value={forum}
              onChange={(e) => setForum(e.target.value)}
              type="text"
              name="forum"
              id="forum"
              className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
              placeholder="Forum anda"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setTime(getTime())}
              type="submit"
              className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
