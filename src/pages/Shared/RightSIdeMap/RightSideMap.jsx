import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideMap = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-3xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>

      <div className='p-4 mb-6'>
        <h2 className="text-3xl mb-4 font-semibold">Find Us On</h2>
        <a className='p-4 flex mr-2 items-center rounded-t-lg border' href="">
            <FaFacebook className='text-2xl'></FaFacebook>
            Facebook
        </a>
        <a className='p-4 flex mr-2 items-center  border' href="">
            <FaInstagram className='text-2xl'></FaInstagram>
            Instagram
        </a>
        <a className='p-4 flex mr-2 items-center rounded-b-lg border' href="">
            <FaTwitter className='text-2xl'></FaTwitter>
            Twitter
        </a>
      </div>
      {/* q zone */}
      <div className='p-4 space-y-3 mb-6 bg-gray-100'>
        <h2 className="text-3xl font-semibold">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideMap;

