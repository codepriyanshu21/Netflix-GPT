import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  };


  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");


      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick=()=>{
    // toggle gpt search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen  px-8 -py-[10px] z-10 bg-gradient-to-b from-black  flex flex-col md:flex-row  items-center justify-between'>
      <img className='w-50 h-40 mx-auto md:mx-0  -mt-8 '
        src={LOGO}
        alt='logo'
      />
      {user && (
        <div className='flex p-2 -mt-10 gap-2 items-center justify-between '>

          {showGptSearch && (
            <select className='p-2 m-2 bg-gray-900 text-white font-bold' onClick={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          
          <button className='py-1 md:py-2 px-2 md:px-4 mx-4 my-2 bg-purple-800 font-bold text-white rounded-lg'
          onClick={handleGptSearchClick}
          >{showGptSearch?"Home" : "GPT search"}</button>
          <img src={user?.photoURL}
            alt='usericon'
            className='hidden md:block w-12 h-12 rounded-full'
          ></img>
          <button onClick={handleSignOut} className='font-bold py-2 md:py-2 px-2 text-sm md:px-4 mx-4 my-2 bg-red-500 rounded-lg text-white'>Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default Header