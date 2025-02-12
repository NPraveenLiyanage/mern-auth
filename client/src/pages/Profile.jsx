import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
//import { getStorage, ref } from 'firebase/storage';

export default function Profile() {
  const fileRef = useRef(null);//profile pic
  const [image, setImage] = useState(undefined);//profile pic
  // const [imagePercent, setImagePercent] = useState(0);
  // const [imageError, setImageError] = useState(false);
  // const [formData, setFormData] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {//profile pic
    if(image){
      handleFileUpload(image);
    }
    }, [image]);
    const handleFileUpload = async (image) => {
      console.log(image);
      // const storage = getStorage(app);//profile pic
      const fileName = new Date().getTime() + image.name;
      // const storageRef = ref(storage, fileName);
      // const uploadTask = uploadBytesResumable(storageRef, image);
      // uploadTask.on(
      //   'state_changed',
      //   (snapshot) => {
      //     const progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     setImagePercent(Math.round(progress));
      //   },
      //   (error) => {
      //     setImageError(true);
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
      //       setFormData({ ...formData, profilePicture: downloadURL })
      //     );
      //   }
      // );  
    };
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type='file' ref={fileRef} hidden accept='image/*'
        onChange={(e) => setImage(e.target.files[0])}/>
        <img
          src={currentUser.profilePicture}
          alt='profile'
          className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
          onClick={() => fileRef.current.click()}
        />
        <input
          defaultValue={currentUser.username}
          type='text'
          id='username'
          placeholder='Username'
          className='bg-slate-100 rounded-lg p-3'
        />
        <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-100 rounded-lg p-3'
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-100 rounded-lg p-3'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
}