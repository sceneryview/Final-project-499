'use client'
import React from "react";
import { useState,useEffect} from "react";

async function Createversion({id,main,text,link,avatar}) {
  try {
    const response = await fetch(`https://back-end-499-git-main-sceneryviews-projects.vercel.app/api/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({main,text,link,avatar}),
      
    });
    console.log({main,text,link,avatar})
    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    if (data.status === 'Model updated successfully') {
      window.location = '/Adminpage';
      alert('Model updated successfully');
    } else {
      throw new Error('Failed to update model');
    }
  } catch (error) {
    console.error('Login error:', error.message);
    alert('Failed to update model');
    window.history.back();
  }
}


const getById = async (id) => {
    try {
      const res = await fetch(`https://back-end-499-git-main-sceneryviews-projects.vercel.app/api/update/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch Model");
      }
      return res.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  


export default function Page({params}) {
  const {id} = params
  const [main, setMain] = useState('');
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data  = await getById(id);
       setMain(data[0].main);
       setText(data[0].text)
       setLink(data[0].link)
       setAvatar(data[0].avatar)
      } catch (error) {
        console.error(error);
    
      }
    };

    fetchData();
  }, []);


  const handleSubmit = async (event) => {
   
    event.preventDefault();
    try {
      await Createversion({
        id,
        main,
        text,
        link,
        avatar
      });
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Update failedddddd');
    }
  };
  return (
    <div>
      <div>
        <div className="pt-16 flex justify-center text-3xl">
          <h1>Edit</h1>
        </div>
        <div className=" border bg-black"></div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mt-[44px] mb-[16px]">
              <div className="px-44 mb-10">
                <label htmlFor="text">Main Text:</label>
                <input type="text" id="main" name="main" value={main} onChange={(ev) =>setMain(ev.target.value)}/>
              </div>
              <div className="px-44 mb-10">
                <label htmlFor="text">Description:</label>
                <input type="text" id="text" name="text" value={text} onChange={(ev) =>setText(ev.target.value)}/>
              </div>
              <div className="px-44 mb-10">
                <label htmlFor="text">Link:</label>
                <input type="text" id="link" name="link" value={link} onChange={(ev) =>setLink(ev.target.value)}/>
              </div>
              <div className="px-44 mb-10">
                <label htmlFor="text">Image:</label>
                <input type="text" id="avatar" name="image" value={avatar} onChange={(ev) =>setAvatar(ev.target.value)}/>
              </div>
              <div className="flex object-cover justify-center">
                <button type="submit" className="bg-slate-400 w-[200px]">Enter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
